import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import Modal from 'react-native-root-modal';
import Images from '../../../../image';
import UI from '../../../../UI';
const TAG = 'DateSelectModel';

type Props = {
  visible: boolean,
  style: Object,
  children: Object,
  onDismiss: () => void,
};
const Title_H = (UI.size.screenWidth * 183) / 1440;
const Item_H = 40;
export default class DateSelectModel extends React.Component<Props> {
  constructor() {
    super();
    let years = [];
    for (let i = 2019; i <= 2020; i++) {
      years.push(i.toString());
    }
    this.state = {
      years: years,
      selectedYear: 2019,
    };
  }
  updateYear(year) {
    this.setState({
      selectedYear: year,
    });
  }

  renderChildrens = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            height: Title_H,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d4d4d4',
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.touchImage} source={Images.icon_back_title} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.touchImage} source={Images.icon_back_title} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  content = (onDismiss) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.disBG}
          onPress={onDismiss}
          activeOpacity={1}
        />
        <View style={styles.content}>{this.renderChildrens()}</View>
      </View>
    );
  };

  render() {
    const {style, onDismiss} = this.props;
    return (
      <Modal
        animationType={'slide'}
        visible
        transparent
        onDismiss={onDismiss}
        style={style}
      >
        {this.content(onDismiss)}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  disBG: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
  },
  touchImage: {width: 40, height: 20},
  subTitle: {fontSize: 12, color: '#333333', alignSelf: 'center'},
});
/**
 *
 *
 *  <ScrollView
          ref={(e) => {
            this.scrollRef = e;
          }}
          style={{
            width: '100%',
            height: Item_H * 3,
            marginTop: (400 - Title_H - Item_H * 3) / 2,
            borderBottomColor: '#d4d4d4',
            borderTopColor: '#d4d4d4',
            borderBottomWidth: 1,
            borderTopWidth: 1,
          }}
          horizontal={false}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          onScroll={(event) => {
            const {y} = event.nativeEvent.contentOffset; // 滑动距离
            this.offsetY = y;
          }}
          onScrollEndDrag={(event) => {
            if (this.scrollRef) {
              if (this.offsetY <= (Item_H * 3) / 2) {
                this.scrollRef.scrollTo({y: Item_H / 2});
              } else {
                this.scrollRef.scrollTo({y: (Item_H * 3) / 2});
              }
            }
          }}
        >
          <View
            style={{
              width: '100%',
              height: Item_H,
              marginTop: Item_H / 2,
              backgroundColor: 'orange',
            }}
          >
            <Text style={styles.subTitle}>年度</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: Item_H,
              marginBottom: Item_H / 2,
              backgroundColor: 'blue',
            }}
          />
        </ScrollView>
*/
