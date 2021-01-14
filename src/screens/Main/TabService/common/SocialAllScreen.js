import React, { Component } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import JJRefresh from '../../TabHomeNew/common/JJRefresh';
//办事
export default class SocialAllScreen extends Component {
    constructor() {
        super()
        this.state = { selectIndex: 0, isShowSelect: false }
    }

    clickBack = () => {
        // 点击进入社保
        this.props.navigation.pop()
    }

    clickSB = () => {
        // 点击进入社保
        this.props.navigation.navigate('SocialSecurityScreen')
    }
    clickGJJ = () => {
        // 点击进入公积金
        this.props.navigation.navigate('AccumulationScreenNew')
    }
    
    clickBDC = () => {
        // 点击进入不动产
        this.props.navigation.navigate('RealEstateSearchScreen')
    }

    onScroll = (y) => {
        const num = UI.size.screenWidth * 641 / 1080
        const num1 = num + UI.size.screenWidth * 1259 / 1080
        const num2 = num1 + UI.size.screenWidth * 699 / 1080 + UI.size.screenWidth * 1466 / 1080 + UI.size.screenWidth * 1941 / 1080
        if (y >= num) {
            if (!this.state.isShowSelect) {
                this.setState({ isShowSelect: true })
            }
        } else {
            if (this.state.isShowSelect) {
                this.setState({ isShowSelect: false })
            }
        }
        if (y >= num1) {
            if (y >= num2) {
                if (this.state.selectIndex !== 2) {
                    this.setState({ selectIndex: 2 })
                }
            } else {
                if (this.state.selectIndex !== 1) {
                    this.setState({ selectIndex: 1 })
                }
            }
        } else {
            if (this.state.selectIndex !== 0) {
                this.setState({ selectIndex: 0 })
            }
        }
        console.debug('======onScroll===', y, num, num1)
    }

    renderSelect = (tag) => {
        let selectView = <Image style={{
            width: UI.size.screenWidth,
            height: UI.size.screenWidth * 119 / 1080
        }} source={Images.icon_56} />
        if (this.state.selectIndex === 1) {
            selectView = <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 119 / 1080
            }} source={Images.icon_57} />
        } else if (this.state.selectIndex === 2) {
            selectView = <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 119 / 1080
            }} source={Images.icon_58} />
        }
        return <View key={tag ? '111' : '222'}>
            {selectView}
            <TouchableWithoutFeedback onPress={() => {
                this.setState({ selectIndex: 0 })
                if (this.refreshRef) {
                    const num = UI.size.screenWidth * 641 / 1080
                    this.refreshRef.scrollTo({
                        y: num,
                        animated: false,
                    })
                }
            }}>
                <View style={{ position: 'absolute', left: 10, width: 50, height: '100%', backgroundColor: UI.color.tempColor }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                this.setState({ selectIndex: 1 })
                const num = UI.size.screenWidth * 641 / 1080
                const num1 = num + UI.size.screenWidth * 1259 / 1080
                this.refreshRef.scrollTo({
                    y: num1,
                    animated: false,
                })
            }}>
                <View style={{ position: 'absolute', left: 10 + 50 + 20, width: 50, height: '100%', backgroundColor: UI.color.tempColor }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                this.setState({ selectIndex: 2 })
                const num = UI.size.screenWidth * 641 / 1080
                const num1 = num + UI.size.screenWidth * 1259 / 1080
                const num2 = num1 + UI.size.screenWidth * 699 / 1080 + UI.size.screenWidth * 1466 / 1080 + UI.size.screenWidth * 1941 / 1080
                this.refreshRef.scrollTo({
                    y: num2,
                    animated: false,
                })
            }}>
                <View style={{ position: 'absolute', left: 10 + (50 + 20) * 2, width: 50, height: '100%', backgroundColor: UI.color.tempColor }} />
            </TouchableWithoutFeedback>
        </View>
    }

    renderContent = () => {
        return <View style={{ backgroundColor: '#fff' }}>
            <View style={{ flex: 1 }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 641 / 1080
                }} source={Images.icon_31} />
                <TouchableWithoutFeedback onPress={this.clickSB}>
                    <View style={{ position: 'absolute', left: 20, bottom: 30, width: 70, height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{ position: 'absolute', left: 20 + 70 + 10, bottom: 30, width: 70, height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
            {this.renderSelect(true)}
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1259 / 1080
            }} source={Images.icon_59} />
            <View style={{ flex: 1 }}>
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1941 / 1080
            }} source={Images.icon_60} />
                <TouchableWithoutFeedback onPress={this.clickGJJ}>
                    <View style={{ position: 'absolute', right: 30, top: 200, width: UI.size.screenWidth/2-60, height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickBDC}>
                    <View style={{ position: 'absolute', left: 30, top: 200+70, width: UI.size.screenWidth/2-60,  height: 70, backgroundColor: UI.color.tempColor }} />
                </TouchableWithoutFeedback>
            </View>
           
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1466 / 1080
            }} source={Images.icon_62} />
            <Image style={{
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 699 / 1080
            }} source={Images.icon_63} />
            <Image style={{
                marginBottom: UI.size.screenWidth * (1080 - 699 + 119) / 1080 - 5 - (UI.size.screenWidth * 125) / 1080,
                width: UI.size.screenWidth,
                height: UI.size.screenWidth * 1518 / 1080
            }} source={Images.icon_61} />
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Image style={styles.header} source={Images.icon_30} />
                    <TouchableWithoutFeedback onPress={this.clickBack}>
                        <View style={{ position: 'absolute', left: 0, width: 30, height: 30, backgroundColor: UI.color.tempColor }} />
                    </TouchableWithoutFeedback>
                </View>
                <JJRefresh
                    ref={e => { this.refreshRef = e }}
                    selectIndex={this.state.selectIndex}
                    foot_H={0}
                    header_H={0}
                    contentView={this.renderContent}
                    onScroll={this.onScroll}
                />
                <View style={{ position: 'absolute', top: (UI.size.screenWidth * 125) / 1080, opacity: this.state.isShowSelect ? 1 : 0 }}>
                    {this.renderSelect()}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, marginTop: UI.size.statusBarHeight, backgroundColor: '#fff' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 125) / 1080,
    },
});
