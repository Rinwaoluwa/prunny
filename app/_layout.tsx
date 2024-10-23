import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FLEX } from '@/config/constants';
import { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor, store } from '@/config/store/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    bold: require('../assets/fonts/Roboto-Bold.ttf'),
    light: require('../assets/fonts/Roboto-Light.ttf'),
    medium: require('../assets/fonts/Roboto-Medium.ttf'),
    regular: require('../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const onLayoutRootView = useCallback(async () => {
    if (loaded || error) {
      await SplashScreen.hideAsync();
    }
  }, [loaded, error]);


  if (!loaded && !error) {
    return null;
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GestureHandlerRootView style={FLEX} onLayout={onLayoutRootView}>
            <BottomSheetModalProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="index" />
                <Stack.Screen name="forgot-password" />
                <Stack.Screen name="register" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="send-money" />
                <Stack.Screen name="airtime-data" />
                <Stack.Screen name="transaction-successful" />
              </Stack>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </>
  );
}
