import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Benefits() {
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
            <Text style={styles.headerTitle}>혜택 및 쿠폰</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Content */}
        <ScrollView style={styles.content}>
          {/* Membership Card */}
          <TouchableOpacity style={styles.membershipCard}>
            <View style={styles.membershipContent}>
              <View>
                <Text style={styles.membershipTitle}>LAUNDU</Text>
                <Text style={styles.membershipSubtitle}>Membership</Text>
              </View>
              <Text style={styles.membershipDescription}>구매실적과 등급에 따라{'\n'}매월 받는 특별한 혜택</Text>
              <Image 
                source={require('../assets/images/angle-left.png')} 
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity>

          {/* 7% Discount Card */}
          <View style={styles.benefitCard}>
            <View style={styles.discountSection}>
              <Text style={styles.discountAmount}>7%</Text>
              <Text style={styles.discountLabel}>discount</Text>
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>매주 수요일{'\n'}크리닝 데이</Text>
              <Text style={styles.benefitDescription}>수요일은 밑반 뺄래하는 날!{'\n'}크리닝 데이 쿠폰과 함께 시작~</Text>
            </View>
          </View>

          {/* 15% Discount Card */}
          <View style={styles.benefitCard}>
            <View style={styles.discountSection}>
              <Text style={styles.discountAmount}>15%</Text>
              <Text style={styles.discountLabel}>discount</Text>
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>1년에 한번!{'\n'}생일 축하 쿠폰</Text>
              <Text style={styles.benefitDescription}>고객님의 특별한 날을 맞이해{'\n'}LAUNDU가 준비한 선물</Text>
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
  arrowIcon: {
    width: 18,
    height: 18,
    transform: [{ rotate: '180deg' }],
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
  membershipCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    borderRadius: 8,
    height: 110,
  },
  membershipContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  membershipTitle: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Medium',
    color: '#007AFF',
    lineHeight: 24,
  },
  membershipSubtitle: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#007AFF',
    lineHeight: 16,
    marginTop: -2,
  },
  membershipDescription: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
    lineHeight: 20,
  },
  benefitCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    borderRadius: 8,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  discountSection: {
    width: 80,
  },
  discountAmount: {
    fontSize: 32,
    fontFamily: 'NotoSansKR-Medium',
    color: '#007AFF',
    lineHeight: 36,
  },
  discountLabel: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#007AFF',
    lineHeight: 16,
    marginTop: -4,
  },
  benefitContent: {
    flex: 1,
    marginLeft: 16,
  },
  benefitTitle: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    color: '#007AFF',
    lineHeight: 22,
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
    lineHeight: 20,
  },
});
