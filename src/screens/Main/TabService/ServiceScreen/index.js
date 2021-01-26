import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import { GlobalData } from '../../../GlobalData';
//服务
export default class TaxScreen extends PureComponent {
    clickSearchDetail = () => {
        if (!GlobalData.isLogin) {
            this.props.navigation.navigate('MineLogInScreen');
        } else {
            this.props.navigation.navigate('SearchView');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={Images.tab_service_image_header} />
                <ScrollView
                    style={styles.content}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <View>
                        <Image style={{
                            width: UI.size.screenWidth,
                            height: (UI.size.screenWidth * 1168) / 1080,
                        }} source={Images.tab_service_image_0} />
                        <TouchableWithoutFeedback onPress={this.clickSearchDetail}>
                            <View style={{
                                position: 'absolute',
                                top: 60,
                                right: 20,
                                width: 80,
                                height: 80,
                                alignSelf: 'center',
                                backgroundColor: UI.color.tempcolor//'transparent',
                            }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Image style={{
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 1324) / 1080,
                    }} source={Images.tab_service_image_1} />
                    <View style={{ height: 70 }} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    contentContainerStyle: {
        backgroundColor: '#f5f6f9'
    },
    image: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1903) / 810,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 95) / 810,
    },
});
