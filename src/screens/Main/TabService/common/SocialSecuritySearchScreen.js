import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Image, Text, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from './TitleView';
import DateSelectModel from '../../TabHomeNew/common/DateSelectModel';
import filejson from '../../../../image/filename.json';
const header_h = 100
const scroll_h = 180
//北京通
export default class SocialSecuritySearchScreen extends PureComponent {
    constructor(props) {
        super(props)
        const { route } = props;
        this.data = null;
        let year = '2020-01'
        if (route.params && route.params.selectYear) {
            year = route.params.selectYear
        }

        this.state = { isShowYear: false, year: year }
        this.data = [];
        this.info = []
        this.getData();
        this.oldDate = year
    }

    getData = () => {
        const { year } = this.state;
        const yearStr = year.slice(0, 4) + '年'
        const monthStr = year.slice(5, 5 + 2)
        for (let i = 0; i < filejson.detailedSB.length; i++) {
            const element = filejson.detailedSB[i];
            if (element.year === yearStr) {
                if (element.saveMoney.length > 0) {
                    for (let j = 0; j < element.saveMoney.length; j++) {
                        const itme = element.saveMoney[j];
                        if (itme.date === year) {
                            this.info = [itme.item_sb_2, itme.item_sb_3]

                            if (itme.item_sb_4 !== "") {//养老
                                this.data.push(['养老', itme.item_sb_4, itme.item_sb_5, itme.item_sb_6])
                            }
                            if (itme.item_sb_7 !== "") {//失业
                                this.data.push(['失业', itme.item_sb_7, itme.item_sb_8, itme.item_sb_9])
                            }
                            if (itme.item_sb_10 !== "") {//工伤
                                this.data.push(['工伤', itme.item_sb_10, itme.item_sb_11, itme.item_sb_12])
                            }
                            if (itme.item_sb_13 !== "") {//生育
                                this.data.push(['生育', itme.item_sb_13, itme.item_sb_14, itme.item_sb_15])
                            }
                            if (itme.item_sb_16 !== "") {//医疗
                                this.data.push(['医疗', itme.item_sb_16, itme.item_sb_17, itme.item_sb_18])
                            }
                            break
                        }
                    }
                }

            }
        }
    }

    clickDate = () => {
        this.setState({ isShowYear: true })
    }

    clickSBSearch = () => {
        if (this.oldDate !== this.state.year) {
            this.setState({ year: this.oldDate })
            this.props.navigation.push('SocialSecuritySearchScreen', { selectYear: this.state.year })
        }
    }

    onYearCall = ({ month, year }) => {
        let date = year
        if (month < 10) {
            date = date + '-0' + month
        } else {
            date = date + '-' + month
        }
        this.oldDate = this.state.year
        this.setState({ isShowYear: false, year: date })
    };

    onDismiss = () => {
        this.setState({ isShowYear: false })
    };

    renderUserInfo = () => {
        return <View style={{
            flexDirection: 'row', marginHorizontal: 10, borderWidth: 1, borderBottomWidth: 3, borderColor: '#9d9d9d62'
        }}>
            <View style={{
                marginLeft: 7, marginTop: 7, padding: 14, alignSelf: 'flex-start',
                borderWidth: 1, borderColor: '#9d9d9d42', backgroundColor: '#eee',
            }}>
                <Text
                    style={{
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#333333',
                    }}
                >
                    {filejson.name}
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        marginLeft: 10, marginTop: 7,
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#333333',
                    }}
                >
                    单位名称
                </Text>
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#9d9d9d',
                    }}
                >
                    {this.info[0]}
                </Text>
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#333333',
                    }}
                >
                    缴费区县
                </Text>
                <Text
                    style={{
                        marginLeft: 10, marginBottom: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#9d9d9d',
                    }}
                >
                    {this.info[1]}
                </Text>
            </View>
        </View >
    }

    renderItem = (info) => {
        return <View style={{
            marginHorizontal: 10, flexDirection: 'row',
            borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
        }}>
            <Text
                style={{
                    flex: 1,
                    fontSize: UI.fontSizeNew.font_11,
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: '#333333b2',
                }}
            >
                {info[0]}
            </Text>
            <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
            <Text
                style={{
                    flex: 1,
                    fontSize: UI.fontSizeNew.font_11,
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: '#333333b2',
                }}
            >
                {info[1]}
            </Text>
            <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
            <Text
                style={{
                    flex: 1,
                    fontSize: UI.fontSizeNew.font_11,
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: '#333333b2',
                }}
            >
                {info[2]}
            </Text>
            <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
            <Text
                style={{
                    flex: 1,
                    fontSize: UI.fontSizeNew.font_11,
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: '#333333b2',
                }}
            >
                {info[3]}
            </Text>
        </View>


    }

    renderCompanyInfo = () => {
        const items = [];
        for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            items.push(this.renderItem(element))
        }

        return <View style={{
            marginHorizontal: 10, marginTop: 10, borderWidth: 1, borderBottomWidth: 3, borderColor: '#9d9d9d42', backgroundColor: '#eee'
        }}>
            <View style={{
                marginTop: 7, marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderBottomWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 1,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333',
                        fontWeight: 'bold',
                    }}
                >
                    参加险种
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 1,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333',
                        fontWeight: 'bold',
                    }}
                >
                    缴费基数
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 1,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333',
                        fontWeight: 'bold',
                    }}
                >
                    单位缴费
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 1,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333',
                        fontWeight: 'bold',
                    }}
                >
                    个人缴费
                </Text>
            </View>
            {items}
            <Text
                style={{
                    fontSize: UI.fontSizeNew.font_10,
                    marginLeft: 10,
                    marginVertical: 11,
                    alignSelf: 'flex-start',
                    textAlign: 'center',
                    color: '#333333',
                }}
            >
                单位：元(保留两位小数)
                </Text>
        </View>
    }

    renderContent = () => {
        return <View >
            {this.renderSearch()}
            {this.renderUserInfo()}
            {this.renderCompanyInfo()}
        </View >
    }

    renderSearch = () => {
        return <View style={{ flexDirection: 'row', marginVertical: 13 }}>
            <Text
                style={{
                    marginHorizontal: 10,
                    alignSelf: 'center',
                    fontSize: UI.fontSizeNew.font_11,
                    textAlign: 'center',
                    color: '#333333',
                }}
            >
                选择年月
                </Text>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                width: UI.size.screenWidth * 0.4, borderWidth: 1,
                borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#9d9d9d',
                    }}
                >
                    {this.state.year}
                </Text>
                <TouchableWithoutFeedback onPress={this.clickDate}>
                    <Image style={{
                        marginTop: 6,
                        marginRight: 5,
                        width: 20,
                        height: 20
                    }} source={Images.icon_26} />
                </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={this.clickSBSearch}>
                <Image style={{
                    alignSelf: 'center',
                    marginLeft: 5,
                    width: 23 * 166 / 71,
                    height: 23,
                }} source={Images.icon_25} />
            </TouchableWithoutFeedback>
        </View>
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} type={2} imageComponent={() =>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 145) / 1080,
                }} source={Images.icon_23} />
            } />
        </View >
    };

    render() {
        const { isShowYear, year } = this.state;
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                {this.renderContent()}
                {isShowYear ? <DateSelectModel selectYear={year} onDismiss={this.onDismiss} onYearCall={this.onYearCall} /> : null}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 146) / 1080,
    },
});
