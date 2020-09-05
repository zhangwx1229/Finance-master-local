import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import UI from '../../../../../UI';

export default class HomeHeader extends PureComponent {
  render() {
    const {style} = this.props;
    return (
      <View style={StyleSheet.flatten([styles.container, style])}>
        <Image style={styles.image} />
        <View style={styles.titleView}>
          <Text>个人所得税</Text>
        </View>
        <Image style={styles.image} />
        <Image style={styles.image} />
        <Image style={styles.image} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UI.color.primary,
  },
  titleView: {
    flex: 1,
  },
  image: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderWidth: 1,
    marginHorizontal: 3,
  },
});
