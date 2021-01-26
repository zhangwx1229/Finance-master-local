import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class TaxScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_tax_image_header} />
                <ScrollView
                    style={styles.content}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 699) / 1080,
                    }} source={Images.tab_tax_image_0} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 981) / 1080,
                    }} source={Images.tab_tax_image_1} />
                    <View style={{ height: 70 }} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    contentContainerStyle: {
        backgroundColor: '#f5f6f9'
    },
    image: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1402) / 810,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 95) / 810,
    },
});
