import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import Images from '../../../../image';
import UI, { getFontSize } from '../../../../UI';
let font_13_5 = UI.fontSizeNew.font_13_5
export default class TitleViewNew extends Component {
    constructor() {
        super()
        this.state = {
            lineWidth: 0,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.startAnimated()
        }, 300);
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
    clickBack = () => {
        if (this.props.onBack) {
            this.props.onBack()
            return
        }
        const {
            navigation
        } = this.props;
        navigation.pop()
    }
    clickClose = () => {
        if (this.props.onClose) {
            this.props.onClose()
            return
        }
        const {
            navigation, type
        } = this.props;
        if (type === 1) {
            navigation.pop()
        } else if (type === 2) {
            navigation.navigate("Home")
        } else {
            navigation.navigate("AccumulationScreenNew")
        }
    }
    startAnimated = () => {
        const sep = 1200 / 10;
        this.timer = setInterval(() => {
            const rom = Math.ceil(Math.random() * 10)
            const { lineWidth } = this.state;
            let lin = lineWidth + rom / 10
            if (rom > 5 || rom < 0) {
                lin = lineWidth + 0.1
            }
            if (lin > 1) {
                lin = 1
                const { onLoadEnd } = this.props
                if (onLoadEnd) {
                    onLoadEnd()
                }
            }
            if (lineWidth === 1) {
                lin = 1.1
                if (this.timer) {
                    clearInterval(this.timer)
                }
            }
            this.setState({ lineWidth: lin })
        }, sep);
    };
    render() {
        const H = (UI.size.screenWidth * 144) / 1080
        const { lineWidth } = this.state;
        let wid = lineWidth * 100 + '%'
        if (lineWidth > 1) {
            wid = '100%'
        }
        const { showText, logingText, loging2Text } = this.props
        let statusText = showText || ''
        if (lineWidth > 0 && lineWidth < 0.5) {
            statusText = logingText || '加载中...'
        } else if (lineWidth > 0.5 && lineWidth < 1) {
            statusText = loging2Text || '加载中...'
        }
        const hei = (UI.size.screenWidth * 145) / 1080
        return (
            <View style={{ justifyContent: 'center' }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: hei,
                }} source={Images.icon_74} />
                <Text numberOfLines={1} style={{
                    position: 'absolute', alignSelf: 'center', left: hei * 2 + 10, right: hei + 10,
                    fontSize: UI.fontSizeNew.font_14, color: "#333"
                }} >{statusText}</Text>
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <View style={{ position: 'absolute', left: 10, width: H - 10 * 2, height: H - 10 * 2, backgroundColor: 'transparent' }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickClose}>
                    <View style={{ position: 'absolute', left: 10 + H - 10 * 2 + 30, width: H - 10 * 2, height: H - 10 * 2, backgroundColor: 'transparent' }} />
                </TouchableWithoutFeedback>
                {lineWidth <= 1 ? <View style={{ width: wid, height: 1, backgroundColor: '#0C79FC' }} /> : null}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 168) / 1440,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    viewBg: {
        position: 'absolute',
        left: 10,
        flexDirection: 'row',
    },
    backBg: {
        width: (22 * 62) / 87 + (22 * 117) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
        alignSelf: 'center',
    },
    backImage: {
        width: (22 * 62) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
    },
    backTitle: {
        position: 'absolute',
        left: (22 * 62) * UI.size.scale / 87,
        width: (22 * 117) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
        alignSelf: 'center',
    },
    title: {
        color: '#333333',
    },
    indicator: {
        backgroundColor: '#ffeb3b',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 2,
    },
});
