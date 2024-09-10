import { Stack } from "expo-router";

const KisahLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="kisah" />
    </Stack>
  );
};

export default KisahLayout;
