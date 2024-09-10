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
import { Stack } from "expo-router";

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

  const StackNav = () => {
    return (
      <Stack
        screenOptions={{
          statusBarHidden: false,
          contentStyle: {
            padding: 10,
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    );
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <PaperProvider>
        <StackNav />
      </PaperProvider>
    </ThemeProvider>
  );
}
