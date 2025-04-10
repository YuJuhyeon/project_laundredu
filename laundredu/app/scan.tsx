import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState<string>('');
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (!scanned) {
      setScanned(true);
      setBarcodeData(data);
      Alert.alert('스캔 완료', `바코드 유형: ${type}\n데이터: ${data}`);
    }
  };

  if (hasPermission === null) return <Text>카메라 권한 요청 중...</Text>;
  if (hasPermission === false) return <Text>카메라 접근이 거부되었습니다.</Text>;

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFillObject}
        type={CameraType.back} // ✅ 이게 정상 작동해야 합니다
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: ['qr', 'ean13', 'code128'],
        }}
      />
      {scanned && (
        <View style={styles.overlay}>
          <Text style={styles.result}>스캔된 바코드: {barcodeData}</Text>
          <Button title="다시 스캔하기" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
    backgroundColor: '#ffffffcc',
    padding: 16,
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
  },
  result: { marginBottom: 8, fontSize: 16 },
});
