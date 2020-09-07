import React, {PureComponent} from 'react';
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
export default class SearchDetailView extends PureComponent {
  constructor() {
    super();
    this.state = {
      year: 2020,
      select_0: false,
      select_1: false,
      select_2: false,
      select_3: false,
      isShowYear: false,
    };
  }
  clickSearch = () => {
    this.setState({isShowYear: true});
  };
  onYearCall = ({year}) => {
    this.setState({isShowYear:false,year:year})
  };
  onDismiss= () => {
    this.setState({isShowYear:false})
  };
  clickSelect = (index) => {
    switch (index) {
      case 0:
        this.setState({select_0: !this.state.select_0});
        break;
      case 1:
        this.setState({select_1: !this.state.select_1});
        break;
      case 2:
        this.setState({select_2: !this.state.select_2});
        break;
      case 3:
        this.setState({select_3: !this.state.select_3});
        break;
      default:
        break;
    }
  };

  searchButton=()=>{
    const {navigation} = this.props;
    navigation.navigate('Register');
  }

  rightView=()=><TouchableOpacity style={{position: 'absolute', right: 10}}  onPress={this.searchButton}>
            <Image style={ {width: 15*171/47, height:15}} source={Images.icon_search_right} />
          </TouchableOpacity>
  
  renderHeader = (index) => {
    return  <View style={{flex:1,
      backgroundColor: '#fff',
      marginHorizontal:10,justifyContent:'center'}}>
        <View style={{width:'100%',height:10,backgroundColor:'#f5f6f9'}}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5,marginTop:10,alignItems:'center'}}>
            <Text style={{
    fontSize: 12,
    color: '#333333',
  }}>工资薪金</Text>
            <Text style={{fontSize: 12,
    color: '#333333'}}>2020-07</Text>
          </View>
          <View style={{flex:1,height:0.5,backgroundColor:'#9D9D9D'}}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,marginTop:5,alignItems:'center'}}>
            <Text style={{
    fontSize: 12,
    color: '#333333',
  }}>工资薪金</Text>
            <Text style={{fontSize: 12,
    color: '#333333',}}>2020-07</Text>
          </View>
      </View>
  }
  renderItem = (index) => {
  
    return (
      <TouchableOpacity
        style={styles.click}
        activeOpacity={1}
        onPress={() => {
          this.clickSelect(index);
        }}
      >
        <View style={styles.contentBg}>
          <View style={{width:'100%',height:10,backgroundColor:'#f5f6f9'}}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.itemTitle}>工资薪金</Text>
            <Text style={styles.itemDate}>2020-07</Text>
          </View>
          <Text style={styles.itemDetail}>工资薪金</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.itemDetail}>工资薪金</Text>
          <Image style={{ width: 30, height:30,marginRight:-5}} source={Images.p1_12} />
          </View>
          <Text style={styles.itemDetail}>工资薪金</Text>
          <Text style={[styles.itemDetail,{marginBottom:25}]}>工资薪金</Text>

        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {navigation} = this.props;
    const {year, isShowYear} = this.state;
    return (
      <View style={styles.container}>
        <TitleView title={'收入纳税明细查询'} rightView={this.rightView} navigation={navigation} />
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          
          {this.renderHeader(0)}
          {this.renderItem(1)}
          {this.renderItem(2)}
          {this.renderItem(3)}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, backgroundColor: '#f5f6f9'},
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
    flex:1,
    backgroundColor: '#fff',
    marginHorizontal:10
  },
  contentImage: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  subTitle: {marginLeft: 20, fontSize: 12, color: '#333333'},
  year: {
    position: 'absolute',
    left: UI.size.screenWidth / 2 - 40,
    fontSize: 12,
    color: '#333333',
  },
  itemBg: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  itemImage: {width: 25, height: 25, marginLeft: 18},
  itemTitle: {
    fontSize: 12,
    color: '#333333',
    marginTop:20
  },
  itemDate: {
    fontSize: 12,
    color: '#333333',
    marginTop:15,
    marginRight:30
  },
  itemDetail: {
    fontSize: 12,
    color: '#9D9D9D',
    marginTop:5,
  },
});
