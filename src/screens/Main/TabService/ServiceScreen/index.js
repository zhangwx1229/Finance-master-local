import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class TaxScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_mouth_header} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <Image style={styles.image1} source={Images.tab_mouth_image_1} />
                    <Image style={styles.image2} source={Images.tab_mouth_image_2} />
                    <Image style={styles.image3} source={Images.tab_mouth_image_3} />
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
    image1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1416) / 1080,
    },
    image2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1116) / 1080,
    },
    image3: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1146) / 1080,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 141) / 1080,
    },
});
