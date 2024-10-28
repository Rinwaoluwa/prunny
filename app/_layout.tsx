import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/es/integration/react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { FLEX } from '@/config/constants';
import { persistor, RootState, store } from '@/config/store/store';
import { useAppSelector } from '@/config/store/hooks';

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
          <SafeAreaView style={FLEX}>
            <GestureHandlerRootView style={FLEX} onLayout={onLayoutRootView}>
              <BottomSheetModalProvider>
                <RootAppLayout />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

function RootAppLayout() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.profileInfo);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? <Stack.Screen name="(main)" /> : <Stack.Screen name="(auth)/index" />}
    </Stack>
  )
};