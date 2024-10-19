import Icon from "@/assets/svgs/icons"
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise"
import { palette } from "@/config/palette"
import { Pressable, StyleSheet, View } from "react-native"
import { AppText } from "./AppText"
import { formatCardNumber } from "@/utils/helpers"

interface Props {
    onPress: () => void;
    selected: boolean;
    cardName: string;
    cardNumber: string;
}

export function CreditCard({ cardName, cardNumber, selected, onPress }: Props) {
    return (
        <Pressable style={styles.balanceCard} onPress={onPress}>
            <View style={styles.cardContent}>
                <AppText fontFamily="regular" fontSize={12.44} color='white' style={styles.cardName}>
                    {cardName.toUpperCase()}
                </AppText>
                <AppText fontFamily="bold" fontSize={16} color='white' style={styles.cardNumber}>
                    {formatCardNumber(cardNumber)}
                </AppText>
                <View style={styles.footer}>
                    <View>
                        <AppText fontFamily="regular" fontSize={8.89} color='white'>VALID THRU</AppText>
                        <AppText fontFamily="regular" fontSize={8.89} color='white' style={{ alignSelf: "flex-end" }}>07/22</AppText>
                    </View>
                    <Icon name="mastercard" size={normalise(50)} />
                </View>
                <Icon name="card-lines" size={normalise(200)} style={styles.lines} />
            </View>

            {selected && <Icon name="checkmark" size={normalise(24)} style={styles.selectedCard} />}
        </Pressable>
    )
};

const styles = StyleSheet.create({
    balanceCard: {
        position: "relative",
        backgroundColor: palette['primary--4'],
        borderRadius: normalise(10),
        marginBottom: pixelSizeVertical(10),
        width: widthPixel(280.56),
        height: heightPixel(190),
        marginRight: pixelSizeHorizontal(14.8),
    },
    cardContent: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        paddingVertical: pixelSizeVertical(30),
        paddingHorizontal: pixelSizeHorizontal(26),
    },
    selectedCard: {
        position: "absolute",
        right: pixelSizeHorizontal(-5),
        top: pixelSizeVertical(-10),
        zIndex: normalise(99),
    },
    lines: {
        position: "absolute",
        bottom: pixelSizeVertical(-70),
        left: pixelSizeHorizontal(-10),
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: pixelSizeHorizontal(8)
    },
    cardName: {
        marginBottom: pixelSizeVertical(27.56)
    },
    cardNumber: {
        marginBottom: pixelSizeVertical(19.56)

    }
})