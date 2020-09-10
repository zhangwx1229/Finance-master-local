import React, { PureComponent } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Images from '../../../../image';
import { name } from '../../../../image/filename_02.json';
import UI from '../../../../UI';
// import MySearchScreen from '../MySearchScreen';
export default class HomeScreen extends PureComponent {
  clickSearch = () => {
    this.props.navigation.navigate('MySearchScreen');
  };
  // 360 740 
  // 392.72727272727275 850.9090909090909
  render () {
    console.debug('======ddd======', UI.size.windowScale, UI.size.screenWidth, UI.size.screenHeight)
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <Text style={{ fontSize: 30 * UI.size.windowScale, color: '#909090' }}>{name}</Text>
          <View>
            <Image style={styles.image_0} source={Images.tab_home_image_0} />
            <TouchableWithoutFeedback onPress={this.clickSearch}>
              <View style={styles.click} />
            </TouchableWithoutFeedback>
          </View>
          <Image style={styles.image_1} source={Images.tab_home_image_1} />
          <Image style={styles.image_2} source={Images.tab_home_image_2} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  contentContainerStyle: {
    backgroundColor: UI.color.background,
  },
  image_0: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 1996) / 1440,
  },
  image_1: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 2211) / 1440,
  },
  image_2: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 1298) / 1440,
  },
  header: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 110) / 810,
  },
  click: {
    position: 'absolute',
    top: (450 * UI.size.screenWidth) / 810,
    width: 70,
    height: 70,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});
