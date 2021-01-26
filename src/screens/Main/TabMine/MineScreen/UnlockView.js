/**
 * 首页主推位
 * created by zhangwx 20190618
 */
import React, { Component } from 'react';
import { StyleSheet, View, PanResponder, Image, Text } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

const leftRight = 0; //据左右
const slider_H = 46;
const slider_W = slider_H * 140 / 143;
const view_W = UI.size.screenWidth - 30;
type Props = {
    navigation: Object,
    onComplete: () => void
};
class UnlockView extends Component<Props> {
    constructor(props) {
        super(props);
        this.leftOld = leftRight;
        this.left = this.leftOld;
        this.state = {};
        this.createPan();
    }

    componentWillUnmount() {
        this.setState = () => { }; // 在出现“Warning: Can only update a mounted or mounting...”告警的界面添加改代码
    }

    resetLeft = () => {
        this.left = leftRight;
        this.setState({});
    }

    createPan = () => {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                this.topOld = this.top;
                this.leftOld = this.left;
            },
            onPanResponderMove: (evt, gs) => {
                if (this.left === view_W - leftRight - slider_W) {
                    return
                }
                if (Math.abs(this.left - this.leftOld + gs.dx) > 1) {
                    this.left = this.leftOld + gs.dx;
                    if (this.left < leftRight) {
                        this.left = leftRight;
                    } else if (this.left > view_W - leftRight - slider_W) {
                        this.left = view_W - leftRight - slider_W;
                    }
                    this.setState({});
                } else {
                    this.left = this.leftOld + gs.dx;
                    if (this.left < leftRight) {
                        this.left = leftRight;
                    } else if (this.left > view_W - leftRight - slider_W) {
                        this.left = view_W - leftRight - slider_W;
                    }
                }
            },
            onPanResponderRelease: () => {
                this.resetLocation();
                this.setState({});
            },
        });
    };

    resetLocation = () => {
        let locaX = this.left;
        if (locaX > view_W / 2 - slider_W / 2) {
            locaX = view_W - leftRight - slider_W;
        } else {
            locaX = leftRight;
        }

        this.left = locaX;
        const isCom = this.left === view_W - leftRight - slider_W
        if (isCom) {
            const { onComplete } = this.props;
            if (onComplete) {
                onComplete()
            }
        }
    };

    renderSliber = (isCom) => {
        return (
            <View
                style={[
                    styles.content,
                    {
                        left: this.left,
                    },
                ]}
                {...this.panResponder.panHandlers}
            >
                <Image style={{ width: '100%', height: '100%' }} source={Images.icon_19} />
                {isCom ? <Image style={{ position: 'absolute', alignSelf: 'center', width: slider_H * 0.4, height: slider_H * 0.4 }} source={Images.icon_16} /> : null}
            </View>
        );
    };

    render() {
        const isCom = this.left === view_W - leftRight - slider_W
        return <View style={[styles.container, { backgroundColor: isCom ? '#7ac13d' : '#f1f2f6' }]}>
            {!isCom ? <View style={{ position: 'absolute', left: 0, width: this.left, height: slider_H, backgroundColor: '#7ac13d' }} /> : null}
            <View style={{ position: 'absolute', left: 0, width: view_W }}>
                <Text style={{ alignSelf: 'center', fontSize: UI.fontSizeNew.font_12, color: isCom ? "#fff" : "#333" }}>{!isCom ? '请按住滑块，拖动到最右边' : '验证通过'}</Text>
            </View>
            {this.renderSliber(isCom)}
        </View>;
    }
}
export default UnlockView;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: view_W,
        height: slider_H - 1,
    },
    content: {
        position: 'absolute',
        top: -0.5,
        width: slider_W,
        height: slider_H,
        justifyContent: 'center'
    },
});
