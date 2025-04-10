import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

export default function EditProfile() {
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

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
            <Text style={styles.headerTitle}>회원 정보</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Form Content */}
        <ScrollView style={styles.content}>
          <View style={styles.card}>
            {/* ID (Email) */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>아이디(이메일)</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>a@naver.com</Text>
              </View>
            </View>

            {/* Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>이름</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>김아름</Text>
              </View>
            </View>

            {/* Phone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>휴대폰번호</Text>
              <View style={styles.valueRow}>
                <Text style={styles.value}>010-1234-5678</Text>
                <TouchableOpacity style={styles.changeButton}>
                  <Text style={styles.changeButtonText}>변경</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Birth Date */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>생년월일</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>2000.00.00</Text>
              </View>
            </View>

            {/* Address */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>주소</Text>
              <View style={styles.valueRow}>
                <Text style={styles.value}>서울시 강서구 화곡역</Text>
                <TouchableOpacity style={styles.changeButton}>
                  <Text style={styles.changeButtonText}>변경</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  inputGroup: {
    marginBottom: 32,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 22,
  },
  valueContainer: {
    height: 22,
    marginTop: 4,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#999999',
    lineHeight: 22,
  },
  value: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Regular',
    color: '#1A1A1A',
    lineHeight: 22,
    flex: 1,
  },
  changeButton: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 8,
    width: 55,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButtonText: {
    fontSize: 13,
    fontFamily: 'NotoSansKR-Regular',
    color: '#007AFF',
    includeFontPadding: false,
    lineHeight: 13,
    paddingTop: 6,
  },
});