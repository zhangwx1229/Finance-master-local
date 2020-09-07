import React from 'react';
import { StyleSheet } from 'react-native';
import WheelPicker, { PickerData } from './WheelPicker';

type Props = {
    selectedIndex: number,
    datas: Array<PickerData>,
    onValueChanged: (item: PickerData) => void,
};
const TAG = 'LV_BirthDayPicker';
export default class BirthDayPicker extends React.Component<Props> {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const { selectedIndex, datas } = this.props;
        const { selectedIndex: newSelectedIndex, datas: newDatas } = nextProps;
        if (selectedIndex === newSelectedIndex && datas.length === newDatas.length) {
            return false;
        }
        return true;
    }

    onValueChanged = (item: PickerData) => {
        const { onValueChanged } = this.props;
        if (onValueChanged) {
            onValueChanged(item);
        }
    };

    render() {
        const { selectedIndex, datas } = this.props;
        return (
            <WheelPicker
                pickerStyle={styles.pickerStyle}
                selectedIndex={selectedIndex}
                datas={datas}
                onValueChanged={this.onValueChanged}
            />
        );
    }
}

const styles = StyleSheet.create({
    pickerStyle: { backgroundColor: '#FFFFFF' },
});
