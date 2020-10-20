import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Image, Text, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from './TitleView';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
const header_h = 100
const scroll_h = 180
//北京通
export default class SocialSecurityScreen extends PureComponent {

    clickSB = () => {

    }

    clickGJJ = () => {
        this.props.navigation.navigate('AccumulationInfoScreen')
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
                <View style={{
                    marginLeft: 10, marginTop: 7, flexDirection: 'row'
                }}>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        性别：
                </Text>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#9d9d9d',
                        }}
                    >
                        男
                </Text>
                    <Text
                        style={{
                            marginLeft: 30,
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        民族：
                </Text>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#9d9d9d',
                        }}
                    >
                        汉族
                </Text>
                </View>
                <View style={{
                    marginLeft: 10, marginTop: 4, flexDirection: 'row'
                }}>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        出生日期：
                </Text>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#9d9d9d',
                        }}
                    >
                        男
                </Text>
                </View>
                <View style={{
                    marginLeft: 10, marginTop: 4, marginBottom: 10, flexDirection: 'row'
                }}>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#333333',
                        }}
                    >
                        身份证号：
                </Text>
                    <Text
                        style={{
                            fontSize: UI.fontSizeNew.font_11,
                            color: '#9d9d9d',
                        }}
                    >
                        男
                </Text>
                </View>
            </View>
        </View>
    }

    renderCompanyInfo = () => {
        return <View style={{
            marginHorizontal: 10, marginTop: 10, borderWidth: 1, borderBottomWidth: 3, borderColor: '#9d9d9d42', backgroundColor: '#eee'
        }}>
            <View style={{
                marginTop: 20, paddingHorizontal: 25, paddingVertical: 6, alignSelf: 'flex-start', backgroundColor: '#53a0e7',
            }}>
                <Text
                    style={{
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#fff',
                    }}
                >
                    参保单位
                </Text>
            </View>
            <Text
                numberOfLines={2}
                style={{
                    marginHorizontal: 5,
                    marginTop: 6,
                    fontWeight: 'bold',
                    fontSize: UI.fontSizeNew.font_12,
                    color: '#333333',
                }}
            >
                但大困境但大困境但大困境但大
                </Text>
            <View style={{
                marginTop: 17, paddingHorizontal: 25, paddingVertical: 6, alignSelf: 'flex-start', backgroundColor: '#53a0e7',
            }}>
                <Text
                    style={{
                        fontSize: UI.fontSizeNew.font_11,
                        color: '#fff',
                    }}
                >
                    参保区县
                </Text>
            </View>
            <Text
                numberOfLines={2}
                style={{
                    marginHorizontal: 5,
                    marginTop: 7,
                    fontWeight: 'bold',
                    fontSize: UI.fontSizeNew.font_12,
                    color: '#333333',
                }}
            >
                但大困境但大困境但大困境但大
                </Text>
            <View style={{
                marginTop: 10, marginHorizontal: 10, flexDirection: 'row',
                borderBottomWidth: 0.5, borderWidth: 1, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'right',
                        color: '#333333b2',
                    }}
                >
                    缴费人员类别：
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 8,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    外埠农村动力
                </Text>
            </View>
            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'right',
                        color: '#333333b2',
                    }}
                >
                    医疗参保人员类别：
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 8,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    在职职工
                </Text>
            </View>

            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'right',
                        color: '#333333b2',
                    }}
                >
                    养老保险实际缴费年限：
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 8,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    4年7个月
                </Text>
            </View>

            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 10,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'right',
                        color: '#333333b2',
                    }}
                >
                    医疗保险实际缴费年限：
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 8,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    4年7个月
                </Text>
            </View>
            <View style={{
                marginTop: 20, paddingHorizontal: 30, paddingVertical: 6, alignSelf: 'flex-start', backgroundColor: '#53a0e7',
            }}>
                <Text
                    style={{
                        fontSize: UI.fontSizeNew.font_12,
                        color: '#fff',
                    }}
                >
                    申报工资
                </Text>
            </View>
            <Text
                numberOfLines={2}
                style={{
                    marginHorizontal: 5,
                    marginTop: 5,
                    fontWeight: 'bold',
                    fontSize: UI.fontSizeNew.font_12,
                    color: '#333333',
                }}
            >
                申报月均工资收入(元)：31000
                </Text>
            <View style={{
                marginTop: 7, marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderBottomWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 4,
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
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333',
                        fontWeight: 'bold',
                    }}
                >
                    险种状态
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 5,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333',
                        fontWeight: 'bold',
                    }}
                >
                    缴费基数(元)
                </Text>
            </View>
            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    养老
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    (正常)缴费
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 5,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    30000
                </Text>
            </View>

            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    失业
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    (正常)缴费
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 5,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    30000
                </Text>
            </View>
            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    工伤
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    (正常)缴费
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 5,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    30000
                </Text>
            </View>
            <View style={{
                marginHorizontal: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    生育
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    (正常)缴费
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 5,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    30000
                </Text>
            </View>
            <View style={{
                marginHorizontal: 10, marginBottom: 10, flexDirection: 'row',
                borderWidth: 1, borderTopWidth: 0.5, borderColor: '#9d9d9d42', backgroundColor: '#fff',
            }}>
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    医疗
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 4,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2',
                    }}
                >
                    (正常)缴费
                </Text>
                <View style={{ width: 1, height: 35, backgroundColor: '#9d9d9d42' }} />
                <Text
                    style={{
                        flex: 5,
                        fontSize: UI.fontSizeNew.font_11,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: '#333333b2b2',
                    }}
                >
                    30000
                </Text>
            </View>
        </View>
    }

    renderContent = () => {
        return <View >
            <View>
                <Image style={{
                    marginTop: 18,
                    marginBottom: 14,
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 424 / 1080
                }} source={Images.icon_24} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{
                        position: 'absolute', right: 10, top: 16,
                        width: (UI.size.screenWidth - 10 * 4) / 3, height: (UI.size.screenWidth * 424 / 1080 - 20) / 2, backgroundColor: 'red'
                    }} />
                </TouchableWithoutFeedback>
            </View>
            {this.renderUserInfo()}
            {this.renderCompanyInfo()}
        </View >
    }

    footView = () => {
        return <View style={{ marginVertical: 8 }}>
            <Text
                style={{
                    fontSize: UI.fontSizeNew.font_11,
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: '#333333b2',
                }}
            >
                北京市人力资源和社会保障局    提供服务
    </Text>
        </View>
    }
    renderTitle = () => {
        return <View style={{ marginTop: UI.size.statusBarHeight }}>
            <TitleView navigation={this.props.navigation} imageComponent={() =>
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
                <JJRefresh
                    foot_H={0}
                    header_H={0}
                    backgroundColor={'#fff'}
                    contentView={this.renderContent}
                    footView={this.footView}
                />
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
