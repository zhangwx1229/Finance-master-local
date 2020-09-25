import { isNumber } from 'lodash';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, View, Text, DeviceEventEmitter } from 'react-native';
import Images from '../../../../image';
import UI, { setWidthList } from '../../../../UI';
export default class HomeScreen extends PureComponent {


    render() {
        return (
            <View style={styles.container}>
                <Image style={{

                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 738) / 1080,
                }} source={Images.tab_home_image_0} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: UI.size.statusBarHeight, backgroundColor: '#f2f2f4' },

});
