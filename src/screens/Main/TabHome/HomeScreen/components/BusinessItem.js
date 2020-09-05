import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import UI from '../../../../../UI';

export default class BusinessItem extends PureComponent {
  render() {
    const {title, desc} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.innerContent}>
            <View style={styles.left}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.small}>{desc}</Text>
            </View>
            <Image style={styles.arrow} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  content: {
    backgroundColor: 'green',
    paddingLeft: 2,
    borderRadius: 5,
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: 'red',
  },
  innerContent: {
    height: 60,
    borderRadius: 5,
    backgroundColor: UI.color.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  left: {flex: 1},
  title: {
    color: UI.color.black,
    fontSize: UI.fontSize.normal,
  },
  desc: {
    color: UI.color.darkGray,
    fontSize: UI.fontSize.small,
  },
  arrow: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
  },
});
