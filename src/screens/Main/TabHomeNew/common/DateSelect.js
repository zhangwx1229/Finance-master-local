/*
 * @Descripttion:我的-->账单-->日期选择
 * @Author: ZhangShilei
 */
import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import {
    PickerData
} from './WheelPicker';
import BirthDayPicker from './BirthDayPicker';
import Images from '../../../../image';
import UI from '../../../../UI';
type Props = {
    cureentYear: Number,
    selectedYear: Number,
    onCancel: () => void,
    onSure: (dateInfo: DateInfo) => void,
};

const TAG = 'LV_DateSelect';
export default class DateSelect extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
        this.selectedYear = Math.ceil(props.selectedYear.slice(0, 4));
        this.selectedMonth = Math.ceil(props.selectedYear.slice(5, 7));
        const date = new Date();
        const year = date.getFullYear().toString();
        const yearLen = 10
        this.yearList = this.getYearList(yearLen, year)
        this.monthList = this.getMonthList()
        const { yearIndex, monthIndex, dayIndex } = this.getIndxForList()
        this.state = {
            yearIndex: yearIndex, monthIndex: monthIndex, dayIndex: dayIndex
        };
    }

    componentDidMount() {
        // this.timeout = setTimeout(() => {
        //     const {
        //         selectedYear
        //     } = this.props;
        //     if (selectedYear) {
        //         this.selectedYear = selectedYear;
        //     }
        //     let yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        //     if (yearIndex < 0) {
        //         this.selectedYear = 1995;
        //         yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        //     }

        //     this.setState({
        //         yearIndex
        //     });
        // });
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    getIndxForList = () => {
        let yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        let monthIndex = this.monthList.findIndex(item => item.value === this.selectedMonth);

        return { yearIndex: yearIndex >= 0 ? yearIndex : 0, monthIndex: monthIndex >= 0 ? monthIndex : 0 }
    }

    getYearList = (len, yearEnd) => {
        const yearMap = [];
        for (let index = 0; index < len; index++) {
            const year = yearEnd - len + index + 1;
            yearMap.push({
                index,
                value: year,
                text: `${year}年`
            });
        }
        return yearMap;
    };
    getMonthList = (len, yearEnd) => {
        const monthMap = [];
        for (let i = 1; i <= 12; i++) {
            monthMap.push({
                index: i - 1,
                value: i,
                text: i < 10 ? '0' + i + '月' : i + '月'
            });
        }
        return monthMap
    };


    onYearValueChanged = (item: PickerData) => {
        if (this.selectedYear === item.value) {
            return;
        }
        this.selectedYear = item.value;
    };

    onMonthValueChanged = (item: PickerData) => {
        if (this.selectedMonth === item.value) {
            return;
        }
        this.selectedMonth = item.value;

        const year = Math.ceil(this.selectedYear)
        const month = Math.ceil(this.selectedMonth)

        this.setState({ monthIndex: item.index })

    };


    onPressSure = () => {
        const {
            onSure
        } = this.props;
        if (onSure) {
            const dateInfo: DateInfo = {
                year: this.selectedYear,
                month: this.selectedMonth,
            };
            onSure(dateInfo);
        }
    };

    renderContent = () => {
        const {
            yearIndex, monthIndex, dayIndex
        } = this.state;
        const {
            onCancel
        } = this.props;
        return (<View>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.cancelButton}
                    onPress={onCancel}>
                    <Image style={{
                        marginRight: 5,
                        width: 15 * 93 / 46,
                        height: 15
                    }} source={Images.icon_27} />
                </TouchableOpacity>
                <Image style={{
                    marginRight: 5,
                    width: 18 * 205 / 53,
                    height: 18
                }} source={Images.icon_29} />
                <TouchableOpacity style={styles.sureButton}
                    onPress={this.onPressSure
                    }>
                    <Image style={{
                        // marginRight: 5,
                        width: 15 * 93 / 46,
                        height: 15
                    }} source={Images.icon_28} />
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: 0.5,
                    backgroundColor: '#9D9D9D'
                }} />
            </View>
            <View style={styles.pickerContainer}>
                <BirthDayPicker
                    selectedIndex={yearIndex}
                    datas={this.yearList}
                    onValueChanged={this.onYearValueChanged}
                />
                <BirthDayPicker
                    selectedIndex={monthIndex}
                    datas={this.monthList}
                    onValueChanged={this.onMonthValueChanged}
                />

            </View>
        </View>
        );
    };

    render() {
        return this.renderContent();
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cancelButton: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sureButton: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    touchImage: {
        width: 15 * 124 * UI.size.scale / 64,
        height: 15 * UI.size.scale
    },
});