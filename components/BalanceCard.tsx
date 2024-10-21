import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '@/config/palette';
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { AppText } from './AppText';
import Icon from '@/assets/svgs/icons';
import { convertToStars } from '@/utils/helpers';

interface BalanceCardProps {
    balance: number;
    onFundPress: () => void;
    onWithdrawPress: () => void;
    onRequestPress: () => void;
}

const actions = [
    { name: "fund", title: "Fund" },
    { name: "wallet", title: "Widthdraw" },
    { name: "request", title: "Request" },
]

const BalanceCard = () => {
    const [showBalance, setShowBalance] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <View style={styles.balanceText}>
                    <AppText fontFamily='regular' color='grey' fontSize={18}>Total Balance:</AppText>
                    <AppText fontFamily='regular' color='white' fontSize={18}>{showBalance ? "₦5000" : convertToStars(5000)}</AppText>
                </View>
                <Pressable onPress={() => setShowBalance(!showBalance)}>
                    <Icon name={showBalance ? "visible" : "hidden"} size={24} fill={palette['primary--2']} />
                </Pressable>
            </View>
            <View style={styles.actionsContainer}>
                {actions.map((action: any, index) => (
                    <Pressable key={`Button ${index}`} style={styles.actionButton}>
                        <Icon name={action.name} size={normalise(32)} fill={palette['yellow']} />
                        <AppText fontFamily='regular' fontSize={12} color='white' >{action.title}</AppText>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette['grey--2'],
        borderRadius: normalise(12),
        padding: pixelSizeVertical(20),
        height: pixelSizeVertical(157),
        width: pixelSizeVertical(313),
        marginTop: pixelSizeHorizontal(35),
        marginRight: pixelSizeVertical(12),
    },
    balanceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: pixelSizeVertical(18),
    },
    balanceText: {
        flexDirection: "row",
        gap: normalise(5),
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette['primary--3'],
        height: pixelSizeVertical(75),
        width: pixelSizeHorizontal(75),
        borderRadius: normalise(4),
        paddingHorizontal: pixelSizeHorizontal(2),
    },
    actionText: {
        color: 'white',
        marginTop: 4,
    },
});

export default BalanceCard;