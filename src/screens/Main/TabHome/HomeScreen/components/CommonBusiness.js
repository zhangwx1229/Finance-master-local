import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UI from '../../../../../UI';
import Topic from './Topic';
import BusinessItem from './BusinessItem';

export default class CommonBusiness extends PureComponent {
  render() {
    return (
      <View style={styles.contianer}>
        <Topic title="常用业务" />
        <BusinessItem
          title="综合所得年度汇算"
          desc="居民个人2019年度综合所得年度汇算申报"
        />
        <BusinessItem
          title="专项附加扣除填报"
          desc="子女教育/继续小于等专项附加扣除的填报"
        />
        <BusinessItem
          title="收入纳税明细查询"
          desc="已申报收入的查询及异议申诉"
        />
        <BusinessItem
          title="专项附加扣除信息查询"
          desc="已填报的各项专项附加扣除记录的查询"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: 15,
    backgroundColor: UI.color.white,
  },
});
