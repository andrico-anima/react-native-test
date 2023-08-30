import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { UserCard } from './components/UserCard';
import { HomepageDesktop } from './screens/HomepageDesktop';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    'Mulish': 'https://fonts.googleapis.com/css?family=Mulish:400,800',
    'Poppins': 'https://fonts.googleapis.com/css?family=Poppins:400',
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded && Platform.OS !== 'web') {
    return null
  }

  return (

    <ScrollView>
      <View style={styles.homepageDesktop} onLayout={onLayoutRootView}>
        <HomepageDesktop />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homepageDesktop: {
    backgroundColor: '#3d3d3d',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 41,
    paddingHorizontal: 39,
    position: 'relative',
    width: '100%',
  },
  nameArrowRight: {
    height: 20,
    marginBottom: -2,
    marginTop: -2,
    position: 'relative',
    width: 20,
  },
});
