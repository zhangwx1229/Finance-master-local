import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback, TouchableOpacity,ScrollView
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../../TabHomeNew/common/TitleView';
import filejson from '../../../../image/filename.json';
import UnlockView from './UnlockView';

export default class MineLogInScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state={isCom:false}
        this.data = filejson['2020'];
    }

    componentWillUnmount() {
        this.isDestroy = true;
    }

    back = () => {
        this.props.navigation.pop()
    }

    onPressOne = () => {
        //登陆
        // this.props.navigation.navigate('MIneInfoDetailScreen');
    }

    onPressTwo = () => {}
    onComplete=()=>{
        this.setState({isCom:true})
    }

    renderPassword=()=>{
        return <View>
            <View style={styles.row}>
        <Text style={{ fontSize: UI.fontSizeNew.font_13, color: '#333',marginRight:30 }}>账号</Text>
        <TextInput
            style={[styles.input, { fontSize: UI.fontSizeNew.font_13 }]}
            placeholder="手机号码/证件号码"
            onChangeText={this.onUsernameChange}
        />
        <Image style={{alignSelf:'center',width:20,height:20}} source={Images.icon_18}/>
    </View>
    <View style={styles.line} />
    <View style={styles.row}>
        <Text style={{ fontSize: UI.fontSizeNew.font_13, color: '#333',marginRight:30 }}>密码</Text>
        <TextInput
            style={[styles.input, { fontSize: UI.fontSizeNew.font_13 }]}
            secureTextEntry={true}
            placeholder="请输入密码"
            onChangeText={this.onUsernameChange}
        />
    </View>
    <View style={styles.line} />
            </View>
    }

    render() {
        if (this.data === null) {
            return null
        }
        const {isCom}= this.state
        const view_w = UI.size.screenWidth-30
        const { navigation } = this.props;
        return (<View style={styles.container} >
            <TitleView title={'个人所得税'} navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={{alignSelf:'center',marginTop:50,marginBottom:60,width:100,height:100}} source={Images.icon_14}/>
            {this.renderPassword()}
            <View style={{marginTop:30}}>
            <UnlockView onComplete={this.onComplete}/>
            </View>
            <View style={{marginTop:20,flexDirection:'row',justifyContent:'flex-end'}}>
            <Image style={{marginRight:15,width:20*155/46,height:20}} source={Images.icon_17}/>
            </View>
            <View style={{marginTop:30,marginBottom:80,flexDirection:'row',justifyContent:'flex-end'}}>
            <Image style={{marginRight:15,width:view_w,height:view_w* 324/1001 }} source={isCom?Images.icon_20:Images.icon_15}/>
            <TouchableWithoutFeedback onPress={this.onPressOne}>
                <View style={{position:'absolute',right:15,top:10, width: view_w, height: 40 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onPressTwo}>
                <View style={{position:'absolute',right:15,bottom:10, width: view_w, height: 40 }} />
            </TouchableWithoutFeedback>
            </View>
            </ScrollView>
        </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        paddingHorizontal: 18,
        alignItems: 'center',
        backgroundColor: UI.color.white,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    line: { width: UI.size.screenWidth - 10 * 2, marginHorizontal: 10, height: 1, backgroundColor: '#f1f2f6' },
    button: {
        marginTop: 10,
        width: '100%',
    },
    footer: {
        marginTop: 50,
        flexDirection: 'row',
    },
    footetBtn: {
        paddingHorizontal: 20,
    },
    underLine: {
        borderBottomWidth: 1,
        borderColor: UI.color.black,
    },
    text: {
        color: UI.color.black,
    },
});