import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename_02.json';

export default class MIneInfoScreen extends PureComponent {
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
        return (<View style={styles.container} >
            <Image style={{ position: 'absolute', width: UI.size.screenWidth, height: UI.size.screenWidth * 572 / 1080 }} source={Images.icon_11} />
            <TouchableWithoutFeedback onPress={this.back}>
                <View style={{ marginLeft: 5, width: 50, height: 40 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onPressOne}>
                <View style={{ marginLeft: 5, marginTop: 15, width: UI.size.screenWidth - 5 * 2, height: 40 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onPressTwo}>
                <View style={{ marginLeft: 5, marginTop: 8, width: UI.size.screenWidth - 5 * 2, height: 40 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onPressThree}>
                <View style={{ marginLeft: 5, marginTop: 5, width: UI.size.screenWidth - 5 * 2, height: 40 }} />
            </TouchableWithoutFeedback>
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});