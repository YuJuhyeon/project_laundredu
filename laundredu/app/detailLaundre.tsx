import { useLocalSearchParams, Link, router } from "expo-router";
import { TouchableOpacity, ScrollView, View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";
import Modal from 'react-native-modal';
import { MainLayout } from '@/components/layout/MainLayout';

const DetailLaundre = () => {
    const { name, type, address } = useLocalSearchParams(); // 전달된 데이터 받기

    // 이전
    const handleGoBack = () => {
        router.back();
    };


    const service = ["주차가능", "주차가능"]
    // 서비스
    const Service = ({ data }: { data: string })=>{
        return (
        <Text style={styles.serviceTag}>{data}</Text>
        )
    }
    // 세탁기
    const laundryArr = [
      {name:"장비1",
       state:"사용가능",
       time:""
      },
      {name:"장비1",
        state:"사용중",
        time:"28:00"
       },
       {name:"장비1",
        state:"사용가능",
        time:""
       },
       {name:"장비1",
        state:"고장",
        time:""
       }
    ]
    type LaundreData = {
      name:string,
      state:string,
      time:string
    }
    const Laundre = ({data}:{data:LaundreData})=>{
      return (<View >
        <View style={styles.circle}>
          <Image 
          style={[styles.equip_img, data.state!="사용가능"&&styles.inactive_state]} 
          source={require('@/assets/images/water.png')}
          />
        </View>
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
            <Text >{data.name}</Text>
            {data.state==="사용가능"|| data.state==="고장"?<Text style={{color:"#3895FF"}}>{data.state}</Text>:<Text style={[{color:"#3895FF"}, styles.inactive_state]}>{data.time}</Text>}
          </View>
      </View>)
    }
    // 건조기 
    const dryerArr = [
      {name:"장비1",
       state:"사용가능",
       time:"28:00"
      },
      {name:"장비1",
        state:"사용중",
        time:"28:00"
       },
       {name:"장비1",
        state:"사용가능",
        time:"28:00"
       },
       {name:"장비1",
        state:"사용가능",
        time:"28:00"
       },
       {name:"장비1",
        state:"사용가능",
        time:"28:00"
       },
       {name:"장비1",
        state:"사용가능",
        time:"28:00"
       },
       {name:"장비1",
        state:"고장",
        time:"28:00"
       }
    ]
    const [isModalVisible, setModalVisible] = useState(false);
    const handlePress = () => {
      console.log(222)
      setModalVisible(true);
    };
    const Dryer = ({data}:{data:LaundreData})=>{
      return (<Pressable onPress={handlePress} >
        <View style={styles.circle_red} >
          <Image 
          style={[styles.equip_img, data.state!="사용가능"&&styles.inactive_state]} 
          source={require('@/assets/images/winter.png')}
          />
        </View>
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
            <Text >{data.name}</Text>
            {data.state==="사용가능"|| data.state==="고장"?<Text style={{color:"#9F0707"}}>{data.state}</Text>:<Text style={[{color:"#9F0707"}, styles.inactive_state]}>{data.time}</Text>}
        </View>
      </Pressable>)
    }
    
    const amountInfoArr = [
      {name:"표준",
       time:"35분",
       amount:"4,500"
      },
      {name:"표준",
        time:"35분",
        amount:"4,500"
       },
       {name:"표준",
        time:"35분",
        amount:"4,500"
       },
       {name:"표준",
        time:"35분",
        amount:"4,500"
       }
    ]
  
  return (
    <MainLayout currentTab="search">
    <ScrollView style={styles.container}>
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

        {/* 세탁소 정보 및 후기(리뷰및 평점) */}
        <View style={styles.mainInfo}>
          <View style={styles.title}>
              <Text style={styles.tag}>{type}</Text>
              <Text style={styles.name}>{name}</Text>
              <Image style={{marginLeft: "auto", width:29, height: 29}} source={require('@/assets/images/bookmark_check.png')}/>
          </View>
          <View><Text style={styles.address}>{address}</Text></View>
          
          <Link href={"/reivew"}><Text  style={styles.text2}> 별점 : 4.5 점 ·리뷰 : 126 개 &gt; </Text></Link>
       
          <View style={styles.laundre_info}> 
            <Image style={styles.img} source={require('@/assets/images/시간 icon.png')}/>
            <Text  style={styles.text2}>영업시간 00:00 ~ 24:00 </Text>
          </View>
          <View style={styles.laundre_info}> 
          <Image style={styles.img} source={require('@/assets/images/phone icon.png')}/> 
            <Text style={styles.text2}> 연락처 010-1111-1111 </Text>
          </View>
          <View style={{ paddingTop:10 ,borderBottomWidth:1, borderBottomColor:"#CCCCCC"}}></View>
        </View>

        {/* 서비스 */}
        <View style={styles.serviceBar}>
        {service.map((Item, index)=>(<Service key={index} data = {Item}/>))}
        </View>
        {/* 공지사항 */}
        <View style={styles.notice}>
          <Text style={[styles.text2, styles.fontBold]}>공지사항</Text>
          <Text style={[styles.text2]}> 공지사항입니다.</Text>
        </View>

        {/* 장비 현황 */}
        <View style={styles.equip_area}>
          <Text style={styles.header1}>장비 이용현황</Text>
          <Text style={styles.header2}>세탁기</Text>
          <View style={styles.equip}>
            {laundryArr.map((item, index)=>(
              <Laundre key={index} data = {item}/>
            ))}
          </View>

          <Text style={styles.header2}>건조기</Text>
          <View style={styles.equip}>
            {dryerArr.map((item, index)=>(
              <Dryer key={index} data = {item}/>
            ))}
          </View>
          <View style={{ paddingTop:10, borderBottomWidth:1, borderBottomColor:"#CCCCCC"}}/>
        </View>
        <View style={styles.equip_area}>
          <Text style={styles.header1}>위치</Text>
            {/* <WebView
            originWhitelist={['*']}
            source={require('../assets/local-html/naver-map.html')}
            style={{height:10
            0, backgroundColor:"red"}}
            /> */}
            <View  style={{
              height:100, backgroundColor:"red"}}/>
        </View>
        <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <View style={styles.modal_main}>
            <Text style={styles.header0}>
              장비1 | 20kg 대형 세탁기 | 20kg
            </Text>
            <View style={{ paddingTop:10, marginBottom:10, borderBottomWidth:1, borderBottomColor:"#CCCCCC"}}/>
            <Text style={styles.modal_header2}>
              세탁 불가의류
            </Text>
            <View style={styles.modal_equip}>
              {laundryArr.map((Item, index)=>(<View>
                <View style={styles.modal_circle} >
                <Image 
                style={[styles.equip_img]} 
                source={require('@/assets/images/check.png')}
                />
                </View>
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
                  <Text style = {styles.text2}>{Item.name}</Text>
                </View>
              </View>))}
            </View>
            <Text style={styles.modal_header2}>
              가격정보
            </Text>
            {amountInfoArr.map((Item, index)=>(<View key={index} style={[styles.amountInfo_row, index===0&&{paddingTop:0}]}>
            <Text style = {styles.text2}>표준(35분)</Text>
            <Text style = {styles.text2}>4,500원</Text>
                
            </View>))}
          </View>
      </Modal>
    </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingBottom:10
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
  mainInfo:{
    paddingRight:30,
    paddingLeft:30,
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
  modal_main:{
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding:30,
  },
  header0:{
    fontSize:16,
    fontWeight:"bold",
  },
  header1:{
    fontSize:15,
    fontWeight:"bold",
    paddingTop:15,
    paddingBottom:15
  },
  header2:{
    fontSize:12,
    fontWeight:"bold"
  },
  serviceBar:{
    paddingRight:30,
    paddingLeft:30,
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
  notice:{
    backgroundColor:"#F9F9F9",
    paddingRight:30,
    paddingLeft:30,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:"row"
  },
  equip_area:{
    paddingRight:30,
    paddingLeft:30,
  },
  equip:{
    flexDirection:"row",
    gap:35,
    paddingTop:10,
    paddingBottom:10,
    flexWrap:"wrap"
  },
  equip_img:{
    width:20,
    height:20
  },
  circle:{
    borderColor:"#3895FF",
    borderWidth:2,
    borderRadius:50,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:3
  },
  circle_red:{
    borderColor:"#9F0707",
    borderWidth:2,
    borderRadius:50,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:3
  },
  inactive_state:{
    opacity:0.5
  },
  modal_equip:{
    flexDirection:"row",
    gap:50,
    paddingBottom:10,
    flexWrap:"wrap"
  },
  modal_circle:{
    borderColor:"#3895FF",
    borderWidth:2,
    borderRadius:50,
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:3
  },
  modal_header2:{
    fontSize:12,
    fontWeight:"bold",
    paddingTop:10,
    paddingBottom:10
  },
  amountInfo_row:{
    borderBottomWidth:1,
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomColor:"#DDDDDD",
    paddingTop:10,
    paddingBottom:5
  }
  
})

export default DetailLaundre;