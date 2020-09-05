import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import UI from '../../../../../UI';
import Topic from './Topic';

export default class HotTopic extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Topic title="热点专题" />
        <View style={styles.content}>
          <View style={styles.left}>
            <Text style={styles.contentTitle}>开启你的个税记忆</Text>
            <Text style={styles.contentText}>所有数据截止至2020年1月30日</Text>
          </View>
          <Image style={styles.arrow} />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>立即进入</Text>
          </View>
        </View>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
  },
  contentTitle: {
    color: UI.color.black,
    fontSize: UI.fontSize.large,
    fontWeight: 'bold',
  },
  contentText: {
    color: UI.color.darkGray,
    fontSize: UI.fontSize.normal,
  },
  arrow: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
  },
  footer: {
    paddingTop: 8,
  },
  button: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: UI.fontSize.normal,
    color: UI.color.white,
  },
});
