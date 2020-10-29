import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
export default class SocialAllScreen extends PureComponent {

    onPress = () => {
        // 点击进入社保
        this.props.navigation.navigate('FaceRecognitionScreen')
    }
    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={{ flex: 1, marginTop: 20, backgroundColor: '#fff' }}>
                <View >
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1229 / 1080
                    }} source={Images.icon_36} />
                    <TouchableWithoutFeedback onPress={this.onPress}>
                        <View style={{ position: 'absolute', left: 20, bottom: 0, width: UI.size.screenWidth - 20 * 2, height: 45, backgroundColor: 'red' }} />
                    </TouchableWithoutFeedback>
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
