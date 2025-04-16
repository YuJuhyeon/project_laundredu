import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

export default function PaymentHistory() {
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('3개월');

  const handleGoBack = () => {
    router.back();
  };

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  if (!fontsLoaded) {
    return null;
  }

  // Sample payment history data
  const paymentHistory = [
    {
      id: 1,
      date: '2025.03.25',
      store: '강서구점',
      amount: '15,000',
      status: '결제완료',
    },
    {
      id: 2,
      date: '2025.03.20',
      store: '화곡점',
      amount: '22,000',
      status: '결제완료',
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
            <Text style={styles.headerTitle}>결제 내역</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* Filter Section */}
        <View style={styles.filterSection}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>{selectedPeriod} 전체 결제</Text>
            <TouchableOpacity style={styles.settingsButton} onPress={toggleFilterModal}>
              <Text style={styles.settingsText}>조회설정</Text>
              <Image 
                source={require('../assets/images/Expand_down.png')}
                style={styles.settingsIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={showFilterModal}
          onRequestClose={toggleFilterModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity 
              style={styles.modalOverlay} 
              activeOpacity={1}
              onPress={toggleFilterModal}
            />
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>조회 설정</Text>
                <TouchableOpacity onPress={toggleFilterModal}>
                  <Text style={styles.closeButton}>×</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.modalBody}>
                <View style={styles.separator} />
                <Text style={styles.filterLabel}>기간 선택</Text>
                <View style={styles.periodButtons}>
                  <TouchableOpacity 
                    style={[styles.periodButton, selectedPeriod === '3개월' && styles.periodButtonActive]}
                    onPress={() => setSelectedPeriod('3개월')}
                  >
                    <Text style={[styles.periodButtonText, selectedPeriod === '3개월' && styles.periodButtonTextActive]}>3개월</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.periodButton, selectedPeriod === '6개월' && styles.periodButtonActive]}
                    onPress={() => setSelectedPeriod('6개월')}
                  >
                    <Text style={[styles.periodButtonText, selectedPeriod === '6개월' && styles.periodButtonTextActive]}>6개월</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.periodButton, selectedPeriod === '1년' && styles.periodButtonActive]}
                    onPress={() => setSelectedPeriod('1년')}
                  >
                    <Text style={[styles.periodButtonText, selectedPeriod === '1년' && styles.periodButtonTextActive]}>1년</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity 
                  style={styles.confirmButton}
                  onPress={toggleFilterModal}
                >
                  <Text style={styles.confirmButtonText}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Payment History List */}
        {paymentHistory.length > 0 ? (
          <ScrollView style={styles.content}>
            {paymentHistory.map((payment) => (
              <View key={payment.id} style={styles.paymentCard}>
                <View style={styles.paymentHeader}>
                  <Text style={styles.dateText}>{payment.date}</Text>
                  <Text style={styles.statusText}>{payment.status}</Text>
                </View>
                <View style={styles.paymentDetails}>
                  <View style={styles.storeInfo}>
                    <Text style={styles.storeName}>{payment.store}</Text>
                  </View>
                  <Text style={styles.amountText}>{payment.amount}원</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>결제 내역이 없습니다.</Text>
          </View>
        )}
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
  filterSection: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterTitle: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 13,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
    marginRight: 4,
  },
  settingsIcon: {
    width: 12,
    height: 12,
    tintColor: '#666666',
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  paymentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Medium',
    color: '#007AFF',
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
  },
  amountText: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  emptyStateText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#999999',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'box-none',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 65,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 65,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
  },
  closeButton: {
    fontSize: 24,
    color: '#666666',
    padding: 5,
  },
  modalBody: {
    padding: 20,
    paddingTop: 0,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
    marginBottom: 8,
    marginTop: 8,
  },
  periodButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  periodButton: {
    width: 50,
    height: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  periodButtonText: {
    fontSize: 13,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  periodButtonTextActive: {
    color: '#FFFFFF',
  },
  confirmButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  confirmButtonText: {
    color: '#1A1A1A',
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
  },
});
