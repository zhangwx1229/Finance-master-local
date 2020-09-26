import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';

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
    renderContent = () => {
        return <View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1530 / 1080
            }} source={Images.tab_work_0} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1303 / 1080
            }} source={Images.tab_work_1} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1305 / 1080
            }} source={Images.tab_work_2} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1303 / 1080
            }} source={Images.tab_work_3} />
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
