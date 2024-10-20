import Icon from "@/assets/svgs/icons"
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise"
import { palette } from "@/config/palette"
import { Pressable, StyleSheet, View } from "react-native"
import { AppText } from "./AppText"

interface Props {
    onPress: () => void;
    balance: string;
    selected: boolean;
}

export function WalletCard({ balance, selected, onPress }: Props) {
    return (
        <Pressable style={styles.balanceCard} onPress={onPress}>
            <View style={styles.cardContent}>
                {/* Circle background */}
                <View style={[styles.cicrle, styles.topRight]} />
                <AppText fontFamily="regular" color='white' style={{ opacity: .54 }}>Current Balance</AppText>
                <AppText fontFamily="bold" fontSize={24} color='white'>₦{balance}</AppText>
                <Icon name="prunny-logo-3" size={normalise(80)} style={{ alignSelf: "flex-end" }} />
                {/* Circle background */}
                <View style={[styles.cicrle, styles.bottomLeft]} />
            </View>
            {selected && <Icon name="checkmark" size={normalise(24)} style={styles.selectedCard} />}
        </Pressable>
    )
};

const styles = StyleSheet.create({
    balanceCard: {
        position: "relative",
        backgroundColor: palette['primary--1'],
        borderRadius: normalise(10),
        marginBottom: pixelSizeVertical(10),
        marginRight: pixelSizeHorizontal(10),
    },
    cardContent: {
        paddingVertical: pixelSizeVertical(30),
        paddingHorizontal: pixelSizeHorizontal(26),
        overflow: "hidden",
        width: widthPixel(265.41),
        height: heightPixel(155.62),
    },
    selectedCard: {
        position: "absolute",
        right: pixelSizeHorizontal(-5),
        top: pixelSizeVertical(-10),
        zIndex: 99,
    },
    cicrle: {
        backgroundColor: palette['primary--3'],
        height: heightPixel(200),
        width: widthPixel(250),
        borderRadius: normalise(200),
        position: "absolute",
    },
    topRight: {
        top: pixelSizeVertical(-130),
        right: pixelSizeHorizontal(-100),
        transform: [{ rotate: "-360deg" }]
    },
    bottomLeft: {
        bottom: pixelSizeVertical(-130),
        left: pixelSizeHorizontal(-100),
    },
})