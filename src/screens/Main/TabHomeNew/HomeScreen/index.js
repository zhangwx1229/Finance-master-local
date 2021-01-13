import { isNumber } from 'lodash';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI, { setWidthList } from '../../../../UI';
export default class HomeScreen extends PureComponent {
    constructor() {
        super()
        this.state = { selectIndex: 0 }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.onWillBlur);
    }

    onWillBlur = () => {
        StatusBar.setBackgroundColor('#ccc')
    }

    componentWillUnmount() {
        this.props.navigation.removeListener();
    }

    clickMSG = () => {
        this.setState({ selectIndex: 0 })
    }

    clickTXL = () => {
        this.setState({ selectIndex: 1 })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 130) / 1080,
                }} source={Images.icon_70} />
                <View >
                    {this.state.selectIndex === 0 ? <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 797) / 1080,
                    }} source={Images.icon_69} /> : <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 1064) / 1080,
                    }} source={Images.icon_71} />}
                    <TouchableWithoutFeedback onPress={this.clickMSG}>
                        <View style={{ position: 'absolute', left: 40, top: 0, width: UI.size.screenWidth / 2 - 50, height: 40, backgroundColor: UI.color.tempColor }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.clickTXL}>
                        <View style={{ position: 'absolute', right: 40, top: 0, width: UI.size.screenWidth / 2 - 50, height: 40, backgroundColor: UI.color.tempColor }} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: UI.size.statusBarHeight, backgroundColor: '#f2f2f4' },

});
