import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    Text,
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../common/TitleView';
import filejson from '../../../../image/filename.json';
import DateSelectModel from '../common/DateSelectModel';

let font_13 = UI.fontSizeNew.font_13
let font_12 = UI.fontSizeNew.font_12
let font_10 = UI.fontSizeNew.font_10
export default class SearchDetailView extends PureComponent {

    constructor(props) {
        super(props);
        const { route } = props;
        this.data = null;
        if (route.params && route.params.year) {
            if (filejson[route.params.year + '']) {
                this.data = filejson[route.params.year + ''];
            }
        }

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
    }

    clickSelect = data => {
        const {
            navigation
        } = this.props;
        navigation.navigate('DetailInfoView', { data });
    };
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
                        if (this.offset_y < 300) {
                            this.scrollRef.scrollTo({ y: 300, animated: true });
                        } else if (this.offset_y > this.data.length * this.item_H + 300 - this.scroll_style.height) {
                            this.scrollRef.scrollTo({ y: this.data.length * this.item_H + 300 - this.scroll_style.height, animated: true });
                        }
                    }
                }
                this.offset_olf_y = this.offset_y
            } else {
                if (this.scrollTimer) {
                    clearInterval(this.scrollTimer)
                }
                if (this.scrollRef) {
                    if (this.offset_y < 300) {
                        this.scrollRef.scrollTo({ y: 300, animated: true });
                    } else if (this.offset_y > this.data.length * this.item_H + 300 - this.scroll_style.height) {
                        this.scrollRef.scrollTo({ y: this.data.length * this.item_H + 300 - this.scroll_style.height, animated: true });
                    }
                }
            }
        }, 50);
    }

    onLayout = (e) => {
        const { height, width } = e.nativeEvent.layout;
        if (!this.scroll_style.width) {
            if (this.scrollRef) {
                if (this.offset_y < 300) {
                    this.scrollRef.scrollTo({ y: 300, animated: false, });
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

    rightView = () => (
        <TouchableOpacity style={
            {
                position: 'absolute', right: 10
            }
        }>
            <Image style={{ width: (15 * 171) * UI.size.scale / 47, height: 15 * UI.size.scale }}
                source={Images.icon_search_right
                } />
        </TouchableOpacity >
    );

    renderHeader = () => {
        return (
            <View style={{
                backgroundColor: '#fff', justifyContent: 'center',
            }} >
                <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 9, marginTop: 15, alignItems: 'center', }} >
                    <Text style={{ fontSize: font_12, color: '#333333', }} >收入合计 <Image style={{ width: 17 * UI.size.scale, height: 17 * UI.size.scale }} source={Images.icon_wenhao} /> <Text style={{
                        fontSize: UI.fontSizeNew.font_14, color: '#333333'
                    }} > : </Text></Text>
                    <Text style={{ fontSize: font_12, color: '#333333' }} >{this.state.opacity === 1 ? this.total_0 : 0}元</Text>
                </View >
                <View style={{ marginLeft: 15, width: UI.size.screenWidth - 15 * 2, height: 1, opacity: 0.5, backgroundColor: '#9D9D9D' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 15, marginTop: 7, alignItems: 'center', }} >
                    <Text style={{ fontSize: font_12, color: '#333333', }} >已申报税额合计<Text style={{
                        fontSize: UI.fontSizeNew.font_14, color: '#333333'
                    }} > : </Text></Text>
                    <Text style={{ fontSize: font_12, color: '#333333' }} >{this.state.opacity === 1 ? this.total_1 : 0}元</Text>
                </View >
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
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemTitle, {
                            fontSize: font_13
                        }]} >工资薪金</Text>
                        <Text style={[styles.itemDate, {
                            fontSize: font_13
                        }]} >{data.date.slice(0, 7)}</Text>
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 15 }]} >所得项目小类<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_1}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemDetail, {
                            fontSize: font_12
                        }]} numberOfLines={1} >扣缴义务人<Text style={[styles.itemDetail, {
                            fontSize: UI.fontSizeNew.font_14
                        }]} > : </Text>{data.item_2}</Text>
                        <Image style={{ position: 'absolute', right: -5, width: 30, height: 30, }} source={Images.p1_12} />
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 15 }]} numberOfLines={1} >收入<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_4.toFixed(2)}元</Text>
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 15, marginBottom: 25 }]} numberOfLines={1}  >已申报税额<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_5.toFixed(2)}元</Text>
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
        return <View style={{ width: '100%', height: 300, backgroundColor: '#f5f6f9' }} />
    }

    renderScrollFoot = () => {
        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', height: 300, backgroundColor: '#f5f6f9' }} >
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
            <TitleView title={'收入纳税明细查询'
            } rightView={this.rightView} navigation={navigation}
            />
            {this.renderHeader(0)}
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