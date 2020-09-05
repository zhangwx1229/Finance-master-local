import {StatusBar} from 'react-native';
import {Dimensions} from 'react-native';

const androidStatusBarHeight = StatusBar.currentHeight;
console.log('statusBarHeight', androidStatusBarHeight);

const window = Dimensions.get('window');
const {width: windowWidth, height: windowHeight} = window || {};
const screen = Dimensions.get('screen');
const {width: screenWidth, height: screenHeight} = screen || {};
const size = {
  statusBarHeight: androidStatusBarHeight,
  windowWidth,
  windowHeight,
  screenWidth,
  screenHeight,
};

export default size;
