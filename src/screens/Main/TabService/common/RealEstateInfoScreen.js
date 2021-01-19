import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
import TitleViewNew from './TitleViewNew';
export default class RealEstateInfoScreen extends PureComponent {
    constructor() {
        super()
        this.state = { isShowContent: false }
    }
    onPressOne = () => {
        // this.props.navigation.navigate('RealEstateSearchDetailScreen')
    }

    onPressTwo = () => {
    }

    onBack = () => {
        this.props.navigation.pop()
    }

    onLoadEnd = () => {
        this.setState({ isShowContent: true })
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleViewNew navigation={this.props.navigation} onClose={this.onBack} onBack={this.onBack}
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
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 2479 / 3508
                }} source={Images.realEstateImage} />
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
