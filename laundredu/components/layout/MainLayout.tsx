import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation 훅 사용

interface MainLayoutProps {
  children: React.ReactNode;
  currentTab?: 'home' | 'search' | 'star' | 'mypage';
}

export function MainLayout({ children, currentTab = 'home' }: MainLayoutProps) {
  const navigation = useNavigation(); // useNavigation 훅을 사용하여 네비게이션 객체를 가져옵니다.

  const navigateTo = (screen) => {
    navigation.navigate(screen); // 화면 전환 함수
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Image 
            source={require('../../assets/images/laundu-text.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <View style={styles.headerRight}>
            <View style={styles.headerIcon}>
              <TouchableOpacity onPress={() => navigateTo('scan')}>
                <Image 
                  source={require('../../assets/images/scan.png')}
                  style={styles.scanIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerIcon}>
              <TouchableOpacity onPress={() => navigateTo('notifications')}>
                <Image 
                  source={require('../../assets/images/bell.png')}
                  style={styles.bellIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Main Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Bottom Navigation */}
      <SafeAreaView edges={['bottom']} style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigateTo('home')} style={styles.navItem}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/home.png')}
              style={[styles.navIcon, currentTab === 'home' && styles.navIconActive]}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.navText, currentTab === 'home' && styles.navTextActive]}>홈</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('search')} style={styles.navItem}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/search.png')}
              style={[styles.navIcon, currentTab === 'search' && styles.navIconActive]}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.navText, currentTab === 'search' && styles.navTextActive]}>지점 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('star')} style={styles.navItem}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/star.png')}
              style={[styles.navIcon, currentTab === 'star' && styles.navIconActive]}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.navText, currentTab === 'star' && styles.navTextActive]}>내 지점 관리</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('mypage')} style={styles.navItem}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/user.png')}
              style={[styles.navIcon, currentTab === 'mypage' && styles.navIconActive]}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.navText, currentTab === 'mypage' && styles.navTextActive]}>마이 페이지</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    backgroundColor: '#fff',
    paddingTop: 10, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    height: 62,
  },
  headerLogo: {
    height: 38,
    width: 128,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 12,
    padding: 4,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanIcon: {
    width: 30,
    height: 30,
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navIconActive: {
    tintColor: '#007AFF',
  },
  navText: {
    fontSize: 10,
    color: '#999999',
    marginTop: 2,
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'center',
  },
  navTextActive: {
    color: '#007AFF',
  },
});
