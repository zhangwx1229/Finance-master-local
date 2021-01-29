import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleViewNew from './TitleViewNew';
export default class RealEstateDetailScreen extends PureComponent {
    constructor() {
        super()
        this.state = { isShowContent: false }
    }
    onPressOne = () => {
        this.props.navigation.navigate('RealEstateSearchDetailScreen')
    }

    onPressTwo = () => {
    }

    onBack = () => {
        this.props.navigation.pop()
        this.props.navigation.pop()
    }
    onClose = () => {
        this.props.navigation.pop()
        this.props.navigation.pop()
        this.props.navigation.pop()
    }

    onLoadEnd = () => {
        this.setState({ isShowContent: true })
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleViewNew
                navigation={this.props.navigation}
                onClose={this.onClose}
                onBack={this.onBack}
                showText={'网上查询'}
                onLoadEnd={this.onLoadEnd} />
        </View >
    };
    render() {
        if (!this.state.isShowContent) {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    {this.renderTitle()}
                </View>
            )
        }
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
