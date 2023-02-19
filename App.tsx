import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from '@expo-google-fonts/overpass';

import Home from './src/screens/Home';
import Welcome from './src/screens/Welcome';
import Search from './src/screens/Search';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });
  if(!fontsLoaded){
    return;
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <Home /> */}
      {/* <Welcome /> */}
      <Search />
    </>
  );
}
