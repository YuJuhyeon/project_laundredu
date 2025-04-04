import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

type TabType = '문의 및 제안' | '불만족 접수';

export default function Inquiry() {
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const [activeTab, setActiveTab] = useState<TabType>('문의 및 제안');

  const handleGoBack = () => {
    router.back();
  };

  const handleNewInquiry = () => {
    // Handle new inquiry creation
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
            <Text style={styles.headerTitle}>1:1 문의</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[
              styles.tab, 
              activeTab === '문의 및 제안' && styles.activeTab
            ]}
            onPress={() => setActiveTab('문의 및 제안')}
          >
            <Text style={[
              styles.tabText,
              activeTab === '문의 및 제안' && styles.activeTabText
            ]}>문의 및 제안</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.tab, 
              activeTab === '불만족 접수' && styles.activeTab
            ]}
            onPress={() => setActiveTab('불만족 접수')}
          >
            <Text style={[
              styles.tabText,
              activeTab === '불만족 접수' && styles.activeTabText
            ]}>불만족 접수</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.content}>
          {/* Empty state message */}
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>문의 내역이 없습니다.</Text>
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleNewInquiry}
          >
            <Text style={styles.submitButtonText}>문의 등록하기</Text>
          </TouchableOpacity>
        </View>
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
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  tab: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    color: '#999999',
  },
  activeTabText: {
    color: '#007AFF',
    fontFamily: 'NotoSansKR-Medium',
  },
  content: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    color: '#999999',
  },
  bottomContainer: {
    padding: 20,
  },
  submitButton: {
    height: 52,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    color: '#FFFFFF',
  },
});
