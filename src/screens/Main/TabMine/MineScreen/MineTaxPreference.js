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

export default class MineTaxPreference extends PureComponent {
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
        const image_top = UI.size.screenWidth * 130 / 1080
        const image_bottom = UI.size.screenWidth * 202 / 1080
        const scre_w = UI.size.screenWidth - 40 * 2
        const image_h = scre_w * 494 / 818
        const top = (UI.size.screenHeight - image_top - image_bottom - image_h) / 2
        return (<View style={styles.container} >
            <Image style={{ position: 'absolute', width: UI.size.screenWidth, height: image_top }} source={Images.icon_6} />
            <TouchableWithoutFeedback onPress={this.back}>
                <View style={{ marginLeft: 5, width: 50, height: 40 }} />
            </TouchableWithoutFeedback>
            <Image style={{ position: 'absolute', left: 40, top: top, width: scre_w, height: image_h }} source={Images.icon_7} />
            <Image style={{ position: 'absolute', bottom: 0, width: UI.size.screenWidth, height: image_bottom }} source={Images.icon_8} />
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