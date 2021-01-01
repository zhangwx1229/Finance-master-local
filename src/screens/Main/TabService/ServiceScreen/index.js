import React, { PureComponent } from 'react';
import { DeviceEventEmitter, TouchableWithoutFeedback, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Images from '../../../../image';
import UI, { setWidthList } from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
import filejson from '../../../../image/filename.json';
const header_h = 100
const scroll_h = 180
//北京通
export default class TaxServer extends PureComponent {
    constructor() {
        super()
        const textList = [];
        for (let i = 0; i < 80; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            textList: textList, indexY: scroll_h
        };
        this.widthList = {};
        this.barColor = 'transparent'
        this.weather = { "tem1": "晴", "tem": " 14-25" }
        this.getWeather();
    }

    getWeather = () => {
        const date = new Date();
        const year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();
        if (month < 10) {
            month = "0" + month
        }
        if (day < 10) {
            day = "0" + day
        }
        const dateStr = year + "-" + month + '-' + day;
        for (let i = 0; i < filejson.weatherList.length; i++) {
            const { data, weather } = filejson.weatherList[i];
            if (data === dateStr) {
                const index = weather.indexOf(' ');
                this.weather = { tem: weather.slice(0, index), tem1: weather.slice(index) };
            }
        }
        console.debug('===sss===', this.weather)
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.onWillBlur);
    }
    onWillBlur = () => {
        StatusBar.setBackgroundColor(this.barColor)
    }
    componentWillUnmount() {
        this.props.navigation.removeListener();
    }

    getIcon = () => {
        let iconStyle = { width: 12 * 56 / 42, height: 12 }
        let iconName = 'icon_14'
        if (this.weather.tem1 === "多云") {

        } else if (this.weather.tem1 === "晴") {
            iconStyle = { width: 18, height: 18 }
            iconName = 'icon_15'
        } else {

        }
        return { iconStyle, iconName }
    }

    svaeTextList = () => {
        this.setState({ textList: [] });
        // 360 740 3 
        // 432 768 2.5
        setWidthList(this.widthList)
        DeviceEventEmitter.emit('FontChange')
    };

    clickSB = () => {
        // 点击进入社保
        this.props.navigation.navigate('SocialSecurityScreen')
    }

    clickAll = () => {
        // 点击进入全部
        this.props.navigation.navigate('SocialAllScreen')
    }

    clickGJJ = () => {
        // 点击进入公积金
        this.props.navigation.navigate('AccumulationScreenNew')
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
        const { iconStyle, iconName } = this.getIcon();
        return <View>
            <View style={{ marginTop: UI.size.statusBarHeight + 27 + 8 - 1 }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 301 / 1080
                }} source={Images.tab_bjt_0} />
                <View style={{ position: 'absolute', left: 10, height: UI.size.screenWidth * 301 / 1080, justifyContent: 'center' }}>
                    <Text numberOfLines={1} style={{ fontSize: UI.fontSizeNew.font_23, color: '#5c5c5c' }} >
                        {this.weather.tem}{'° '}
                        <Image style={iconStyle} source={Images[iconName]} />
                        <Text numberOfLines={1} style={{
                            fontSize: UI.fontSizeNew.font_11, color: '#5c5c5c'
                        }} >
                            {' '}{this.weather.tem1}
                        </Text>
                    </Text>
                    <Text numberOfLines={1} style={{
                        fontSize: UI.fontSizeNew.font_11,
                        position: 'absolute',
                        bottom: 6, color: '#5c5c5c'
                    }} >
                        {'  不限行'}
                    </Text>
                </View>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 492 / 1080
            }} source={Images.tab_bjt_11} />
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 638 / 1080
                }} source={Images.tab_bjt_1} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{ position: 'absolute', left: 10, top: 10, width: 80, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', left: UI.size.screenWidth / 2 + 10, top: 10, width: 80, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1041 / 1080
                }} source={Images.tab_bjt_2} />
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', left: UI.size.screenWidth / 2 - 60 - 10, top: UI.size.screenWidth * 1041 / (1080 * 2) + 10, width: 60, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickAll}>
                    <View style={{ position: 'absolute', right: 20, top: UI.size.screenWidth * 1041 / (1080 * 2) + 10 * 3 + 60, width: 60, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1280 / 1080
            }} source={Images.tab_bjt_3} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1035 / 1080
            }} source={Images.tab_bjt_4} />
        </View >
    }

    renderHeader = () => {
        const num = (this.state.indexY - scroll_h) / header_h
        if (num === 0) {
            this.barColor = 'transparent'
        } else {
            this.barColor = 'rgba(204, 204, 204,' + num + ')'
        }
        StatusBar.setBackgroundColor(this.barColor)
        return <View style={{
            marginTop: UI.size.statusBarHeight,
            width: UI.size.screenWidth,
            backgroundColor: 'rgba(249, 249, 249,' + num + ')',
            justifyContent: 'center'
        }}>
            <View style={{
                flexDirection: 'row', marginHorizontal: 15,
                marginVertical: 8, height: 27, borderRadius: 14.5,
                borderColor: num > 0.5 ? 'rgba(235, 235, 235, 1.0)' : '#8f8f8f',
                borderWidth: 0.5,
                backgroundColor: num < 0.5 ? 'rgba(249, 249, 249, 0.3)' : 'rgba(235, 235, 235, 1.0)'
            }} >
                <Text style={{
                    fontSize: UI.fontSizeNew.font_9, alignSelf: 'center', color: "#5c5c5c"
                }} >   北京</Text>
                <View style={{ alignSelf: 'center', marginHorizontal: 10, width: 1, height: 15, backgroundColor: '#5c5c5c' }} />
                <Image style={{
                    alignSelf: 'center',
                    width: 14,
                    height: 14, marginRight: 1
                }} source={Images.icon_11} />
                <Text style={{
                    fontSize: UI.fontSizeNew.font_11, alignSelf: 'center', color: '#8f8f8f'
                }} >查找服务</Text>
            </View>
        </View >
    }

    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                {this.renderText()}
                <JJRefresh foot_H={0}
                    header_H={scroll_h}
                    onScroll={this.onScroll}
                    backgroundColor={"#fff"}
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
