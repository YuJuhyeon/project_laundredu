import {Link, router} from "expo-router"
import { TouchableOpacity, Text, View, StyleSheet, FlatList, Image} from "react-native";
import { MainLayout } from '@/components/layout/MainLayout';


export default function Bookmark() {

  // 이전
  const handleGoBack = () => {
      router.back();
  };

  // 데이터
  const DATA_LIST = [
    {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
      {
        "name": "화곡8동점",
        "type": "크린토피아",
        "address": "서울 특별시 강남구 뭐시기도 592 1층"
      },
  ]

  // 타입 확인
  type ItemProps = {name: string, type: string, address:string};

  // list row 생성
  const Item = ({name, type, address}: ItemProps) => (
    <Link href={{ pathname: "/detailLaundre", params: { name, type, address } }} style={styles.row}>
      <TouchableOpacity style={{ width: "100%"}}>
        <View>
            <View style={styles.title}>
              <Text style={styles.tag}>{type}</Text>
              <Text style={styles.name}>{name}</Text>
              <Image style={{marginLeft: "auto", width:29, height: 29}} source={require('@/assets/images/bookmark_check.png')}/>
            </View>
            <View><Text style={styles.address}>{address}</Text></View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  // list 
  return (
    <MainLayout currentTab="bookmark">
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <Image 
                source={require('../assets/images/angle-left.png')} 
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>내 지점 관리</Text>
            <View style={styles.headerRight} />
          </View>
        </View>
        <FlatList
          data={DATA_LIST}
          renderItem={({item}) => <Item {...item} />}
          keyExtractor={(item,index) => index.toString()}
        /> 
      </View>   
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:"white"
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
  row:{
    borderColor:"#DDDDDD",
    borderWidth:1,
    borderRadius:5,
    padding:20,
    backgroundColor:"white",
    marginBottom:5
  },
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
  }
})