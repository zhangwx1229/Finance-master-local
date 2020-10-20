import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Image, Text, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from './TitleView';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
const header_h = 100
const scroll_h = 180
//北京通
export default class SocialSecuritySearchScreen extends PureComponent {
    constructor() {
        super()
        this.data = [['养老', 18000, 2880, 1440], ['失业', 18060, 2880, 1440], ['工伤', 18030, 2880, 1440], ['医疗', 18040, 2880, 1440]]
    }

    clickSB = () => {

    }

    clickSBSearch = () => {
        this.props.navigation.navigate('SocialSecuritySearchScreen')
    }

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
                    张惟新
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
                    单位名称叔叔
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
                    缴费区县
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
                    marginVertical: 8,
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
        return <View style={{ flexDirection: 'row', marginVertical: 10 }}>
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
                    2020-01
                </Text>
                <Image style={{
                    marginTop: 6,
                    marginRight: 5,
                    width: 20,
                    height: 20
                }} source={Images.icon_26} />
            </View>

            <TouchableWithoutFeedback onPress={this.clickSBSearch}>
                <Image style={{
                    alignSelf: 'center',
                    marginLeft: 5,
                    width: 20 * 166 / 71,
                    height: 20,
                }} source={Images.icon_25} />
            </TouchableWithoutFeedback>
        </View>
    }

    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} type={1} imageComponent={() =>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 145) / 1080,
                }} source={Images.icon_23} />
            } />
        </View >
    };

    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                {this.renderContent()}
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
