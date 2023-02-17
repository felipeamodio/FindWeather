import { StatusBar } from 'expo-status-bar';

import {useFonts} from 'expo-font';
import Home from './src/screens/Home';

export default function App() {
  const [fontLoaded] = useFonts({
    'Overpass-Light': require('./src/theme/fonts/Overpass-Light.ttf'),
    'Overpass-Regular': require('./src/theme/fonts/Overpass-Regular.ttf'),
    'Overpass-Medium': require('./src/theme/fonts/Overpass-Medium.ttf'),
    'Overpass-Bold': require('./src/theme/fonts/Overpass-Bold.ttf'),
  });

  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}
