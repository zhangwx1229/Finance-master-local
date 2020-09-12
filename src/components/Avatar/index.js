import React, { PureComponent } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import UI from '../../UI';
let font_16 = UI.fontSizeNew.font_16;
export default class Avatar extends PureComponent {
    render() {
        font_16 = UI.fontSizeNew.font_16;
        const { avatar, nickname } = this.props;
        return (
            <View style={styles.container}>
                {avatar ? (
                    <Image style={styles.image} />
                ) : (
                        <Text style={[styles.nickname, {
                            fontSize: font_16,
                        }]}>{nickname}</Text>
                    )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: UI.color.orange,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    nickname: {
        color: UI.color.white,
    },
});
