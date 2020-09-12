import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class TaxScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_service_image_header} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <Image style={styles.image} source={Images.tab_service_image} />
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
    image: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1903) / 810,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 95) / 810,
    },
});
