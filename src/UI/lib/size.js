import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

const androidStatusBarHeight = StatusBar.currentHeight;
console.log('statusBarHeight', androidStatusBarHeight);

const window = Dimensions.get('window');
const { width: windowWidth, height: windowHeight, scale } = window || {};
const screen = Dimensions.get('screen');
const { width: screenWidth, height: screenHeight } = screen || {};
const windowScale = 3 * screenHeight / (scale * 740)
const size = {
  statusBarHeight: androidStatusBarHeight,
  windowWidth,
  windowHeight,
  windowScale,
  screenWidth,
  screenHeight,
};

export default size;
