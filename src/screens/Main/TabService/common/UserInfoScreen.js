import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Text, TextInput, Image, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
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
                        marginTop: 100,
                        width: wid,
                        height: (wid * 791) / 1080,
                    }}
                    source={Images.icon_80}
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
                </View>
                <Image
                    style={{
                        marginTop: 100,
                        width: wid,
                        height: (wid * 1018) / 1080,
                    }}
                    source={Images.icon_81}
                />
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
        height: (UI.size.screenWidth * 146) / 1080,
    },
});
