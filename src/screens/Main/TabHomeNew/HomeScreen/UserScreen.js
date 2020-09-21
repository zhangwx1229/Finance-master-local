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
export default class UserScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { opacity: 0 }
        this.offset_y = 0
        this.offset_olf_y = 0
        this.scroll_style = {}
        this.isDestroy = false;
        this.header_H = 80
        this.foot_H = 0
        this.contentH = 0
    }

    clickBack = () => {
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
        const balance = UI.getNumString(filejson.balance)
        const companyQuota = UI.getNumString(filejson.companyQuota)
        return (
            <View style={{}}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 582) / 1125,
                }} source={Images.alipay_15} />
                <View style={{ position: 'absolute', bottom: 35, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 20, marginRight: 20, flex: 1, }}>
                        <Text style={{
                            fontSize: UI.fontSizeNew.font_19, color: '#fff', textAlign: 'center'
                        }} >
                            {balance.substr(0, balance.length - 2)}
                            <Text style={{
                                fontSize: font_13, color: '#fff', textAlign: 'center'
                            }} >
                                {balance.substr(-2)}
                            </Text>
                        </Text>
                        <Text style={{
                            fontSize: font_12, color: '#fff', opacity: 0.5, textAlign: 'center'
                        }} >账户余额(元) </Text>
                    </View>
                    <View style={{ position: 'absolute', alignSelf: 'center', left: UI.size.screenWidth / 2 - 0.5, width: 1, height: '80%', opacity: 0.3, backgroundColor: '#9D9D9D' }} />
                    <View style={{ marginRight: 20, flex: 1 }}>
                        <Text style={{
                            fontSize: UI.fontSizeNew.font_19, color: '#fff', textAlign: 'center'
                        }} >
                            {companyQuota.substr(0, companyQuota.length - 2)}
                            <Text style={{
                                fontSize: font_13, color: '#fff', textAlign: 'center'
                            }} >
                                {companyQuota.substr(-2)}
                            </Text>
                        </Text>
                        <Text style={{
                            fontSize: font_12, color: '#fff', opacity: 0.5, textAlign: 'center'
                        }} >月缴存额(元) </Text>
                    </View>
                </View >
            </View>
        );
    };

    renderTitle = () => {
        return (
            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                top: 20,
                width: UI.size.screenWidth,
                height: (UI.size.screenWidth * 143) / 1080
            }}>
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <Image style={{
                        width: 30,
                        height: 30, marginRight: 5, alignSelf: 'center'
                    }} source={Images.alipay_25} />
                </TouchableWithoutFeedback>
                <Text style={{
                    color: '#fff',
                    fontSize: font_12, alignSelf: 'center'
                }} numberOfLines={1} >{UI.getNumNick(filejson.name)}的账户</Text>
                <Image style={{
                    position: 'absolute', right: 10,
                    width: 30,
                    height: 30, alignSelf: 'center'
                }} source={Images.alipay_26} />
            </View>
        );
    };

    renderItem_1 = () => {
        return <View style={{ backgroundColor: '#fff' }}>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 147 / 1080 }} source={Images.icon_1} />
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >个人账号</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {filejson.accountNumber}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >缴存单位</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {filejson.company}
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >所属管理部名称</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {filejson.administration}</Text>
            </View >
        </View >
    };
    renderItem_2 = () => {
        return <View style={{ backgroundColor: '#fff' }}>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 176 / 1080 }} source={Images.icon_2} />
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >缴存基数</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.depositBase)}元</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >个人比例</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.personalRatio)}%
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >单位比例</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.companyRatio)}%
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >个人月缴存额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.personalQuota)}元
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >单位月缴存额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.companyQuota)}元
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >上年结转额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.lastYearTotal)}元
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >本年缴存额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.currentYearTotal)}元
                </Text>
            </View >
            <View style={{
                flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >本年支取额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} > {UI.getNumString(filejson.currentYearExtract)}元</Text>
            </View >
        </View >
    };

    renderScrollHeader = () => {
        return <View style={{ width: '100%', height: this.header_H, backgroundColor: '#f5f4f8' }} />
    }

    renderScrollFoot = () => {
        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', height: this.foot_H, backgroundColor: '#f5f4f8' }} >
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
            <ScrollView
                ref={(e) => { this.scrollRef = e }}
                style={[styles.content, this.scroll_style, { opacity: this.state.opacity }]}
                onLayout={this.onLayout}
                contentContainerStyle={this.scroll_style.width ? { width: this.scroll_style.width, height: this.contentH > (this.scroll_style.height + this.header_H) ? this.contentH : this.scroll_style.height + this.header_H } : styles.contentContainerStyle}
                onScrollEndDrag={this.onScrollEndDrag}
                onScroll={(e) => {
                    const { contentOffset } = e.nativeEvent;
                    this.offset_y = contentOffset.y
                }}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={(w, h) => {
                    this.contentH = h - 400;
                }}
            >
                {this.renderScrollHeader()}
                {this.renderHeader()}
                {this.renderItem_1()}
                {this.renderItem_2()}
                <View style={{ height: this.contentH > 0 ? 40 : 400 }} />
                {this.renderScrollFoot()}
            </ScrollView>
            {this.renderTitle()}
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, marginTop: -20
    },
    content: {
        flex: 1,
        backgroundColor: '#f5f4f8',
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