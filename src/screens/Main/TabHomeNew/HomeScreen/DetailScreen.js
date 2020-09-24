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
import TitleView from '../common/TitleView';
// let font_13 = UI.fontSizeNew.font_13
let font_13 = UI.fontSizeNew.font_13
let font_12 = UI.fontSizeNew.font_12
let font_10 = UI.fontSizeNew.font_10
let font_10_5 = UI.fontSizeNew.font_10_5
let font_30 = UI.fontSizeNew.font_30
let font_8 = UI.fontSizeNew.font_8
export default class DetailScreen extends PureComponent {
    constructor(props) {
        super(props);
        const { route } = props;
        let index = 1
        if (route.params && route.params === 1) {
            index = 2
        }


        this.state = { opacity: 0, selectedIndex: index }
        this.offset_y = 0
        this.offset_olf_y = 0
        this.scroll_style = {}
        this.isDestroy = false;
        this.header_H = 300
        this.foot_H = 80
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
            this.scroll_style = { height, width }
            this.setState({}, () => {
                if (this.scrollRef) {
                    if (this.offset_y < this.header_H) {
                        this.scrollRef.scrollTo({ y: this.header_H, animated: false, });
                    }
                }
                setTimeout(() => {
                    if (this.isDestroy) {
                        return
                    }
                    this.setState({ opacity: 1 })
                });
            })



        }
    }

    renderHeader = () => {
        return (
            <View style={{ width: UI.size.screenWidth, backgroundColor: "#fff", flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={() => {
                    if (this.state.selectedIndex !== 0) {
                        this.setState({ selectedIndex: 0 })
                    }
                }}>
                    <View style={{ height: 45, width: "33.33%", justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: font_12, width: "33.33%", alignSelf: 'center', color: this.state.selectedIndex === 0 ? '#118eea' : "#333333", textAlign: 'center'
                        }} >全部</Text>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: this.state.selectedIndex === 0 ? 2 : 1, backgroundColor: this.state.selectedIndex === 0 ? '#118eea' : '#9D9D9D5a' }} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    if (this.state.selectedIndex !== 1) {
                        this.setState({ selectedIndex: 1 })
                    }
                }}>
                    <View style={{ height: 45, width: "33.33%", justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: font_12, width: "33.33%", alignSelf: 'center', color: this.state.selectedIndex === 1 ? '#118eea' : "#333333", textAlign: 'center'
                        }} >缴存</Text>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: this.state.selectedIndex === 1 ? 2 : 1, backgroundColor: this.state.selectedIndex === 1 ? '#118eea' : '#9D9D9D5a' }} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    if (this.state.selectedIndex !== 2) {
                        this.setState({ selectedIndex: 2 })
                    }
                }}>
                    <View style={{ height: 45, width: "33.33%", justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: font_12, width: "33.33%", alignSelf: 'center', color: this.state.selectedIndex === 2 ? '#118eea' : "#333333", textAlign: 'center'
                        }} >提取</Text>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: this.state.selectedIndex === 2 ? 2 : 1, backgroundColor: this.state.selectedIndex === 2 ? '#118eea' : '#9D9D9D5a' }} />
                    </View>
                </TouchableWithoutFeedback>
            </View >
        );
    };

    renderTitle = () => {
        return <TitleView navigation={this.props.navigation} imageComponent={() =>
            <Image style={{
                width: UI.size.screenWidth,
                height: (UI.size.screenWidth * 143) / 1080,
            }} source={Images.icon_12} />
        } />
    };

    renderItem_1 = ({
        date,
        info,
        save
    }, key, isLast = false) => {
        return (<View key={key} style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
            <Text style={{ marginLeft: 15, alignSelf: 'center', fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >{date}</Text>
            <View style={{ flex: 1, height: 42, borderBottomColor: '#9D9D9D32', borderBottomWidth: isLast ? 0 : 1, flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between' }}>
                <Text numberOfLines={1} style={{ alignSelf: 'center', maxWidth: UI.size.screenWidth - 100 - 15 * 3 - 40, fontSize: font_12, color: '#333333' }} >{info}</Text>
                <Text numberOfLines={1} style={{ alignSelf: 'center', marginRight: 15, maxWidth: 100, fontSize: font_12, color: '#333333' }} >{UI.getNumString(save)}</Text>
            </View>
        </View >)
    };
    renderItem_2 = ({
        accountMoney,
        date,
        info,
        save
    }, key, isLast = false) => {
        return (<View key={key} style={{ flexDirection: 'row', paddingVertical: 7, justifyContent: 'space-between', backgroundColor: '#fff', }}>
            <View style={{ marginLeft: 15 }}>
                <Text numberOfLines={1} style={{ maxWidth: UI.size.screenWidth - 130 - 15 * 2 - 20, fontSize: font_12, color: '#333333' }} >{info}</Text>
                <Text numberOfLines={1} style={{ maxWidth: 100, fontSize: font_10, color: '#9D9D9D' }} >{date}</Text>
            </View >
            <View style={{ marginRight: 15, marginTop: 2 }}>
                <Text numberOfLines={1} style={{ maxWidth: 130, textAlign: 'right', fontSize: font_12, color: '#333333' }} >{UI.getNumString(save)}</Text>
                <Text numberOfLines={1} style={{ maxWidth: 130, textAlign: 'right', fontSize: font_10, color: '#9D9D9D' }} >{UI.getNumString(accountMoney)}</Text>
            </View >
            {isLast ? null : <View style={{ position: 'absolute', right: 0, bottom: 0, width: UI.size.screenWidth - 15, height: 1, backgroundColor: '#9D9D9D32' }} />}
        </View>)
    };

    renderItemSub = (year, isFirst = false) => {
        return (<View key={year} style={{ flexDirection: 'row', height: this.state.selectedIndex === 0 ? 46 : 53, borderTopWidth: this.state.selectedIndex === 0 ? 0 : (isFirst ? 0 : 1), borderTopColor: '#9D9D9D32', borderBottomWidth: this.state.selectedIndex === 0 ? 0 : 1, borderBottomColor: '#9D9D9D32', backgroundColor: '#f5f4f8' }}>
            <Text style={{ marginLeft: 15, alignSelf: 'center', fontSize: UI.fontSizeNew.font_15, color: '#000' }} >
                {year.slice(0, 4)}
                <Text style={{ alignSelf: 'center', marginBottom: 0, fontSize: UI.fontSizeNew.font_10, color: '#333333' }} >年</Text></Text>
        </View >)
    };
    renderList = () => {
        const list = [];
        if (this.state.selectedIndex === 0) {
            for (let i = 0; i < filejson.totalDetailed.length; i++) {
                const { year, saveMoney } = filejson.totalDetailed[i];
                list.push(this.renderItemSub(year, i === 0))
                for (let j = 0; j < saveMoney.length; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_2(element, year + element.date, j === saveMoney.length - 1))
                }
            }
        } else if (this.state.selectedIndex === 1) {
            for (let i = 0; i < filejson.saveDetailed.length; i++) {
                const { year, saveMoney } = filejson.saveDetailed[i];
                list.push(this.renderItemSub(year, i === 0))
                for (let j = 0; j < saveMoney.length; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_1(element, year + element.date, j === saveMoney.length - 1))
                }
            }
        } else {
            for (let i = 0; i < filejson.takeOutDetailed.length; i++) {
                const { year, saveMoney } = filejson.takeOutDetailed[i];
                list.push(this.renderItemSub(year, i === 0))
                for (let j = 0; j < saveMoney.length; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_1(element, year + element.date, j === saveMoney.length - 1))
                }
            }
        }
        return list
    }

    renderScrollHeader = () => {
        return <View style={{ width: '100%', height: this.header_H, backgroundColor: '#f5f4f8' }} />
    }

    renderScrollFoot = () => {
        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', height: this.foot_H, backgroundColor: '#f5f4f8', borderTopWidth: this.state.selectedIndex === 0 ? 0 : 1, borderTopColor: '#9D9D9D32' }} >
            <Text style={{ marginTop: 15, color: '#9D9D9D', fontSize: font_10 }}>没有更多数据了...
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
                contentContainerStyle={this.scroll_style.width ? { minHeight: this.scroll_style.height + this.header_H } : { minHeight: UI.size.screenHeight + this.foot_H + this.header_H }}
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