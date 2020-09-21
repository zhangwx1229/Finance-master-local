import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../image';
import UI from '../../../UI';

export default class MessageScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_msg_header} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <Image style={styles.image1} source={Images.tab_msg_image_1} />
                    <Image style={styles.image2} source={Images.tab_msg_image_2} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 807) / 1080,
    },
    image2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1658) / 1080,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 145) / 1080,
    },
});
