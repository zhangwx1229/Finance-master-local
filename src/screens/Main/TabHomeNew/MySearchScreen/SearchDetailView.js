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
import filejson from '../../../../image/filename_02.json';
import DateSelectModel from '../common/DateSelectModel';
let font_12 = UI.fontSizeNew.font_12
export default class SearchDetailView extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        title: `SearchDetailView with ${navigation.state.params.user}`,
    });
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
        this.total_0 = Math.ceil(this.total_0 * 100) / 100
        this.total_1 = Math.ceil(this.total_1 * 100) / 100
    }

    clickSelect = data => {
        const {
            navigation
        } = this.props;
        navigation.navigate('DetailInfoView', { data });
    };

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
                flex: 1, backgroundColor: '#fff', justifyContent: 'center',
            }} >
                <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 9, marginTop: 15, alignItems: 'center', }} >
                    <Text style={{ fontSize: font_12, color: '#333333', }} >
                        收入合计 <Image style={{ width: 15 * UI.size.scale, height: 15 * UI.size.scale }} source={Images.icon_wenhao} />：
          </Text>
                    <Text style={{ fontSize: font_12, color: '#333333' }} >
                        {this.total_0}元
        </Text>
                </View >
                <View style={{ flex: 1, height: 0.5, backgroundColor: '#9D9D9D' }}
                />
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 15, marginTop: 7, alignItems: 'center',
                }} >
                    <Text style={{ fontSize: font_12, color: '#333333', }} >已申报税额合计： </Text>
                    <Text style={{ fontSize: font_12, color: '#333333' }} > {this.total_1}元</Text>
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
                <View style={styles.contentBg} >
                    <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemTitle, {
                            fontSize: font_12
                        }]} > 工资薪金 </Text>
                        <Text style={[styles.itemDate, {
                            fontSize: font_12
                        }]} > {data.date.slice(0, 7)} </Text>
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 10 }]} > 所得项目小类：{data.item_1}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                        <Text style={[styles.itemDetail, {
                            fontSize: font_12
                        }]} numberOfLines={1} > 扣缴义务人：{data.item_2}</Text>
                        <Image style={{ position: 'absolute', right: 0, width: 30, height: 30, }} source={Images.p1_12} />
                    </View >
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 10 }]} numberOfLines={1} > 收入：{data.item_4}</Text>
                    <Text style={[styles.itemDetail, { fontSize: font_12, marginLeft: 10, marginBottom: 25 }]} numberOfLines={1}  > 已申报税额：{data.item_5} </Text>
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
        font_12 = UI.fontSizeNew.font_12
        if (this.data === null) {
            return null
        }
        const { navigation } = this.props;
        return (<View style={styles.container} >
            <TitleView title={'收入纳税明细查询'
            } rightView={this.rightView} navigation={navigation}
            />
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false} >
                {this.renderHeader(0)}
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
        backgroundColor: '#f5f6f9'
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
        marginTop: 15,
        marginRight: 30,
    },
    itemDetail: {
        color: '#9D9D9D',
        marginTop: 5,
        marginRight: 30
    },
});