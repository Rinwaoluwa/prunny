import { AppText } from "@/components/AppText";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import Icon from "@/assets/svgs/icons";
import { normalise, pixelSizeVertical } from "@/config/normalise";
import { WalletCard } from "@/components/WalletCard";
import { Button } from "@/components/buttons/Button";
import { CreditCard } from "@/components/CreditCard";
import AddNewCard from "@/components/AddNewCard";
import { AccountDetails } from "@/components/AccountDetails";
import { palette } from "@/config/palette";
import { CARD_DETAILS, WALLET_BALANCE } from "@/config/constants";

interface Props {
    handleContinue: () => void;
}

export default function PaymentMethod({ handleContinue }: Props) {
    const [paymentMode, setPaymentMode] = useState('wallet');
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <View style={styles.container}>

                <AccountDetails />
                <AppText
                    color="primary--1"
                    fontSize={16}
                    fontFamily="bold"
                    style={{ marginBottom: pixelSizeVertical(21) }}
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
                        <Icon name="wallet" size={normalise(24)} fill={palette['primary--4']} />
                        <Text style={styles.paymentButtonText}>Wallet</Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.paymentButton,
                            paymentMode === 'card' && styles.selectedMode,
                        ]}
                        onPress={() => setPaymentMode('card')}
                    >
                        <Icon name="credit-card" size={normalise(24)} fill={palette['primary--4']} />
                        <Text style={styles.paymentButtonText}>Card</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardContainer}
                style={styles.scrollView}
            >
                {paymentMode === "wallet" ? (
                    WALLET_BALANCE.map((bal: string, index: number) => (<WalletCard key={index} balance={bal} selected={selectedIndex == index} onPress={() => setSelectedIndex(index)} />))
                ) : (
                    <>
                        <AddNewCard />
                        {CARD_DETAILS.map((card, index) => (
                            <CreditCard
                                key={index}
                                cardName={card.name}
                                cardNumber={card.cardNumber}
                                selected={selectedIndex == index}
                                onPress={() => setSelectedIndex(index)}
                            />
                        ))}
                    </>
                )}


            </ScrollView>
            <View style={styles.container}>
                <Button title="Continue" backgroundColor="primary--4" onPress={handleContinue} />
            </View>
        </>
    )
}