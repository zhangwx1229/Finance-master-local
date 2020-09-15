import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../common/TitleView';
import filejson from '../../../../image/filename_02.json';
import DateSelectModel from '../common/DateSelectModel';

let font_13 = UI.fontSizeNew.font_13
let font_12 = UI.fontSizeNew.font_12
let font_10 = UI.fontSizeNew.font_10
export default class AccumulationInfoScreen extends PureComponent {

    constructor(props) {
        super(props);
        const { route } = props;
        this.data = filejson[2020 + ''];


        this.total_0 = 0
        this.total_1 = 0
        for (const item of this.data) {
            this.total_0 += item.item_4
            this.total_1 += item.item_5
        }
        this.total_0 = this.total_0.toFixed(2)
        this.total_1 = this.total_1.toFixed(2)
        this.state = { opacity: 0 }
        this.item_H = 0
        this.offset_y = 0
        this.offset_olf_y = 0
        this.scroll_style = {}
        this.isDestroy = false;
        this.header_H = 80
        this.foot_H = 0
    }

    clickSelect = data => {
        const {
            navigation
        } = this.props;
        navigation.navigate('DetailInfoView', { data });
    };
    clickBack = () => {
        const {
            navigation
        } = this.props;
        navigation.pop()
        navigation.pop()
    }
    clickClose = () => {
        const {
            navigation
        } = this.props;
        navigation.pop()
    }

