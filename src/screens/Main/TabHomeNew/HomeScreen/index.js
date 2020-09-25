import { isNumber } from 'lodash';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
import Images from '../../../../image';
import UI, { getFontSize, setWidthList } from '../../../../UI';
import filejson from '../../../../image/filename.json';
// import MySearchScreen from '../MySearchScreen';
export default class HomeScreen extends PureComponent {
    constructor() {
        super();
        const textList = [];
        for (let i = 0; i < 80; i++) {
            textList.push(i / 2 + 6);
        }
        this.state = {
            textList: textList,
        };
        this.widthList = {};
        this.weather = '晴 27℃'
        this.getWeather();
    }

    getWeather=()=>{
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
                this.weather = weather;
            }
        }
    }

    clickSearch = () => {
        this.props.navigation.navigate('CivicCentreScreen');
    };

    svaeTextList = () => {
        this.setState({ textList: [] });
        // 360 740 3 
        // 432 768 2.5
        setWidthList(this.widthList)
        DeviceEventEmitter.emit('FontChange')
    };

    render() {
        const { textList } = this.state;
        return (
            <View style={styles.container}>
                {textList.length > 0
                    ? textList.map(item => (
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
                    : null}
                <View>
                    <Image style={styles.header} source={Images.tab_home_header} />
                    <Text style={{ position: 'absolute', opacity: 0.6, bottom: 8, left: 12, color: '#fff', fontSize: UI.fontSizeNew.font_7_5 }}>
                        {this.weather}
                    </Text>
                </View>
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <View>
                        <Image style={styles.image_0} source={Images.tab_home_image_0} />
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Image style={styles.image_1} source={Images.tab_home_image_1} />
                    <Image style={styles.image_2} source={Images.tab_home_image_2} />
                    <Image style={styles.image_3} source={Images.tab_home_image_3} />
                    <Image style={styles.image_4} source={Images.tab_home_image_4} />
                </ScrollView>
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
        height: (UI.size.screenWidth * 648) / 1080,
    },
    image_1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1145) / 1080,
    },
    image_2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 695) / 1080,
    },
    image_3: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1044) / 1080,
    },
    image_4: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1080) / 1080,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 149) / 1080,
    },
    click: {
        position: 'absolute',
        top: ((UI.size.screenWidth * 648) / 1080 - 60) / 2,
        width: 60,
        height: 60,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
});
