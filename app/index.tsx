import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/mypage" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
