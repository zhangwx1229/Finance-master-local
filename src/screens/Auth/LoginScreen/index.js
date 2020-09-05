/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:53:01
 * @LastEditTime: 2020-08-06 23:42:26
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/LoginScreen/index.js
 */
import React, {PureComponent} from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';
import UI from '../../../UI';
import {Button, Container} from '../../../components';
import {dispatch} from '../../../redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class LoginScreen extends PureComponent {
  username = '';
  pwd = '';

  onUsernameChange = (text) => {
    console.log('text', text);
    this.username = text.trim();
  };

  onPwdChange = (text) => {
    console.log('text', text);
    this.pwd = text.trim();
  };

  login = () => {
    dispatch('UPDATE_PROFILE', {signup: true});
  };

  register = () => {
    const {navigation} = this.props;
    navigation.navigate('Register');
  };

  forgetPwd = () => {
    const {navigation} = this.props;
    navigation.navigate('Forget');
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.logoView}>
          <Image />
        </View>
        <View style={styles.row}>
          <Text>账号:</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入账号"
            onChangeText={this.onUsernameChange}
          />
        </View>
        <View style={styles.row}>
          <Text>密码:</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入密码"
            textContentType="password"
            secureTextEntry
            onChangeText={this.onPwdChange}
          />
        </View>
        <Button title="登录" onPress={this.login} style={styles.button} />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footetBtn} onPress={this.register}>
            <View style={styles.underLine}>
              <Text style={styles.text}>注册账号</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footetBtn} onPress={this.forgetPwd}>
            <View style={styles.underLine}>
              <Text style={styles.text}>忘记密码</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logoView: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    marginBottom: 30,
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
