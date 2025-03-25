import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

const { width, height } = Dimensions.get("window");

const eventBanners = [
  require('@/assets/images/event/event1.png'),
  require('@/assets/images/event/event2.png'),
  require('@/assets/images/event/event3.png'),
];

const notices = [
  { id: '1', title: '📢 새로운 세탁소가 오픈했습니다!', date: '2024.03.20' },
  { id: '2', title: '⚠️ 시스템 점검 안내 (3월 25일)', date: '2024.03.18' },
  { id: '3', title: '💡 세탁 꿀팁: 이불 빨래하는 법', date: '2024.03.15' },
  { id: '4', title: '🎁 친구 초대 이벤트 진행 중!', date: '2024.03.10' },
];

export default function Home() {
  const [fontsLoaded] = useFonts({
    "NotoSansKR-Regular": require("@/assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf"),
    "NotoSansKR-Medium": require("@/assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf"),
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventBanners.length);
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainLayout currentTab="home">
      <ScrollView style={styles.content}>
        {/* 1️⃣ 이벤트 배너 슬라이드 */}
        <View style={styles.section}>
          <ScrollView
            style={{ flexGrow: 1 }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {eventBanners.map((banner, index) => (
              <Image key={index} source={banner} style={styles.bannerImage} resizeMode="cover" />
            ))}
          </ScrollView>

          {/* 네비게이터 (현재 페이지 / 총 페이지) */}
          <View style={styles.navigator}>
            <Text style={styles.navigatorText}>{currentIndex + 1}</Text>
            <Text style={styles.navigatorTextRight}> | {eventBanners.length}</Text>
          </View>
        </View>

      {/* 2️⃣ 세탁 진행 현황 */}
        <View style={styles.washingCard}>
          <Image source={require('@/assets/images/washing.png')} style={styles.washingImage} />
          <View style={styles.washingTextContainer}>
            <Text style={styles.washingText1}>현재 세탁이 <Text style={styles.washingText2}>진행 중</Text> 입니다.</Text>
            <Text style={styles.washingText1}>약 <Text style={styles.washingText2}>XX분</Text> 뒤 완료될 예정입니다.</Text>
          </View>
          <TouchableOpacity style={styles.washingButton}>
              <Text style={styles.washingButtonText}>결제 내역 보기</Text>
              <Text style={styles.washingArrow}>{'>'}</Text> 
          </TouchableOpacity>
        </View>

        {/* 3️⃣ 무인 세탁소 서비스 안내 */}
        <View style={styles.service}>
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceText}>어떻게 사용하는 건지 모르겠다면?</Text>  
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceButtonText}>무인 세탁소 서비스 안내</Text>                
              <Text style={styles.serviceArrow}>{'>'}</Text> 
            </TouchableOpacity>
          </View>
          <Image source={require('@/assets/images/laundry-service.png')} style={styles.serviceImage} />
        </View>

        {/* 4️⃣ 공지사항 리스트 */}
        <View style={styles.noticeCard}>
          <View style={styles.noticeTitle}>
            <Text style={styles.noticeTitleText}>공지사항</Text>
            <TouchableOpacity style={styles.noticeButton}>
              <Text style={styles.noticeButtonText}>더보기</Text>
              <Text style={styles.noticeButtonArrow}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={notices}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.noticeItem}>
                <Text style={styles.noticeText}>{item.title}</Text>
                <Text style={styles.noticeDate}>{item.date}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  section: {
    flex: 1,
    width: "100%",
    height: height * 0.3,
    position: "relative",
  },
  bannerImage: {
    width: width,
    height: height * 0.3,
    resizeMode: "cover",
  },
  navigator: {
    position: "absolute",
    top: 10,
    right: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  navigatorText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  navigatorTextRight: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    textAlign: "center",
  },

  washingCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  washingImage: {
    width: 33,
    height: 33,
  },
  washingTextContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5
  },
  washingText1: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'left',
  },
  washingText2: {
    fontSize: 12,
    color: '#145CE1',
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'left',
  },
  washingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
  },
  washingButtonText: {
    color: '#777',
    fontSize: 11,
    fontFamily: 'NotoSansKR-Regular',
  },
  washingArrow: {
    marginLeft: 2,
    fontSize: 10, 
    color: '#777',
  },
  
  service: {
    backgroundColor: '#FFD943',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceTextContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    flex: 1, 
    marginLeft:10,
  },
  serviceText: {
    fontSize: 12,
    color: '#FF852E',
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'left',
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left'
  },
  serviceButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'NotoSansKR-Regular',
  },
  serviceArrow: {
    marginLeft: 2,
    fontSize: 20, 
    color: '#fff',
  },
  serviceImage: {
    width: 50,
    height: 50,
  },

  noticeCard: {
    padding: 10,
  },
  noticeTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 10,
  },
  noticeTitleText: {
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
  },
  noticeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  noticeText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
  },
  noticeDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    fontFamily: 'NotoSansKR-Regular',
  },
  noticeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noticeButtonText: {
    fontSize: 11,
    color: '#777',
  }
  ,
  noticeButtonArrow: {
    marginLeft: 2,
    fontSize: 10, 
    color: '#777',
  },
});