import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
 
export default function FindPassword() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const [form, setForm] = useState({
    name: '',
    password: ''
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
          <Text style={styles.headerTitle}>아이디 찾기</Text>
          <View style={styles.headerRight} />
        </View>
      </SafeAreaView>

      <ScrollView 
        style={styles.content} 
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={styles.title}>이메일을 입력해 주세요</Text>

        <Text style={styles.inputText}>이메일</Text>
        <TextInput style={styles.input}  value={form.password} onChangeText={text => handleChange('password', text)} />
        <Text style={styles.inputText}>이름</Text>
        <TextInput style={styles.input}  value={form.name} onChangeText={text => handleChange('name', text)} />
        
        <Text style={styles.findPassword}>비밀번호는 "@@@@@"입니다</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.buttonLarge, !isFormValid && styles.buttonDisabled]} 
          disabled={!isFormValid}
          // 버튼 클릭시 값에 맞는 비밀번호 노출되는 코드 작성
          // onPress={}
        >
          <Text style={styles.buttonText}>비밀번호 찾기</Text>
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
  findPassword: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Medium',
    color: '#000000',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
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
