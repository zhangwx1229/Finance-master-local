import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class TaxScreen extends PureComponent {
    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_licai_header} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1078 / 1080
                    }} source={Images.tab_licai_image_0} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1455 / 1080
                    }} source={Images.tab_licai_image_1} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 720 / 1080
                    }} source={Images.tab_licai_image_2} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 983 / 1080
                    }} source={Images.tab_licai_image_3} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1451 / 1080
                    }} source={Images.tab_licai_image_4} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1530 / 1080
                    }} source={Images.tab_licai_image_5} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1176 / 1080
                    }} source={Images.tab_licai_image_6} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 144) / 1080,
    },
});