    componentWillUnmount() {
        this.isDestroy = true;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
        }
    }

    onScrollEndDrag = (e) => {
        const { contentOffset } = e.nativeEvent;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
        }
        this.scrollTimer = setInterval(() => {
            if (this.isDestroy) {
                if (this.scrollTimer) {
                    clearInterval(this.scrollTimer)
                }
                return
            }
            if (Math.abs(this.offset_olf_y - this.offset_y) > 0) {
                if (Math.abs(this.offset_olf_y - this.offset_y) < 5) {
                    if (this.scrollTimer) {
                        clearInterval(this.scrollTimer)
                    }
                    if (this.scrollRef) {
                        if (this.offset_y < this.header_H) {
                            this.scrollRef.scrollTo({ y: this.header_H, animated: true });
                        } else if (this.offset_y > this.data.length * this.item_H + this.header_H - this.scroll_style.height) {
                            this.scrollRef.scrollTo({ y: this.data.length * this.item_H + this.header_H - this.scroll_style.height, animated: true });
                        }
                    }
                }
                this.offset_olf_y = this.offset_y
            } else {
                if (this.scrollTimer) {
                    clearInterval(this.scrollTimer)
                }
                if (this.scrollRef) {
                    if (this.offset_y < this.header_H) {
                        this.scrollRef.scrollTo({ y: this.header_H, animated: true });
                    } else if (this.offset_y > this.data.length * this.item_H + this.header_H - this.scroll_style.height) {
                        this.scrollRef.scrollTo({ y: this.data.length * this.item_H + this.header_H - this.scroll_style.height, animated: true });
                    }
                }
            }
        }, 50);
    }

    onLayout = (e) => {
        const { height, width } = e.nativeEvent.layout;
        if (!this.scroll_style.width) {
            if (this.scrollRef) {
                if (this.offset_y < this.header_H) {
                    this.scrollRef.scrollTo({ y: this.header_H, animated: false, });
                }
            }
            this.scroll_style = { height, width }
            setTimeout(() => {
                if (this.isDestroy) {
                    return
                }
                this.setState({ opacity: 1 })
            });
        }
    }

    renderHeader = () => {
        return (
            <View style={{}}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 582) / 1125,
                }} source={Images.alipay_15} />
                <View style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 582) / 1125,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: font_13,
                        alignSelf: 'center'
                    }} numberOfLines={1} > 账户余额(元)</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: UI.fontSizeNew.font_25,
                        alignSelf: 'center', marginTop: 4
                    }} numberOfLines={1} > *但是</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 4 }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: font_12,
                            alignSelf: 'center'
                        }} numberOfLines={1} > *但是</Text>
                        <View style={{ marginHorizontal: 8, marginTop: 1, width: 1, height: 15, alignSelf: 'center', opacity: 0.6, backgroundColor: '#fff' }} />
                        <Text style={{
                            color: '#fff',
                            fontSize: font_12,
                            alignSelf: 'center',
                        }} numberOfLines={1} > GJKJO9008HJI99</Text>
                    </View>
                    {/* <View style={{ justifyContent: 'center', height: 40, borderRadius: 20, borderWidth: 1, borderColor: "#fff" }}> */}
                    <Text style={{
                        lineHeight: 30, borderRadius: 30, borderWidth: 1, borderColor: "#fff",
                        color: '#fff',
                        fontSize: font_12,
                        alignSelf: 'center',
                        marginTop: 15,
                        backgroundColor: '#ffffff32'
                    }} numberOfLines={1} >      查看账户信息      </Text>
                    {/* </View> */}
                </View>
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <View style={{ position: 'absolute', left: 5, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickClose}>
                    <View style={{ position: 'absolute', left: 40, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
            </View>
        );
    };
    renderTitle = () => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 143) / 1080,
                }} source={Images.accumulation_info_header} />
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <View style={{ position: 'absolute', left: 5, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickClose}>
                    <View style={{ position: 'absolute', left: 40, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
            </View>
        );
    };

    renderItem = (data, index) => {
        return (
            <TouchableOpacity
                key={index + ''} style={styles.click}
                activeOpacity={1}
                onPress={() => { this.clickSelect(data); }} >
                <View style={styles.contentBg} onLayout={(e) => {
                    const { height, width } = e.nativeEvent.layout;
                    this.item_H = height
                }} >
                    <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemTitle, {
                            fontSize: font_13
                        }]} > 工资薪金 </Text>
                        <Text style={[styles.itemDate, {
                            fontSize: font_13
                        }]} > {data.date.slice(0, 7)} </Text>
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 10 }]} > 所得项目小类：{data.item_1}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemDetail, {
                            fontSize: font_12
                        }]} numberOfLines={1} > 扣缴义务人：{data.item_2}</Text>
                        <Image style={{ position: 'absolute', right: 0, width: 30, height: 30, }} source={Images.p1_12} />
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 10 }]} numberOfLines={1} > 收入：{data.item_4.toFixed(2)}</Text>
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 10, marginBottom: 25 }]} numberOfLines={1}  > 已申报税额：{data.item_5.toFixed(2)} </Text>
                </View >
            </TouchableOpacity>
        );
    };

    renderList = () => {
        const comList = []
        let i = 0
        for (const item of this.data) {
            comList.push(this.renderItem(item, i))
            i++
        }
        return comList;
    }

    renderScrollHeader = () => {
        return <View style={{ width: '100%', height: this.header_H, backgroundColor: '#f5f6f9' }} />
    }

    renderScrollFoot = () => {
        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', height: this.foot_H, backgroundColor: '#f5f6f9' }} >
            <Text style={{ marginTop: 15, color: '#333333', fontSize: font_10 }}>我是有底线的
            </Text>
        </View>
    }

    render() {
        font_13 = UI.fontSizeNew.font_13
        font_12 = UI.fontSizeNew.font_12
        font_10 = UI.fontSizeNew.font_10
        if (this.data === null) {
            return null
        }
        const { navigation } = this.props;
        return (<View style={styles.container} >
            {this.renderTitle()}
            <ScrollView
                ref={(e) => { this.scrollRef = e }}
                style={[styles.content, this.scroll_style, { opacity: this.state.opacity }]}
                onLayout={this.onLayout}
                contentContainerStyle={styles.contentContainerStyle}
                onScrollEndDrag={this.onScrollEndDrag}
                onScroll={(e) => {
                    const { contentOffset } = e.nativeEvent;
                    this.offset_y = contentOffset.y
                }}
                showsVerticalScrollIndicator={false} >

                {this.renderScrollHeader()}
                {this.renderHeader()}
                {this.renderList()}
                {this.renderScrollFoot()}
            </ScrollView>
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#f5f6f9',
    },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    click: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    contentBg: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTitle: {
        color: '#333333',
        marginTop: 20,
    },
    itemDate: {
        color: '#333333',
        marginTop: 20,
        marginRight: 30,
    },
    itemDetail: {
        color: '#9D9D9D',
        marginTop: 5,
        marginRight: 30
    },
});