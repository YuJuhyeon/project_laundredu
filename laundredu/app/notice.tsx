import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Notice() {
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

  // Sample notice data
  const notices = [
    {
      id: 1,
      title: '[공지] 시스템 점검 안내 (2025년 3월 30일 19시~24시)',
      date: '2025.03.06',
    },
    {
      id: 2,
      title: '[공지] 시스템 점검 안내 (2025년 3월 30일 19시~24시)',
      date: '2025.03.06',
    },
    {
      id: 3,
      title: '[공지] 시스템 점검 안내 (2025년 3월 30일 19시~24시)',
      date: '2025.03.06',
    },
    {
      id: 4,
      title: '[공지] 시스템 점검 안내 (2025년 3월 30일 19시~24시)',
      date: '2025.03.06',
    },
    {
      id: 5,
      title: '[공지] 시스템 점검 안내 (2025년 3월 30일 19시~24시)',
      date: '2025.03.06',
    },
    {
      id: 6,
      title: '[공지] 시스템 점검 안내 (2025년 3월 30일 19시~24시)',
      date: '2025.03.06',
    },
  ];

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
            <Text style={styles.headerTitle}>공지사항</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Notice List */}
        <ScrollView style={styles.content}>
          {notices.map((notice, index) => (
            <TouchableOpacity 
              key={notice.id}
              style={[
                styles.noticeItem,
                index !== notices.length - 1 && styles.noticeItemBorder
              ]}
            >
              <View style={styles.noticeContent}>
                <Text style={styles.noticeTitle}>{notice.title}</Text>
                <Text style={styles.noticeDate}>{notice.date}</Text>
              </View>
              <Image 
                source={require('../assets/images/angle-left.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  },
  noticeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  noticeItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  noticeContent: {
    flex: 1,
  },
  noticeTitle: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    color: '#1A1A1A',
    lineHeight: 22,
    marginBottom: 4,
  },
  noticeDate: {
    fontSize: 13,
    fontFamily: 'NotoSansKR-Regular',
    color: '#999999',
  },
  arrowIcon: {
    width: 18,
    height: 18,
    transform: [{ rotate: '180deg' }],
    marginLeft: 8,
  },
});
