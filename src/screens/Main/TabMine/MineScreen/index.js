import React, { PureComponent } from 'react';
import { DeviceEventEmitter, Image, StyleSheet, Text, View } from 'react-native';
import { sub } from 'react-native-reanimated';
import Images from '../../../../image';
import UI, { setWidthList } from '../../../../UI';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';
const header_h = 40
export default class MineScreen extends PureComponent {
    constructor() {
        super()
        const textList = [];
        for (let i = 0; i < 80; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            indexY: 40
        };
    }

    onScroll = (y) => {
        // if (y < 40) {
        this.setState({ indexY: y })
        console.debug('===onScroll====', y)
        // }
    }

    renderContent = () => {
        const num = (40 - this.state.indexY) / (header_h * 20)
        console.debug('===onScroll==ss==', UI.size.screenWidth * (1 + num))
        return <View>
            <View>
                <Image style={{
                    alignSelf: 'center', marginTop: 0,
                    width: UI.size.screenWidth * (1 + num),
                    height: (UI.size.screenWidth * (1 + num)) * 856 / 1080
                }} source={Images.header_bg} />
                <Image style={{
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'center',
                    width: UI.size.screenWidth - 15 * 2,
                    height: (UI.size.screenWidth - 15 * 2) * 711 / 1020
                }} source={Images.tab_mine_2} />

            </View>
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
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <JJRefresh
                    header_H={40}
                    foot_H={0}
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
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 146) / 1080,
    },
});
