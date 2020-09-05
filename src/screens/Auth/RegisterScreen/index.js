/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:53:26
 * @LastEditTime: 2020-08-01 21:53:40
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/RegisterScreen/index.js
 */
import React, {PureComponent} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {Button, Container} from '../../../components';
import UI from '../../../UI';

export default class RegisterScreen extends PureComponent {
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.logoView}>
          <Image />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>账号:</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入账号"
            onChangeText={this.onUsernameChange}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>密码:</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入密码"
            textContentType="password"
            secureTextEntry
            onChangeText={this.onPwdChange}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>确认密码:</Text>
          <TextInput
            style={styles.input}
            placeholder="请再次输入密码"
            textContentType="password"
            secureTextEntry
            onChangeText={this.onPwdChange}
          />
        </View>
        <Button title="注册" onPress={this.login} style={styles.button} />
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
    width: 65,
  },
});
