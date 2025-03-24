import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';
import { Link } from 'expo-router';

interface MenuItemProps {
  title: string;
  rightText?: string;
  onPress?: () => void;
}

interface UserStatusBadgeProps {
  text: string;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, rightText, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.menuText}>{title}</Text>
    <View style={styles.menuRight}>
      {rightText && <Text style={styles.menuRightText}>{rightText}</Text>}
      <IconSymbol size={18} name="chevron.right" color="#CCCCCC" />
    </View>
  </TouchableOpacity>
);

const UserStatusBadge: React.FC<UserStatusBadgeProps> = ({ text, isActive }) => (
  <View style={[styles.statusBadge, isActive && styles.statusBadgeActive]}>
    <Text style={[styles.statusBadgeText, isActive && styles.statusBadgeTextActive]}>{text}</Text>
  </View>
);

export default function MyPage() {
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainLayout currentTab="mypage">
      <ScrollView style={styles.content}>
        {/* User Status Section */}
        <View style={styles.userStatusSection}>
          <View style={styles.userStatusBackground}>
            <View style={styles.userStatusRow}>
              <View style={styles.userNameContainer}>
                <Text style={styles.userName}>홍길동 님</Text>
                <UserStatusBadge text="일반회원" isActive={true} />
              </View>
              <Link href="/edit-profile" asChild>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>개인정보 수정</Text>
                </TouchableOpacity>
              </Link>
            </View>
            <View style={styles.paymentRow}>
              <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentTitle}>전체 결제 내역</Text>
                <IconSymbol size={16} name="chevron.right" color="#CCCCCC" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentTitle}>전체 카드 관리</Text>
                <IconSymbol size={16} name="chevron.right" color="#CCCCCC" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <View style={styles.topBorder} />
          <MenuItem title="리뷰 관리" />
          <MenuItem title="친구 초대" rightText="5000P 받기" />
          <MenuItem title="혜택 및 쿠폰" />
          <MenuItem title="공지사항" />
          <MenuItem title="자주 묻는 질문" />
          <MenuItem title="브랜드 소개" />
        </View>

        {/* Customer Service Section */}
        <View style={styles.customerServiceSection}>
          <View style={styles.serviceRow}>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceTitle}>1:1문의</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceTitle}>전화문의</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.serviceTime}>고객센터 운영시간: 09:00 - 17:30 (주말/공휴일 휴무)</Text>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  userStatusSection: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  userStatusBackground: {
    flex: 1,
    height: 110,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 10,
  },
  userStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 26,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    color: '#000000',
    marginRight: 6,
    fontFamily: 'NotoSansKR-Medium',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBadgeActive: {
    backgroundColor: '#007AFF',
  },
  statusBadgeText: {
    fontSize: 11,
    color: '#666666',
    fontFamily: 'NotoSansKR-Regular',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  statusBadgeTextActive: {
    color: '#FFFFFF',
  },
  editButton: {
    width: 87,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 13,
    color: '#666666',
    fontFamily: 'NotoSansKR-Regular',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  paymentButton: {
    width: 150,
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  paymentTitle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'NotoSansKR-Regular',
  },
  menuSection: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 1,
  },
  topBorder: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: -1,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  menuText: {
    fontSize: 15,
    color: '#1A1A1A',
    fontFamily: 'NotoSansKR-Regular',
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuRightText: {
    fontSize: 15,
    color: '#007AFF',
    marginRight: 3,
    fontFamily: 'NotoSansKR-Regular',
  },
  customerServiceSection: {
    marginTop: 24,
    paddingHorizontal: 14,
    paddingBottom: 24,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  serviceButton: {
    flex: 1,
    height: 44,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  serviceTitle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'NotoSansKR-Medium',
    height: 18,
    lineHeight: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  serviceTime: {
    fontSize: 11,
    color: '#666666',
    fontFamily: 'NotoSansKR-Regular',
    includeFontPadding: false,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 4,
  },
});
