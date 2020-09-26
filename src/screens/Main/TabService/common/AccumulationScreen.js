import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Image, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from './TitleView';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';
const header_h = 100
const scroll_h = 180
//北京通
export default class AccumulationScreen extends PureComponent {

    clickSB = () => {

    }

    clickGJJ = () => {
        // AccumulationScreenNew
        this.props.navigation.navigate('AccumulationInfoScreen')
    }


    renderContent = () => {
        return <View >
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 783 / 1080
                }} source={Images.icon_19} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{
                        position: 'absolute', left: 20, bottom: 30,
                        width: 60, height: 60, backgroundColor: 'red'
                    }} />
                </TouchableWithoutFeedback>
            </View>
            <View>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 1043 / 1080
                }} source={Images.icon_17} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{
                        position: 'absolute', left: 10, top: 50,
                        width: 200, height: 40, backgroundColor: 'red'
                    }} />
                </TouchableWithoutFeedback>
            </View>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1220 / 1080
            }} source={Images.icon_18} />
        </View >
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} imageComponent={() =>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 145) / 1080,
                }} source={Images.icon_16} />
            } />
        </View >
    };

    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                <JJRefresh
                    foot_H={0}
                    header_H={0}
                    contentView={this.renderContent}
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
