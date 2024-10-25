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
                tabBarIcon: ({ color }) => <Icon name="home" fill={color} size={normalise(24)} />,
                tabBarLabel: "Home",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
            <Tabs.Screen name="transaction" options={{
                tabBarIcon: ({ color }) => <Icon name="pie-chart" fill={color} size={normalise(24)} />,
                tabBarLabel: "Transactions",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
            <Tabs.Screen name="services" options={{
                tabBarIcon: ({ color }) => <Icon name="services" fill={color} size={normalise(24)} />,
                tabBarLabel: "Services",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({ color }) => <Icon name="profile" fill={color} size={normalise(24)} />,
                tabBarLabel: "Profile",
                tabBarActiveTintColor: palette['primary--1'],
                tabBarInactiveTintColor: palette['grey'],
            }} />
        </Tabs>
    )
}