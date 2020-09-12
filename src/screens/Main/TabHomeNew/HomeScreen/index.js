import { isNumber } from 'lodash';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native';
import Images from '../../../../image';
import { name } from '../../../../image/filename_02.json';
import UI, { getFontSize, setWidthList } from '../../../../UI';
// import MySearchScreen from '../MySearchScreen';
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
                    : null}
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
