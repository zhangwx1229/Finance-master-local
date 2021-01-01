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
import filejson from '../../../../image/filename.json';
let font_12 = UI.fontSizeNew.font_12
export default class SearchView extends PureComponent {
    constructor() {
        super();
        this.state = {
            year: filejson.yearList[0],
            select_0: false,
            select_1: false,
            select_2: false,
            select_3: false,
            isShowYear: false,
        };
    }
    clickSearch = () => {
        this.setState({ isShowYear: true });
    };
    onYearCall = ({ year }) => {
        this.setState({ isShowYear: false, year: year })
    };
    onDismiss = () => {
        this.setState({ isShowYear: false })
    };
    clickSelect = (index) => {
        switch (index) {
            case 0:
                this.setState({ select_0: !this.state.select_0 });
                break;
            case 1:
                this.setState({ select_1: !this.state.select_1 });
                break;
            case 2:
                this.setState({ select_2: !this.state.select_2 });
                break;
            case 3:
                this.setState({ select_3: !this.state.select_3 });
                break;
            default:
                break;
        }
    };
    searchButton = () => {
        const { navigation } = this.props;
        navigation.navigate('SearchDetailView', { year: this.state.year })
    }
    renderYear = (year) => {
        return (
            <TouchableOpacity style={styles.click} onPress={this.clickSearch}>
                <View style={styles.contentBg}>
                    <Text style={[styles.subTitle, { fontSize: font_12 }]}>年度</Text>
                    <Text style={[styles.year, { fontSize: font_12 }]}>{year}</Text>
                    <Image style={styles.contentImage} source={Images.p4_9} />
                </View>
            </TouchableOpacity>
        );
    };
    renderItem = (index) => {
        const dsds = ['工资薪金', '劳务报酬', '稿酬', '特许权使用费'];
        let dss = null;
        switch (index) {
            case 0:
                dss = this.state.select_0;
                break;
            case 1:
                dss = this.state.select_1;
                break;
            case 2:
                dss = this.state.select_2;
                break;
            case 3:
                dss = this.state.select_3;
                break;
            default:
                break;
        }
        return (
            <TouchableOpacity
                style={styles.click}
                activeOpacity={1}
                onPress={() => {
                    this.clickSelect(index);
                }}
            >
                <View style={styles.itemBg}>
                    <Image
                        style={styles.itemImage}
                        source={dss ? Images.icon_select_yes : Images.icon_select_no}
                    />
                    <Text style={[styles.itemTitle, { fontSize: font_12 }]}>{dsds[index]}</Text>
                </View>
                {index < 3 ? (
                    <View
                        style={{ height: 0.5, marginLeft: 20, backgroundColor: '#d4d4d4' }}
                    />
                ) : null}
            </TouchableOpacity>
        );
    };
    render() {
        font_12 = UI.fontSizeNew.font_12
        const { navigation } = this.props;
        const { year, isShowYear } = this.state;
        return (
            <View style={styles.container}>
                <TitleView title={'收入纳税明细查询'} navigation={navigation} />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <Image style={styles.image} source={Images.search_image_0} />
                    {this.renderYear(year)}
                    <Image style={styles.image} source={Images.search_image_1} />
                    {this.renderItem(0)}
                    {this.renderItem(1)}
                    {this.renderItem(2)}
                    {this.renderItem(3)}
                    <TouchableOpacity onPress={this.searchButton}>
                        <Image style={styles.image_1} source={Images.search_image_button} />
                    </TouchableOpacity>
                </ScrollView>
                {isShowYear ? <DateSelectModel selectYear={year} onDismiss={this.onDismiss} onYearCall={this.onYearCall} /> : null}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f6f9' },
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
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 183) / 1440,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    contentBg: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    contentImage: {
        width: 23,
        height: 23,
        marginRight: 10,
        // color: 'blue',
    },
    subTitle: { marginLeft: 20, color: '#333333' },
    year: {
        position: 'absolute',
        left: UI.size.screenWidth / 2 - 40,
        color: '#333333',
    },
    itemBg: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    itemImage: { width: 25, height: 25, marginLeft: 18 },
    itemTitle: {
        color: '#333333',
        marginLeft: 10,
        alignSelf: 'center',
    },
});
