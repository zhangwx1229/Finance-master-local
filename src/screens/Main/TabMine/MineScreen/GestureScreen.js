import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class GestureScreen extends PureComponent {
    render() {
        const image_h = UI.size.screenWidth-50*2
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_mine_header} />
                <View style={{alignSelf:'center'}}>
                    <View style={{width:image_h *0.25,height:image_h *0.25,alignSelf:'center',backgroundColor:'red',marginTop:40}}/>
                <Image style={{width:image_h ,
        height: image_h ,alignSelf:'center',marginTop:20,}} source={Images.tab_mine_image_1} />
                <Image style={{width: image_h *0.4,
        height: (image_h *0.4 * 48) / 276,alignSelf:'center',marginTop:40}} source={Images.tab_mine_image_2} />
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1,backgroundColor:'#fff' },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 142) / 1080,
    },
});