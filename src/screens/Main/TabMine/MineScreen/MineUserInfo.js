import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';
import TitleView from '../../TabHomeNew/common/TitleView';

export default class MineUserInfo extends PureComponent {

    renderList = () => {
        const list = [];

        const data = [
            { title: '个人主页', sub: '' },
            { title: '身份认证', sub: filejson.item_tmp_2 },
            { title: '支付宝账号', sub: UI.getNumPhone(filejson.item_tmp_3) },
            { title: '我的二维码', sub: '' },
            { title: '淘宝会员名', sub: filejson.item_tmp_6 },
            { title: '我的收货地址', sub: '' },
            { title: '我的发票抬头', sub: '' },
            { title: '邀请有礼', sub: '' },
            { title: '聊天收藏', sub: '' }]
        for (let i = 0; i < data.length; i++) {
            list.push(this.renderItem_2(data[i]))
        }
        return list
    }

    clickItem = (item) => {
        if (item.title === '我的收货地址') {
            console.debug('=====clickItem======')
            const {
                navigation
            } = this.props;
            navigation.navigate('ShippingAddress');
        }
    }


    renderItem_2 = (itme) => {
        const { title, sub } = itme
        let coms = null
        let subView = null
        switch (title) {
            case '个人主页':
                coms = <Image style={{ width: 40, height: 40, alignSelf: 'center', borderRadius: 5 }} source={Images.headImage} />
                break;
            case '身份认证':
                coms = <Image style={{ width: 18 * 161 / 56, height: 18, marginLeft: 5, alignSelf: 'center' }} source={Images.icon_30} />
                break;
            case '我的二维码':
                coms = <Image style={{ width: 18 * 51 / 50, height: 18, marginLeft: 5, alignSelf: 'center' }} source={Images.icon_31} />
                break;
            case '淘宝会员名':
            case '我的发票抬头':
                subView = <View style={{ width: UI.size.screenWidth, height: 15, backgroundColor: '#f5f4f8' }} />

                break;
            default:
                break;
        }
        return (
            <TouchableWithoutFeedback key={title} onPress={() => {
                this.clickItem(itme)
            }}>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', backgroundColor: '#fff', }}>
                        <Text numberOfLines={1} style={{ marginLeft: 15, alignSelf: 'center', fontSize: UI.fontSizeNew.font_12, color: '#333333' }} >{title}</Text>
                        <View style={{ marginRight: 10, flexDirection: 'row' }}>
                            <Text numberOfLines={1} style={{ alignSelf: 'center', maxWidth: UI.size.screenWidth - 100 - 15 * 2 - 20, textAlign: 'right', fontSize: UI.fontSizeNew.font_12, color: '#9D9D9D' }} >
                                {sub}
                            </Text>
                            {coms}
                            <Image style={{ width: 25, height: 25, alignSelf: 'center' }} source={Images.alipay_28} />
                        </View >
                    </View>
                    {subView ? subView : <View style={{ marginLeft: 15, width: UI.size.screenWidth - 15, height: 0.5, backgroundColor: '#9D9D9D22' }} />}
                </View>
            </TouchableWithoutFeedback >
        )
    };


    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <TitleView navigation={this.props.navigation} imageComponent={() =>
                    <Image style={styles.header} source={Images.icon_32} />
                } />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    {this.renderList()}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f4f8' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 144) / 1080,
    },
});
