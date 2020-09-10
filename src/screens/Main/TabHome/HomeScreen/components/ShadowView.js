import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UI from '../../../../../UI';
import { BoxShadow } from 'react-native-shadow';
export default class ShadowView extends PureComponent {
  render () {
    const { style } = this.props;
    const shadowOpt = {
      width: UI.size.screenWidth - 30,
      height: 100,
      color: '#333333',
      border: 6,
      radius: 10,
      opacity: 0.2,
      x: 0,
      y: 0,
    };

    return (
      <View style={StyleSheet.flatten([styles.container, style])}>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.content}>
            <Item title="我要办税" />
            <Item title="我要查询" />
            <Item title="公众服务" />
          </View>
        </BoxShadow>
      </View>
    );
  }
}

function Item (props) {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.itemImage} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: UI.size.screenWidth,
    paddingHorizontal: 15,
  },
  content: {
    backgroundColor: UI.color.white,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    height: 100,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 10,
    shadowColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  title: {
    fontSize: UI.fontSize.normal * UI.size.windowScale,
    color: UI.color.black,
  },
});
