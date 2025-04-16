import {Link, router} from "expo-router"
import { TouchableOpacity, Text, View, StyleSheet, FlatList} from "react-native";
import { Image } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"; // 별 아이콘 사용
import { MainLayout } from '@/components/layout/MainLayout';

export default function Review() {
    // 이전
    const handleGoBack = () => {
        router.back();
    };

    // 데이터
    const DATA_LIST = [
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
        {
        "username": "사용자1",
        "score": 5,
        "content": "매장이 깔끔합니다.",
        "createDt":"2025.02.29"
        },
    ]

    // 타입 확인
    type ItemProps = {username: string, score: number, content:string, createDt:string};

    // 리뷰 row 생성
    const Row = ({username, score, content, createDt}: ItemProps) => (
        <View style={styles.row}>
            <View>
                <View style={styles.title}>
                    <Text style={[styles.text2, styles.textBold]}>{username}</Text>
                    <Text style={styles.text2}>{createDt}</Text>
                </View>
                <View style={styles.star}>
                {Array.from({ length: score }).map((_, index) => (
                    <FontAwesome
                        key={index}
                        name={"star"} 
                        size={16}
                        color={"#FFD700"} 
                        style={{ marginRight: 4 }}
                    />
                ))}
                </View>
            </View>
            <Text style={styles.text2}>{content}</Text>
            
        </View>
        
    );



  // list 
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
            <Text style={styles.headerTitle}>리뷰</Text>
            <View style={styles.headerRight} />
            </View>
    </View>
    <View style={styles.container}>
        
        <View style={styles.reviewInfo}>
            <FontAwesome
                name={"star"} 
                size={20}
                color={"#FFD700"} 
            />
            <Text style={[styles.textBold, styles.text]}>별점 4.5</Text>
            <Link href={"/writeReview"}  style={{marginLeft:"auto"}}>
            {/* WriteReview */}
                <Text style={styles.textBold}>리뷰작성  </Text>
                <FontAwesome5 
                    name={"chevron-right"}
                    size={14}
                    color={"#DDDDDD"}
                    solid={false}
                />
            </Link>
        </View>
        <FlatList
            data={DATA_LIST}
            renderItem={({item}) => <Row {...item} />}
            keyExtractor={(item,index) => index.toString()}
        />
    </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
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
    container:{
        backgroundColor:"white",
        paddingLeft:15,
        paddingRight:15,
      
    },
    reviewInfo:{
        flexDirection:"row", gap:10
    },
    textBold:{
        fontWeight:"bold"
    },
    text:{
        fontSize:14
    },
    text2:{
        fontSize:12
    },
    row:{
        borderColor:"white",
        borderWidth:1,
        borderBottomColor:"#DDDDDD",
        borderRadius:5,
        paddingTop:15,
        paddingBottom:15,
    },
    title:{
        flexDirection:"row",
        gap:8,
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:3
    },
    star:{
        flexDirection: "row",
        marginBottom:10
    }
})