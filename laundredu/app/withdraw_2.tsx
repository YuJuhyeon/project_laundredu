import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';
import Checkbox from 'expo-checkbox';

export default function Withdraw2() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });
  
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
    setTimeout(() => {
      router.push('/login');
    }, 300);
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
        <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>탈퇴 전 유의사항을{'\n'}다시 한번 확인해 주세요</Text>

        <View style={styles.warningBox}>
          <Text style={styles.warningText}>- 탈퇴 시 고객님께서 보유하셨던 포인트와 나의 친구 초대 코드, 이용내역이 즉시 삭제되며 복구할 수 없습니다.</Text>
          <Text style={styles.warningText}>- 탈퇴 후 동일 아이디로 신규 가입이 어려울 수 있습니다.</Text>
          <Text style={styles.warningText}>- 탈퇴 시 고객님의 정보는 전자상거래 등에서의 소비자 보호에 관한 법률에 의거한 고객정보 보호정책에 따라 관리됩니다.</Text>
        </View>

        {/* 체크박스 */}
        <View style={styles.checkboxContainer}>
          <Checkbox 
            value={isChecked} 
            onValueChange={setIsChecked} 
            color={isChecked ? '#1B72F5' : '#ccc'} 
          />
          <Text style={styles.checkboxLabel}>유의사항을 모두 확인하였으며, 이에 동의합니다.</Text>
        </View>
      </ScrollView>

        {/* 탈퇴하기 Btn */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.withdrawButton, !isChecked && styles.disabledButton]}
            disabled={!isChecked}
            onPress={handleOpenModal}
          >
            <Text style={styles.withdrawButtonText}>탈퇴하기</Text>
          </TouchableOpacity>
        </View>

        {/* BottomSheet modal */}
        <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="none" // 애니메이션 제거하여 즉시 노출
      >
        <TouchableOpacity
          style={styles.dimBackground}
          activeOpacity={1}
          onPress={handleCloseModal} // dim 클릭 시 모달 닫기
        />
        <View style={styles.bottomSheet}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>탈퇴가 정상적으로 완료되었습니다</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalMessage}>
            그동안 헌드리튜를 이용해 주셔서 감사합니다. {'\n'}
            앞으로 더 좋은 모습으로 찾아뵙겠습니다.
          </Text>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
    marginBottom: 30,
  },
  warningBox: {
    backgroundColor: '#F8F8F8',
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  withdrawButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#D1D1D1',
  },
  withdrawButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  // BottomSheet modal
  dimBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'NotoSansKR',
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  closeButton: {
    fontSize: 18,
    color: '#888',
  },
  modalMessage: {
    fontSize: 15,
    color: '#666',
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'left',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});