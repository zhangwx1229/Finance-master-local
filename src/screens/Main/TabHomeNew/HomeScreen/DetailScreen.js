import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';
import TitleView from '../common/TitleView';
import JJRefresh from './JJRefresh';
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
        this.state = { selectedIndex: index, data: { 0: 20, 1: 20, 2: 20 }, compearList: { 0: false, 1: false, 2: false } }
        this.isDestroy = false;
    }

    componentWillUnmount() {
        this.isDestroy = true;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
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
        const num = this.state.data[this.state.selectedIndex]
        let len = 0
        if (this.state.selectedIndex === 0) {

            for (let i = 0; i < filejson.totalDetailed.length; i++) {
                const { year, saveMoney } = filejson.totalDetailed[i];
                list.push(this.renderItemSub(year, i === 0))
                let itemNum = saveMoney.length
                len += itemNum
                if (num < len) {
                    itemNum = num - (len - itemNum)
                }
                for (let j = 0; j < itemNum; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_2(element, year + element.date, j === itemNum - 1))
                }
                if (itemNum < saveMoney.length) {
                    break;
                }
                if (i === filejson.totalDetailed.length - 1 && !this.state.compearList[0]) {
                    setTimeout(() => {
                        this.setState({ compearList: { ...this.state.compearList, 0: true } })
                    });
                }
            }
        } else if (this.state.selectedIndex === 1) {
            for (let i = 0; i < filejson.saveDetailed.length; i++) {
                const { year, saveMoney } = filejson.saveDetailed[i];
                list.push(this.renderItemSub(year, i === 0))
                let itemNum = saveMoney.length
                len += itemNum
                if (num < len) {
                    itemNum = num - (len - itemNum)
                }
                for (let j = 0; j < itemNum; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_1(element, year + element.date, j === itemNum - 1))
                }
                if (itemNum < saveMoney.length) {
                    break;
                }
                if (i === filejson.saveDetailed.length - 1 && !this.state.compearList[1]) {
                    setTimeout(() => {
                        this.setState({ compearList: { ...this.state.compearList, 1: true } })
                    });
                }
            }
        } else {
            for (let i = 0; i < filejson.takeOutDetailed.length; i++) {
                const { year, saveMoney } = filejson.takeOutDetailed[i];
                list.push(this.renderItemSub(year, i === 0))
                let itemNum = saveMoney.length
                len += itemNum
                if (num < len) {
                    itemNum = num - (len - itemNum)
                }
                for (let j = 0; j < itemNum; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_1(element, year + element.date, j === itemNum - 1))
                }
                if (itemNum < saveMoney.length) {
                    break;
                }
                if (i === filejson.takeOutDetailed.length - 1 && !this.state.compearList[2]) {
                    setTimeout(() => {
                        this.setState({ compearList: { ...this.state.compearList, 2: true } })
                    });
                }
            }
        }
        return list
    }


    renderScrollFoot = () => {
        if (this.state.compearList[this.state.selectedIndex] === false) {
            return <TouchableOpacity onPress={() => {
                if (this.state.selectedIndex === 0 && !this.state.compearList[0]) {
                    this.setState({ data: { ...this.state.data, 0: this.state.data[0] + 10 } })
                } else if (this.state.selectedIndex === 1 && !this.state.compearList[1]) {
                    this.setState({ data: { ...this.state.data, 1: this.state.data[1] + 10 } })
                } else if (this.state.selectedIndex === 2 && !this.state.compearList[2]) {
                    this.setState({ data: { ...this.state.data, 2: this.state.data[2] + 10 } })
                }

            }}>
                <View style={{ backgroundColor: '#fff', marginBottom: 15, borderTopWidth: this.state.selectedIndex === 0 ? 0 : 1, borderTopColor: '#9D9D9D32' }}>
                    <Text style={{ alignSelf: 'center', marginVertical: 12, color: '#11a4e0', fontSize: UI.fontSizeNew.font_10_5 }}>
                        点击加载更多
            </Text>
                </View>
            </TouchableOpacity>
        }
        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', height: 60, backgroundColor: '#f5f4f8', borderTopWidth: this.state.selectedIndex === 0 ? 0 : 1, borderTopColor: '#9D9D9D32' }} >
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
        console.debug('=====render====', this.state)
        return (<View style={styles.container} >
            {this.renderTitle()}
            <JJRefresh
                foot_H={0}

                contentView={() => {
                    return <View>
                        {this.renderHeader()}
                        {this.renderList()}
                        {this.renderScrollFoot()}
                    </View>
                }}
            />
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