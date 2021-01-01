import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from './TitleView';
export default class RealEstateDetailScreen extends PureComponent {

    onPressOne = () => {
        this.props.navigation.navigate('RealEstateSearchDetailScreen')
    }

    onPressTwo = () => {
    }

    onBack = () => {
        this.props.navigation.navigate('RealEstateSearchScreen')
    }
    onClose = () => {
        this.props.navigation.navigate('SocialAllScreen')
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} onBack={this.onBack} onClose={this.onClose} imageComponent={() =>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 145) / 1080,
                }} source={Images.icon_42} />
            } />
        </View >
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {this.renderTitle()}
                <View >
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1842 / 1080
                    }} source={Images.icon_43} />
                    <TouchableWithoutFeedback onPress={this.onPressOne}>
                        <View style={{ position: 'absolute', left: 20, top: 15, width: UI.size.screenWidth - 20 * 2, height: 45, backgroundColor: UI.color.tempColor }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.onPressTwo}>
                        <View style={{ position: 'absolute', left: 20, top: 75, width: UI.size.screenWidth - 20 * 2, height: 45, backgroundColor: UI.color.tempColor }} />
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
