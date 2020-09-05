import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UI from '../../UI';

export default class ListItem extends PureComponent {
  render() {
    const {title, icon, first, last} = this.props;
    let containerStyle = styles.container;
    if (first) {
      containerStyle = styles.firstContainer;
    } else if (last) {
      containerStyle = styles.lastContainer;
    }

    let rightStyle = styles.right;
    if (last) {
      rightStyle = styles.lastRight;
    }
    return (
      <View style={containerStyle}>
        <View style={styles.left}>
          {icon ? (
            <Image style={styles.image} source={icon} />
          ) : (
            <Icon name="address-book" size={30} color={UI.color.primary} />
          )}
        </View>
        <View style={rightStyle}>
          <View style={styles.rightContent}>
            <Text>{title || 'ListItem'}</Text>
          </View>
          <Icon
            style={styles.arrow}
            name="angle-right"
            size={30}
            color={UI.color.darkGray}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: UI.color.white,
  },
  firstContainer: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: UI.color.border,
    backgroundColor: UI.color.white,
  },
  lastContainer: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: UI.color.border,
    backgroundColor: UI.color.white,
  },
  left: {
    paddingLeft: 15,
    paddingRight: 10,
    justifyContent: 'center',
  },
  image: {
    width: 46,
    height: 46,
    backgroundColor: 'green',
  },
  right: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: UI.color.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
  },
  arrow: {
    marginRight: 10,
  },
});
