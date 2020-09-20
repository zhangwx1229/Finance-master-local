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
export default class AccountStatementScreen extends PureComponent {
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

    renderItem_1 = () => {
        return <View style={{ backgroundColor: '#fff' }}>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 193 / 1080 }} source={Images.icon_4} />
            <View style={{
                flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >个人账号</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >{filejson.accountNumber}</Text>
            </View >
            <View style={{
                flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', marginHorizontal: 15 * UI.size.scale, alignItems: 'center'
            }} >
                <Text style={{ fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >姓名</Text>
                <Text numberOfLines={1} style={{ fontSize: font_12, color: '#333333' }} >
                    {UI.getNumNick(filejson.name)}
                </Text>
            </View >
        </View >
    };
    renderList = () => {
        const list = [];
        list.push(
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 190 / 1080 }} source={Images.icon_5} />
        );
        for (let i = 0; i < filejson.billInfo.length; i++) {
            list.push(this.renderItem_2(filejson.billInfo[i]))
        }
        return list
    }


    renderItem_2 = (itme) => {
        const { date, total } = itme
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.clickItem(itme)
            }}>
                <View key={date} style={{ flexDirection: 'row', paddingVertical: 7, justifyContent: 'space-between', backgroundColor: '#fff', }}>
                    <View style={{ marginLeft: 15, width: UI.size.screenWidth - 100 - 20 * 2 - 20 }}>
                        <Text numberOfLines={1} style={{ maxWidth: 100, fontSize: font_12, color: '#9D9D9D' }} >{date}</Text>
                    </View >
                    <View style={{ width: 100 }}>
                        <Text numberOfLines={1} style={{ maxWidth: 100, textAlign: 'right', fontSize: font_12, color: '#FEB415' }} >{UI.getNumString(total)}</Text>
                        <Text numberOfLines={1} style={{ maxWidth: 100, textAlign: 'right', fontSize: font_10, color: '#9D9D9D' }}>本息合计</Text>
                    </View >
                    <View style={{ marginRight: 15 }}>
                        <Text numberOfLines={1} style={{ fontSize: font_12 }} >
                            {' '}
                            <Image style={{ width: 12 * 23 / 38, height: 12 }} source={Images.icon_6} />
                        </Text>
                    </View >
                </View>
            </TouchableWithoutFeedback>
        )
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
        const { navigation } = this.props;
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
                {this.renderItem_1()}
                {this.renderList()}
                <View style={{ height: this.contentH > 0 ? 40 : 400 }} />
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