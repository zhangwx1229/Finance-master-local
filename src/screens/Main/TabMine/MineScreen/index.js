import React, { PureComponent } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';
import filejson from '../../../../image/filename.json';
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
        return <View style={{ paddingTop: 65, backgroundColor: 'transparent' }}>
            <View>
                <Image style={{
                    alignSelf: 'center',
                    width: UI.size.screenWidth - sub * 2,
                    height: (UI.size.screenWidth - sub * 2) * 711 / 1020,
                    borderRadius: 5
                }} source={Images.tab_mine_2} />
                <View style={{
                    position: 'absolute', left: sub + 15, top: 17
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Image style={{
                            width: UI.size.screenWidth * 70 / 360,
                            height: UI.size.screenWidth * 70 / 360,
                            borderRadius: UI.size.screenWidth * 70 / (360 * 2),
                        }} source={Images.headImage} />
                        <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                            <Text numberOfLines={1} style={{ maxWidth: 150, marginBottom: 7, fontSize: UI.fontSizeNew.font_15, color: '#333333' }} >{filejson.item_tmp_3}</Text>
                            <Text numberOfLines={1} style={{ maxWidth: 150, fontSize: UI.fontSizeNew.font_11, color: '#9D9D9D' }} >{filejson.item_tmp_4}</Text>
                        </View >
                    </View>
                    <Text numberOfLines={1} style={{ maxWidth: 150, marginTop: 16, fontSize: UI.fontSizeNew.font_11, color: '#9D9D9D' }} >{filejson.item_tmp_5}</Text>
                    <Text numberOfLines={1} style={{ maxWidth: 150, marginTop: 4, fontSize: UI.fontSizeNew.font_11, color: '#9D9D9D' }} >名片号: {filejson.item_tmp_6}</Text>
                </View>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 386 / 1080
            }} source={Images.tab_mine_header} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 782 / 1080
            }} source={Images.tab_mine_0} />

        </View >
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
                    height: (UI.size.screenWidth * (1 + num)) * 1080 / 1440
                }} source={Images.headImage} />
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
