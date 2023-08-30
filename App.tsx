import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { HomepageDesktop } from "./screens/HomepageDesktop";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Mulish_400Regular, Mulish_700Bold } from "@expo-google-fonts/mulish";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && Platform.OS !== "web") {
    return null;
  }

  return (
    <View style={styles.homepageDesktop} onLayout={onLayoutRootView}>
      <HomepageDesktop />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  homepageDesktop: {
    backgroundColor: "#3d3d3d",
    border: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 41,
    paddingHorizontal: 39,
    position: "relative",
    width: "100%",
  },
  nameArrowRight: {
    height: 20,
    marginBottom: -2,
    marginTop: -2,
    position: "relative",
    width: 20,
  },
});
