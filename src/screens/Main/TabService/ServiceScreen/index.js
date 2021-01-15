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
        this.weather = { "tem1": "晴", "tem": "不限行" }
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
                let tem = weather.slice(index)
                if (tem.indexOf(' ') == 0) {
                    tem = weather.slice(index + 1)
                }
                this.weather = { tem1: weather.slice(0, index), tem: tem };
            }
        }
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
        // this.props.navigation.navigate('LoginScreen')
    }

    clickGJJ = () => {
        // 点击进入公积金
        this.props.navigation.navigate('AccumulationInfoScreen')
    }

    clickBDC = () => {
        // 点击进入不动产
        this.props.navigation.navigate('RealEstateSearchScreen')
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
        return <View>
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1023 / 1078
                }} source={Images.icon_53_0} />
                <TouchableWithoutFeedback onPress={this.clickAll}>
                    <View style={{ position: 'absolute', right: 20, bottom: 0, width: 70, height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 900 / 1078
            }} source={Images.icon_53} />
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1031 / 1080
                }} source={Images.icon_54_0} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{ position: 'absolute', left: 10, bottom: 0, width: 80, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickBDC}>
                    <View style={{ position: 'absolute', left: UI.size.screenWidth / 2 - 40, bottom: 0, width: 80, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', right: 10, bottom: 0, width: 80, height: 50, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 768 / 1078
            }} source={Images.icon_54} />
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
            backgroundColor: 'rgba(255, 255, 255,' + num + ')',
            flexDirection: 'row'
        }}>
            <View style={{ marginLeft: 20, marginTop: 10, marginRight: 3 }}>
                <Text style={{
                    fontSize: UI.fontSizeNew.font_7, color: num > 0.5 ? "#9d9d9d" : "#fff"
                }} >{this.weather.tem1}</Text>
                <Text style={{
                    fontSize: UI.fontSizeNew.font_7, color: num > 0.5 ? "#9d9d9d" : "#fff"
                }} >{this.weather.tem}</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row', marginRight: 20,
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
