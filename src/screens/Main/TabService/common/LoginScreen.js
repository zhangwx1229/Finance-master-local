import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback,Text,TextInput, Image, StyleSheet, View } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
const header_h = 100;
const scroll_h = 180;
//北京通
export default class LoginScreen extends PureComponent {
    constructor() {
        super();
        this.state = { phoneNumber: '' };
    }

    clickSend = () => {
        // this.props.navigation.navigate('AccumulationInfoScreen');
    };

    onChangeText=(text) => {
        if (text.length===11) {
            this.setState({phoneNumber:text})
        }
    }
renderInput =()=>{
    return <View style={{ marginTop: 40}}>
        <View style={{ flexDirection: 'row',marginHorizontal: 25, }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: UI.fontSizeNew.font_12_5,
                        color: '#333',
                    }}
                >+86</Text>
                <View style={{ marginLeft: 20}}>
                    <TextInput
                        style={{ fontSize: UI.fontSizeNew.font_12_5, width: UI.size.screenWidth - 150, height: 40 }}
                        placeholder="请输入查询人"
                        // value={filejson.name + ',' + filejson.item_tmp_sb_0}
                        placeholderTextColor={'#00000059'}
                        onChangeText={this.onChangeText}
                    />
                </View>
            </View>
            <View style={{ marginLeft:25, width:UI.size.screenWidth-25*2,backgroundColor: '#33333322', height:1 }}/>
            <View style={{ flexDirection: 'row',justifyContent:'space-between',marginLeft: 31,marginRight: 25,marginTop: 10 }}>
                <TextInput
                    style={{ fontSize: UI.fontSizeNew.font_12_5, width: UI.size.screenWidth - 150, height: 40 }}
                    placeholder="请输入查询人"
                    // value={filejson.name + ',' + filejson.item_tmp_sb_0}
                    placeholderTextColor={'#00000059'}
                    onChangeText={(text) => {}}
                />
                <TouchableWithoutFeedback onPress={this.clickSend}>
                    <View style={{width: 80, height: 40,justifyContent:'center', backgroundColor: UI.color.tempColor}} >
                    <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: UI.fontSizeNew.font_12_5,
                        color: this.state.phoneNumber.length>0?'#333':'#33333322',
                    }}
                >发送短信</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ marginLeft:25, width:UI.size.screenWidth-25*2,backgroundColor: '#33333322', height:1 }}/>
        </View>
}

    render() {
        const wid = UI.size.screenWidth
        return <View style={styles.container}>
            <Image
        style={{
            marginTop:100,
            width: wid,
            height: (wid *304) / 1080,
        }}
        source={Images.icon_50}
    />
    {this.renderInput()}
    <Image
        style={{
            marginTop:10,
            width: wid,
            height: (wid *233) / 1080,
        }}
        source={Images.icon_51}
    />
    <Image
        style={{
            position:'absolute',bottom:0,
            width: wid,
            height: (wid *401) / 1080,
        }}
        source={Images.icon_52}
    />
    </View>;
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
