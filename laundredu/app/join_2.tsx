import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Join2() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birthDate: '',
    address: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(form).every(value => value.trim() !== '');
    setIsFormValid(isValid);
  }, [form]);

  const handleChange = (key: string, value: string) => {
    if (!key) return; // key가 없으면 실행하지 않음
    setForm((prev) => ({
      ...prev,
      [key]: value ?? "", // value가 undefined일 경우 빈 문자열로 설정
    }));
  };
  

  const handleGoBack = () => {
    router.back();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <SafeAreaView edges={['top']} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image
              source={require('../assets/images/angle-left.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>회원가입</Text>
          <View style={styles.headerRight} />
        </View>
      </SafeAreaView>

      <ScrollView 
        style={styles.content} 
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={styles.title}>계정 정보를 입력해 주세요</Text>

        <Text style={styles.inputText}>이메일</Text>
        <View style={styles.emailContainer}>
          <TextInput 
            style={[styles.input, { flex: 1 }]} 
            value={form.email} 
            onChangeText={text => handleChange('email', text)} 
          />
          <TouchableOpacity style={styles.buttonSmall}><Text>중복확인</Text></TouchableOpacity>
        </View>
        <Text style={styles.inputText}>비밀번호</Text> 
        <TextInput style={styles.input}  secureTextEntry value={form.password} onChangeText={text => handleChange('password', text)} />
        <Text style={styles.inputText}>비밀번호 확인</Text>
        <TextInput style={styles.input}  secureTextEntry value={form.confirmPassword} onChangeText={text => handleChange('confirmPassword', text)} />
        <Text style={styles.inputText}>이름</Text>
        <TextInput style={styles.input}  value={form.name} onChangeText={text => handleChange('name', text)} />
        <Text style={styles.inputText}>휴대폰 번호</Text>
        <TextInput style={styles.input}  value={form.phone} onChangeText={text => handleChange('phone', text)} />
        <Text style={styles.inputText}>생년월일</Text>
        <TextInput style={styles.input}  value={form.birthDate} onChangeText={text => handleChange('birthDate', text)} />
        <Text style={styles.inputText}>주소</Text>
        <View style={styles.addressContainer}>
          <TextInput 
            style={[styles.input, { flex: 1 }]} 
            value={form.address} 
            onChangeText={text => handleChange('address', text)} 
          />
          <TouchableOpacity style={styles.buttonSmall}><Text>주소검색</Text></TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.buttonLarge, !isFormValid && styles.buttonDisabled]} 
          disabled={!isFormValid}
          onPress={() => router.push('/join_3')}
        >
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
  },
  header: { 
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderBottomColor: '#EEEEEE',
  },
  headerContent: { 
    height: 44,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
    height: 44,
    justifyContent: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
    lineHeight: 24,
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
    marginTop: 50,
    marginBottom: 40,
  },
  inputText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR',
    color: '#000000',
    marginBottom: 10,
  },
  input: { 
    fontSize: 14,
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  emailContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  addressContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  buttonSmall: { 
    backgroundColor: '#EAEAEA', 
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    height: 45,
    borderRadius: 5, 
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: { 
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonLarge: { 
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: { 
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});
