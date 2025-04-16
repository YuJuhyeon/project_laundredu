import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

export default function CardManagement() {
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const handleGoBack = () => {
    router.back();
  };

  const handleAddCard = () => {
    // Add card registration logic here
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
            <Text style={styles.headerTitle}>카드 관리</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Content */}
        <ScrollView style={styles.content}>
          {/* Add Card Button */}
          <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
            <View style={styles.iconContainer}>
              <Image 
                source={require('../assets/images/Add_ring_duotone.png')}
                style={styles.plusIcon}
              />
            </View>
            <Text style={styles.addCardText}>카드 추가하기</Text>
          </TouchableOpacity>

          {/* Payment Methods Section */}
          <View style={styles.paymentMethodsCard}>
            <View style={styles.paymentMethod}>
              <View style={styles.paymentLogos}>
                <Image 
                  source={require('../assets/images/pay.png')}
                  style={styles.paymentLogo}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.paymentDescription}>
                아래 카드 등록 후{'\n'}간편 결제로 세탁/건조하실 수 있어요
              </Text>
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
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 12,
    borderRadius: 8,
    height: 110,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  addCardText: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Regular',
    color: '#1A1A1A',
    marginLeft: 12,
  },
  paymentMethodsCard: {
    backgroundColor: '#EEEEEE',
    marginTop: 12,
    padding: 20,
    borderRadius: 8,
    height: 110,
  },
  paymentMethod: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentLogos: {
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentLogo: {
    width: 66,
    height: 66,
  },
  paymentDescription: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
    lineHeight: 20,
    marginLeft: 16,
  },
});
