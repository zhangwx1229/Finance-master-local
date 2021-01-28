import { isNumber } from 'lodash';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, AsyncStorage, View, Text, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
import Images from '../../../../image';
import filename from '../../../../image/filename.json';
import UI, { getFontSize, setWidthList } from '../../../../UI';
import { GlobalData } from '../../../GlobalData';
// import MySearchScreen from '../MySearchScreen';
let font_12_5 = UI.fontSizeNew.font_12_5
export default class HomeScreen extends PureComponent {
    constructor() {
        super();
        const textList = [];
        for (let i = 0; i < 50; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            textList: textList,
            opacity: 0
        };
        this.widthList = {};
        this.sds = {}
        AsyncStorage.getItem('FanUserLoginTag').then((result) => {
            if (result) {
                GlobalData.isLogin = result == 1
            } else {
                GlobalData.isLogin = filename.item_17 == 1
            }
        })
        GlobalData.isLogin = filename.item_17 == 1
    }

    clickSearch = () => {
        this.props.navigation.navigate('MySearchScreen');
    };

    clickSearchServer = () => {
        this.props.navigation.navigate('Learn');
    };

    clickSearchDetail = () => {
        if (!GlobalData.isLogin) {
            this.props.navigation.navigate('MineLogInScreen');
        } else {
            this.props.navigation.navigate('SearchView');
        }
    }

    clickPublick = () => {
        this.props.navigation.navigate('PublicServerScreen');
    }

    onScroll = (e) => {
        const { contentOffset } = e.nativeEvent;
        let opt = contentOffset.y / 150
        if (opt > 1) {
            opt = 1
        }
        if (this.state.opacity !== opt) {
            this.setState({ opacity: opt })
        }
    }

    svaeTextList = () => {
        this.setState({ textList: [] });
        // 360 740 3 
        // 432 768 2.5
        setWidthList(this.widthList)
        DeviceEventEmitter.emit('FontChange')
    };

    renderText = () => {
        const { textList } = this.state;
        return (<View>
            {
                textList.length > 0
                    ? textList.map(item => (
                        <Text
                            key={item + ''}
                            onLayout={e => {
                                const { width, height } = e.nativeEvent.layout;
                                const key = Math.ceil(width);
                                this.widthList[item] = key;
                                if (Math.floor(item) !== item) {
                                    this.sds['font_' + Math.floor(item) + '_5'] = 'getFontSize(' + item + ')'

                                } else {
                                    this.sds['font_' + item] = 'getFontSize(' + item + ')'

                                }
                                if (Object.keys(this.widthList).length === textList.length) {
                                    this.svaeTextList();
                                }
                            }}
                            style={{ position: 'absolute', fontSize: item, color: '#fff' }}
                        >
                            都是借口
                        </Text>
                    ))
                    : null
            }</View>)
    }
    renderHeader = () => {
        return <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 49, backgroundColor: 'rgba(12,121,250,' + this.state.opacity + ')' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, alignSelf: 'center' }}>
                <Image style={{ width: 26, height: 26 }} source={Images.p1_1} />
                <Text style={{
                    alignSelf: 'center',
                    marginLeft: 3,
                    color: '#fff',
                    fontSize: font_12_5,
                }}>个人所得税</Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 10, alignSelf: 'center' }}>
                <Image style={{ width: 26, height: 26, marginRight: 5 }} source={Images.p1_2} />
                <Image style={{ width: 26, height: 26, marginRight: 5 }} source={Images.p1_3} />
                <Image style={{ width: 26, height: 26 }} source={Images.p1_4} />
            </View>
        </View>
    }

    render() {
        font_12_5 = UI.fontSizeNew.font_12_5
        return (
            <View style={styles.container}>
                {this.renderText()}
                <ScrollView
                    style={styles.content}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                    onScroll={this.onScroll}
                >
                    <View>
                        <Image style={styles.image_0} source={Images.tab_home_image_0_0} />
                        <TouchableWithoutFeedback onPress={this.clickSearchServer}>
                            <View style={{
                                position: 'absolute',
                                top: (450 * UI.size.screenWidth) / 810 + 30,
                                left: 30,
                                width: 70,
                                height: 70,
                                backgroundColor: UI.color.tempcolor//'transparent',
                            }} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.clickPublick}>
                            <View style={{
                                position: 'absolute',
                                top: (450 * UI.size.screenWidth) / 810 + 30,
                                right: 30,
                                width: 70,
                                height: 70,
                                backgroundColor: UI.color.tempcolor//'transparent',
                            }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 1239) / 1080,
                    }} source={Images.tab_home_image_1_0} />
                    <View>
                        <Image style={styles.image_1} source={Images.tab_home_image_1} />
                        <TouchableWithoutFeedback onPress={this.clickSearchDetail}>
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                width: UI.size.screenWidth - 10 * 2,
                                height: 70,
                                alignSelf: 'center',
                                backgroundColor: UI.color.tempcolor//'transparent',
                            }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Image style={styles.image_2} source={Images.tab_home_image_2} />
                </ScrollView>
                {this.renderHeader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image_0: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1243) / 1242,
    },
    image_1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 957) / 1080,
    },
    image_2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1298) / 1440,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 110) / 810,
    },
    click: {
        position: 'absolute',
        top: (450 * UI.size.screenWidth) / 810 + 30,
        width: 70,
        height: 70,
        alignSelf: 'center',
        backgroundColor: UI.color.tempcolor//'transparent',
    },
});
