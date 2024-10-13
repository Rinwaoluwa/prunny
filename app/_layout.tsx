import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from 'react-native';
import { FLEX } from '@/config/constants';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    bold: require('../assets/fonts/Roboto-Bold.ttf'),
    light: require('../assets/fonts/Roboto-Light.ttf'),
    medium: require('../assets/fonts/Roboto-Medium.ttf'),
    regular: require('../assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={FLEX}>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
      </Stack>
    </SafeAreaView>
  );
}
