import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';
import Checkbox from 'expo-checkbox';

export default function Withdraw() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });
  
  const reasons = [
    '서비스 이용 가능 지역이 아니에요.',
    '고객대응이 불만족스러워요.',
    '서비스 이용방법이 불편해요.',
    '서비스가 마음에 들지 않아요.',
    '개인정보 보안이 걱정돼요.',
    '기타',
  ];

  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const toggleCheckbox = (reason: string) => {
    setSelectedReasons(prev =>
      prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]
    );
  };

  const handleGoBack = () => {
    router.back();
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainLayout currentTab="mypage">
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
            <Text style={styles.headerTitle}>회원탈퇴</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Content */}
        <ScrollView style={styles.content}>
          <Text style={styles.title}>탈퇴 사유를 선택해 주세요</Text>
          {reasons.map(reason => (
            <TouchableOpacity key={reason} style={styles.checkboxContainer} onPress={() => toggleCheckbox(reason)}>
              <Checkbox
                value={selectedReasons.includes(reason)}
                onValueChange={() => toggleCheckbox(reason)}
                color={selectedReasons.includes(reason) ? '#1B72F5' : '#ccc'}
              />
              <Text style={styles.checkboxLabel}>{reason}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 다음 Btn */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.nextButton, selectedReasons.length === 0 && styles.nextButtonDisabled]}
            disabled={selectedReasons.length === 0}
            onPress={() => router.push('/withdraw_2')}
          >
            <Text style={styles.nextButtonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#333',
    marginLeft: 10,
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