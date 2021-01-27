import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Image, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleViewNew from './TitleViewNew';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
const header_h = 100
const scroll_h = 180
//北京通
export default class AccumulationScreen extends PureComponent {
    constructor() {
        super()
        this.state = { isShowContent: false }
    }
    clickGJJ = () => {
        this.props.navigation.navigate('AccumulationInfoScreen', { type: 1 })
    }
    onLoadEnd = () => {
        this.setState({ isShowContent: true })
    }

    renderContent = () => {
        return <View >
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 755 / 1080
                }} source={Images.icon_75} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{
                        position: 'absolute', left: 20, bottom: 30,
                        width: 60, height: 60, backgroundColor: UI.color.tempColor
                    }} />
                </TouchableWithoutFeedback>
            </View>
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 332 / 1080
                }} source={Images.icon_76} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{
                        position: 'absolute', left: 10, bottom: 10,
                        width: 200, height: 40, backgroundColor: UI.color.tempColor
                    }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1265 / 1080
            }} source={Images.icon_77_0} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 785 / 1080
            }} source={Images.icon_77_1} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 985 / 1080
            }} source={Images.icon_78} />
        </View >
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleViewNew navigation={this.props.navigation}
                type={3}
                showText={'公积金'}
                onLoadEnd={this.onLoadEnd} />
        </View >
    };

    render() {
        if (!this.state.isShowContent) {
            return (
                <View style={styles.container}>
                    {this.renderTitle()}
                </View>
            )
        }
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                <JJRefresh
                    foot_H={0}
                    header_H={0}
                    contentView={this.renderContent}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 146) / 1080,
    },
});
