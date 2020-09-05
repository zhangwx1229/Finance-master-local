import React, {PureComponent} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import UI from '../../../../../UI';

export default class Topic extends PureComponent {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.header}>
        <Image style={styles.headrImage} />
        <Text style={styles.topTitle}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    marginBottom: 10,
    backgroundColor: UI.color.white,
  },
  header: {
    height: 40,
    flexDirection: 'row',
  },
  headrImage: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
  topTitle: {
    fontSize: UI.fontSize.large,
    fontWeight: 'bold',
    color: UI.color.black,
  },
});
