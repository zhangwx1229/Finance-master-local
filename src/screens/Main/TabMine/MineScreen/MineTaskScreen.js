import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import UI from '../../../../UI';
import TitleView from '../../TabHomeNew/common/TitleView';
import filejson from '../../../../image/filename_02.json';

let font_13 = UI.fontSizeNew.font_13
let font_12 = UI.fontSizeNew.font_12
export default class SearchDetailView extends PureComponent {

    constructor(props) {
        super(props);
        const { route } = props;
        this.data = filejson['2020'];
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

    renderItem = (data, index) => {
        return (
            <TouchableOpacity
                key={index + ''} style={[styles.click, index === 0 ? { marginTop: 5.5 * 2 } : null]}
                activeOpacity={1}
                onPress={() => { this.clickSelect(data); }} >
                <View style={styles.contentBg} >
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between' }} >
                        <Text numberOfLines={1} style={[styles.itemTitle, {
                            fontSize: font_13
                        }]} >工资薪贺卡收到卡萨kflslmfls面对卡塞雷斯没能力打</Text>
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
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 15 }]} numberOfLines={1} >收入<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_4.toFixed(2)}元</Text>
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 15, marginBottom: 16 }]} numberOfLines={1}  >已申报税额<Text style={[styles.itemDetail, {
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


    render() {
        font_13 = UI.fontSizeNew.font_13
        font_12 = UI.fontSizeNew.font_12
        if (this.data === null) {
            return null
        }
        const { navigation } = this.props;
        return (<View style={styles.container} >
            <TitleView title={'任职受雇信息'} navigation={navigation}
            />
            <ScrollView
                ref={(e) => { this.scrollRef = e }}
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false} >
                {this.renderList()}
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
        marginHorizontal: 15,
        marginVertical: 5.5,
        borderRadius: 3,
        overflow: 'hidden'
    },
    contentBg: {
        flex: 1,

    },
    itemTitle: {
        color: '#333333',
        marginTop: 20,
        maxWidth: UI.size.screenWidth - 40
    },
    itemDate: {
        color: '#333333',
        marginTop: 20,
        marginRight: 30,
    },
    itemDetail: {
        color: '#9D9D9D',
        marginTop: 4,
        marginRight: 30
    },
});