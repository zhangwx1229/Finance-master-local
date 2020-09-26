import React, { PureComponent } from 'react';
import { DeviceEventEmitter, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { sub } from 'react-native-reanimated';
import Images from '../../../image';
import UI, { setWidthList } from '../../../UI';
import JJRefresh from '../TabHomeNew/HomeScreen/JJRefresh';
const header_h = 100
const scroll_h = 180
export default class TaxMessage extends PureComponent {
    constructor() {
        super()
        const textList = [];
        for (let i = 0; i < 80; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            indexY: scroll_h
        };
    }
    componentDidMount() {
        this.props.navigation.addListener('focus', this.onWillBlur);
    }
    onWillBlur = () => {
        const num = (this.state.indexY - scroll_h) / header_h
        if (num < 0.5) {
            StatusBar.setBackgroundColor('transparent')
        } else {
            StatusBar.setBackgroundColor('#ccc')
        }
    }
    componentWillUnmount() {
        this.props.navigation.removeListener();
    }

    onScroll = (y) => {
        if (y >= scroll_h && y <= scroll_h + header_h && Math.abs(this.state.indexY - y) > 5) {
            this.setState({ indexY: y })
            const num = (y - scroll_h) / header_h
            if (num < 0.5) {
                StatusBar.setBackgroundColor('transparent')
            } else {
                StatusBar.setBackgroundColor('#ccc')
            }
        }
        if (y > scroll_h + header_h && this.state.indexY !== scroll_h + header_h) {
            this.setState({ indexY: scroll_h + header_h })
            StatusBar.setBackgroundColor('#ccc')
        }
    }

    renderContent = () => {
        return <View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 581 / 1080
            }} source={Images.tab_tt_00} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1261 / 1080
            }} source={Images.tab_tt_0} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1032 / 1080
            }} source={Images.tab_tt_1} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1474 / 1080
            }} source={Images.tab_tt_2} />
        </View>
    }

    renderHeader = () => {
        const num = (this.state.indexY - scroll_h) / header_h
        return <View style={{
            marginTop: UI.size.statusBarHeight,
            width: UI.size.screenWidth,
            backgroundColor: 'rgba(255, 255, 255,' + num + ')',
            justifyContent: 'center'
        }}>
            <View style={{
                flexDirection: 'row', marginHorizontal: 20,
                marginVertical: 9, height: 28, borderRadius: 14,
                backgroundColor: num < 0.5 ? 'rgba(249, 249, 249, 0.3)' : 'rgba(235, 235, 235, 1.0)'
            }} >
                <Image style={{
                    marginLeft: 7,
                    alignSelf: 'center',
                    width: 12,
                    height: 12, marginRight: 5
                }} source={num > 0.5 ? Images.icon_12 : Images.icon_13} />
                <Text style={{
                    fontSize: UI.fontSizeNew.font_11, alignSelf: 'center', color: num > 0.5 ? "#9d9d9d" : "#fff"
                }} >搜索</Text>
            </View>
        </View >
    }

    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <JJRefresh
                    foot_H={0}
                    header_H={scroll_h}
                    onScroll={this.onScroll}

                    contentView={this.renderContent}
                />
                <View style={{ position: 'absolute' }} >
                    {this.renderHeader()}
                </View>
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
