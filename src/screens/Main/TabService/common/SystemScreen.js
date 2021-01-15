import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Text, TextInput, Image, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
const header_h = 100;
const scroll_h = 180;
//北京通
export default class SystemScreen extends PureComponent {
    onBack = () => {
        this.props.navigation.pop();
    };

    onOut = () => {
        this.props.navigation.navigate('LoginNewScreen');
    };

    onUser = () => {
        this.props.navigation.navigate('UserInfoScreen');
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
                            height: (wid * 407) / 1080,
                        }}
                        source={Images.icon_79_0}
                    />
                    <TouchableWithoutFeedback onPress={this.onBack}>
                        <View
                            style={{
                                position: 'absolute',
                                left: 0,
                                width: 50,
                                height: 50,
                                backgroundColor: UI.color.tempColor,
                            }}
                        />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.onUser}>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: UI.size.screenWidth,
                                height: 50,
                                backgroundColor: UI.color.tempColor,
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <Image
                        style={{
                            width: wid,
                            height: (wid * 886) / 1080,
                        }}
                        source={Images.icon_79_1}
                    />
                    <TouchableWithoutFeedback onPress={this.onOut}>
                        <View
                            style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                width: UI.size.screenWidth,
                                height: 40,
                                backgroundColor: UI.color.tempColor,
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f4f8' },
});
