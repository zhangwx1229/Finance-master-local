/*
 * @Descripttion:我的-->账单-->日期选择
 * @Author: ZhangShilei
 */
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { PickerData } from './WheelPicker';
import BirthDayPicker from './BirthDayPicker';
import Images from '../../../../image';

type Props = {
    cureentYear: Number,
    selectedYear: Number,
    onCancel: () => void,
    onSure: (dateInfo: DateInfo) => void,
};

type State = {
    yearIndex: number, // 默认年份索引
};

const TAG = 'LV_DateSelect';
export default class DateSelect extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
        this.selectedYear = props.selectedYear;
        this.yearList = this.getYearList(2, props.cureentYear);
        const yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        this.state = { yearIndex: yearIndex };
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            const { selectedYear } = this.props;
            if (selectedYear) {
                this.selectedYear = selectedYear;
            }
            let yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
            if (yearIndex < 0) {
                this.selectedYear = 1995;
                yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
            }

            this.setState({ yearIndex });
        });
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    getYearList = (len, yearEnd) => {
        const yearMap = [];
        for (let index = 0; index < len; index++) {
            const element = yearEnd - len + index + 1;
            yearMap.push({ index, value: element, text: `${element}` });
        }
        return yearMap;
    };

    onYearValueChanged = (item: PickerData) => {
        if (this.selectedYear === item.value) {
            return;
        }
        this.selectedYear = item.value;
    };

    onPressSure = () => {
        const { onSure } = this.props;
        if (onSure) {
            const dateInfo: DateInfo = {
                year: this.selectedYear,
            };
            onSure(dateInfo);
        }
    };

    renderContent = () => {
        const { yearIndex } = this.state;
        const { onCancel } = this.props;
        return (
            <View >
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                        <Image style={styles.touchImage} source={Images.icon_date_cancel} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sureButton} onPress={this.onPressSure}>
                        <Image style={styles.touchImage} source={Images.icon_date_conform} />
                    </TouchableOpacity>
                    <View style={{position:'absolute',bottom:0,width:'100%',height:0.5,backgroundColor:'#9D9D9D'}}/>
                </View>
                <View style={styles.pickerContainer}>
                    <BirthDayPicker
                        pickerStyle={styles.pickerStyle}
                        selectedIndex={yearIndex}
                        datas={this.yearList}
                        onValueChanged={this.onYearValueChanged}
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
    loadingContainer: {
        width: '100%',
        height: 320,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: 264,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    headerContainer: {
        height: 44,
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
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    touchImage: {width: 15*124/64, height:15 },
});
