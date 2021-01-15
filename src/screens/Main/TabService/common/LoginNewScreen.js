import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Text, TextInput, Image, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
const header_h = 100;
const scroll_h = 180;
//北京通
export default class LoginNewScreen extends PureComponent {
    constructor() {
        super();
        this.state = { phoneNumber: '', timer: 0 };
        this.currentDate = new Date().getTime();
        this.timer = 0;
        this.isSend = false
    }


    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    startTimer = () => {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.isSend = true
        this.currentDate = new Date().getTime();
        const num = 60
        this.setState({ timer: num });
        this.timer = setInterval(() => {
            let now = num - Math.floor((new Date().getTime() - this.currentDate) / 1000);
            if (now < 0) {
                if (this.timer) {
                    clearInterval(this.timer);
                }
                now = 0;;
            }
            if (this.state.timer !== now) {
                this.setState({ timer: now });
            }
        }, 1000);
    };

    clickSend = () => {
        this.startTimer()
    };

    onChangePhoneText = text => {
        if (text.length === 11) {
            this.setState({ phoneNumber: text });
        }
    };

    onChangeNumText = text => {
        if (this.isSend && this.state.phoneNumber.length === 11 && text.length === 4) {
            this.props.navigation.navigate('Home');
        }
    };

    renderInput = () => {
        let msgText = '发送短信'
        if (this.state.timer > 0) {
            msgText = '发送短信(' + this.state.timer + ')'
        }
        return (
            <View style={{ marginTop: 40 }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 25 }}>
                    <Text
                        style={{
                            alignSelf: 'center',
                            fontSize: UI.fontSizeNew.font_12_5,
                            color: '#333',
                        }}
                    >
                        +86
                    </Text>
                    <View style={{ marginLeft: 20 }}>
                        <TextInput
                            style={{
                                fontSize: UI.fontSizeNew.font_12_5,
                                width: UI.size.screenWidth - 150,
                                height: 40,
                            }}
                            placeholder="请输入手机号码"
                            // value={filejson.name + ',' + filejson.item_tmp_sb_0}
                            placeholderTextColor={'#00000059'}
                            onChangeText={this.onChangePhoneText}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginLeft: 25,
                        width: UI.size.screenWidth - 25 * 2,
                        backgroundColor: '#33333322',
                        height: 1,
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 25,
                        marginTop: 10,
                    }}
                >
                    <TextInput
                        style={{
                            fontSize: UI.fontSizeNew.font_12_5,
                            height: 40,
                        }}
                        placeholder="请输入短信验证码"
                        // value={filejson.name + ',' + filejson.item_tmp_sb_0}
                        placeholderTextColor={'#00000059'}
                        onChangeText={this.onChangeNumText}
                    />
                    <TouchableWithoutFeedback disabled={this.state.phoneNumber.length < 11} onPress={this.clickSend}>
                        <View
                            style={{
                                height: 40,
                                justifyContent: 'center',
                                backgroundColor: UI.color.tempColor,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'right',
                                    alignSelf: 'center',
                                    fontSize: UI.fontSizeNew.font_12_5,
                                    color: this.state.phoneNumber.length >= 11 ? '#333' : '#33333322',
                                }}
                            >
                                {msgText}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={{
                        marginLeft: 25,
                        width: UI.size.screenWidth - 25 * 2,
                        backgroundColor: '#33333322',
                        height: 1,
                    }}
                />
            </View>
        );
    };

    render() {
        const wid = UI.size.screenWidth;
        return (
            <View style={styles.container}>
                <Image
                    style={{
                        marginTop: 110,
                        width: wid,
                        height: (wid * 304) / 1080,
                    }}
                    source={Images.icon_50}
                />
                {this.renderInput()}
                <Image
                    style={{
                        marginTop: 10,
                        width: wid,
                        height: (wid * 233) / 1080,
                    }}
                    source={Images.icon_51}
                />
                <Image
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: wid,
                        height: (wid * 401) / 1080,
                    }}
                    source={Images.icon_52}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: UI.size.screenWidth,
        height: UI.size.screenHeight, backgroundColor: '#fff'
    },
});
