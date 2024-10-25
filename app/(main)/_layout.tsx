import { Stack } from "expo-router";

export default function MainAppLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="send-money" />
            <Stack.Screen name="airtime-data" />
            <Stack.Screen name="transaction-successful" />
        </Stack>
    )
}