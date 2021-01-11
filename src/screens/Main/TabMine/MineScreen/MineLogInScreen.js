import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../../TabHomeNew/common/TitleView';
import filejson from '../../../../image/filename.json';

export default class MineLogInScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.data = filejson['2020'];
    }

    componentWillUnmount() {
        this.isDestroy = true;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
        }
    }

    back = () => {
        this.props.navigation.pop()
    }

    onPressOne = () => {
        this.props.navigation.navigate('MIneInfoDetailScreen');
    }

    onPressTwo = () => {
        this.props.navigation.navigate('MineTaxPreference');
    }

    onPressThree = () => {
        this.props.navigation.navigate('MineIdentityInfo');
    }

    render() {
        if (this.data === null) {
            return null
        }
        const { navigation } = this.props;
        return (<View style={styles.container} >
            <TitleView title={'个人所得税'
            } navigation={navigation}
            />
            <View style={styles.row}>
                <Text style={{ fontSize: UI.fontSizeNew.font_13, color: '#333' }}>账号 </Text>
                <TextInput
                    style={[styles.input, { fontSize: UI.fontSizeNew.font_13 }]}
                    placeholder="手机号/证件号码"
                    onChangeText={this.onUsernameChange}
                />
            </View>
            <View style={styles.line} />
            <View style={styles.row}>
                <Text style={{ fontSize: UI.fontSizeNew.font_13, color: '#333' }}>账号 </Text>
                <TextInput
                    style={styles.input}
                    password={true}
                    placeholder="手机号/证件号码"
                    onChangeText={this.onUsernameChange}
                />
            </View>
            <View style={styles.line} />
        </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        paddingHorizontal: 18,
        alignItems: 'center',
        backgroundColor: UI.color.white,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    line: { width: UI.size.screenWidth - 10 * 2, marginHorizontal: 10, height: 1, backgroundColor: '#9d9d9d' },
    button: {
        marginTop: 10,
        width: '100%',
    },
    footer: {
        marginTop: 50,
        flexDirection: 'row',
    },
    footetBtn: {
        paddingHorizontal: 20,
    },
    underLine: {
        borderBottomWidth: 1,
        borderColor: UI.color.black,
    },
    text: {
        color: UI.color.black,
    },
});