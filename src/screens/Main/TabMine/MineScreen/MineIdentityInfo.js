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

export default class MineIdentityInfo extends PureComponent {
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

    render() {
        if (this.data === null) {
            return null
        }
        const scre_w = UI.size.screenWidth - 40 * 2
        return (<View style={styles.container} >
            <Image style={{ position: 'absolute', width: UI.size.screenWidth, height: UI.size.screenWidth * 130 / 1080 }} source={Images.icon_10} />
            <TouchableWithoutFeedback onPress={this.back}>
                <View style={{ marginLeft: 5, width: 50, height: 40 }} />
            </TouchableWithoutFeedback>
            <Image style={{ position: 'absolute', left: 40, top: (UI.size.screenHeight - scre_w * 405 / 818 - 100) / 2, width: scre_w, height: scre_w * 405 / 818 }} source={Images.icon_9} />
            <Image style={{ position: 'absolute', bottom: 0, width: UI.size.screenWidth, height: UI.size.screenWidth * 202 / 1080 }} source={Images.icon_8} />
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f9',
    },

});