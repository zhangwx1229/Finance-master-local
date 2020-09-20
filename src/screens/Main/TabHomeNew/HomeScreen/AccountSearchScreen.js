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
export default class AccountSearchScreen extends PureComponent {
    constructor(props) {
        super(props);
        const { route } = props;
        console.debug('=========', route.params)

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
    clickClose = () => {
        const {
            navigation
        } = this.props;
        navigation.navigate("AccumulationScreen")
    }

    clickItem = (item) => {
        const {
            navigation
        } = this.props;
        navigation.navigate('AccountSearchScreen', item);
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
            console.debug('=====kkk====', this.scroll_style.height, this.contentH)
            setTimeout(() => {
                if (this.isDestroy) {
                    return
                }
                this.setState({ opacity: 1 })
            });
        }
    }

    renderItem_1 = (itme) => {
        return <View style={{ backgroundColor: '#fff' }}>
            <View style={{ width: UI.size.screenWidth, height: 20, backgroundColor: '#f5f6f9' }} />
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >年度</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >{itme.date}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >上年结转金额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >{UI.getNumString(itme.lastYearMoney)}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >当年缴存金额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >{UI.getNumString(itme.currentYear)}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >当年提取金额</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >{UI.getNumString(itme.takeOutMoney)}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >利息</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >{UI.getNumString(itme.interest)}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >本息合计</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >
                    {UI.getNumString(itme.total)}
                </Text>
            </View >

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

    renderTitle = () => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 144) / 1080,
                }} source={Images.icon_15} />
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <View style={{ position: 'absolute', left: 5, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickClose}>
                    <View style={{ position: 'absolute', left: 40, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
            </View>
        );
    };

    render() {
        font_13 = UI.fontSizeNew.font_13
        font_12 = UI.fontSizeNew.font_12
        font_10 = UI.fontSizeNew.font_10
        font_8 = UI.fontSizeNew.font_8
        font_10_5 = UI.fontSizeNew.font_10_5
        font_30 = UI.fontSizeNew.font_30
        const { navigation, route } = this.props;
        console.debug('=========', route.params)
        return (<View style={styles.container} >
            {this.renderTitle()}
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
                {this.renderItem_1(route.params)}
                <View style={{ paddingTop: 25, paddingBottom: 45, backgroundColor: '#fff' }}>
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 257) / 1080,
                    }} source={Images.icon_17} />
                </View>
                <View style={{ height: this.contentH > 0 ? 40 : 400 }} />
                {this.renderScrollFoot()}
            </ScrollView>
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f9'
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