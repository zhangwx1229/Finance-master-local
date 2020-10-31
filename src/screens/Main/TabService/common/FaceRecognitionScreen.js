import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import Camera, { RNCamera } from 'react-native-camera';
export default class FaceRecognitionScreen extends PureComponent {

    onPress = () => {
        // 点击进入社保
        // this.props.navigation.navigate('SocialSecurityScreen')
    }
    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={{ flex: 1, marginTop: 20, backgroundColor: 'blue' }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 131 / 1080
                }} source={Images.icon_40} />
                <View style={{ width: '100%', height: 23, opacity: 0.2, backgroundColor: '#fff' }} />
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1071 / 1080,
                    opacity: 0.2
                }} source={Images.icon_41} />
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 843 / 1080
                }} source={Images.icon_39} />
                <RNCamera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    captureQuality="medium"
                    style={styles.preview}
                    type={'front'}
                >
                    <Text style={styles.button} >[切换摄像头]</Text >
                    <Text style={styles.button} >[拍照]</Text >
                </RNCamera >
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
    preview: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    button: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40,
    }
});
