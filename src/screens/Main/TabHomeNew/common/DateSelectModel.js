import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-root-modal';
import UI from '../../../../UI';
import DateSelect from './DateSelect';
const TAG = 'DateSelectModel';
type Props = {
    visible: boolean,
    style: Object,
    children: Object,
    selectYear: Number,
    onDismiss: () => void,
    onYearCall: (year) => void,
};
const Title_H = (UI.size.screenWidth * 183) / 1440;
const Item_H = 40;

export default class DateSelectModel extends React.Component<Props> {
    renderChildrens = () => {
        const { style, onDismiss, onYearCall } = this.props;
        return <DateSelect selectedYear={this.props.selectYear} cureentYear={2020} onCancel={onDismiss} onSure={onYearCall} />

    };

    content = (onDismiss) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.disBG}
                    onPress={onDismiss}
                    activeOpacity={1}
                />
                <View style={styles.content}>{this.renderChildrens()}</View>
            </View>
        );
    };

    render() {
        const { style, onDismiss } = this.props;
        return (
            <Modal
                animationType={'slide'}
                visible
                transparent
                onDismiss={onDismiss}
                style={style}
            >
                {this.content(onDismiss)}
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    disBG: {
        width: '100%',
        height: '100%',
    },
    content: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 273,
        backgroundColor: '#fff',
    },
    touchImage: { width: 40, height: 20 },
});
