import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {useFonts} from 'expo-font';

export default function App() {
  const [fontLoaded] = useFonts({
    'Overpass-Light': require('./src/theme/fonts/Overpass-Light.ttf'),
    'Overpass-Regular': require('./src/theme/fonts/Overpass-Regular.ttf'),
    'Overpass-Medium': require('./src/theme/fonts/Overpass-Medium.ttf'),
    'Overpass-Bold': require('./src/theme/fonts/Overpass-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
