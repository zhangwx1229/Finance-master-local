import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import { RNCamera } from 'react-native-camera';
export default class FaceRecognitionScreen extends PureComponent {
    state = { hei: 0 }
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.onPress();
        }, 1000 * 3);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }
    onPress = () => {
        // 点击进入社保
        this.props.navigation.navigate('RealEstateDetailScreen')
    }
    render() {
        const { hei } = this.state;
        return (
            <View style={{ flex: 1, marginTop: 20 }}>
                <View style={{
                    position: 'absolute', top: 20, width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1031 / 1080 + hei
                }}>
                    <RNCamera
                        ref={(cam) => {
                            this.camera = cam;
                        }}
                        captureQuality="medium"
                        style={styles.preview}
                        type={'front'}
                        useNativeZoom={true}
                        zoom={0.05}
                        captureAudio={false}
                    />
                </View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 131 / 1080
                }} source={Images.icon_40} />
                <View style={{ flex: 1, opacity: 0.3, maxHeight: UI.size.screenWidth * 131 / 1080 - 10, backgroundColor: '#000' }} onLayout={e => {
                    let { height } = e.nativeEvent.layout;
                    if (hei === 0) {
                        this.setState({ hei: height })
                    }
                }} />
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1031 / 1080,
                    opacity: 0.3,

                }} source={Images.icon_41} />
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 584 / 1080
                }} source={Images.icon_39} />
                <View style={{ flex: 1, backgroundColor: '#006a87' }} />
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
