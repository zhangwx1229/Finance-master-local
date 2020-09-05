import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Anounce extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} />
        <Text style={styles.text} numberOfLines={1}>
          关于自然人电子税务局未授权任何第三方服务的声明{' '}
        </Text>
        <Image style={styles.arrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 15,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
  text: {
    flex: 1,
  },
  arrow: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
  },
});
