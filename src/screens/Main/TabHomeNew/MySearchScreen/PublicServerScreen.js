import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';

export default class PublicServerScreen extends PureComponent {
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
            <Image style={{ position: 'absolute', width: UI.size.screenWidth, height: UI.size.screenWidth * 1108 / 1080 }} source={Images.icon_45} />
            <TouchableWithoutFeedback onPress={this.back}>
                <View style={{ marginLeft: 5, width: 50, height: 40 }} />
            </TouchableWithoutFeedback>
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f9'
    },

});