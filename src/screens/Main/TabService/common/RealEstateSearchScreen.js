import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
import TitleView from './TitleView';
export default class RealEstateSearchScreen extends PureComponent {

    onPress = () => {
        this.props.navigation.navigate('FaceRecognitionScreen')
    }

    onClose = () => {
        this.props.navigation.navigate('SocialAllScreen')
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} onClose={this.onClose} imageComponent={() =>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 143) / 1080,
                }} source={Images.icon_44} />
            } />
        </View >
    };
    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {this.renderTitle()}
                <View >

                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1086 / 1080
                    }} source={Images.icon_36} />
                    <TouchableWithoutFeedback onPress={this.onPress}>
                        <View style={{ position: 'absolute', left: 20, bottom: 0, width: UI.size.screenWidth - 20 * 2, height: 45, backgroundColor: UI.color.tempColor }} />
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
