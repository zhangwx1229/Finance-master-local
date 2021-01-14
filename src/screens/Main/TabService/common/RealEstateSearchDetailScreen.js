import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
import TitleViewNew from './TitleViewNew';
import filejson from '../../../../image/filename.json';
export default class RealEstateSearchDetailScreen extends PureComponent {
    constructor() {
        super()
        this.state = { isShowContent: false }
    }
    onPressOne = () => {
    }

    onBack = () => {
        this.props.navigation.navigate('RealEstateDetailScreen')
    }

    onClose = () => {
        this.props.navigation.navigate('SocialAllScreen')
    }

    onLoadEnd = () => {
        this.setState({ isShowContent: true })
    }
    renderContent = () => {
        return <View>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 12 }}>
                <Text
                    style={{
                        alignSelf: 'flex-end',
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#333333',
                    }}
                >
                    <Text
                        style={{
                            alignSelf: 'flex-end',
                            fontSize: UI.fontSizeNew.font_12,
                            color: 'red',
                        }}
                    >
                        *
                </Text>查询用途：
                </Text>
                <View style={{ marginLeft: 12, borderColor: '#33333322', borderWidth: 1 }}>
                    <TextInput
                        style={{ fontSize: UI.fontSizeNew.font_11, width: UI.size.screenWidth - 150, height: 40 }}
                        placeholder="请输入查询用途"
                        placeholderTextColor={'#9d9d9d69'}
                        onChangeText={(text) => this.setState({ text })}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 12 }}>
                <Text
                    style={{
                        alignSelf: 'flex-end',
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#333333',
                    }}
                >
                    <Text
                        style={{
                            alignSelf: 'flex-end',
                            fontSize: UI.fontSizeNew.font_12,
                            color: 'red',
                        }}
                    >
                        *
                </Text>权利人：{'     '}
                </Text>
                <View style={{ marginLeft: 12, borderColor: '#33333322', borderWidth: 1 }}>
                    <TextInput
                        style={{ fontSize: UI.fontSizeNew.font_11, width: UI.size.screenWidth - 150, height: 40 }}
                        placeholder="请输入查询人"
                        value={filejson.name + ',' + filejson.item_tmp_sb_0}
                        placeholderTextColor={'#9d9d9d69'}

                        onChangeText={(text) => this.setState({ text })}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 12 }}>
                <Text
                    style={{
                        marginTop: 25,
                        fontSize: UI.fontSizeNew.font_13,
                        color: '#333333',
                    }}
                >
                    不动产坐落{'  '}
                </Text>
                <View style={{ marginLeft: 12, marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                    <View >
                        <Image style={{
                            alignSelf: 'center',
                            marginRight: 5,
                            marginTop: 13,
                            width: 10,
                            height: 10 * 24 / 25
                        }} source={Images.icon_48} />
                        {/* <TouchableWithoutFeedback onPress={this.onPressOne}>
                        <View style={{ position: 'absolute', alignSelf: 'center', width: 60, height: 45, backgroundColor: 'red' }} />
                    </TouchableWithoutFeedback> */}
                    </View>
                    <View style={{ borderColor: '#33333322', flexDirection: 'row', borderWidth: 1 }}>
                        <TextInput
                            style={{ fontSize: UI.fontSizeNew.font_11, width: UI.size.screenWidth - 180, height: 40 }}
                            placeholder="请输入查询的内容"

                            placeholderTextColor={'#9d9d9d69'}
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                </View>
            </View>
            <Text
                style={{
                    marginHorizontal: 22,
                    marginTop: 16,
                    fontSize: UI.fontSizeNew.font_12,
                    color: 'red',
                }}
            >
                权利人查询也支持以姓名和身份证号码或机构名称直接查询
                </Text>
            <View style={{ marginTop: 20, marginBottom: 10, marginHorizontal: 20, padding: 6, backgroundColor: '#fafafa', borderRadius: 8 }}>
                <Text
                    style={{
                        fontSize: UI.fontSizeNew.font_12,
                        color: '#333',
                    }}
                >
                    *您填写的不动产具体坐落位置、不动产权属证书号、不动产单元号，应与不动产权证书记载的信息完全一致，否则将无法正确显示查询结果。
                </Text>
            </View>
        </View >
    }
    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleViewNew navigation={this.props.navigation} onBack={this.onBack} onClose={this.onClose}
                showText={'权利人查询'}
                onLoadEnd={this.onLoadEnd} />
        </View >
    };
    render() {
        if (!this.state.isShowContent) {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    {this.renderTitle()}
                </View>
            )
        }
        return (
            <View style={{ justifyContent: 'space-between', width: UI.size.screenWidth, height: UI.size.screenHeight, backgroundColor: '#fff' }}>
                {this.renderTitle()}
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 470 / 1080
                }} source={Images.icon_45} />
                <JJRefresh
                    foot_H={0}
                    header_H={0}
                    backgroundColor={'#fff'}
                    contentView={this.renderContent}
                />
                <View >
                    <View style={{ height: 40, backgroundColor: '#f5f5f5' }} />
                    <View >
                        <Image style={{
                            width: UI.size.screenWidth,
                            height: UI.size.screenWidth * 235 / 1080
                        }} source={Images.icon_47} />
                        <TouchableWithoutFeedback onPress={this.onPressOne}>
                            <View style={{ position: 'absolute', alignSelf: 'center', width: 60, height: 45, backgroundColor: UI.color.tempColor }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ height: 20, backgroundColor: '#f5f5f5' }} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, marginTop: UI.size.statusBarHeight, backgroundColor: '#fff' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 125) / 1080,
    },
});
