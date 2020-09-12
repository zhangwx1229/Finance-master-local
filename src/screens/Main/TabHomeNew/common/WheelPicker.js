/*
 * @Descripttion: 滚轮组件
 * @Author: ZhangShilei
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
    PanResponder,
    PanResponderInstance,
    TouchableOpacity,
} from 'react-native';
import UI from '../../../../UI';

export type PickerData = {
    index: number,
    value: number,
    text: string,
};

const UP_DOWN_CELL_HEIGHT = 30;
const UP_DOWN_CELL_COUNT = 2;
const MIDDLE_CELL_HEIGHT = 36;
const UP_DOWN_HEIGHT = UP_DOWN_CELL_HEIGHT * UP_DOWN_CELL_COUNT;

type Props = {
    pickerStyle: Object,
    itemStyle: Object,
    datas: Array<PickerData>,
    selectedIndex: number,
    onValueChanged: (dataItem: PickerData) => void,
};

const TAG = 'WheelPicker';

let font_10 = UI.fontSizeNew.font_10
let font_13 = UI.fontSizeNew.font_13
export default class WheelPicker extends React.PureComponent<Props> {
    // eslint-disable-next-line react/sort-comp
    panResponder: PanResponderInstance;

    index: number = 0;

    middleHeight: number = 0;

    isMoving: Boolean = false;

    constructor(props: Props, context) {
        super(props, context);
        const { selectedIndex } = props;
        this.isMoving = false;
        this.index = selectedIndex || 0;
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderRelease: this.onHandlePanResponderRelease,
            onPanResponderMove: this.onHandlePanResponderMove,
        });
    }

    move = (dy: number) => {
        const { index } = this;
        this.middleHeight = Math.abs(-index * MIDDLE_CELL_HEIGHT + dy);
        if (this.up) {
            const marginTop = (UP_DOWN_CELL_COUNT - index) * UP_DOWN_CELL_HEIGHT + dy * 0.75;
            this.up.setNativeProps({ style: { marginTop } });
        }
        if (this.middle) {
            const marginTop = -index * MIDDLE_CELL_HEIGHT + dy;
            this.middle.setNativeProps({ style: { marginTop } });
        }
        if (this.down) {
            const marginTop = (-index - 1) * UP_DOWN_CELL_HEIGHT + dy * 0.75;
            this.down.setNativeProps({ style: { marginTop } });
        }
    };

    // cascade mode will reset the wheel position
    moveTo = (index: number) => {
        const theIndex = this.index;
        const diff = theIndex - index;
        if (diff && !this.isMoving) {
            const margin = diff * MIDDLE_CELL_HEIGHT;
            // 先move
            this.move(margin);
            // 再修改index
            this.index = index;
            // 再回调
            this.onValueChanged();
        }
    };

    moveUp = () => {
        this.moveTo(Math.max(this.index - 1, 0));
    };

    moveDown = () => {
        const { datas } = this.props;
        this.moveTo(Math.min(this.index + 1, datas.length - 1));
    };

    onHandlePanResponderMove = (evt, gestureState) => {
        const { dy } = gestureState;
        if (this.isMoving) {
            return;
        }
        // turn down
        if (dy > 0) {
            const offsetY = this.index * MIDDLE_CELL_HEIGHT;
            const distance = dy > offsetY ? offsetY : dy;
            this.move(distance);
        } else {
            const { datas } = this.props;
            const offsetY = (this.index - datas.length + 1) * MIDDLE_CELL_HEIGHT;
            const distance = dy < offsetY ? offsetY : dy;
            this.move(distance);
        }
    };

    onHandlePanResponderRelease = (evt, gestureState) => {
        const { middleHeight } = this;
        const halfHeight = MIDDLE_CELL_HEIGHT / 2;
        const reminder = middleHeight % MIDDLE_CELL_HEIGHT;
        const divider = middleHeight / MIDDLE_CELL_HEIGHT;
        this.index = reminder >= halfHeight ? Math.ceil(divider) : Math.floor(divider);
        this.move(0);
        this.onValueChanged();
    };

    onValueChanged = () => {
        const { datas } = this.props;
        const curItem = datas[this.index];
        const { onValueChanged } = this.props;
        if (onValueChanged && curItem) {
            onValueChanged(curItem);
        }
    };

    createCell = (key: string, index: number, style: Array<Object>, hei, value: string) => {
        return (
            <TouchableOpacity
                style={{ height: hei, justifyContent: 'center' }}
                key={key}
                activeOpacity={1.0}
                onPress={() => {
                    this.moveTo(index);
                }}
            >
                <Text style={style}>{value}</Text>
            </TouchableOpacity>
        );
    };

    renderItemContents = (items: Array<PickerData>) => {
        const { itemStyle } = this.props;
        const upItems = [];
        const middleItems = [];
        const downItems = [];
        items.forEach((item: PickerData, index: number) => {
            upItems[index] = this.createCell(
                `up_${index}`,
                index,
                [styles.upText, { fontSize: font_10 }, itemStyle],
                UP_DOWN_CELL_HEIGHT,
                item.text,
            );
            middleItems[index] = this.createCell(
                `mid_${index}`,
                index,
                [styles.middleText, {
                    fontSize: font_13
                }, itemStyle],
                MIDDLE_CELL_HEIGHT,
                item.text,
            );
            downItems[index] = this.createCell(
                `down_${index}`,
                index,
                [styles.downText, {
                    fontSize: font_10,
                }, itemStyle],
                UP_DOWN_CELL_HEIGHT,
                item.text,
            );
        });
        return { upItems, middleItems, downItems };
    };

    render() {
        font_10 = UI.fontSizeNew.font_10
        font_13 = UI.fontSizeNew.font_13
        const { selectedIndex: index, datas: itemDatas, pickerStyle } = this.props;
        const { length } = itemDatas;
        const upViewStyle = {
            marginTop: (UP_DOWN_CELL_COUNT - index) * UP_DOWN_CELL_HEIGHT,
            height: (length + UP_DOWN_CELL_COUNT) * UP_DOWN_CELL_HEIGHT,
        };
        const middleViewStyle = {
            marginTop: -index * MIDDLE_CELL_HEIGHT,
        };
        const downViewStyle = {
            marginTop: (-index - 1) * UP_DOWN_CELL_HEIGHT,
            height: (length + UP_DOWN_CELL_COUNT) * UP_DOWN_CELL_HEIGHT,
        };
        const { upItems, middleItems, downItems } = this.renderItemContents(itemDatas);
        return (
            <View style={[styles.container, pickerStyle]} {...this.panResponder.panHandlers}>
                <View style={[styles.up, pickerStyle]}>
                    <View
                        style={[styles.upView, upViewStyle]}
                        ref={up => {
                            this.up = up;
                        }}
                    >
                        {upItems}
                    </View>
                </View>
                <View style={[styles.middle, pickerStyle]}>
                    <View
                        style={[styles.middleView, middleViewStyle]}
                        ref={middle => {
                            this.middle = middle;
                        }}
                    >
                        {middleItems}
                    </View>
                </View>
                <View style={[styles.down, pickerStyle]}>
                    <View
                        style={[styles.downView, downViewStyle]}
                        ref={down => {
                            this.down = down;
                        }}
                    >
                        {downItems}
                    </View>
                </View>
            </View>
        );
    }
}

const RATIO = PixelRatio.get();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    up: {
        height: UP_DOWN_HEIGHT,
        overflow: 'hidden',
    },
    upView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    upText: {
        paddingVertical: 0,
        marginVertical: 0,
        // height: UP_DOWN_CELL_HEIGHT,
        color: '#9D9D9D',
        transform: [{ rotateX: '45deg' }],
    },
    middle: {
        height: MIDDLE_CELL_HEIGHT,
        width: '100%',
        overflow: 'hidden',
        borderColor: '#DDDDDD',
        borderTopWidth: 1 / RATIO,
        borderBottomWidth: 1 / RATIO,
    },
    middleView: {
        height: MIDDLE_CELL_HEIGHT,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    middleText: {
        paddingVertical: 0,
        marginVertical: 0,
        // height: MIDDLE_CELL_HEIGHT,
        color: '#333333',
    },
    down: {
        height: UP_DOWN_HEIGHT,
        overflow: 'hidden',
    },
    downView: {
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    downText: {
        paddingVertical: 0,
        marginVertical: 0,
        // height: UP_DOWN_CELL_HEIGHT,
        color: '#9D9D9D',
        transform: [{ rotateX: '-45deg' }],
    },
});
