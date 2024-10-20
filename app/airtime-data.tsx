import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { FLEX } from "@/config/constants";
import { palette } from "@/config/palette";
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise";
import { AppText } from "@/components/AppText";
import { BackButton } from "@/components/buttons/BackButton";
import AirtimeData from "@/screens/airtime-data/airtime-data";

enum AirtimeDataFlow {
    airtimeData,
    paymentMethod,
    transactionSummary,
    enterPin,
    transactionSuccesful
}

export default function AirtimeDataScreen() {

    const handleGoBack = () => { };

    return (
        <>
            <View style={styles.header}>
                <View style={styles.buttonContainer}>
                    <BackButton onPress={handleGoBack} />
                </View>
                <View style={styles.titleContainer}>
                    <AppText fontFamily="bold" fontSize={18} color="primary--1">Airtime & Data</AppText>
                </View>
                {/* Add empty view to center Send Money Text */}
                <View style={styles.emptyView} />
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={FLEX}>
                    <AirtimeData />
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: palette['white'],
        elevation: normalise(5),
        shadowColor: '#DBDAD7',
        shadowOffset: { width: 0, height: normalise(5) },
        shadowOpacity: normalise(.18),
        shadowRadius: normalise(5),
        padding: pixelSizeVertical(8),
        marginBottom: pixelSizeVertical(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: heightPixel(90)
    },
    buttonContainer: {
        marginTop: pixelSizeVertical(30),
    },
    container: {
        paddingVertical: pixelSizeVertical(37),
        paddingHorizontal: pixelSizeHorizontal(20),
        backgroundColor: palette['white'],
    },
    titleContainer: {
        flexGrow: 1,
        alignItems: "center",
    },
    emptyView: {
        width: widthPixel(42),
    },
})