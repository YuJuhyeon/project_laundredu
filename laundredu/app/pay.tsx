import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Image} from "react-native";
import { useLocalSearchParams, Link, router } from "expo-router";
import { MainLayout } from '@/components/layout/MainLayout';


const pay = () => {
  const { name, type, address } = useLocalSearchParams(); // 전달된 데이터 받기
  const [selected, setSelected] = useState("option1"); // 선택된 값 저장
  
  // 이전
  const handleGoBack = () => {
      router.back();
  };
  
  // 결제 정보
  const [payInfo, setPayInfo] = useState({
      point:0,
      payOption:"card",
      amount:0
  }); 
  
  // 라디오 박스  
  const options = [
    { value: "card", label: "카드 결제" },
    { value: "simple", label: "간편결제" },
  ];

  // 결제하기
  const submitPay= ()=>{
    alert("결제하겠습니다. " +payInfo.amount + name)

  }
  
  const changePayOption = (option:string) =>{
    setPayInfo((prev)=>({
      ...prev,
      payOption:option
    }))
  }
  const changePoint = (point:string)=>{
    const numPoint = Number(point) ||0;
    setPayInfo((prev)=>({
      ...prev,
      point:numPoint
    }))
  }
   
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
        <Text style={styles.headerTitle}>결제하기</Text>
        <View style={styles.headerRight} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.payInfo}>
        <View style={styles.title}>    
          <Text style={styles.tag}>크린토피아</Text>
          <Text style={styles.name}>화곡 8동점</Text>
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.fontBold}>세탁기(1회) | 표준 (35분)</Text>
          <Text style={styles.fontBold}>4,500</Text>
        </View>
      </View>

      <View style={styles.payment_method}>
        <Text style={styles.fontBold}>포인트</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={changePoint}></TextInput>


        {/* 카드 */}
        {options.map((option) => (
          <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => {changePayOption(option.value)}}
          >
          {/* 🔵 라디오 버튼*/}
          <View style={[styles.radioCircle, payInfo.payOption === option.value && styles.selectedRadio]}>
            {payInfo.payOption === option.value && <View style={styles.radioInner} />}
          </View>

          {/* 📝 라벨 */}
          <View style={styles.radioText}>
            <Text>{option.label}</Text> 
            {option.value === "card" && <Text>신한 (001-123456-456798)</Text>}
          </View>
          
          {option.value === "card" && <Link href={{ pathname: "/detailLaundre", params: { name, type, address } }} style={{marginLeft:"auto", marginBottom:"auto"}}>더보기</Link>}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.payment_amount}>
        <View style={styles.payment_amount_row}>
          <Text>이용금액 : </Text>
          <Text>{payInfo.amount} 원</Text>
        </View>
        {payInfo.point > 0 &&<View style={styles.payment_amount_row}>
          <Text>포인트 이용 : </Text>
          <Text>- {payInfo.point} 원</Text>
        </View>}
        <View style={{borderBottomWidth:1 , borderBottomColor:"#CCCCCC", paddingBottom: 15}}/>
        
      </View>
      <View style={[styles.payment_amount_row, {padding:15}]}>
          <Text style={styles.fontBold}>총 결제 금액 : </Text>
          <Text style={styles.fontBold}>{payInfo.amount - payInfo.point} 원</Text>
      </View>
      {/* 작성 버튼 */}
      <TouchableOpacity style={styles.submitButton} onPress={submitPay}>
          <Text style={styles.submitText}>결제하기</Text>
      </TouchableOpacity>
    </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#F9F9F9"
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
  text:{color:"white"},
  title:{
    flexDirection:"row",
    gap:8,
    alignItems:"center"
  },
  name:{
    fontSize:16,
    fontWeight:"bold"
  },
  tag:{
    color:"#1B72F5",
    borderWidth: 1,
    borderColor:"#1B72F5",
    borderRadius:85,
    padding:6,
    fontSize:12
  },
  fontBold:{
    fontWeight:"bold",
  },
  payInfo:{
    backgroundColor:"#EDF3FF",
    paddingRight:15,
    paddingLeft:15,
    paddingTop:15,
    paddingBottom:15,
    flexDirection:"column",
    gap:10,
    
  },
  address:{
    paddingTop:5,
    fontSize :12
  },
  text2:{
    fontSize:12
  },
  detailInfo:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    minHeight: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  payment_method:{
    backgroundColor:"white", 
    padding:15
  },
  payment_amount:{
    padding:15, 
    
  },
  payment_amount_row:{
    flexDirection:"row", 
    justifyContent:"flex-start"
  },

  submitButton: {
    position: "absolute",
    bottom: 20, // 🔥 화면 하단에 고정
    left: 20,
    right: 20,
    height:47,
    backgroundColor: "#1B72F5",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop:"auto",
    marginBottom:"auto"
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding:10,
    height:60
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1B72F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedRadio: {
    borderColor: "#1B72F5", // 선택된 경우 테두리 색상 변경
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#1B72F5", // 선택된 경우 내부 원 표시
  },
  radioText: {
    fontSize: 16,
    flexDirection:"column"
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default pay;