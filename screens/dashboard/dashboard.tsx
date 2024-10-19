import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Header } from '@/components/DashboardHeader';
import BalanceCard from '@/components/BalanceCard';
import AddNewWallet from '@/components/AddWalletCard';
import PayActions from '@/components/PayAction';
import { AppText } from '@/components/AppText';
import { PAY_ACTIONS, PAY_ACTIONS_TYPE } from '@/config/constants';
import { IconName } from '@/assets/svgs/types';
import { Banner } from '@/components/Banner';
import { Href } from 'expo-router';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState(0);

    const CONTROL = [
        "/send-money",
        "",
        "",
        "",
    ]

    const handleScroll = (event: any) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const newActiveTab = Math.round(scrollX / event.nativeEvent.layoutMeasurement.width);
        setActiveTab(newActiveTab);
    };
    return (
        <>
            <View style={styles.container}>
                <Header />
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}

                >
                    <BalanceCard />
                    <AddNewWallet onPress={() => console.log('Add New Wallet pressed')} />
                </ScrollView>
                {/* <TabIndicator totalTabs={2} activeTab={activeTab} /> */}
            </View>
            <View style={styles.payAction}>
                <AppText fontFamily='bold' fontSize={16} color='black' style={styles.title}>Pay Actions</AppText>
                <View style={styles.grid}>
                    {PAY_ACTIONS.map((action, index) => (
                        <PayActions key={index} iconName={action.icon as IconName} title={action.title} href={CONTROL[index] as Href<string | object>} />
                    ))}
                </View>
            </View>
            <Banner />
        </>
    )
}
