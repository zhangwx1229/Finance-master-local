import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';

export default class MIneInfoDetailScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.data = filejson['2020'];
    }

    componentWillUnmount() {
        this.isDestroy = true;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
        }
    }

    back = () => {
        this.props.navigation.pop()
    }

    renderItem = (title, subTitle, placeText = '', isSeg = false, isLine = true) => {
        const isSelect = subTitle.length > 0
        return (
            <View style={styles.contentBg}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.subTitle, { fontSize: UI.fontSizeNew.font_12 }]}>{title}</Text>
                    <Text numberOfLines={2} style={[styles.year, { color: !isSelect ? '#9d9d9d' : '#333', fontSize: UI.fontSizeNew.font_12_5 }]}>{!isSelect ? placeText : subTitle}</Text>
                </View>
                {isSeg ? <Image style={styles.contentImage} source={Images.p4_9} /> : null}
                {isLine ? <View style={{ position: 'absolute', bottom: 0, right: 0, width: UI.size.screenWidth - 20, height: 1, backgroundColor: '#f5f6f9' }} /> : null}
            </View>
        );
    };

    renderBaseInfo = () => {
        const date = filejson.item_3.substr(6, 4) + '-' + filejson.item_3.substr(10, 2) + '-' + filejson.item_3.substr(12, 2)
        let sex = '男性'
        if (filejson.sex.indexOf('男') < 0) {
            sex = '女性'
        }
        return <View>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 165 / 1080 }} source={Images.icon_2} />
            {this.renderItem('姓名', filejson.name, '', true)}
            {this.renderItem('证件类型', '', '居民身份证', false)}
            {this.renderItem('证件号码', '', UI.getIdentityStr(filejson.item_3, 1, 1), false)}
            {this.renderItem('纳税人识别号', '', UI.getIdentityStr(filejson.item_4, 1, 1), false)}
            {this.renderItem('出生日期', date, '', true)}
            {this.renderItem('性别', sex, '', true)}
            {this.renderItem('国籍(地区)', filejson.item_5, '中华人民共和国', false, false)}
        </View>
    }

    renderLocation = () => {
        return <View>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 169 / 1080 }} source={Images.icon_3} />
            {this.renderItem('所在地区', filejson.item_6, '请选择', true)}
            {this.renderItem('详细地址', filejson.item_7, '请填写小区、楼栋、单元室等', false, false)}
        </View>
    }

    renderResidence = () => {
        return <View>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 168 / 1080 }} source={Images.icon_4} />
            {this.renderItem('所在地区', filejson.item_8, '请选择', true)}
            {this.renderItem('详细地址', filejson.item_9, '请填写小区、楼栋、单元室等', false, false)}
        </View>
    }

    renderPhone = () => {
        return <View>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 168 / 1080 }} source={Images.icon_5} />
            {this.renderItem('所在地区', filejson.item_10, '请选择', true)}
            {this.renderItem('详细地址', filejson.item_11, '请填写小区、楼栋、单元室等', false, false)}
        </View>
    }

    renderOther = () => {
        return <View>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 168 / 1080 }} source={Images.icon_12} />
            {this.renderItem('学历', filejson.item_12, '请选择', true)}
            {this.renderItem('民族', filejson.item_13, '请选择', true)}
            {this.renderItem('电子邮箱', filejson.item_14, '请选择', false, false)}
        </View>
    }

    renderSave = () => {
        return <View style={{ backgroundColor: '#f5f6f9' }}>
            <Image style={{ width: UI.size.screenWidth, height: UI.size.screenWidth * 231 / 1080, marginBottom: 60 }} source={Images.icon_13} />
        </View>
    }

    render() {
        if (this.data === null) {
            return null
        }
        return (<View style={styles.container} >
            <Image style={{ position: 'absolute', width: UI.size.screenWidth, height: UI.size.screenWidth * 130 / 1080 }} source={Images.icon_1} />
            <TouchableWithoutFeedback onPress={this.back}>
                <View style={{ marginLeft: 5, width: 50, height: 40 }} />
            </TouchableWithoutFeedback>
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
            >
                {this.renderBaseInfo()}
                {this.renderLocation()}
                {this.renderResidence()}
                {this.renderPhone()}
                {this.renderOther()}
                {this.renderSave()}
            </ScrollView>
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: { flex: 1 },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    click: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 183) / 1440,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    contentBg: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subTitle: { width: 110, marginLeft: 20, color: '#333333cf' },
    year: {
        maxWidth: UI.size.screenWidth - 130 - 30,
    },
    contentImage: {
        position: 'absolute',
        top: 11,
        right: 7,
        width: 23,
        height: 23,
    },
});