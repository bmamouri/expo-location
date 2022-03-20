import * as Location from 'expo-location'
import {PermissionStatus} from 'expo-location'
import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import useAsync from 'react-use/lib/useAsync'


export default function App() {
  const { value } = useAsync(async () => {
    return Location.getForegroundPermissionsAsync()
  }, [])

  return (
    <View style={styles.container}>
      {value?.status === PermissionStatus.DENIED && value?.canAskAgain
          ? <Button title={'Grant Permission'} onPress={Linking.openSettings} />
          : <Text>{value?.status}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
