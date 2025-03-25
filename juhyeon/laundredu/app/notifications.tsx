import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { MainLayout } from '@/components/layout/MainLayout';

// 알림 데이터 샘플
const notices = [
  { id: '1', type: 'payment', title: '결제 완료 알림', date: '2024.03.20', detail: '세탁 서비스 결제가 완료되었습니다.' },
  { id: '2', type: 'washing', title: '세탁 완료 알림', date: '2024.03.21', detail: '세탁이 완료되었습니다. 픽업을 하세요.' },
  { id: '3', type: 'notification', title: '즐겨찾기 매장 공지', date: '2024.03.19', detail: '즐겨찾기 매장에 새로운 세탁 서비스가 추가되었습니다.' },
  { id: '4', type: 'washing', title: '세탁 진행 중 알림', date: '2024.03.18', detail: '세탁이 진행 중입니다.' },
  { id: '5', type: 'payment', title: '결제 실패 알림', date: '2024.03.17', detail: '세탁 서비스 결제에 실패했습니다.' },
  { id: '6', type: 'event', title: '이벤트 안내', date: '2024.03.16', detail: '이번 주말 세탁소 이벤트가 진행됩니다.' },
];

export default function NotificationPage() {
  const [filteredNotices, setFilteredNotices] = useState(notices);
  const [activeTab, setActiveTab] = useState('all'); // 기본 탭은 전체 탭
  const [selectedNoticeIds, setSelectedNoticeIds] = useState([]);

  // 알림 클릭 시 배경 색 변경
  const toggleSelection = (id) => {
    setSelectedNoticeIds((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((noticeId) => noticeId !== id); // 이미 선택된 알림은 선택 해제
      } else {
        return [...prevSelected, id]; // 새로 선택한 알림은 추가
      }
    });
  };

