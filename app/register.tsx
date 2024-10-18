import { BackButton } from "@/components/buttons/BackButton"
import { ProgressBar } from "@/components/ProgressBar"
import { FLEX } from "@/config/constants"
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise"
import CreateAccount from "@/screens/create-account/create-account"
import OTP from "@/screens/otp/otp"
import { useRouter } from "expo-router"
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
    const [currentStep, setCurrentStep] = useState(CreateAccountFLow.getStarted);
    const router = useRouter();


    const handleContinue = (currentStep: CreateAccountFLow) => {
        switch (currentStep) {
            case CreateAccountFLow.getStarted:
                setCurrentStep(CreateAccountFLow.Otp)
                break;
            case CreateAccountFLow.Otp:
                setCurrentStep(CreateAccountFLow.personalDetails)
                break;
            case CreateAccountFLow.personalDetails:
                setCurrentStep(CreateAccountFLow.faceScan)
                break;
            case CreateAccountFLow.faceScan:
                setCurrentStep(CreateAccountFLow.enterEmail)
                break;
            case CreateAccountFLow.enterEmail:
                setCurrentStep(CreateAccountFLow.createPassword)
                break;
            case CreateAccountFLow.createPassword:
                setCurrentStep(CreateAccountFLow.fingerPrint)
                break;
            case CreateAccountFLow.fingerPrint:
                setCurrentStep(CreateAccountFLow.pin)
                break;
            case CreateAccountFLow.pin:
                () => { }
            default:
                setCurrentStep(CreateAccountFLow.getStarted)

        }
    }
    const handleGoBack = () => {
        switch (currentStep) {
            case CreateAccountFLow.getStarted:
                router.push("/")
                break;
            case CreateAccountFLow.Otp:
                setCurrentStep(CreateAccountFLow.getStarted)
                break;
            case CreateAccountFLow.personalDetails:
                setCurrentStep(CreateAccountFLow.Otp)
                break;
            case CreateAccountFLow.faceScan:
                setCurrentStep(CreateAccountFLow.personalDetails)
                break;
            case CreateAccountFLow.enterEmail:
                setCurrentStep(CreateAccountFLow.faceScan)
                break;
            case CreateAccountFLow.createPassword:
                setCurrentStep(CreateAccountFLow.enterEmail)
                break;
            case CreateAccountFLow.fingerPrint:
                setCurrentStep(CreateAccountFLow.createPassword)
                break;
            case CreateAccountFLow.pin:
                setCurrentStep(CreateAccountFLow.fingerPrint)
                break;
            default:
                setCurrentStep(CreateAccountFLow.getStarted)
        }
    };
    const renderCurrentScreen = () => {
        switch (currentStep) {
            case CreateAccountFLow.getStarted:
                return (
                    <CreateAccount
                        handleContinue={() => handleContinue(currentStep)}
                    />
                )
            case CreateAccountFLow.Otp:
                return (
                    <OTP 
                        title="Kindly verify your number with the OTP you just received"
                        handleContinue={() => handleContinue(currentStep)}
                    />
                )
            case CreateAccountFLow.personalDetails:
            // return <PersonalDetails />
            case CreateAccountFLow.faceScan:
            // return <FaceScan />
            case CreateAccountFLow.enterEmail:
            // return <Email />
            default:
                return <CreateAccount handleContinue={() => handleContinue(currentStep)} />
        }
    };
    return (
        <View style={[styles.container, FLEX]}>
            <View style={styles.topButtonsContainer}>
                <BackButton onPress={handleGoBack} />
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