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

let font_12 = UI.fontSizeNew.font_12
export default class TaxTechnologyScreen extends PureComponent {
    constructor(props) {
        super(props);
        const { route } = props;
        const { data, index } = route.params
        this.year = data.date.slice(0, 4)
        this.month = Math.ceil(data.date.slice(5, 7))

        const list = filejson[this.year + '']
        this.dataInfo = {};
        for (let i = list.length - 1; i >= index; i--) {
            const element = list[i];
            if (!this.dataInfo.item_0) {
                this.dataInfo.item_0 = element.item_4 + element.item_5
            } else {
                this.dataInfo.item_0 += (element.item_4 + element.item_5)
            }
            if (!this.dataInfo.item_1) {
                this.dataInfo.item_1 = element.item_10
            } else {
                this.dataInfo.item_1 += element.item_10
            }

            if (!this.dataInfo.item_2) {
                this.dataInfo.item_2 = element.item_11
            } else {
                this.dataInfo.item_2 += element.item_11
            }

            if (!this.dataInfo.item_3) {
                this.dataInfo.item_3 = element.item_12
            } else {
                this.dataInfo.item_3 += element.item_12
            }

            if (!this.dataInfo.item_4) {
                this.dataInfo.item_4 = element.item_13
            } else {
                this.dataInfo.item_4 += element.item_13
            }

            if (!this.dataInfo.item_5) {
                this.dataInfo.item_5 = element.item_13
            } else {
                this.dataInfo.item_5 += element.item_13
            }

            if (!this.dataInfo.item_6) {
                this.dataInfo.item_6 = element.item_14
            } else {
                this.dataInfo.item_6 += element.item_14
            }

            if (!this.dataInfo.item_10) {
                this.dataInfo.item_10 = element.item_5
            } else {
                this.dataInfo.item_10 += element.item_5
            }
        }
        this.dataInfo.item_7 = this.dataInfo.item_0 - this.dataInfo.item_2 - this.dataInfo.item_3
        if (this.dataInfo.item_7 <= 36000) {
            this.dataInfo.item_8 = '3%'
            this.dataInfo.item_9 = 0
        } else if (this.dataInfo.item_7 <= 144000) {
            this.dataInfo.item_8 = '10%'
            this.dataInfo.item_9 = 2520
        } else if (this.dataInfo.item_7 <= 300000) {
            this.dataInfo.item_8 = '20%'
            this.dataInfo.item_9 = 16920
        } else if (this.dataInfo.item_7 <= 420000) {
            this.dataInfo.item_8 = '25%'
            this.dataInfo.item_9 = 31920
        } else if (this.dataInfo.item_7 <= 660000) {
            this.dataInfo.item_8 = '30%'
            this.dataInfo.item_9 = 52920
        } else if (this.dataInfo.item_7 <= 960000) {
            this.dataInfo.item_8 = '35%'
            this.dataInfo.item_9 = 85920
        } else {
            this.dataInfo.item_8 = '45%'
            this.dataInfo.item_9 = 181920
        }

        this.dataInfo.item_11 = this.dataInfo.item_10 - data.item_5
        this.dataInfo.item_12 = 0
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
                    }]} > {this.dataInfo.item_0.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计免税收入： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_1.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计减除费用： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_2.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计专项扣除：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_3.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计专项附加扣除：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_4.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计其他扣除：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_5.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计准予扣除的捐赠额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_6.toFixed(2)}元 </Text>
                </View >
                <View style={{ width: '100%', height: 1, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > 累计应纳税所得额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_7.toFixed(2)}元 </Text>
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
                    }]} > {this.dataInfo.item_7.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 税率/预扣率： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_8} </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 速算扣除数： </Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_9.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计应纳税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_10.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计已缴税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_11.toFixed(2)}元 </Text>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemTitle, {
                        fontSize: font_12
                    }]} > 累计减免税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {this.dataInfo.item_12.toFixed(2)}元 </Text>
                </View >
                <View style={{ width: '100%', height: 1, backgroundColor: '#f5f6f9' }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > 本期申报税额：</Text>
                    <Text style={[styles.itemDate, {
                        fontSize: font_12
                    }]} > {(this.dataInfo.item_10 - this.dataInfo.item_11).toFixed(2)}元 </Text>
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