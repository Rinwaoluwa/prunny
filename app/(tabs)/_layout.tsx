import Icon from "@/assets/svgs/icons";
import { normalise } from "@/config/normalise";
import { palette } from "@/config/palette";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: () => <Icon name="home" size={normalise(24)} />,
                tabBarLabel: "Home",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
            <Tabs.Screen name="transaction" options={{
                tabBarIcon: () => <Icon name="pie-chart" size={normalise(24)} />,
                tabBarLabel: "Transactions",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
            <Tabs.Screen name="services" options={{
                tabBarIcon: () => <Icon name="services" size={normalise(24)} />,
                tabBarLabel: "Services",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarIcon: () => <Icon name="profile" size={normalise(24)} />,
                tabBarLabel: "Profile",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
        </Tabs>
    )
}