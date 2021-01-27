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

import DateSelectModel from '../common/DateSelectModel';

let font_12 = UI.fontSizeNew.font_12
export default class TaxTechnologyScreen extends PureComponent {
    constructor(props) {
        super(props);
        const { route } = props;
        this.data = route.params.data
    }

    renderHeader = index => {
        return (
            <View style={{
                flex: 1, backgroundColor: '#fff', justifyContent: 'center',
            }} >
                <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                <Image
                    style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 100) / 810,
                    }}
                    source={Images.detail_info_0}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 8, marginTop: 15, alignItems: 'center', }} >
                    <Text style={{ fontSize: font_12, color: '#9D9D9D', }} >
                        收入：
          </Text>
                    <Text style={{ fontSize: font_12, color: '#333333' }} >
                        {this.data.item_4.toFixed(2)}元
        </Text>
                </View >
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 5, marginTop: 7, alignItems: 'center',
                }} >
                    <Text style={{ fontSize: font_12, color: '#9D9D9D', }} >已申报税额： </Text>
                    <Text style={{ fontSize: font_12, color: '#333333' }} > {this.data.item_5.toFixed(2)}元</Text>
                </View >
                <Image
                    style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 98) / 810,
                    }}
                    source={Images.detail_jishu}
                />

                <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                <Image
                    style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 101) / 810,
                    }}
                    source={Images.detail_info_1}
                />
            </View>
        );
    };
    renderItem_0 = () => {
        return (
            <View style={styles.contentBg} >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 3, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 所得项目小类： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_1} </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 扣缴义务人名称： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_2} </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 扣缴义务人纳税人识别号： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_6} </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 主管税务机关：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7} </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 申报渠道：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_8} </Text>
                </View >
                <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 15, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 申报日期： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.date} </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 主税款所属期：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_9} </Text>
                </View >
                <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
            </View >
        );
    };
    renderItem_1 = () => {
        return (
            <View style={styles.contentBg} >
                <Image
                    style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 270) / 810,
                    }}
                    source={Images.detail_info_2}
                />
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, marginTop: 3, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle1, {
                        fontSize: font_12
                    }]} > 本期收入： </Text>
                    <Text style={[styles.itemDate1, {
                        fontSize: font_12
                    }]} > {this.data.item_4.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle1, {
                        fontSize: font_12
                    }]} > 本期免税收入： </Text>
                    <Text style={[styles.itemDate1, {
                        fontSize: font_12
                    }]} > {this.data.item_10.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle1, {
                        fontSize: font_12
                    }]} > 本期减免费用： </Text>
                    <Text style={[styles.itemDate1, {
                        fontSize: font_12
                    }]} > {this.data.item_11.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle1, {
                        fontSize: font_12
                    }]} > 本期专项扣除：</Text>
                    <Text style={[styles.itemDate1, {
                        fontSize: font_12
                    }]} > {this.data.item_12.toFixed(2)}元 <Image style={{ width: 13 * UI.size.scale, height: 13 * 22 * UI.size.scale / 33, }} source={Images.detail_info_jian} /></Text>
                </View >
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle1, {
                        fontSize: font_12
                    }]} > 本期其他扣除：</Text>
                    <Text style={[styles.itemDate1, {
                        fontSize: font_12
                    }]} > {this.data.item_13.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle1, {
                        fontSize: font_12
                    }]} > 本期准予扣除的捐赠项目：</Text>
                    <Text style={[styles.itemDate1, {
                        fontSize: font_12
                    }]} > {this.data.item_14.toFixed(2)}元 </Text>
                </View >
                <View style={{ width: '100%', height: 80, backgroundColor: '#f5f6f9' }} />
            </View >
        );
    };

    render() {
        font_12 = UI.fontSizeNew.font_12
        const { navigation } = this.props;
        return (<View style={styles.container} >
            <TitleView title={'税款计算'
            } navigation={navigation}
            />
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false} >
                {this.renderHeader(0)}

                {this.renderItem_0()}
                {this.renderItem_1()}
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
    contentBg: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTitle: {
        color: '#9D9D9D',
        marginTop: 12,
        maxWidth: 120,
        textAlign: 'left'
    },
    itemDate: {
        color: '#333333',
        marginTop: 12,
        maxWidth: UI.size.screenWidth - 120 - 20 - 5,
        textAlign: 'right'
    },
    itemTitle1: {
        color: '#9D9D9D',
        marginTop: 12,
        maxWidth: 160,
        textAlign: 'left'
    },
    itemDate1: {
        color: '#333333',
        marginTop: 12,
        maxWidth: UI.size.screenWidth - 160 - 20 - 10,
        textAlign: 'right'
    },
});