import { BackButton } from "@/components/buttons/BackButton"
import { ProgressBar } from "@/components/ProgressBar"
import { FLEX } from "@/config/constants"
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise"
import CreateAccount from "@/screens/create-account/create-account"
import { useState } from "react"
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

enum CreateAccountFLow {
    getStarted,
    Otp,
    personalDetails,
    faceScan,
    enterEmail,
    createPassword,
    fingerPrint,
    pin,
}

export default () => {
    const [currentStep, setCurrentStep] = useState(CreateAccountFLow.getStarted)

    const handleGoBack = () => { };
    const renderCurrentScreen = () => { return <CreateAccount /> };
    return (
        <View style={[styles.container, FLEX]}>
            <View style={styles.topButtonsContainer}>
                <BackButton onPress={() => handleGoBack(currentStep)} />
                <ProgressBar progress={.2} />
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={FLEX}>
                    {renderCurrentScreen()}
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(32),
        marginBottom: pixelSizeVertical(29),
    },
    topButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    }
})