import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise"
import { palette } from "@/config/palette"
import { StyleSheet, View } from "react-native"
import { AppText } from "./AppText"

export function AccountDetails() {
    return (
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
    )
}

const styles = StyleSheet.create({
    accountCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: palette['primary--3'],
        padding: normalise(20),
        borderRadius: normalise(10),
        marginBottom: pixelSizeHorizontal(20),
    },
    userCircle: {
        height: heightPixel(60),
        width: widthPixel(60),
        borderRadius: normalise(30),
        backgroundColor: palette['primary--1'],
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#D3C0E19E",
        borderWidth: widthPixel(2),
    },
    accountDetails: {
        marginLeft: pixelSizeVertical(15),
    },
})