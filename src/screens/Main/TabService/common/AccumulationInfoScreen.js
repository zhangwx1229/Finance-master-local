import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/HomeScreen/JJRefresh';
import TitleView from './TitleView';
import Images from '../../../../image';
type Props = {
    style: Object,
    onClosePress: Function,
    onPress: Function,
};

export default class AccumulationScreen extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
        this.state = { selectIndex: 1 };
        this.dataList = [
            { type: 1, data: '个人信息' },
            { type: 2, data: { title: '姓名', subTitle: '当时的' } },
            { type: 2, data: { title: '身份证号', subTitle: '140***********2432' } },
        ];
        this.list1 = [
            { type: 1, data: '基础信息' },
            { type: 2, data: { title: '公积金账号', subTitle: '' } },
            { type: 2, data: { title: '单位名称', subTitle: '' } },
            { type: 2, data: { title: '单位登记号', subTitle: '' } },
            { type: 2, data: { title: '所属管理部名称', subTitle: '' } },
            { type: 1, data: '账户信息' },
            { type: 2, data: { title: '个人账户余额(元)', subTitle: '' } },
            { type: 2, data: { title: '缴存状态', subTitle: '' } },
            { type: 2, data: { title: '当年缴存金额(元)', subTitle: '' } },
            { type: 2, data: { title: '当年提取金额(元)', subTitle: '' } },
            { type: 2, data: { title: '上年结转余额(元)', subTitle: '' } },
            { type: 2, data: { title: '单位缴存比例', subTitle: '' } },
            { type: 2, data: { title: '个人缴存比例', subTitle: '' } },
            { type: 2, data: { title: '单位缴存额(元)', subTitle: '' } },
            { type: 2, data: { title: '个人缴存额(元)', subTitle: '' } },
            { type: 2, data: { title: '个人缴存基数(元)', subTitle: '' } },
            { type: 2, data: { title: '月缴存额(元)', subTitle: '' } },
        ];
        this.list2 = [
            { type: 1, data: '请选择查询条件' },
            { type: 3, data: { title: '经办渠道', subTitle: '5' } },
            { type: 3, data: { title: '业务类型', subTitle: '' } },
            { type: 3, data: { title: '开始日期', subTitle: '' } },
            { type: 3, data: { title: '结束日期', subTitle: '' } },
            {
                type: 5,
                data: {
                    balance: '311313.43',
                    balance1: '8983',
                    remittance: '2019-09',
                    business: '2019-09-23',
                    business1: '汇缴分配', //年度结息 汇缴分配
                    company: '电视剧哦几哦说',
                },
            },
            {
                type: 5,
                data: {
                    balance: '311313.43',
                    balance1: '8983',
                    remittance: '2019-09',
                    business: '2019-06-23',
                    business1: '年度结息', //年度结息 汇缴分配
                    company: '电视剧哦几哦说',
                },
            },
            {
                type: 5,
                data: {
                    balance: '311313.43',
                    balance1: '8983',
                    remittance: '2019-09',
                    business: '2019-08-23',
                    business1: '汇缴分配', //年度结息 汇缴分配
                    company: '电视剧哦几哦说',
                },
            },
        ];
        this.list3 = [
            { type: 1, data: '账单信息' },
            {
                type: 4,
                data: {
                    title: '2019-2020',
                    subTitle: '本息合计',
                    subTitle1: '¥12121121.98',
                },
            },
        ];
    }

    componentDidMount() { }

    componentWillUnmount() { }

    getIdentityStr(str = '140322199203232432') {
        let id = '';
        const idStr = str + '';
        if (idStr.length === 18) {
            let sub = '';
            for (let i = 0; i < 11; i++) {
                sub += '*';
            }
            id = idStr.slice(0, 3) + sub + idStr.slice(-4);
        }
        return id;
    }

    renderList = () => {
        const listView = [];
        if (this.state.selectIndex === 0) {
            const list = this.dataList.concat(this.list1);
            for (let i = 0; i < list.length; i++) {
                const { type, data } = list[i];
                if (type === 1) {
                    listView.push(this.renderItem1(data));
                } else if (type === 2) {
                    listView.push(this.renderItem2(data));
                }
            }
        } else if (this.state.selectIndex === 1) {
            const list = this.dataList.concat(this.list2);
            for (let i = 0; i < list.length; i++) {
                const { type, data } = list[i];
                if (type === 1) {
                    listView.push(this.renderItem1(data));
                } else if (type === 2) {
                    listView.push(this.renderItem2(data));
                } else if (type === 3) {
                    listView.push(this.renderItem4(data));
                } else if (type === 5) {
                    listView.push(this.renderItem6(data));
                }
            }
        } else {
            const list = this.dataList.concat(this.list3);
            for (let i = 0; i < list.length; i++) {
                const { type, data } = list[i];
                if (type === 1) {
                    listView.push(this.renderItem1(data));
                } else if (type === 2) {
                    listView.push(this.renderItem2(data));
                } else if (type === 4) {
                    listView.push(this.renderItem4(data));
                }
            }
        }
        return listView;
    };

    renderItem1 = data => {
        return (
            <View
                key={data + this.state.selectIndex}
                style={{ justifyContent: 'center', backgroundColor: '#f2f2f3' }}
            >
                <Text
                    style={{ marginLeft: 15, marginVertical: 10, fontSize: 12, color: '#9d9d9d' }}
                >
                    {data}
                </Text>
            </View>
        );
    };

    renderItem2 = ({ title, subTitle }) => {
        let isLast = false;
        if (title === '身份证号') {
            isLast = true;
        }
        let isFirstLast = false;
        if (title === '所属管理部名称') {
            isFirstLast = true;
        }
        return (
            <View key={title + this.state.selectIndex} style={{ backgroundColor: '#fff' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: 100,
                            marginLeft: 15,
                            marginVertical: 12,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: UI.size.screenWidth - 100 - 15 * 2,
                            marginRight: 15,
                            marginVertical: 12,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        {subTitle}
                    </Text>
                </View>
                {isLast ? (
                    this.renderItem3()
                ) : (
                        isFirstLast ? null : <View
                            style={{
                                marginLeft: 15,
                                height: 1,
                                opacity: 0.3,
                                backgroundColor: '#9d9d9d',
                            }}
                        />
                    )}
            </View>
        );
    };

    renderItem3 = () => {
        return (
            <View key={'renderItem3' + this.state.selectIndex} style={{ backgroundColor: '#fff' }}>
                <View
                    style={{
                        height: 10,
                        backgroundColor: '#f2f2f3',
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <Text
                        style={{
                            paddingVertical: 9,
                            fontSize: 12,
                            color: '#333333',
                            borderBottomWidth: this.state.selectIndex === 0 ? 1 : 0,
                            borderBottomColor: 'red',
                        }}
                        onPress={() => {
                            if (this.state.selectIndex !== 0) {
                                this.setState({ selectIndex: 0 });
                            }
                        }}
                    >
                        个人总帐信息
                    </Text>
                    <Text
                        style={{
                            paddingVertical: 9,
                            fontSize: 12,
                            color: '#333333',
                            borderBottomWidth: this.state.selectIndex === 1 ? 1 : 0,
                            borderBottomColor: 'red',
                        }}
                        onPress={() => {
                            if (this.state.selectIndex !== 1) {
                                this.setState({ selectIndex: 1 });
                            }
                        }}
                    >
                        明细信息
                    </Text>
                    <Text
                        style={{
                            paddingVertical: 9,
                            fontSize: 12,
                            color: '#333333',
                            borderBottomWidth: this.state.selectIndex === 2 ? 1 : 0,
                            borderBottomColor: 'red',
                        }}
                        onPress={() => {
                            if (this.state.selectIndex !== 2) {
                                this.setState({ selectIndex: 2 });
                            }
                        }}
                    >
                        对帐单信息
                    </Text>
                </View>
                <View style={{ height: 0.5, opacity: 0.3, backgroundColor: '#9d9d9d' }} />
            </View>
        );
    };

    renderItem4 = ({ title, subTitle, subTitle1 }) => {
        let isLast = false;
        if (title === '结束日期') {
            isLast = true;
        }
        return (
            <View key={title + this.state.selectIndex} style={{ backgroundColor: '#fff' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: 100,
                            marginLeft: 15,
                            marginVertical: 12,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: UI.size.screenWidth - 100 - 15 * 2,
                            marginRight: 15,
                            marginVertical: 12,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        {subTitle}
                        {subTitle1 ? (
                            <Text
                                numberOfLines={2}
                                style={{
                                    textAlign: 'right',
                                    maxWidth: UI.size.screenWidth - 100 - 15 * 2,
                                    marginRight: 15,
                                    marginVertical: 12,
                                    fontSize: 12,
                                    color: 'red',
                                }}
                            >
                                {subTitle1}
                            </Text>
                        ) : null}
                        {'  '}
                        <Image style={{
                            width: 10 * 21 / 31,
                            height: 10
                        }} source={Images.icon_21} />
                    </Text>
                </View>
                <View
                    style={{
                        height: 1,
                        opacity: 0.3,
                        backgroundColor: '#9d9d9d',
                    }}
                />
                {isLast ? (
                    this.renderItem5()
                ) : null}
            </View>
        );
    };

    renderItem5 = () => {
        return (
            <View
                key={'renderItem5' + this.state.selectIndex}
                style={{
                    backgroundColor: '#f2f2f3',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 30,
                    paddingHorizontal: 15,
                }}
            >
                <Text
                    style={{
                        paddingVertical: 9,
                        fontSize: 12,
                        marginRight: 15,
                        textAlign: 'center',
                        color: '#333333',
                        backgroundColor: 'red',
                        flex: 1,
                        borderRadius: 5,
                    }}
                    onPress={() => {
                        if (this.state.selectIndex !== 0) {
                            this.setState({ selectIndex: 0 });
                        }
                    }}
                >
                    重置
                </Text>
                <Text
                    style={{
                        paddingVertical: 9,
                        fontSize: 12,
                        textAlign: 'center',
                        color: '#fff',
                        backgroundColor: 'red',
                        flex: 2,
                        borderRadius: 5,
                    }}
                    onPress={() => {
                        if (this.state.selectIndex !== 0) {
                            this.setState({ selectIndex: 0 });
                        }
                    }}
                >
                    查询
                </Text>
            </View>
        );
    };

    renderItem6 = ({
        balance,
        balance1,
        remittance,
        remittance1 = 0,
        business,
        business1,
        company,
    }) => {
        let type = 0;
        let remittanceDetail = '';
        if (business1 === '年度结息') {
            type = 1;
        } else if (business1 === '汇缴分配') {
            type = 2;
            remittanceDetail = '汇缴月份: ' + remittance;
        }
        return (
            <View key={business + balance} style={{ backgroundColor: '#fff' }}>
                <View
                    style={{
                        height: 10,
                        backgroundColor: '#f2f2f3',
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 15,
                        marginTop: 10,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: UI.size.screenWidth - 60 - 15 * 2,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        余额: ¥
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: 12,
                                color: '#000',
                            }}
                        >
                            {balance}
                        </Text>
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: 60,
                            fontSize: 12,
                            color: 'green',
                        }}
                    >
                        {type === 0 ? '- ' : '+ '}
                        {balance1}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 15,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: UI.size.screenWidth - 60 - 15 * 2,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        {remittanceDetail}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: 60,
                            fontSize: 12,
                            color: 'red',
                        }}
                    >
                        - {remittance1}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 15,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: UI.size.screenWidth - 60 - 15 * 2,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        业务发送日期: {business}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: 60,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        {business1}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 15,
                        marginBottom: 10,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: UI.size.screenWidth - 60 - 15 * 2,
                            fontSize: 12,
                            color: '#333333',
                        }}
                    >
                        缴款单位: {company}
                    </Text>
                </View>
            </View>
        );
    };
    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} imageComponent={() =>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 145) / 1080,
                }} source={Images.icon_20} />
            } />
        </View >
    };
    render() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                {this.renderTitle()}
                <JJRefresh
                    foot_H={0}
                    header_H={180}
                    backgroundColor={'#f2f2f4'}
                    contentView={() => {
                        return this.renderList();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {},
});
