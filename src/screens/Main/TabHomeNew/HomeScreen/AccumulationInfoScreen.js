import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';
// let font_13 = UI.fontSizeNew.font_13
let font_13 = UI.fontSizeNew.font_13
let font_12 = UI.fontSizeNew.font_12
let font_10 = UI.fontSizeNew.font_10
let font_10_5 = UI.fontSizeNew.font_10_5
let font_30 = UI.fontSizeNew.font_30
let font_8 = UI.fontSizeNew.font_8
export default class AccumulationInfoScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { isShowUser: false, opacity: 0 }
        this.item_H = 0
        this.offset_y = 0
        this.offset_olf_y = 0
        this.scroll_style = {}
        this.isDestroy = false;
        this.header_H = 80
        this.foot_H = 0
    }

    clickUser = data => {
        const {
            navigation
        } = this.props;
        navigation.navigate('UserScreen');
    };

    clickShowUser = () => {
        this.setState({ isShowUser: !this.state.isShowUser })
    }

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
    clickLeft = () => {
        this.setState({ isShowUser: !this.state.isShowUser })
    }

    clickRight = () => {
        this.setState({ isShowUser: !this.state.isShowUser })
    }

    clickSearch1 = () => {
        this.setState({ isShowUser: !this.state.isShowUser })
    }

    clickSearch2 = () => {
        this.setState({ isShowUser: !this.state.isShowUser })
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
                        fontSize: font_12,
                        alignSelf: 'center'
                    }} numberOfLines={1} >账户余额(元)</Text>
                    <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                        <Text style={{
                            color: '#fff',
                            lineHeight: 40,
                            fontSize: font_30,
                            alignSelf: 'center', marginTop: 4
                        }} numberOfLines={1} >{'    '}{this.state.isShowUser ? UI.getNumString(filejson.balance) : '***'}</Text>
                        <TouchableWithoutFeedback onPress={this.clickShowUser}>
                            <Image style={{
                                marginLeft: 5,
                                marginTop: 4,
                                alignSelf: 'center',
                                width: 30,
                                height: this.state.isShowUser ? 30 * 57 / 84 : 15,
                            }} source={this.state.isShowUser ? Images.alipay_23 : Images.alipay_14} />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: font_10_5,
                            alignSelf: 'center'
                        }} numberOfLines={1} >{UI.getNumNick(filejson.name)}</Text>
                        <View style={{ marginHorizontal: 8, marginTop: 1, width: 1, height: 12, alignSelf: 'center', opacity: 0.6, backgroundColor: '#fff' }} />
                        <Text style={{
                            color: '#fff',
                            fontSize: font_10_5,
                            alignSelf: 'center',
                        }} numberOfLines={1} >{filejson.accountNumber}</Text>
                    </View>
                    <Text style={{
                        lineHeight: 30, borderRadius: 30, borderWidth: 1, borderColor: "#fff",
                        color: '#fff',
                        fontSize: font_12,
                        alignSelf: 'center',
                        marginTop: 13,
                        backgroundColor: '#ffffff32'
                    }} numberOfLines={1}
                        onPress={this.clickUser}>      查看账户信息      </Text>

                </View>
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



    renderItem_1 = (data, index) => {
        return <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
            <View style={{ marginLeft: 20 }}>
                <Text style={{
                    fontSize: font_12, color: '#333333'
                }} >我的缴存</Text>
                <TouchableWithoutFeedback onPress={this.clickLeft}>
                    <View>
                        <Text style={{
                            fontSize: font_8, color: '#9D9D9D', marginTop: 5
                        }} >最近缴存{filejson.recentlyDepositedDate} </Text>
                        <Text style={{
                            fontSize: font_13, color: '#9D9D9D'
                        }} >{UI.getNumString(filejson.recentlyDeposited)}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ position: 'absolute', alignSelf: 'center', left: UI.size.screenWidth / 2 - 0.5, width: 1, height: '80%', opacity: 0.3, backgroundColor: '#9D9D9D' }} />
            <View style={{ position: 'absolute', alignSelf: 'center', left: UI.size.screenWidth / 2 - 0.5 + 20 }}>
                <Text style={{
                    fontSize: font_12, color: '#333333'
                }} >我的提取</Text>
                <TouchableWithoutFeedback onPress={this.clickRight}>
                    <View>
                        <Text style={{
                            fontSize: font_8, color: '#9D9D9D', marginTop: 5
                        }} >最近提取{filejson.recentlyExtractedDate}</Text>
                        <Text style={{
                            fontSize: font_13, color: '#9D9D9D'
                        }} >{filejson.recentlyExtractedDate.length > 0 ? UI.getNumString(filejson.recentlyExtracted) : "暂无"}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View >
    };
    renderItem_2 = (data, index) => {
        return <View >
            <Image style={{
                width: UI.size.screenWidth,
                height: (UI.size.screenWidth * 539) / 1080,
            }} source={Images.gjj_four_4} />
            <TouchableWithoutFeedback onPress={this.clickSearch1} >
                <View style={{ position: 'absolute', left: 20, top: 20, width: 50, height: 50 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.clickSearch2} >
                <View style={{ position: 'absolute', left: 60 + 50, top: 20, width: 50, height: 50 }} />
            </TouchableWithoutFeedback>
        </View >

    };


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
        font_8 = UI.fontSizeNew.font_8
        font_10_5 = UI.fontSizeNew.font_10_5
        font_30 = UI.fontSizeNew.font_30
        const { navigation } = this.props;
        return (<View style={styles.container} >
            {this.renderTitle()}
            <ScrollView
                ref={(e) => { this.scrollRef = e }}
                style={[styles.content, this.scroll_style, { opacity: this.state.opacity }]}
                onLayout={this.onLayout}
                contentContainerStyle={this.scroll_style.width ? { width: this.scroll_style.width, height: this.scroll_style.height + this.header_H } : styles.contentContainerStyle}
                onScrollEndDrag={this.onScrollEndDrag}
                onScroll={(e) => {
                    const { contentOffset } = e.nativeEvent;
                    this.offset_y = contentOffset.y
                }}
                showsVerticalScrollIndicator={false} >

                {this.renderScrollHeader()}
                {this.renderHeader()}
                {this.renderItem_1()}
                {this.renderItem_2()}

                <View style={{ height: 800 }} />
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