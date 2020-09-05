import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UI from '../../../../UI';

export default class NormalHeader extends PureComponent {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title || 'title'}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: UI.size.statusBarHeight + 44,
    paddingTop: UI.size.statusBarHeight,
    backgroundColor: UI.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: UI.color.white,
  },
});
