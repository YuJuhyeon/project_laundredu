import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, TextInput} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // 별 아이콘 사용
import { MainLayout } from '@/components/layout/MainLayout';
import { Image } from "react-native";
import {router} from "expo-router"

export default function writeReview() {

  const [rating, setRating] = useState(0); // 별점 저장
  const [review, setReview] = useState(""); // 리뷰 텍스트 저장


  // 이전
  const handleGoBack = () => {
      router.back();
  };

  // 리뷰 저장 핸들러 (백엔드 연동 가능)
  const submitReview = () => {
      console.log("별점:", rating);
      console.log("리뷰 내용:", review);
      alert("리뷰가 등록되었습니다!");
  };
  // 별점 선택 핸들러
  const handleRating = (index:number) => {
      setRating(index + 1);
  };
   
  return (
    <MainLayout currentTab="search">
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image 
              source={require('../assets/images/angle-left.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>매장상세</Text>
          <View style={styles.headerRight} />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>별점</Text>

        {/* 별점 선택 */}
        <View style={styles.starContainer}>
          {Array.from({ length: 5 }).map((_, index:number) => (
            <TouchableOpacity key={index} onPress={() => handleRating(index)}>
              <FontAwesome
                name={index < rating ? "star" : "star-o"}
                size={30}
                color={index < rating ? "#FFD700" : "#ccc"}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* 리뷰 textarea */}
        <TextInput
          style={styles.input}
          placeholder="리뷰를 작성해주세요."
          value={review}
          onChangeText={setReview}
          multiline
        />

        {/* 작성 버튼 */}
        <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
          <Text style={styles.submitText}>작성</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 10
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft:"auto",
    marginRight: "auto"
  },
  starContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent:"center",
    gap:5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    minHeight: 200,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: "#333",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  submitButton: {
    position: "absolute",
    bottom: 20, // 🔥 화면 하단에 고정
    left: 20,
    right: 20,
    backgroundColor: "#1B72F5",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
