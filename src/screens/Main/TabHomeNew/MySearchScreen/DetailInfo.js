import React, { PureComponent } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../common/TitleView';

import DateSelectModel from '../common/DateSelectModel';
export default class DetailInfo extends PureComponent {
  constructor(props) {
    super(props);
    const { route } = props;
    this.data = route.params.data
  }


  rightView = () => (
    <TouchableOpacity style={
      {
        position: 'absolute', right: 10
      }
    }>
      <Image style={{ width: 15 * 2, height: 15 }}
        source={Images.detail_hear
        } />
    </TouchableOpacity >
  );

  renderHeader = index => {
    return (
      <View style={{
        flex: 1, backgroundColor: '#fff', justifyContent: 'center',
      }} >
        <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 100) / 810,
          }}
          source={Images.detail_info_0}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 8, marginTop: 15, alignItems: 'center', }} >
          <Text style={{ fontSize: 12 * UI.size.windowScale, color: '#9D9D9D', }} >
            收入：
          </Text>
          <Text style={{ fontSize: 12 * UI.size.windowScale, color: '#333333' }} >
            {this.data.item_4}元
        </Text>
        </View >
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 5, marginTop: 7, alignItems: 'center',
        }} >
          <Text style={{ fontSize: 12 * UI.size.windowScale, color: '#9D9D9D', }} >已申报税额： </Text>
          <Text style={{ fontSize: 12 * UI.size.windowScale, color: '#333333' }} > {this.data.item_5}元</Text>
        </View >
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 98) / 810,
          }}
          source={Images.detail_jishu}
        />

        <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 101) / 810,
          }}
          source={Images.detail_info_1}
        />
      </View>
    );
  };
  renderItem_0 = () => {
    return (
      <View style={styles.contentBg} >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 3, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 所得项目小类： </Text>
          <Text style={styles.itemDate} > {this.data.item_1} </Text>
        </View >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 扣缴义务人名称： </Text>
          <Text style={styles.itemDate} > {this.data.item_2} </Text>
        </View >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 扣缴义务人纳税人识别号： </Text>
          <Text style={styles.itemDate} > {this.data.item_6} </Text>
        </View >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 主管税务机关：</Text>
          <Text style={styles.itemDate} > {this.data.item_7} </Text>
        </View >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 申报渠道：</Text>
          <Text style={styles.itemDate} > {this.data.item_8} </Text>
        </View >
        <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 15, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 申报日期： </Text>
          <Text style={styles.itemDate} > {this.data.date} </Text>
        </View >
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 12, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle} > 主税款所属期：</Text>
          <Text style={styles.itemDate} > {this.data.item_9} </Text>
        </View >
        <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
      </View >
    );
  };
  renderItem_1 = () => {
    return (
      <View style={styles.contentBg} >
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 270) / 810,
          }}
          source={Images.detail_info_2}
        />
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, marginTop: 3, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle1} > 本期收入： </Text>
          <Text style={styles.itemDate1} > {this.data.item_4}元 </Text>
        </View >
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle1} > 本期免税收入： </Text>
          <Text style={styles.itemDate1} > {this.data.item_10}元 </Text>
        </View >
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle1} > 本期减免费用： </Text>
          <Text style={styles.itemDate1} > {this.data.item_11}元 </Text>
        </View >
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle1} > 本期专项扣除：</Text>
          <Text style={styles.itemDate1} > {this.data.item_12}元 <Image style={{ width: 13, height: 13 * 22 / 33, }} source={Images.detail_info_jian} /></Text>
        </View >
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle1} > 本期其他扣除：</Text>
          <Text style={styles.itemDate1} > {this.data.item_13}元 </Text>
        </View >
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 22, marginBottom: 12, justifyContent: 'space-between' }} >
          <Text style={styles.itemTitle1} > 本期准予扣除的捐赠项目：</Text>
          <Text style={styles.itemDate1} > {this.data.item_14}元 </Text>
        </View >
        <View style={{ width: '100%', height: 80, backgroundColor: '#f5f6f9' }} />
      </View >
    );
  };

  render () {
    const { navigation } = this.props;
    return (<View style={styles.container} >
      <TitleView title={'收入纳税明细查询'
      } rightView={this.rightView} navigation={navigation}
      />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false} >
        {this.renderHeader(0)}

        {this.renderItem_0()}
        {this.renderItem_1()}
      </ScrollView>
    </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#f5f6f9'
  },
  contentContainerStyle: {
    backgroundColor: UI.color.background,
  },
  image: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 226) / 1440,
  },
  image_1: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 310) / 1440,
  },
  click: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentBg: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentImage: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  subTitle: {
    marginLeft: 20,
    fontSize: 12 * UI.size.windowScale,
    color: '#333333'
  },
  year: {
    position: 'absolute',
    left: UI.size.screenWidth / 2 - 40,
    fontSize: 12 * UI.size.windowScale,
    color: '#333333',
  },
  itemBg: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 25,
    height: 25,
    marginLeft: 18
  },
  itemTitle: {
    fontSize: 12 * UI.size.windowScale,
    color: '#9D9D9D',
    marginTop: 12,
    maxWidth: 120,
    textAlign: 'left'
  },

  itemDate: {
    fontSize: 12 * UI.size.windowScale,
    color: '#333333',
    marginTop: 12,
    maxWidth: UI.size.screenWidth - 120 - 20 - 5,
    textAlign: 'right'
  },
  itemTitle1: {
    fontSize: 12 * UI.size.windowScale,
    color: '#9D9D9D',
    marginTop: 12,
    maxWidth: 160,
    textAlign: 'left'
  },
  itemDate1: {
    fontSize: 12 * UI.size.windowScale,
    color: '#333333',
    marginTop: 12,
    maxWidth: UI.size.screenWidth - 160 - 20 - 10,
    textAlign: 'right'
  },
  itemDetail: {
    fontSize: 12 * UI.size.windowScale,
    color: '#9D9D9D',
    marginTop: 5,
    marginRight: 30
  },
});