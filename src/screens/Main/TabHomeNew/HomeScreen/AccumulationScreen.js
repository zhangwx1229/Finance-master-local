import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View,TouchableWithoutFeedback } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class AccumulationScreen extends PureComponent {
    clickSearch = () => {
        this.props.navigation.navigate('AccumulationServerScreen');
    };
    render() {
        return (
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
            >
                <Image style={styles.image0} source={Images.accumulation_header} />
                <View>
                <Image style={styles.image1} source={Images.accumulation_image_1} />
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click1} />
                        </TouchableWithoutFeedback>
                    </View>
                
                <Image style={styles.image2} source={Images.accumulation_image_2} />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image0: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 496) / 1080,
    },
    image1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1469) / 1080,
    },
    image2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 144) / 1080,
    },
    click: {
        position: 'absolute',
        top:10,
        left: 12,
        width: (UI.size.screenWidth-12*2-40)/2,
        height:40,
        alignSelf: 'center',
        backgroundColor: 'red',
        // backgroundColor: 'transparent',
        
    },
    click1: {
        position: 'absolute',
        top:80,
        left: 12,
        width: (UI.size.screenWidth-12*2-40)/2,
        height:40,
        alignSelf: 'center',
        backgroundColor: 'red',
        // backgroundColor: 'transparent',
        
    },
});
