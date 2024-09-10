import { Stack } from "expo-router";

const QuranLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="quran" />
    </Stack>
  );
};

export default QuranLayout;
