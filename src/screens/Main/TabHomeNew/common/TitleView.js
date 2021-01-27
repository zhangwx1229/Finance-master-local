import React, { PureComponent } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Images from '../../../../image';
import UI, { getFontSize } from '../../../../UI';
let font_13_5 = UI.fontSizeNew.font_13_5
export default class TitleView extends PureComponent {
    clickSearch = () => {
        if (this.props.navigation) {
            this.props.navigation.pop();
        }
    };
    render() {
        font_13_5 = UI.fontSizeNew.font_13_5
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backBg} onPress={this.clickSearch}>
                    <Image style={styles.backImage} source={Images.icon_back} />
                    <Text style={{
                        color: UI.color.blue1,
                        fontSize: UI.fontSizeNew.font_11_5,
                    }}>返回</Text>
                </TouchableOpacity>
                <Text style={[styles.title, {
                    fontSize: font_13_5,
                }]}>{this.props.title}</Text>
                <Text style={{
                    color: UI.color.blue1,
                    fontSize: UI.fontSizeNew.font_11_5,
                }}>{this.props.rightText}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 168) / 1440,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    viewBg: {
        position: 'absolute',
        left: 10,
        flexDirection: 'row',
    },
    backBg: {
        width: (22 * 62) / 87 + (22 * 117) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    backImage: {
        width: (22 * 62) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
    },
    backTitle: {
        position: 'absolute',
        left: (22 * 62) * UI.size.scale / 87,
        width: (22 * 117) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
        alignSelf: 'center',
    },
    title: {
        position: 'absolute',
        left: (UI.size.screenWidth - 150) / 2,
        width: 150,
        textAlign: 'center',
        color: '#333333',
    },
});
