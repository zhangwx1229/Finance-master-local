import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
//办事
export default class TaxScreen extends PureComponent {
    componentDidMount() {
        this.props.navigation.addListener('focus', this.onWillBlur);
    }
    onWillBlur = () => {
        StatusBar.setBackgroundColor('#ccc')
    }
    componentWillUnmount() {
        this.props.navigation.removeListener();
    }
    clickSB = () => {
        // 点击进入社保
        this.props.navigation.navigate('SocialSecurityScreen')
    }
    renderContent = () => {
        return <View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 114 / 1080
            }} source={Images.icon_72} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1685 / 1066
            }} source={Images.icon_65} />
            <View style={{ flex: 1 }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 688 / 1080
                }} source={Images.icon_66_0} />
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', right: 40, bottom: 10, width: UI.size.screenWidth / 2 - 50, height: 40, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 903 / 1080
            }} source={Images.icon_66} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1590 / 1080
            }} source={Images.icon_67} />

        </View>
    }

    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_work_header} />
                <JJRefresh foot_H={0}
                    contentView={this.renderContent}
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
        height: (UI.size.screenWidth * 123) / 1080,
    },
});
