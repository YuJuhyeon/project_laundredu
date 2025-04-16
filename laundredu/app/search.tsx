import { Text, View, StyleSheet, TextInput, Image, Pressable  } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import Modal from 'react-native-modal';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MainLayout } from '@/components/layout/MainLayout';


// const PlaceholderImage = require("../../assets/images/facicon.png")

export default function LaundrePage() {

  const [isModalVisible, setModalVisible] = useState(false);
  const service = ["주차가능", "주차가능"]
  
  // 서비스
  const Service = ({ data }: { data: string })=>{
    return (
      <Text style={styles.serviceTag}>{data}</Text>
    )
  }
    return (
    <MainLayout currentTab="search">
        <View style={styles.container}>    
          <View style={styles.search_area}>
            <TextInput style={styles.searchInput} placeholder="검색어를 입력하세요"/>
            <AntDesign 
              name="search1" size={24} 
              color="black" 
              style={{position:"absolute", top:23 ,right:10}}
              onPress={() => {
                console.log("검색 실행!");
                setModalVisible(true);
              }}
            />
          </View> 
          <Text style={styles.searchLocationBtn}>
            내 위치 검색
          </Text>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            >
            <View style={styles.modal_main}>
              <View style={styles.mainInfo}>
                <View style={styles.title}>
                    <Text style={styles.tag}>클린뭐시기</Text>
                    <Text style={styles.name}>아아아ㅏㅇ</Text>
                    <Image style={{marginLeft: "auto", width:29, height: 29}} source={require('@/assets/images/bookmark_check.png')}/>
                </View>
                <View><Text style={styles.address}>서울특별시 어쩌구 어쩌동 456</Text></View>
                
                <Pressable
                 onPress={() => {
                 setModalVisible(false); // 모달 닫기
                 router.push("/"); // 페이지 이동
                }}>
                  <Text  style={styles.text2}> 별점 : 4.5 점 ·리뷰 : 126 개 &gt; </Text>
                </Pressable>
            
                <View style={styles.laundre_info}> 
                  <Image style={styles.img} source={require('@/assets/images/시간 icon.png')}/>
                  <Text style={styles.text2}>영업시간 00:00 ~ 24:00 </Text>
                </View>
                <View style={[styles.laundre_info, {paddingBottom:0}]}> 
                  <Image style={styles.img} source={require('@/assets/images/phone icon.png')}/> 
                  <View style={{flexDirection:"row",  width: '100%', paddingRight:20}}>
                    <Text style={styles.text2}> 연락처 010-1111-1111 </Text>
                    <Pressable
                      style={{marginLeft:"auto"}}
                      onPress={() => {
                      setModalVisible(false); // 모달 닫기
                          router.push({
                            pathname: "/detailLaundre",
                            params: {
                              "name": "화곡8동점",
                              "type": "크린토피아",
                              "address": "서울 특별시 강남구 뭐시기도 592 1층"
                            }
                          })
                      }}
                    >
                    {/* <Link 
                        href={{ pathname: "/detailLaundre",
                        params: {
                            "name": "화곡8동점",
                            "type": "크린토피아",
                            "address": "서울 특별시 강남구 뭐시기도 592 1층"
                        }}}> */}
                      <Text style={[styles.text2]}>상세보기 &gt;</Text>
                      {/* </Link> */}
                    </Pressable>
                  </View>
                </View>
                
                
                <View style={{ paddingTop:10 ,borderBottomWidth:1, borderBottomColor:"#CCCCCC"}}></View>
              </View>
              {/* 서비스 */}
              <View style={styles.serviceBar}>
              {service.map((Item, index)=>(<Service key={index} data = {Item}/>))}
              </View>
            </View>
          </Modal>
          
        </View>
    </MainLayout>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#25292e",
  },
  search_area:{
    position:"absolute",
    top:10
  },
  searchInput:{
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    minHeight: 20,
    width:280,
    marginTop: 15,
    marginBottom: 15,
    position: 'relative'
  },
  modal_main:{
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding:30,
    paddingTop:20
  },
  mainInfo:{
    borderColor:"white",
    gap:5
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
  address:{
    paddingTop:5,
    fontSize :12
  },
  laundre_info:{
    flexDirection:"row", 
    gap:3, 
    alignItems:"center"
  },
  img:{
    width:15, 
    height: 15
  },
  text2:{
    fontSize:12
  },
  fontBold:{
    fontWeight:"bold"
  },
  serviceBar:{
    paddingTop:10,
    paddingBottom:10,
    flexDirection:"row",
    gap:5
  },
  serviceTag:{
    backgroundColor:"#1B72F5",
    fontSize:10,
    color:"white",
    padding:7,
    borderRadius:15

  },
  searchLocationBtn:{
    backgroundColor:"#1B72F5",
    fontSize:12,
    color:"white",
    padding:7,
    borderRadius:15,
    position:"absolute",
    top:75,
  }
})