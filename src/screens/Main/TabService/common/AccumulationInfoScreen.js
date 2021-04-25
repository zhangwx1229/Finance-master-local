import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
import TitleViewNew from './TitleViewNew';
import Images from '../../../../image';
import filejson from '../../../../image/filename.json';
import DateSelectModel from './DateSelectModel';
import moment from 'moment';
type Props = {
    style: Object,
    onClosePress: Function,
    onPress: Function,
};

export default class AccumulationInfoScreen extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
        const datess = moment(new Date().getTime()).format(
            'YYYY-MM',
        )
        this.state = {
            selectIndex: 0,
            isShowYear: false,
            selectYear: 0,
            secondDataLsit: [],
            secondOne: '全部',
            secondTwo: '全部',
            secondThird: datess + '-01',
            secondFour: datess + '-30',
            selectYearList: [],//记录第3组选中的年份
            isShowContent: false
        };
        this.dataList = [
            { type: 1, data: '个人信息' },
            { type: 2, data: { title: '姓名', subTitle: filejson.name } },
            { type: 2, data: { title: '身份证号', subTitle: UI.getIdentityStr(filejson.item_tmp_sb_0, 3, 4) } },
        ];
        let currentYearTotal = 0
        let currentYearExtract = 0
        let monthNum = 0
        for (let i = 0; i < filejson.totalDetailed.length; i++) {
            let isBreak = false
            for (let j = 0; j < filejson.totalDetailed[i].saveMoney.length; j++) {
                const element = filejson.totalDetailed[i].saveMoney[j];

                //console.debug('====ss===', element.info, Number(element.save))
                if (element.info.indexOf('汇缴') >= 0) {
                    if (i === 0) {
                        monthNum = Number(element.save)
                    }
                    currentYearTotal += Number(element.save)
                } else if (element.info.indexOf('年度结') >= 0) {
                    isBreak = true
                    break;
                } else {
                    currentYearExtract += Number(element.save)
                }
            }
            if (isBreak) {
                break;
            }
        }
        let kdsds = 0
        if (filejson.billInfo.length > 0) {
            kdsds = filejson.billInfo[0].total
        }
        this.list1 = [
            { type: 1, data: '基础信息' },
            { type: 2, data: { title: '公积金账号', subTitle: filejson.accountNumber } },
            { type: 2, data: { title: '单位名称', subTitle: filejson.company } },
            { type: 2, data: { title: '单位登记号', subTitle: filejson.item_tmp_sb_1 } },
            { type: 2, data: { title: '所属管理部名称', subTitle: filejson.administration } },
            { type: 1, data: '账户信息' },
            { type: 2, data: { title: '个人账户余额(元)', subTitle: parseFloat(filejson.balance) } },
            { type: 2, data: { title: '缴存状态', subTitle: '缴存' } },
            { type: 2, data: { title: '当年缴存金额(元)', subTitle: parseFloat(currentYearTotal) } },
            { type: 2, data: { title: '当年提取金额(元)', subTitle: parseFloat(currentYearExtract) } },
            { type: 2, data: { title: '上年结转余额(元)', subTitle: parseFloat(kdsds) } },
            { type: 2, data: { title: '单位缴存比例', subTitle: filejson.companyRatio + '%' } },
            { type: 2, data: { title: '个人缴存比例', subTitle: filejson.personalRatio + '%' } },
            { type: 2, data: { title: '单位缴存额(元)', subTitle: parseFloat(filejson.companyQuota) } },
            { type: 2, data: { title: '个人缴存额(元)', subTitle: parseFloat(filejson.personalQuota) } },
            { type: 2, data: { title: '个人缴存基数(元)', subTitle: parseFloat(filejson.depositBase) } },
            { type: 2, data: { title: '月缴存额(元)', subTitle: parseFloat(monthNum) } },
        ];
        this.list2 = [
            { type: 1, data: '请选择查询条件' },
            { type: 3, data: { title: '经办渠道' } },
            { type: 3, data: { title: '业务类型' } },
            { type: 3, data: { title: '开始日期' } },
            { type: 3, data: { title: '结束日期' } },
        ];
        this.list3 = [{ type: 1, data: '账单信息' }];
        this.list_3 = null;
    }

    getList = () => {
        const list = [];
        for (let i = 0; i < filejson.totalDetailed.length; i++) {
            const { saveMoney, year } = filejson.totalDetailed[i];
            const y = year.slice(0, 4);
            const y_start = this.state.secondThird.slice(0, 4);
            const y_end = this.state.secondFour.slice(0, 4);
            if (y >= y_start && y <= y_end) {
                for (let j = 0; j < saveMoney.length; j++) {
                    const { accountMoney, save, date, info, company } = saveMoney[j];
                    const dateNew = y + '-' + date
                    if (
                        dateNew >= this.state.secondThird &&
                        dateNew <= this.state.secondFour
                    ) {
                        const isTakeOut = !(info === "年度结息" || info === "汇缴分配")
                        list.push({
                            type: 5,
                            data: {
                                balance: parseFloat(accountMoney),
                                balance1: parseFloat(isTakeOut ? 0 : save),
                                business: y + '-' + date,
                                remittance: y + '-' + date.slice(0, 2),
                                remittance1: parseFloat(isTakeOut ? save : 0),
                                business1: info, //年度结息 汇缴分配
                                company: company
                            },
                        });
                    }
                }
            }
        }
        return list;
    };

    clickSearch = (title, date, info) => {
        if (title === '开始日期') {
            this.setState({ isShowYear: true, secondThird: date, selectYear: 0 });
        } else if (title === '结束日期') {
            this.setState({ isShowYear: true, secondFour: date, selectYear: 1 });
        } else if (this.state.selectIndex === 2) {
            const index = this.state.selectYearList.indexOf(title)
            if (index < 0) {
                this.state.selectYearList.push(title)
            } else {
                this.state.selectYearList.splice(index, 1)
            }
            this.setState({ selectYearList: [...this.state.selectYearList] })
        }
    };

    onYearCall = ({ year, month, day }) => {
        let date = '' + year;
        //console.debug('=======onYearCall=', month, day);;
        if (month < 10) {
            date += '-0';
        } else {
            date += '-';
        }
        date += month;
        if (day < 10) {
            date += '-0';
        } else {
            date += '-';
        }
        date += day;
        if (this.state.selectYear === 0) {
            this.setState({ isShowYear: false, secondThird: date });
        } else if (this.state.selectYear === 1) {
            this.setState({ isShowYear: false, secondFour: date });
        }
    };

    onLoadEnd = () => {
        this.setState({ isShowContent: true })
    }

    onDismiss = () => {
        this.setState({ isShowYear: false });
    };

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
            let list = this.dataList.concat(this.list2);
            list = list.concat(this.state.secondDataLsit);

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
            if (this.state.secondDataLsit.length > 0) {
                listView.push(this.renderFoot(1));
            }
        } else {
            let list = this.dataList.concat(this.list3);
            if (this.list_3) {
                list = list.concat(this.list_3);
            }

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
            if (this.list_3 && this.list_3.length > 0) {
                listView.push(this.renderFoot());
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
                    style={{
                        marginLeft: 15,
                        marginVertical: 12,
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#9d9d9d',
                    }}
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
        const vertical = 14
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
                            maxWidth: 150,
                            marginLeft: 15,
                            marginVertical: vertical,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: UI.size.screenWidth - 150 - 15 * 2,
                            marginRight: 15,
                            marginVertical: vertical,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        {subTitle}
                    </Text>
                </View>
                {isLast ? (
                    this.renderItem3()
                ) : isFirstLast ? null : (
                    <View
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
                            paddingVertical: 12,
                            fontSize: UI.fontSizeNew.font_12,
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
                            paddingVertical: 12,
                            fontSize: UI.fontSizeNew.font_12,
                            color: '#333333',
                            borderBottomWidth: this.state.selectIndex === 1 ? 1 : 0,
                            borderBottomColor: 'red',
                        }}
                        onPress={() => {
                            if (this.state.selectIndex !== 1) {
                                this.setState({ selectIndex: 1, secondDataLsit: [] });
                            }
                        }}
                    >
                        明细信息
                    </Text>
                    <Text
                        style={{
                            paddingVertical: 12,
                            fontSize: UI.fontSizeNew.font_12,
                            color: '#333333',
                            borderBottomWidth: this.state.selectIndex === 2 ? 1 : 0,
                            borderBottomColor: 'red',
                        }}
                        onPress={() => {
                            if (this.state.selectIndex !== 2) {
                                this.setState({ selectIndex: 2, selectYearList: [] });
                                if (!this.list_3) {
                                    this.list_3 = [];
                                    for (let i = 0; i < filejson.billInfo.length; i++) {
                                        const itme = filejson.billInfo[i];
                                        this.list_3.push({
                                            type: 4,
                                            data: {
                                                title: itme.date,
                                                subTitle: '本息合计',
                                                subTitle1: itme.total,
                                                info: itme
                                            },
                                        });;
                                    }
                                }

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

    renderItem4 = ({ title, subTitle, subTitle1, info }) => {
        //console.debug('====info====', info)
        let isLast = false;
        let subTitleNew = subTitle;
        if (title === '结束日期') {
            isLast = true;
            subTitleNew = this.state.secondFour;
        } else if (title === '开始日期') {
            subTitleNew = this.state.secondThird;
        } else if (title === '业务类型') {
            subTitleNew = this.state.secondTwo;
        } else if (title === '经办渠道') {
            subTitleNew = this.state.secondOne;
        }
        let isShow = false
        if (info && this.state.selectYearList.includes(title)) {
            isShow = true
        }
        //console.debug('===renderItem4====', title, this.state.selectYearList);
        const vertical = 14
        return (
            <View key={title + this.state.selectIndex} >
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.clickSearch(title, subTitleNew, info);;
                    }}
                >
                    <View style={{ backgroundColor: '#fff' }}>
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
                                    marginVertical: vertical,
                                    fontSize: UI.fontSizeNew.font_11,
                                    color: '#333333',
                                }}
                            >
                                {title}
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    textAlign: 'right',
                                    maxWidth: UI.size.screenWidth - 100 - 15 * 2,
                                    marginRight: 30,
                                    marginVertical: vertical,
                                    fontSize: UI.fontSizeNew.font_11,
                                    color: '#333333',
                                }}
                            >
                                {subTitleNew}
                                {subTitle1 ? (
                                    <Text
                                        style={{
                                            fontSize: UI.fontSizeNew.font_11,
                                            color: '#ee9c30',
                                        }}
                                    >
                                        {' ¥'}
                                        {subTitle1}
                                    </Text>
                                ) : null}
                            </Text>
                            <Image
                                style={{
                                    position: 'absolute',
                                    right: 15,
                                    alignSelf: 'center',
                                    width: isShow ? 10 : ((10 * 21) / 31),
                                    height: isShow ? ((10 * 21) / 31) : 10,
                                }}
                                source={isShow ? Images.icon_22 : Images.icon_21}
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                opacity: 0.3,
                                backgroundColor: '#9d9d9d',
                            }}
                        />
                        {isLast ? this.renderItem5() : null}
                    </View>
                </TouchableWithoutFeedback>
                {!isShow ? null : <View style={{ backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: "#9d9d9d48", borderBottomWidth: 1 }}>
                    <Text style={{
                        marginLeft: 15,
                        marginVertical: 12,
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#333333',
                    }} >
                        明细
                    </Text>
                    <View style={{ marginLeft: 40 }}>
                        <Image
                            style={{
                                position: 'absolute', bottom: 8, left: -37,
                                width: 85,
                                height: 85,
                            }}
                            source={Images.icon_6}
                        />
                        <Text
                            numberOfLines={1}
                            style={{
                                marginTop: 12,
                                fontSize: UI.fontSizeNew.font_11,
                                color: '#333333',
                            }} >
                            上年结转(元)：{parseFloat(info.lastYearMoney)}
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: UI.fontSizeNew.font_11,
                                color: '#333333',
                            }} >
                            本年缴存(含转入)：<Text
                                numberOfLines={1}
                                style={{
                                    fontSize: UI.fontSizeNew.font_11,
                                    color: 'green',
                                }} >
                                +{parseFloat(info.currentYear)}
                            </Text>
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: UI.fontSizeNew.font_11,
                                color: '#333333',
                            }} >
                            本年提取(元)：<Text
                                numberOfLines={1}
                                style={{
                                    fontSize: UI.fontSizeNew.font_11,
                                    color: 'red',
                                }} >
                                -{parseFloat(info.takeOutMoney)}
                            </Text>
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: UI.fontSizeNew.font_11,
                                color: '#333333',
                            }} >
                            利息(元)：<Text
                                numberOfLines={1}
                                style={{
                                    fontSize: UI.fontSizeNew.font_11,
                                    color: 'green',
                                }} >
                                +{parseFloat(info.interest)}
                            </Text>
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                marginBottom: 13,
                                fontSize: UI.fontSizeNew.font_11,
                                color: '#333333',
                            }} >
                            本息合计(元)：{parseFloat(info.total)}
                        </Text>
                    </View>
                </View>}
            </View>
        );
    };

    renderItem5 = () => {
        const vertical = 10
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
                        paddingVertical: vertical,
                        fontSize: UI.fontSizeNew.font_11,
                        marginRight: 15,
                        textAlign: 'center',
                        color: '#333333',
                        backgroundColor: '#fff',
                        flex: 1,
                        borderRadius: 5,
                    }}
                    onPress={() => {
                        const list = this.getList();
                        this.setState({ secondDataLsit: [] });
                    }}
                >
                    重置
                </Text>
                <Text
                    style={{
                        paddingVertical: vertical,
                        fontSize: UI.fontSizeNew.font_11,
                        textAlign: 'center',
                        color: '#fff',
                        backgroundColor: '#de2f31',
                        flex: 2,
                        borderRadius: 5,
                    }}
                    onPress={() => {
                        const list = this.getList();
                        this.setState({ secondDataLsit: list });
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
        let remittanceDetail = '';
        if (business1 === '汇缴分配') {
            remittanceDetail = '汇缴月份: ' + remittance;
        }
        const bottom = 14
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
                        marginTop: bottom,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            maxWidth: UI.size.screenWidth - 120 - 15 * 2,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        余额: ¥
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: UI.fontSizeNew.font_11,
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
                            maxWidth: 120,
                            fontSize: UI.fontSizeNew.font_11,
                            color: 'green',
                        }}
                    >
                        + {balance1}
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
                            maxWidth: UI.size.screenWidth - 120 - 15 * 2,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        {remittanceDetail}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: 120,
                            fontSize: UI.fontSizeNew.font_11,
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
                            maxWidth: UI.size.screenWidth - 120 - 15 * 2,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        业务发生日期: {business}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            textAlign: 'right',
                            maxWidth: 120,
                            fontSize: UI.fontSizeNew.font_11,
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
                        marginBottom: bottom,
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={{
                            maxWidth: UI.size.screenWidth - 15 * 2,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        缴款单位: {company}
                    </Text>
                </View>
            </View>
        );
    };

    renderFoot = (type = 0) => {
        return (
            <View key={"renderFoot" + type} style={{ paddingVertical: 10, backgroundColor: type === 0 ? '#fff' : 'transparent' }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        maxWidth: UI.size.screenWidth - 15 * 2,
                        fontSize: UI.fontSizeNew.font_11_5,
                        color: '#9d9d9d',
                    }}
                >
                    没有更多了
                </Text>
            </View>
        );
    };

    renderTitle = () => {
        return (
            <View key={"renderTitle"} style={{ marginTop: UI.size.statusBarHeight }}>
                <TitleViewNew
                    navigation={this.props.navigation}
                    showText={'公积金查询'}
                    onLoadEnd={this.onLoadEnd}
                />
            </View>
        );;
    };

    render() {
        if (!this.state.isShowContent) {
            return (
                <View style={{ width: '100%', height: '100%' }}>
                    {this.renderTitle()}
                </View>
            )
        }
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
                {this.state.isShowYear ? (
                    <DateSelectModel
                        selectYear={
                            this.state.selectYear === 0
                                ? this.state.secondThird
                                : this.state.secondFour
                        }
                        onDismiss={this.onDismiss}
                        onYearCall={this.onYearCall}
                    />
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {},
});
