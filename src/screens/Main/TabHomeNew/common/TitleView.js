import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class TitleView extends PureComponent {
  clickSearch = () => {
    if (this.props.navigation) {
      this.props.navigation.pop();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewBg}>
          <TouchableOpacity style={styles.backBg} onPress={this.clickSearch}>
            <Image style={styles.backImage} source={Images.icon_back} />
          </TouchableOpacity>
          <Image style={styles.backTitle} source={Images.icon_back_title} />
        </View>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 168) / 1440,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  viewBg: {
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
  },
  backBg: {
    width: (22 * 62) / 87,
    height: 22,
    alignSelf: 'center',
  },
  backImage: {
    width: '100%',
    height: '100%',
  },
  backTitle: {
    width: (22 * 117) / 87,
    height: 22,
    alignSelf: 'center',
  },
  title: {
    fontSize: 13.3,
    color: '#333333',
  },
});
