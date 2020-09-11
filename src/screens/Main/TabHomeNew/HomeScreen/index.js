import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import Images from '../../../../image';
import { name } from '../../../../image/filename_02.json';
import UI from '../../../../UI';
// import MySearchScreen from '../MySearchScreen';
export default class HomeScreen extends PureComponent {
    constructor() {
        super();
        const textList = [];
        for (let i = 0; i < 20; i++) {
            textList.push(i + 8);
        }
        this.state = {
            textList: textList,
        };

        this.widthList = {};
    }

    clickSearch = () => {
        this.props.navigation.navigate('MySearchScreen');
    };

    svaeTextList = () => {
        this.setState({ textList: [] });
        const basciList = {
            '10': { height: 13.600000381469727, width: 40 },
            '11': { height: 15.199999809265137, width: 44.79999923706055 },
            '12': { height: 16.399999618530273, width: 48 },
            '13': { height: 17.600000381469727, width: 52.79999923706055 },
            '14': { height: 18.799999237060547, width: 56 },
            '15': { height: 20.799999237060547, width: 60.79999923706055 },
            '16': { height: 21.600000381469727, width: 64 },
            '17': { height: 23.200000762939453, width: 68.80000305175781 },
            '18': { height: 24.399999618530273, width: 72 },
            '19': { height: 26, width: 76.80000305175781 },
            '20': { height: 26.799999237060547, width: 80 },
            '21': { height: 28.399999618530273, width: 84.80000305175781 },
            '22': { height: 29.600000381469727, width: 88 },
            '23': { height: 31.200000762939453, width: 92.80000305175781 },
            '24': { height: 32.400001525878906, width: 96 },
            '25': { height: 34, width: 100.80000305175781 },
            '26': { height: 34.79999923706055, width: 104 },
            '27': { height: 36.400001525878906, width: 108.80000305175781 },
            '8': { height: 11.199999809265137, width: 32 },
            '9': { height: 12.800000190734863, width: 36.79999923706055 },
        };
        for (const key in this.widthList) {
            this.widthList[key]['scale_W'] = this.widthList[key].width/basciList[key].width
            this.widthList[key]['scale_H'] = this.widthList[key].height/basciList[key].height
        }
        UI.widthList = this.widthList;
        console.debug('=======',UI.size.screenWidth,UI.size.windowScale, UI.widthList);
    };

    render() {
        const { textList } = this.state;
        return (
            <View style={styles.container}>
                {textList.length > 0
                    ? textList.map(item => (
                          <Text
                              onLayout={e => {
                                  const { width, height } = e.nativeEvent.layout;
                                  this.widthList[item] = { width, height };
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
                    <Text style={{ fontSize: 27 * UI.widthList['27']['scale_W'], color: '#909090' }}>
                        {name}
                    </Text>
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