// 탭 선택 처리 함수
const handleTabChange = (tab) => {
  setActiveTab(tab);
  if (tab === 'all') {
    setFilteredNotices(notices);
  } else if (tab === 'notification') {
    setFilteredNotices(
      notices.filter((notice) => notice.type === 'notification' || notice.type === 'event')
    );
  } else {
    setFilteredNotices(notices.filter((notice) => notice.type === tab));
  }
};

  // 전체 선택 처리 함수
  const selectAllNotices = () => {
    if (selectedNoticeIds.length === filteredNotices.length) {
      setSelectedNoticeIds([]); // 이미 모든 알림이 선택되었으면, 선택 해제
    } else {
      const allIds = filteredNotices.map((notice) => notice.id);
      setSelectedNoticeIds(allIds); // 모든 알림 선택
    }
  };

  // 알림 삭제 함수
  const deleteSelectedNotifications = () => {
    if (selectedNoticeIds.length === 0) {
      Alert.alert("삭제 오류", "선택한 알림이 없습니다.");
      return;
    }

    Alert.alert(
      "알림 삭제",
      "선택한 알림을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          onPress: () => {
            const remainingNotices = notices.filter(
              (notice) => !selectedNoticeIds.includes(notice.id)
            );
            setFilteredNotices(remainingNotices);
            setSelectedNoticeIds([]); // 삭제 후 선택 상태 초기화
          },
        },
      ]
    );
  };

  // 알림 확인 처리 함수
  const confirmSelectedNotifications = () => {
    if (selectedNoticeIds.length === 0) {
      Alert.alert("확인 오류", "선택한 알림이 없습니다.");
      return;
    }

    Alert.alert("알림 확인", "선택한 알림을 확인하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "확인",
        onPress: () => {
          Alert.alert("알림 확인", `${selectedNoticeIds.length}개의 알림을 확인했습니다.`);
          setSelectedNoticeIds([]); // 확인 후 선택 상태 초기화
        },
      },
    ]);
  };

  // 알림 타입에 맞는 태그를 반환하는 함수
  const getTag = (type) => {
    switch (type) {
      case 'payment':
        return { text: '결제', backgroundColor: '#FF008C' };
      case 'notification':
        return { text: '공지', backgroundColor: '#FFCC00' };
      case 'event':
        return { text: '이벤트', backgroundColor: '#FFCC00' };
      case 'washing':
        return { text: '세탁 알림', backgroundColor: '#1B72F5' };
      default:
        return { text: '', backgroundColor: '#fff' };
    }
  };

  // 알림 항목 렌더링
  const renderItem = ({ item }) => {
    const { text, backgroundColor } = getTag(item.type);

    return (
      <TouchableOpacity
        onPress={() => toggleSelection(item.id)}
        style={[styles.noticeItem, selectedNoticeIds.includes(item.id) ? styles.selectedNotice : styles.unselectedNotice]}
      >
        {/* 타입에 맞는 태그 */}
        {text ? (
          <View style={[styles.tag, { backgroundColor }]}>
            <Text style={styles.tagText}>{text}</Text>
          </View>
        ) : null}

        {/* 알림 내용 */}
        <Text style={styles.noticeText}>{item.title}</Text>
        <Text style={styles.noticeDate}>{item.date}</Text>
        <Text style={styles.noticeDetail}>{item.detail}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <MainLayout currentTab="notifications">
      <View style={styles.content}>
        {/* 선택, 확인, 삭제 버튼 */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={deleteSelectedNotifications}>
            <Text style={styles.actionButtonText}>삭제</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={confirmSelectedNotifications}>
            <Text style={styles.actionButtonText}>확인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={selectAllNotices}>
            <Text style={styles.actionButtonText}>
              {selectedNoticeIds.length === filteredNotices.length ? "해제" : "모두 선택"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 탭 버튼 */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => handleTabChange('all')} style={[styles.tabButton, activeTab === 'all' ? styles.activetabButton : styles.inactivetabButton]}>
            <Text style={[styles.tabText, activeTab === 'all' ? styles.activeTabText : styles.inactiveTabText]}>전체</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('payment')} style={[styles.tabButton, activeTab === 'payment' ? styles.activetabButton : styles.inactivetabButton]}>
            <Text style={[styles.tabText, activeTab === 'payment' ? styles.activeTabText : styles.inactiveTabText]}>결제</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('washing')} style={[styles.tabButton, activeTab === 'washing' ? styles.activetabButton : styles.inactivetabButton]}>
            <Text style={[styles.tabText, activeTab === 'washing' ? styles.activeTabText : styles.inactiveTabText]}>세탁알림</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('notification')} style={[styles.tabButton, activeTab === 'favorite' ? styles.activetabButton : styles.inactivetabButton]}>
            <Text style={[styles.tabText, activeTab === 'notification' ? styles.activeTabText : styles.inactiveTabText]}>공지/이벤트</Text>
          </TouchableOpacity>
        </View>

        {/* 알림 리스트 */}
        <FlatList
          data={filteredNotices}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    margin: 5,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 13,
    height: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    borderWidth: 1,
    borderColor: '#ddd', 
  },
  actionButtonText: {
    fontSize: 13,
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // 버튼들을 중앙 정렬
    width: '100%', // 화면 전체 너비 차지
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15, // 텍스트가 너무 붙지 않도록 여백 추가
    alignItems: 'center',
    borderBottomWidth: 3,
    width: 'auto', // 텍스트 길이에 맞게 자동 조절
    alignSelf: 'stretch', // 높이를 동일하게 맞춤
  },
  activetabButton: {
    borderBottomColor: '#1B72F5',
  },
  inactivetabButton: {
    borderBottomColor: '#666',
  },
  tabText: {
    fontSize: 14,
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#1B72F5',
  },
  inactiveTabText: {
    color: '#666',
  },
  noticeItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB'
  },
  selectedNotice: {
    backgroundColor: '#F9F9F9',
  },
  unselectedNotice: {
    backgroundColor: '#fff',
  },
  noticeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noticeDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  noticeDetail: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  tag: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#fff',
    fontSize: 12, 
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});