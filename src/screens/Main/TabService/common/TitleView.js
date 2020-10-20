import React, { PureComponent } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import Images from '../../../../image';
import UI, { getFontSize } from '../../../../UI';
let font_13_5 = UI.fontSizeNew.font_13_5
export default class TitleView extends PureComponent {
    clickBack = () => {
        const {
            navigation
        } = this.props;
        navigation.pop()
    }
    clickClose = () => {
        const {
            navigation, type
        } = this.props;
        if (type === 1) {
            navigation.pop()
        } else {
            navigation.navigate("AccumulationScreenNew")
        }
    }
    render() {
        // transparent
        const H = (UI.size.screenWidth * 144) / 1080
        return (
            <View style={{ justifyContent: 'center' }}>
                {this.props.imageComponent()}
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <View style={{ position: 'absolute', left: 10, width: H - 10 * 2, height: H - 10 * 2, backgroundColor: 'transparent' }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickClose}>
                    <View style={{ position: 'absolute', left: 10 + H - 10 * 2 + 30, width: H - 10 * 2, height: H - 10 * 2, backgroundColor: 'transparent' }} />
                </TouchableWithoutFeedback>
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
});
