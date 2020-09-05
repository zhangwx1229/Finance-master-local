import React, {PureComponent} from 'react';
import {Image, StyleSheet, ScrollView, View} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class TaxScreen extends PureComponent {
  render() {
    return (
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Image style={styles.header} source={Images.tab_mine_image_header} />
        <Image style={styles.image} source={Images.tab_mine_image} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1},
  contentContainerStyle: {
    backgroundColor: UI.color.background,
  },
  image: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 1485) / 1080,
  },
  header: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 349) / 1080,
  },
});
