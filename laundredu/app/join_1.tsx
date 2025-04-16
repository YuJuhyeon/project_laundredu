import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import Checkbox from 'expo-checkbox';

export default function Join1() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const terms = [
    { id: 1, text: '[필수] 만 14세 이상입니다.', required: true },
    { id: 2, text: '[필수] 서비스 이용약관에 동의합니다.', required: true },
    { id: 3, text: '[필수] 개인정보 처리방침에 동의합니다.', required: true },
    { id: 4, text: '[필수] 위치기반 서비스 이용약관에 동의합니다.', required: true },
    { id: 5, text: '[선택] 마케팅 정보 수신에 동의합니다.', required: false },
  ];

  const [selectedTerms, setSelectedTerms] = useState<number[]>([]);

  const toggleCheckbox = (id: number) => {
    setSelectedTerms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleAllCheck = () => {
    if (selectedTerms.length === terms.length) {
      setSelectedTerms([]);
    } else {
      setSelectedTerms(terms.map(term => term.id));
    }
  };

  const allChecked = selectedTerms.length === terms.length;
  const requiredChecked = terms
    .filter(term => term.required)
    .every(term => selectedTerms.includes(term.id));

  const handleGoBack = () => {
    router.back();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
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

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>서비스 이용을 위해{"\n"}필수 약관을 동의해 주세요</Text>

        {/* 모두 동의 */}
        <TouchableOpacity style={styles.allAgreeBox} onPress={toggleAllCheck}>
          <Checkbox
            value={allChecked}
            onValueChange={toggleAllCheck}
            color={allChecked ? '#1B72F5' : '#ccc'}
          />
          <Text style={styles.allAgreeText}>모두 동의</Text>
        </TouchableOpacity>

        {/* 개별 약관 */}
        {terms.map(term => (
          <TouchableOpacity key={term.id} style={styles.checkboxContainer} onPress={() => toggleCheckbox(term.id)}>
            <Checkbox
              value={selectedTerms.includes(term.id)}
              onValueChange={() => toggleCheckbox(term.id)}
              color={selectedTerms.includes(term.id) ? '#1B72F5' : '#ccc'}
            />
            <Text style={styles.checkboxLabel}>{term.text}</Text>
            <TouchableOpacity>
              <Text style={styles.moreText}>더보기 &gt;</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 다음 Btn */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton, !requiredChecked && styles.nextButtonDisabled]}
          disabled={!requiredChecked}
          onPress={() => router.push('/join_2')}
        >
          <Text style={styles.nextButtonText}>모두 동의</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
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
  allAgreeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 12,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  allAgreeText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'NotoSansKR-Medium',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#333',
    marginLeft: 10,
  },
  moreText: {
    fontSize: 14,
    color: '#999',
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  nextButtonDisabled: {
    backgroundColor: '#D1D1D1',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
