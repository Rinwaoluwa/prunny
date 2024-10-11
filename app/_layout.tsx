import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)/login" />
    </Stack>
  );
}
