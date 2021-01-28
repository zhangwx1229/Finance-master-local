import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Text, TextInput, Image, StyleSheet, View, ScrollView } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';
const header_h = 100;
const scroll_h = 180;
//北京通
export default class UserInfoScreen extends PureComponent {
    onBack = () => {
        this.props.navigation.pop()
    };

    render() {
        const wid = UI.size.screenWidth;
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={{
                            marginTop: UI.size.statusBarHeight,
                            width: wid,
                            height: (wid * 129) / 1080,
                        }}
                        source={Images.icon_80_0}
                    />
                    <TouchableWithoutFeedback onPress={this.onBack}>
                        <View
                            style={{
                                position: 'absolute',
                                top: UI.size.statusBarHeight,
                                left: 0,
                                width: 50,
                                height: 40,
                                backgroundColor: UI.color.tempColor,
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView style={styles.container}>
                    <View>
                        <Image
                            style={{
                                width: wid,
                                height: (wid * 662) / 1080,
                            }}
                            source={Images.icon_80}
                        />
                        <View style={{ position: 'absolute', justifyContent: 'flex-end', marginLeft: 30, width: UI.size.screenWidth - 100, height: 100 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text numberOfLines={1} style={{ alignSelf: 'center', marginBottom: 3, marginRight: 10, fontSize: UI.fontSizeNew.font_16, color: "#fff" }} >{filejson.item_tmp_2}</Text>
                                <Image
                                    style={{
                                        alignSelf: 'center',
                                        height: 13,
                                        width: 13 * 162 / 50,
                                    }}
                                    source={Images.icon_85}
                                />
                            </View>
                            <Text numberOfLines={1} style={{ marginVertical: 15, fontSize: UI.fontSizeNew.font_11, color: "#fff" }} >北京通号 {filejson.item_tmp_8}</Text>
                        </View>
                    </View>
                    <Image
                        style={{
                            width: wid,
                            height: (wid * 1018) / 1080,
                        }}
                        source={Images.icon_81}
                    />
                    <View style={{ height: 100 }} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f3f1f5' },
});
