import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';

export default class TaxMine extends PureComponent {
    renderHeader = () => {
        return <TouchableWithoutFeedback onPress={() => {
            const {
                navigation
            } = this.props;
            navigation.navigate('MineUserInfo');
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15, backgroundColor: '#1578ff' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        marginLeft: 15,
                        width: 52,
                        height: 52,
                        borderColor: '#ffffff3c',
                        borderRadius: 6,
                        borderWidth: 2,
                        overflow: 'hidden'
                    }}>
                        <Image style={{
                            width: '100%',
                            height: '100%',
                        }} source={Images.headImage} />
                    </View>
                    <View style={{ marginLeft: 15, marginRight: 15, alignSelf: 'center' }}>
                        <Text style={{
                            fontSize: UI.fontSizeNew.font_12, width: 200, alignSelf: 'center', color: "#fff"
                        }} >{filejson.item_tmp_1}</Text>
                        <Text style={{
                            fontSize: UI.fontSizeNew.font_9, width: 200, alignSelf: 'center', opacity: 0.6, color: "#fff"
                        }} >{UI.getNumPhone(filejson.item_tmp_3, 3, 2)}</Text>
                    </View>
                </View>
                <Image style={{
                    width: 12,
                    height: 12,
                    alignSelf: 'center',
                    marginRight: 15
                }} source={Images.alipay_29} />
            </View>
        </TouchableWithoutFeedback>
    }
    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_mine_new_header} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    {this.renderHeader()}

                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1134 / 1080
                    }} source={Images.tab_mine_new_0} />
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: UI.size.screenWidth * 1333 / 1080
                    }} source={Images.tab_mine_new_1} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 144) / 1080,
    },
});
