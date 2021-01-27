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
            <Image
                style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 388) / 1080,
                }}
                source={Images.icon_41}
            />
        );
    };

    renderItem_0 = () => {
        return (
            <View style={styles.contentBg} >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 3, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计收入： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_1}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计免税收入： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_2}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计减除费用： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_6}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计专项扣除：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计专项附加扣除：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计其他扣除：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计准予扣除的捐赠额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_8}元 </Text>
                </View >
                <View style={{ width: '100%', height: 1, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > 累计应纳税所得额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_8}元 </Text>
                </View >
            </View >
        );
    };

    renderItem_1 = () => {
        return (
            <View style={styles.contentBg} >
                <Image
                    style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 168) / 1080,
                    }}
                    source={Images.icon_43}
                />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 3, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计应纳税所得额： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_1}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 税率/预扣率： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_2}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 速算扣除数： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_6}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计应纳税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计已缴税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计减免税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_7}元 </Text>
                </View >
                <View style={{ width: '100%', height: 1, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > 本期申报税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.data.item_8}元 </Text>
                </View >
                <Image
                    style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 362) / 1080,
                    }}
                    source={Images.icon_44}
                />
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
        maxWidth: 160,
        textAlign: 'left'
    },
    itemDate: {
        color: '#333333',
        marginTop: 12,
        maxWidth: UI.size.screenWidth - 160 - 20 - 5,
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