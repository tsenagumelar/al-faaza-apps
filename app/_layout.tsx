import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import "react-native-reanimated";
import { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";

import { useColorScheme } from "@/src/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../src/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <PaperProvider>
        <Drawer
          screenOptions={{
            sceneContainerStyle: {
              backgroundColor: "#fff",
            },
            headerStyle: {
              borderBottomWidth: 2,
              borderBottomColor: "#f2f2f2",
            },
          }}
        >
          <Drawer.Screen
            name="(home)"
            options={{ title: "Assalaamu'alaikum" }}
          />
          <Drawer.Screen name="(surah)" options={{ title: "Al-Qur'an" }} />
        </Drawer>
      </PaperProvider>
    </ThemeProvider>
  );
}
