import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise";
import { palette } from "@/config/palette";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: pixelSizeVertical(37),
        paddingHorizontal: pixelSizeHorizontal(20),
        backgroundColor: palette['white']
    },
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
    paymentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    paymentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: normalise(20),
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 5,
        borderWidth: normalise(.8),
        borderColor: palette['primary--2']
    },
    selectedMode: {
        backgroundColor: palette['primary--3'],
        borderWidth: 1,
        borderColor: palette['primary--2'],
    },
    paymentButtonText: {
        fontSize: 14,
        color: '#6E33FF',
        marginLeft: 8,
    },
    balanceCard: {
        position: "relative",
        backgroundColor: palette['primary--1'],
        padding: 20,
        borderRadius: 10,
        marginBottom: 50,
        width: widthPixel(265.41),
        height: heightPixel(155.62),
    },
    balanceText: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    amountText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    continueButton: {
        paddingVertical: 15,
        borderRadius: 8,
    },
    cardContainer: {
        backgroundColor: palette['primary--3'],
        paddingLeft: pixelSizeHorizontal(20),
        paddingVertical: pixelSizeVertical(33),
        alignItems: "center",
    },
})