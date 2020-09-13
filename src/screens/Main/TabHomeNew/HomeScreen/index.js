import { isNumber } from 'lodash';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
import Images from '../../../../image';
import { name } from '../../../../image/filename_02.json';
import UI, { getFontSize, setWidthList } from '../../../../UI';
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
        };
        this.widthList = {};
        this.sds = {}
    }

    clickSearch = () => {
        this.props.navigation.navigate('MySearchScreen');
    };

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
        return <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 49, backgroundColor: 'red' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, alignSelf: 'center', backgroundColor: 'blue' }}>
                <Image style={{ width: 26, height: 26 }} source={Images.p1_1} />
                <Text style={{
                    alignSelf: 'center',
                    marginLeft: 3,
                    color: '#fff',
                    fontSize: font_12_5,
                }}>个人所得税</Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 10, alignSelf: 'center', backgroundColor: 'blue' }}>
                <Image style={{ width: 26, height: 26, marginRight: 5 }} source={Images.p1_2} />
                <Image style={{ width: 26, height: 26, marginRight: 5 }} source={Images.p1_3} />
                <View>
                    <Image style={{ width: 26, height: 26 }} source={Images.p1_4} />
                    <View style={{ position: 'absolute', right: 0, width: 10, height: 10, backgroundColor: 'red', borderRadius: 5 }}>
                        <Text style={{
                            alignSelf: 'center',
                            marginLeft: 3,
                            color: '#fff',
                            fontSize: font_12_5,
                        }}>4</Text>
                    </View>

                </View>
            </View>
        </View>
    }

    render() {
        font_12_5 = UI.fontSizeNew.font_12_5
        return (
            <View style={styles.container}>
                {this.renderText()}
                {this.renderHeader()}
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
        height: (UI.size.screenWidth * 1996) / 1440,
    },
    image_1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 2211) / 1440,
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
        top: (450 * UI.size.screenWidth) / 810,
        width: 70,
        height: 70,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
});
