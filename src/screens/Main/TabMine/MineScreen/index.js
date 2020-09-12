import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filename from '../../../../image/filename_02.json';
const Head_W = UI.size.screenWidth
const Head_H = (UI.size.screenWidth * 349) / 1080
const Head_Avatar_W = Head_H * 0.5

let font_12_5 = UI.fontSizeNew.font_12_5
export default class TaxScreen extends PureComponent {
    constructor() {
        super()
        this.phone = ""
        const phoneStr = filename.phone + ''
        if (phoneStr.length === 11) {
            this.phone = phoneStr.slice(0, 3) + '****' + phoneStr.slice(-4);
    }
    render() {
        font_12_5 = UI.fontSizeNew.font_12_5
        return (
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
            >
                <View style={{
                    width: Head_W,
                    height: Head_H, flexDirection: 'row'
                }}>
                    <Image style={styles.header} source={Images.tab_mine_p4_bg} />
                    <Image style={{ marginLeft: 20, marginTop: Head_H - 20 - Head_Avatar_W, width: Head_Avatar_W, height: Head_Avatar_W }}
                        source={filename.sex === '男' ? Images.tab_mine_p4_avatar_3 : Images.tab_mine_p4_avatar_2} />
                    <View style={{ justifyContent: 'center', marginLeft: 10, marginTop: Head_H - 20 - Head_Avatar_W, height: Head_Avatar_W }}>
                        <Text style={{
                            fontSize: font_12_5,
                            color: '#fff',
                            marginBottom: 5
                        }}>{filename.name}</Text>
                        {this.phone.length > 0 ? <Text style={{
                            fontSize: font_12_5,
                            color: '#fff',
                        }}>{this.phone}</Text> : null}
                    </View>
                </View>
                <Image style={styles.image} source={Images.tab_mine_image} />
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1485) / 1080,
    },
    header: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
});
