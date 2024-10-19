import { AppText } from "@/components/AppText";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import Icon from "@/assets/svgs/icons";
import { normalise, pixelSizeVertical } from "@/config/normalise";
import { WalletCard } from "@/components/WalletCard";
import { Button } from "@/components/buttons/Button";

export default function PaymentMethod() {
    const [paymentMode, setPaymentMode] = useState('wallet');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelectedCard = (index: number) => {

    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.accountCard}>
                    <View style={styles.userCircle}>
                        <AppText
                            fontSize={18}
                            color="white"
                            fontFamily="bold"
                        >
                            P
                        </AppText>
                    </View>
                    <View style={styles.accountDetails}>
                        <AppText color="primary--1" fontFamily="bold">Account Name</AppText>
                        <AppText color="primary--1" fontFamily="regular">Account number (Bank)</AppText>
                    </View>
                </View>
                <AppText
                    color="black"
                    fontSize={16}
                    fontFamily="bold"
                    style={{ marginBottom: pixelSizeVertical(10) }}
                >
                    Choose payment mode
                </AppText>

                <View style={styles.paymentOptions}>
                    <Pressable
                        style={[
                            styles.paymentButton,
                            paymentMode === 'wallet' && styles.selectedMode,
                        ]}
                        onPress={() => setPaymentMode('wallet')}
                    >
                        <Icon name="wallet" size={24} />
                        <Text style={styles.paymentButtonText}>Wallet</Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.paymentButton,
                            paymentMode === 'card' && styles.selectedMode,
                        ]}
                        onPress={() => setPaymentMode('card')}
                    >
                        <Icon name="credit-card" size={24} />
                        <Text style={styles.paymentButtonText}>Card</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardContainer}
            >
                {["5,000.29", "1,000,000.456"].map((bal: string, index: number) => (<WalletCard key={index} balance={bal} selected={selectedIndex == index} onPress={() => setSelectedIndex(index)} />))}
            </ScrollView>
            <View style={styles.container}>
                <Button title="Continue" backgroundColor="primary--4" />
            </View>
        </>
    )
}