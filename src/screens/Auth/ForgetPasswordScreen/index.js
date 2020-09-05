import React, {PureComponent} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {Button, Container} from '../../../components';
import UI from '../../../UI';

export default class ForgetPasswordScreen extends PureComponent {
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
            placeholder="请输入验证码"
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
          <Button title="获取验证码" />
        </View>

        <Button title="确认" onPress={this.login} style={styles.button} />
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
