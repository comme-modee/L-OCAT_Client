import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Platform} from 'react-native'
import  * as KakaoLogin from '@react-native-seoul/kakao-login';

// svg
import Logo from '../../assets/svg/logo.svg';
import KakaoIcon from '../../assets/svg/kakaoIcon.svg';
import AppleIcon from '../../assets/svg/appleIcon.svg';

const LoginScreen = () => {

  const isIOS = Platform.OS === 'ios'
  
  const kakaoLogin = () => {
    KakaoLogin.login()
      .then((result) => {
        console.log("Login Success", JSON.stringify(result));
      })
      .catch((error) => {
        console.error(`Login Failed: ${error.code} - ${error.message}`);
      });
  }

  const appleLogin = () => {
    console.log('appleLogin')
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo}/>
      <Pressable style={{...styles.btn, backgroundColor: '#FEE500'}} onPress={kakaoLogin}>
        <KakaoIcon/>
        <Text style={{...styles.btnText, color: '#262200'}}>카카오 로그인</Text>
      </Pressable>

      {/* {isIOS &&  */}
      <Pressable style={{...styles.btn, backgroundColor: 'black', marginTop: 14}} onPress={appleLogin}>
        <AppleIcon/>
        <Text style={{...styles.btnText, color: "white"}}>애플 로그인</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 8
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    width: '78%'
  },
  logo: {
    marginBottom: 40
  }
})

export default LoginScreen;
