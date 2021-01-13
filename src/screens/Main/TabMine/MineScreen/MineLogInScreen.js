import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput, DeviceEventEmitter,
    TouchableWithoutFeedback, Modal, ScrollView, TouchableOpacity
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../../TabHomeNew/common/TitleView';
import filejson from '../../../../image/filename.json';
import UnlockView from './UnlockView';
import { GlobalData } from '../../../GlobalData';

export default class MineLogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isCom: false, userName: '', pass: '', visible: false }
        this.data = filejson['2020'];
        this.isCom = false;
        this.errNum = 0
    }

    componentWillUnmount() {
        this.isDestroy = true;
    }

    back = () => {
        this.props.navigation.pop()
    }

    onPressOne = () => {
        //登陆
        const { userName, pass } = this.state
        const isLog = userName.length > 0 && pass.length > 0
        if (!isLog) {
            return
        }
        DeviceEventEmitter.emit('RNLogInEvent')
                GlobalData.isLogin = true
                this.props.navigation.pop()
                return
        if (this.isCom) {
            if (filejson.item_15 == userName && filejson.item_16 == pass) {
                DeviceEventEmitter.emit('RNLogInEvent')
                GlobalData.isLogin = true
                this.props.navigation.pop()
            } else {
                this.setState({ visible: true }, () => {
                    this.errNum++
                    if (this.errNum > 4) {
                        this.errNum = 4
                    }
                })
            }
        } else {
            this.setState({ visible: true })
        }
    }

    onPressTwo = () => { }

    onComplete = () => {
        this.isCom = true
    }

    onUsernameChange = (text) => {
        this.setState({ userName: text })
    }

    onPassChange = (text) => {
        this.setState({ pass: text })
    }

    content = (onDismiss) => {
        if (!this.isCom) {
            return (
                <View style={{ flex: 1, backgroundColor: '#0000002f', justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center' }}>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', width: UI.size.screenWidth - 50 * 2, height: 120, borderRadius: 5, backgroundColor: '#fff' }} >
                            <Text style={{ fontSize: UI.fontSizeNew.font_12, color: '#333', marginRight: 25 }}>请先拖动滑块验证</Text>
                            <View style={{ width: '100%', marginTop: 18, height: 1, backgroundColor: '#f1f2f6' }} />
                            <TouchableOpacity
                                style={{ width: '100%', height: 45, justifyContent: 'center' }}
                                onPress={() => { this.setState({ visible: false }) }}
                                activeOpacity={1}
                            >
                                <Text style={{ alignSelf: 'center', fontSize: UI.fontSizeNew.font_12, color: UI.color.blue1, marginRight: 25 }}>确定</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
        let errText = (4 - this.errNum) + '次输入错误后，账号将被锁定，需通过找回密码解锁，或120分钟后自动解锁'
        if (4 - this.errNum === 0) {
            errText = '账号或密码多次输入错误，是否找回密码？活着120分钟后再试'
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#0000002f', justifyContent: 'center' }}>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', width: UI.size.screenWidth - 50 * 2, borderRadius: 5, backgroundColor: '#fff' }} >
                        <Text style={{ fontSize: UI.fontSizeNew.font_13, marginTop: 18, marginBottom: 10, color: '#333', fontWeight: 'bold', marginRight: 25 }}>提示</Text>
                        <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: UI.fontSizeNew.font_11, color: '#333', marginRight: 25 }}>{errText}</Text>
                        <View style={{ width: '100%', marginTop: 18, height: 1, backgroundColor: '#f1f2f6' }} />
                        <View
                            style={{ width: '100%', height: 45, flexDirection: 'row', justifyContent: 'center' }}
                        >
                            <TouchableOpacity
                                style={{ flex: 1, height: 45, flexDirection: 'row', justifyContent: 'center' }}
                                onPress={() => {
                                    this.isCom = false;
                                    this.setState({ visible: false });
                                    this.unlockRef.resetLeft()
                                }}
                                activeOpacity={1}
                            >
                                <Text style={{ alignSelf: 'center', fontSize: UI.fontSizeNew.font_13, color: '#333' }}>{this.errNum === 4 ? '我知道了' : '找回密码'}</Text>
                            </TouchableOpacity>
                            {this.errNum === 4 ? null : <View style={{ height: '100%', width: 1, backgroundColor: '#f1f2f6' }} />}
                            {this.errNum === 4 ? null : <TouchableOpacity
                                style={{ flex: 1, height: 45, flexDirection: 'row', justifyContent: 'center' }}
                                onPress={() => {
                                    this.isCom = false;
                                    this.setState({ visible: false })
                                    this.unlockRef.resetLeft()
                                }}
                                activeOpacity={1}
                            >
                                <Text style={{ alignSelf: 'center', fontSize: UI.fontSizeNew.font_13, color: UI.color.blue1, }}>重新输入</Text>
                            </TouchableOpacity>}

                        </View>
                    </View>
                </View>
            </View>
        );
    };
    renderPassword = () => {
        return <View>
            <View style={styles.row}>
                <Text style={{ fontSize: UI.fontSizeNew.font_12, color: '#333', marginRight: 25 }}>账号</Text>
                <TextInput
                    style={[styles.input, { fontSize: UI.fontSizeNew.font_12 }]}
                    placeholder="手机号码/证件号码"
                    onChangeText={this.onUsernameChange}
                />
                <Image style={{ alignSelf: 'center', width: 18, height: 18 }} source={Images.p4_6} />
            </View>
            <View style={styles.line} />
            <View style={styles.row}>
                <Text style={{ fontSize: UI.fontSizeNew.font_12, color: '#333', marginRight: 25 }}>密码</Text>
                <TextInput
                    style={[styles.input, { fontSize: UI.fontSizeNew.font_12 }]}
                    secureTextEntry={true}
                    placeholder="请输入密码"
                    onChangeText={this.onPassChange}
                />
            </View>
            <View style={styles.line} />
        </View>
    }

    render() {
        if (this.data === null) {
            return null
        }
        const { userName, pass } = this.state
        const view_w = UI.size.screenWidth - 30
        const { navigation } = this.props;
        const isLog = userName.length > 0 && pass.length > 0
        return (<View style={styles.container} >
            <TitleView title={'个人所得税'} navigation={navigation} />
            <View style={{ width: UI.size.screenWidth, height: 1, backgroundColor: '#f1f2f6' }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={{ alignSelf: 'center', marginTop: 40, marginBottom: 60, width: 85, height: 85 }} source={Images.p4_avatar_1} />
                {this.renderPassword()}
                <View style={{ marginTop: 15 }}>
                    <UnlockView ref={(e) => { this.unlockRef = e }} onComplete={this.onComplete} />
                </View>
                <View style={{ marginTop: 11, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: UI.fontSizeNew.font_11, color: UI.color.blue1, marginRight: 25 }}>找回密码</Text>
                </View>
                <View style={{ marginTop: 22, marginBottom: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={this.onPressOne}>
                        <View style={{ width: view_w, height: 45, justifyContent: 'center', backgroundColor: !isLog ? '#0c79fa29' : UI.color.blue1, borderRadius: 5 }} >
                            <Text style={{ alignSelf: 'center', fontSize: UI.fontSizeNew.font_13, color: '#fff', marginRight: 25 }}>登陆</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.onPressTwo}>
                        <View style={{ width: view_w, height: 45, justifyContent: 'center', marginTop: 12, backgroundColor: '#fff', borderWidth: 1, borderColor: UI.color.blue1, borderRadius: 5 }} >
                            <Text style={{ alignSelf: 'center', fontSize: UI.fontSizeNew.font_13, color: UI.color.blue1, marginRight: 25 }}>注册</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
            <Modal
                animationType={'fade'}
                visible={this.state.visible}
                transparent
                onDismiss={() => { }}
                style={{}}
            >
                {this.content()}
            </Modal>
        </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: UI.color.white,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    line: { width: UI.size.screenWidth - 15 * 2, marginHorizontal: 15, height: 1, backgroundColor: '#f1f2f6' },
    button: {
        marginTop: 10,
        width: '100%',
    },
    footer: {
        marginTop: 50,
        flexDirection: 'row',
    },
    footetBtn: {
        paddingHorizontal: 20,
    },
    underLine: {
        borderBottomWidth: 1,
        borderColor: UI.color.black,
    },
    text: {
        color: UI.color.black,
    },
});