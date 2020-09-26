import React, { PureComponent } from 'react';
import { DeviceEventEmitter, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { sub } from 'react-native-reanimated';
import Images from '../../../../image';
import UI, { setWidthList } from '../../../../UI';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';
const header_h = 70
export default class MineScreen extends PureComponent {
    constructor() {
        super()
        const textList = [];
        for (let i = 0; i < 80; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            indexY: header_h
        };
    }
    componentDidMount() {
        this.props.navigation.addListener('focus', this.onWillBlur);
    }
    onWillBlur = () => {
        StatusBar.setBackgroundColor('transparent')
    }
    componentWillUnmount() {
        this.props.navigation.removeListener();
    }

    onScroll = (y) => {
        if (y < header_h) {
            this.setState({ indexY: y })
        } else {
            this.setState({ indexY: header_h })
        }
    }

    renderContent = () => {
        const sub = 10
        return <View style={{ paddingTop: 70, backgroundColor: 'transparent' }}>
            <Image style={{
                alignSelf: 'center',
                width: UI.size.screenWidth - sub * 2,
                height: (UI.size.screenWidth - sub * 2) * 711 / 1020,
                borderRadius: 5
            }} source={Images.tab_mine_2} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 386 / 1080
            }} source={Images.tab_mine_header} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 782 / 1080
            }} source={Images.tab_mine_0} />

        </View>
    }

    render() {
        const image_h = UI.size.screenWidth - 50 * 2;
        const num = (header_h - this.state.indexY) / (header_h * 20)
        return (
            <View style={styles.container}>
                <Image style={{
                    position: 'absolute',
                    top: 0,
                    alignSelf: 'center',
                    width: UI.size.screenWidth * (1 + num),
                    height: (UI.size.screenWidth * (1 + num)) * 611 / 1080
                }} source={Images.header_bg} />
                <JJRefresh
                    header_H={header_h}
                    foot_H={0}
                    backgroundColor={'transparent'}//
                    onScroll={this.onScroll}
                    indexY={this.state.indexY}
                    contentView={this.renderContent}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', },

    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 146) / 1080,
    },
});
