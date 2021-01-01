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
import filejson from '../../../../image/filename.json';

let font_13 = UI.fontSizeNew.font_13
let font_11_5 = UI.fontSizeNew.font_11_5
export default class SearchDetailView extends PureComponent {

    constructor(props) {
        super(props);
        const { route } = props;
        this.data = filejson['workList'];
        this.isDestroy = false;
    }

    componentWillUnmount() {
        this.isDestroy = true;
    }

    clickSelect = data => { };

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
                        }]} >{data.item_1.length > 0 ? data.item_1 : '-'}</Text>
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_11_5, marginLeft: 15 }]} >统一社会信用代码<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_2.length > 0 ? data.item_2 : '-'}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemDetail, {
                            fontSize: font_11_5
                        }]} numberOfLines={1} >职务<Text style={[styles.itemDetail, {
                            fontSize: UI.fontSizeNew.font_14
                        }]} > : </Text>{data.item_3.length > 0 ? data.item_3 : '-'}</Text>
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_11_5, marginLeft: 15 }]} numberOfLines={1} >任职受雇日期<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_4.length > 0 ? data.item_4 : '-'}</Text>
                    <Text style={[styles.itemDetail, { fontSize: font_11_5, marginLeft: 15, marginBottom: 16 }]} numberOfLines={1}  >离职日期<Text style={[styles.itemDetail, {
                        fontSize: UI.fontSizeNew.font_14
                    }]} > : </Text>{data.item_5.length > 0 ? data.item_5 : '-'}</Text>
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
        font_11_5 = UI.fontSizeNew.font_11_5
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