import React, { PureComponent } from 'react';
import { Image, StyleSheet, View,TouchableWithoutFeedback } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class AccumulationServerScreen extends PureComponent {
    clickSearch = () => {
        this.props.navigation.navigate('AccumulationServerScreen');
    };

    render() {
        return (
                <View
                style={styles.content}
            >
                
                <View>
                <Image style={styles.image1} source={Images.accumulation_server_image} />
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click} />
                        </TouchableWithoutFeedback>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: { flex: 1, backgroundColor: '#f5f6f9' },
    image1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 992) / 1080,
    },
    click: {
        position: 'absolute',
        bottom:5,
        left: 12,
        width: UI.size.screenWidth-12*2,
        height:40,
        backgroundColor: 'red',
        // backgroundColor: 'transparent',
        
    },
});
