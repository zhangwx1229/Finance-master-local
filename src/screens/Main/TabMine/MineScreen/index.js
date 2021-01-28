import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Image, DeviceEventEmitter, AsyncStorage, StyleSheet, ScrollView, Text, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filename from '../../../../image/filename.json';
import { GlobalData } from '../../../GlobalData';
const Head_W = UI.size.screenWidth
const Head_H = (UI.size.screenWidth * 349) / 1080
const Head_Avatar_W = Head_H * 0.5

let font_12_5 = UI.fontSizeNew.font_12_5
export default class TaxScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { isLogin: GlobalData.isLogin }
        this.phone = ""
        const phoneStr = filename.phone + ''
        if (phoneStr.length === 11) {
            this.phone = phoneStr.slice(0, 3) + '****' + phoneStr.slice(-4);
        }
    }
    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener('RNLogInEvent', () => {
            this.setState({ isLogin: true })
        })
    }
    componentWillUnmount() {
        if (this.listener) {
            this.listener.remove()
        }
    }

    onPressOne = () => {
        if (this.state.isLogin) {
            this.props.navigation.navigate('MIneInfoScreen');
        } else {
            this.props.navigation.navigate('MineLogInScreen');
        }
    }

    onPressTwo = () => {
        if (this.state.isLogin) {
            this.props.navigation.navigate('MineTaskScreen');
        } else {
            this.props.navigation.navigate('MineLogInScreen');
        }

    }
    onPressOut = () => {
        if (!this.state.isLogin) {
            this.props.navigation.navigate('MineLogInScreen');
        }
    }

    render() {
        font_12_5 = UI.fontSizeNew.font_12_5
        let avatar = Images.p4_avatar_1
        if (this.state.isLogin) {
            if (filename.sex === '男') {
                avatar = Images.tab_mine_p4_avatar_3
            } else {
                avatar = Images.tab_mine_p4_avatar_2
            }
        }

        return (
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
            >
                <View style={{
                    width: Head_W,
                    height: Head_H, flexDirection: 'row'
                }}>
                    <TouchableWithoutFeedback onPress={this.onPressOut}>
                        <Image style={styles.header} source={Images.tab_mine_p4_bg} />
                    </TouchableWithoutFeedback>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <Image style={{ marginLeft: 20, marginTop: Head_H - 20 - Head_Avatar_W, width: Head_Avatar_W, height: Head_Avatar_W }}
                            source={avatar} />
                        {this.state.isLogin ? null : <Text style={{
                            marginLeft: 10, alignSelf: 'center', marginTop: 20,
                            fontSize: font_12_5,
                            color: '#fff',
                        }}>登陆/注册</Text>}
                    </View>
                    {this.state.isLogin ? <View style={{ justifyContent: 'center', marginLeft: 10, marginTop: Head_H - 20 - Head_Avatar_W, height: Head_Avatar_W }}>
                        <Text style={{
                            fontSize: font_12_5,
                            color: '#fff',
                            marginBottom: 5
                        }}>{filename.name}</Text>
                        {this.phone.length > 0 ? <Text style={{
                            fontSize: font_12_5,
                            color: '#fff',
                        }}>{this.phone}</Text> : null}
                    </View> : null}
                </View>
                <View>
                    <Image style={styles.image} source={Images.tab_mine_image} />
                    {this.state.isLogin ? <Image style={styles.imageout} source={Images.tab_mine_image_out} /> : null}
                    <TouchableWithoutFeedback onPress={this.onPressOne}>
                        <View style={{ position: 'absolute', top: 5, width: '100%', height: 40 }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.onPressTwo}>
                        <View style={{ position: 'absolute', top: 15 + 40, width: '100%', height: 40 }} />
                    </TouchableWithoutFeedback>
                </View>
                {
                    this.state.isLogin ? <TouchableWithoutFeedback onPress={() => {
                        this.setState({ isLogin: false })
                        AsyncStorage.setItem('FanUserLoginTag', '0')
                        GlobalData.isLogin = false
                    }}>
                        <View style={{ position: 'absolute', bottom: 65, width: '100%', height: 40 }} />
                    </TouchableWithoutFeedback> : null
                }
                <View style={{ height: 60, backgroundColor: '#f5f6f9' }} />
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1323) / 1080,
    },
    imageout: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 190) / 1080,
    },
    header: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
});
