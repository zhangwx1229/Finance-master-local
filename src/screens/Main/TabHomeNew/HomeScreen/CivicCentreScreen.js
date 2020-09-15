import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View,TouchableWithoutFeedback } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class CivicCentreScreen extends PureComponent {

    clickSearch = () => {
        this.props.navigation.navigate('AccumulationScreen');
    };
    render() {
        return (
            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainerStyle}
            >
                
                <Image style={styles.image0} source={Images.civic_centre_header} />
                <View>
                <Image style={styles.image1} source={Images.civic_centre_image_1} />
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click} />
                        </TouchableWithoutFeedback>
                    </View>
                
                <Image style={styles.image2} source={Images.civic_centre_image_2} />
                <Image style={styles.image3} source={Images.civic_centre_image_3} />
                <Image style={styles.image4} source={Images.civic_centre_image_4} />
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
        height: (UI.size.screenWidth * 415) / 1080,
    },
    image1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1278) / 1080,
    },
    image2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1264) / 1080,
    },
    image3: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 534) / 1080,
    },
    image4: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1294) / 1080,
    },
    click: {
        position: 'absolute',
        right: 12+(UI.size.screenWidth-12*2)/5,
        width: (UI.size.screenWidth-12*2)/5,
        height:(UI.size.screenWidth-12*2)/5,
        alignSelf: 'center',
        backgroundColor: 'red',
        // backgroundColor: 'transparent',
        
    },
});
