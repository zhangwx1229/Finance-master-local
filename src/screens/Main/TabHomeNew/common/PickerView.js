import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';

import UI from '../../../../UI';

export default class PickerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0),
      dataSource: ['2019', '20203'],
      choice: '2019',
      hide: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.show();
    }, 2000);
  }
  componentWillUnMount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    if (this.state.hide) {
      return <View style={{width: 300, height: 300, backgroundColor: 'red'}} />;
    } else {
      return (
        <View style={pickerStyles.container}>
          <View style={pickerStyles.mask} />
          <View style={pickerStyles.tipTitleView}>
            <Text
              style={pickerStyles.cancelText}
              onPress={this.cancel.bind(this)}
            >
              取消
            </Text>
            <Text style={pickerStyles.okText} onPress={this.ok.bind(this)}>
              确定
            </Text>
          </View>
        </View>
      );
    }
  }

  /****************************** event ******************************/
  /******************** public ********************/
  // 设置Pickerview的数据源数组
  setDataSource(array) {
    this.setState({
      choice: array[0],
      dataSource: array,
    });
  }

  // 显示Pickerview
  show() {
    if (this.state.hide) {
      this.setState({hide: false});
      this.in();
    }
  }

  /******************** private ********************/
  // 显示动画
  in() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        easing: Easing.linear,
        duration: this.props.duration,
        toValue: 0.8,
      }),
      Animated.timing(this.state.offset, {
        easing: Easing.linear,
        duration: this.props.duration,
        toValue: 1,
      }),
      ,
    ]).start();
  }

  //隐藏动画
  out() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        easing: Easing.linear,
        duration: this.props.duration,
        toValue: 0,
      }),
      Animated.timing(this.state.offset, {
        easing: Easing.linear,
        duration: this.props.duration,
        toValue: 0,
      }),
      ,
    ]).start();

    this.timer = setTimeout(() => {
      this.setState({hide: true});
    }, this.props.duration);
  }

  //取消
  cancel(event) {
    if (!this.state.hide) {
      this.out();
    }
  }

  //选择
  ok() {
    if (!this.state.hide) {
      this.out();
      if (this.props.okCallback) {
        this.props.okCallback(this.state.choice);
      }
    }
  }
}

const pickerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: UI.size.screenWidth,
    height: UI.size.screenHeight - 64,
  },
  mask: {
    justifyContent: 'center',
    backgroundColor: '#383838',
    opacity: 0.3,
    position: 'absolute',
    width: UI.size.screenWidth,
    height: UI.size.screenHeight - 64,
  },
  tip: {
    width: UI.size.screenWidth,
    height: 260,
    position: 'absolute',
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tipTitleView: {
    height: 50,
    width: UI.size.screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#eeeeee',
    backgroundColor: '#fff',
  },
  cancelText: {
    color: '#ff9f45',
    fontSize: 16,
    paddingLeft: 30,
  },
  okText: {
    color: '#ff9f45',
    fontSize: 16,
    paddingRight: 30,
    fontWeight: 'bold',
  },
  picker: {
    justifyContent: 'center',
    height: 210,
    width: UI.size.screenWidth,
  },
});
