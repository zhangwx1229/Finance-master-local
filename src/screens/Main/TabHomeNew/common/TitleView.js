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
                <View style={styles.viewBg}>
                    <Image style={styles.backTitle} source={Images.icon_back_title} />
                    <TouchableOpacity style={styles.backBg} onPress={this.clickSearch}>
                        <Image style={styles.backImage} source={Images.icon_back} />
                    </TouchableOpacity>

                </View>
                <Text style={[styles.title, {
                    fontSize: font_13_5,
                }]}>{this.props.title}</Text>
                {this.props.rightView ? this.props.rightView() : null}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 168) / 1440,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    viewBg: {
        position: 'absolute',
        left: 10,
        flexDirection: 'row',
    },
    backBg: {
        width: (22 * 62) / 87 + (22 * 117) * UI.size.scale / 87,
        height: 22 * UI.size.scale,
        alignSelf: 'center',
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
        color: '#333333',
    },
});
