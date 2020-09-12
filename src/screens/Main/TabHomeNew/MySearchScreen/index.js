import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../common/TitleView';
let font_12_5 = UI.fontSizeNew.font_12_5
let font_10 = UI.fontSizeNew.font_10
export default class MySearchScreen extends PureComponent {
    clickSearch = () => {
        this.props.navigation.navigate('SearchView');
    };
    renderItem = () => {
        return (
            <TouchableOpacity style={styles.click} onPress={this.clickSearch}>
                <View>
                    <View style={styles.contentBg}>
                        <Text style={[styles.contentText, {
                            fontSize: font_12_5,
                        }]}>收入纳税明细查询</Text>
                        <Image style={styles.contentImage} source={Images.p4_9} />
                    </View>
                    <Text style={[styles.subText, { fontSize: font_10 }]}>已申报收入的查询及异议申述</Text>
                </View>
            </TouchableOpacity>
        );
    };
    renderItemNew = () => {
        return (
            <TouchableOpacity style={styles.clickNew} onPress={this.clickSearch}>
                <Image style={styles.contentImageBG} source={Images.tab_home_search_image_4} />
            </TouchableOpacity>
        );
    };
    render() {
        const { navigation } = this.props;
        font_12_5 = UI.fontSizeNew.font_12_5
        font_10 = UI.fontSizeNew.font_10
        console.debug('========', font_12_5, font_10)
        return (
            <View style={styles.container}>
                <TitleView title={'我要查询'} navigation={navigation} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        style={styles.image_0}
                        source={Images.tab_home_search_image_0}
                    />
                    {this.renderItemNew()}
                    <Image
                        style={styles.image_1}
                        source={Images.tab_home_search_image_1}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image_0: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 571) / 1080,
    },
    image_1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 2010) / 1440,
    },
    click: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 200) / 1080,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    clickNew: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 265) / 1440,
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    contentBg: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    contentText: {
        marginLeft: 18,
        color: '#333333',
    },
    contentImage: {
        width: 23 * UI.size.scale,
        height: 23 * UI.size.scale,
        marginRight: 10,
        // color: 'blue',
    },
    subText: {
        marginLeft: 18,
        marginTop: 2.5,
        color: '#a0a0a0',
    },
    contentImageBG: {
        width: "100%",
        height: "100%",
    }
});
