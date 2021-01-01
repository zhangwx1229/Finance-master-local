import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
//办事
export default class SocialAllScreen extends PureComponent {

    clickBack = () => {
        // 点击进入社保
        this.props.navigation.pop()
    }

    clickSB = () => {
        // 点击进入社保
        this.props.navigation.navigate('SocialSecurityScreen')
    }
    clickGJJ = () => {
        // 点击进入社保
        this.props.navigation.navigate('AccumulationInfoScreen')
    }
    clickBDC = () => {
        // 点击进入社保
        this.props.navigation.navigate('RealEstateSearchScreen')
    }

    onScroll = (y) => {
        console.debug('======onScroll===', y, UI.size.screenWidth * 641 / 1080)
        if (y > UI.size.screenWidth * 641 / 1080) {

        }
    }
    renderContent = () => {
        return <View>
            <View style={{ flex: 1 }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 641 / 1080
                }} source={Images.icon_31} />
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', left: 20, bottom: 30, width: 70, height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{ position: 'absolute', left: 20 + 70 + 10, bottom: 30, width: 70, height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1276 / 1080
            }} source={Images.icon_32} />
            <View style={{ flex: 1 }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1665 / 1080
                }} source={Images.icon_33} />
                <TouchableWithoutFeedback onPress={this.clickBDC}>
                    <View style={{ position: 'absolute', right: 20, top: 130, width: UI.size.screenWidth / 2 - 50, height: 60, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{ position: 'absolute', right: 20, top: 40, width: UI.size.screenWidth / 2 - 50, height: 60, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', left: 20, top: 130, width: UI.size.screenWidth / 2 - 50, height: 60, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1219 / 1080
            }} source={Images.icon_34} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1804 / 1080
            }} source={Images.icon_35} />
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Image style={styles.header} source={Images.icon_30} />
                    <TouchableWithoutFeedback onPress={this.clickBack}>
                        <View style={{ position: 'absolute', left: 0, width: 30, height: 30, backgroundColor: UI.color.tempColor }} />
                    </TouchableWithoutFeedback>
                </View>
                <JJRefresh
                    foot_H={0}
                    header_H={0}
                    contentView={this.renderContent}
                    onScroll={this.onScroll}
                />
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
