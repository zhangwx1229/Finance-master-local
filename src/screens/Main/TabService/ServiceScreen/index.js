import React, { PureComponent } from 'react';
import { DeviceEventEmitter, Image, StyleSheet, Text, View } from 'react-native';
import { sub } from 'react-native-reanimated';
import Images from '../../../../image';
import UI, { setWidthList } from '../../../../UI';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';

export default class TaxServer extends PureComponent {
    constructor() {
        super()
        const textList = [];
        for (let i = 0; i < 80; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            textList: textList, indexY: 180
        };
        this.widthList = {};

    }

    svaeTextList = () => {
        this.setState({ textList: [] });
        // 360 740 3 
        // 432 768 2.5
        setWidthList(this.widthList)
        DeviceEventEmitter.emit('FontChange')
    };

    onScroll = (y) => {
        if (y >= 180 && y <= 180 + 46 && Math.abs(this.state.indexY - y) > 5) {
            this.setState({ indexY: y })
            console.debug('===onScroll====', y)
        }
        if (y > 180 + 46 && this.state.indexY !== 180 + 46) {
            this.setState({ indexY: 180 + 46 })
        }
    }
    renderText = () => {
        const { textList } = this.state;
        if (textList.length > 0) {
            return textList.map(item => (
                <Text
                    key={item + ''}
                    onLayout={e => {
                        const { width, height } = e.nativeEvent.layout;
                        const key = Math.ceil(width);
                        this.widthList[item] = key;
                        if (Object.keys(this.widthList).length === textList.length) {
                            this.svaeTextList();
                        }
                    }}
                    style={{ position: 'absolute', fontSize: item, color: '#fff' }}
                >
                    都是借口
                </Text>
            ))
        }
        return null
    }

    renderContent = () => {
        return <View>
            <Image style={{
                marginTop: 46,
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1400 / 1080
            }} source={Images.tab_bjt_00} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1041 / 1080
            }} source={Images.tab_bjt_0} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1280 / 1080
            }} source={Images.tab_bjt_1} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1035 / 1080
            }} source={Images.tab_bjt_2} />
        </View>
    }

    renderHeader = () => {
        const num = (this.state.indexY - 180) / 46
        return <View style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 146) / 1080,
            backgroundColor: 'rgba(255, 255, 255,' + num + ')',
            justifyContent: 'center'

        }}>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 9, height: 28, borderRadius: 14, borderColor: '#9d9d9d5f', borderWidth: 0.5, backgroundColor: 'rgba(235, 235, 235,' + num + ')' }} >
                <Text style={{
                    fontSize: UI.fontSizeNew.font_9, alignSelf: 'center', color: this.state.indexY === 0 ? '#333333' : "#333333"
                }} >   北京</Text>
                <View style={{ alignSelf: 'center', marginHorizontal: 10, width: 1, height: 15, backgroundColor: '#333333' }} />
                <Image style={{
                    alignSelf: 'center',
                    width: 12,
                    height: 12, marginRight: 2
                }} source={Images.icon_11} />
                <Text style={{
                    fontSize: UI.fontSizeNew.font_11, alignSelf: 'center', color: this.state.indexY === 0 ? '#9d9d9d' : "#333333"
                }} >查找服务</Text>
            </View>
        </View >
    }

    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                {this.renderText()}
                {/* <Image style={styles.header} source={Images.tab_bjt_header} /> */}

                <JJRefresh foot_H={0}
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
