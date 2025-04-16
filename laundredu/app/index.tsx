import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // useRouter 사용
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter(); // useRouter 훅 사용

  useEffect(() => {
    async function prepare() {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기 (테스트용)
      await SplashScreen.hideAsync();
      router.push("/home"); // '/home'으로 페이지 이동
    }

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/splash-icon.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150, // 아이콘 크기
    height: 150,
    resizeMode: "contain",
  },
});