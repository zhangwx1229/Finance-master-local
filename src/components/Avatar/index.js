import React, {PureComponent} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import UI from '../../UI';

export default class Avatar extends PureComponent {
  render() {
    const {avatar, nickname} = this.props;
    return (
      <View style={styles.container}>
        {avatar ? (
          <Image style={styles.image} />
        ) : (
          <Text style={styles.nickname}>{nickname}</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UI.color.orange,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nickname: {
    color: UI.color.white,
    fontSize: UI.fontSize.big,
  },
});
