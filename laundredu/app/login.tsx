import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleOwnerLogin = () => {
    // 점주전용 로그인 링크 추가
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
          
        {/* Admin Exclusive*/}
        <TouchableOpacity style={styles.ownerButton} onPress={handleOwnerLogin}>
          <Text style={styles.ownerText}>점주 전용</Text>
        </TouchableOpacity>

        {/* Logo */}
        <Image source={require('../assets/images/main_icon.png')} style={styles.logo} />

        {/* ID Input Field */}
        <TextInput
          style={styles.input}
          placeholder="아이디 입력"
          value={id}
          onChangeText={setId}
        />
        
        {/* Password Input Field */}
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* 로그인 버튼 */}
        <TouchableOpacity style={styles.loginButton} onPress={() => console.log('로그인 시도')}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        {/* Login Additional Function */}
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => router.push('/join_1')}>
            <Text style={styles.linkText}>회원가입</Text>
          </TouchableOpacity>
          <Text style={styles.separator}> | </Text>
          <TouchableOpacity onPress={() => router.push('/find-id')}>
            <Text style={styles.linkText}>아이디 찾기</Text>
          </TouchableOpacity> 
          <Text style={styles.separator}> | </Text>
          <TouchableOpacity onPress={() => router.push('/find-password')}>
            <Text style={styles.linkText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        
        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Social Login area */}
        <Text style={styles.easyLoginText}>간편 로그인</Text>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/images/kakao.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/naver.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  ownerButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  ownerText: {
    fontSize: 14,
    color: '#555',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 127,
    height: 159,
    marginBottom: 70,
  },
  input: {
    fontSize: 14,
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#2D6FF7',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },  
  linkContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  linkText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'NotoSansKR',
  },
  separator: {
    color: '#999',
    marginHorizontal: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginTop: 20,
    marginBottom: 5,
  },  
  easyLoginText: {
    fontSize: 15,
    color: '#666',
    marginTop: 30,
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});
