import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Join3() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require('../assets/images/logo-icon.png')} style={styles.logo} />
        <Text style={styles.text}>런드리듀 회원가입이{'\n'} 완료되었습니다.</Text>
      </View>

      {/* 다음 Btn */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/mypage')}
        >
          <Text style={styles.nextButtonText}>홈으로 이동</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  ownerButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  ownerText: {
    fontSize: 14,
    color: '#555',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 127,
    height: 159,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  nextButtonDisabled: {
    backgroundColor: '#D1D1D1',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
