import { BackButton } from "@/components/buttons/BackButton"
import { ProgressBar } from "@/components/ProgressBar"
import { FLEX } from "@/config/constants"
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise"
import { palette } from "@/config/palette"
import CreateAccount from "@/screens/create-account/create-account"
import CreatePassword from "@/screens/create-password/create-password"
import { EnterEmail } from "@/screens/email/email"
import EnterPin from "@/screens/enter-pin/EnterPin"
import FaceScan from "@/screens/face-scan/FaceScan"
import OTP from "@/screens/otp/otp"
import PersonalDetails from "@/screens/personal-details/personal-details-form"
import { ADDRESS_DETAILS, PERSONAL_DETAILS } from "@/utils/form-fields"
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
    // fingerPrint,
    pin,
}
const TOTAL_SCREENS = 6;

export default () => {
    const [currentStep, setCurrentStep] = useState(CreateAccountFLow.getStarted);
    const [formField, setFormField] = useState("personalDetails");
    const router = useRouter();

    const progress = currentStep / TOTAL_SCREENS;

    const handleContinue = () => {
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
                setCurrentStep(CreateAccountFLow.pin)
                break;
            // case CreateAccountFLow.fingerPrint:
            //     setCurrentStep(CreateAccountFLow.pin)
            //     break;
            case CreateAccountFLow.pin:
                router.replace("/(main)/");
                break;
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
                if (formField === "address") {
                    setFormField("personalDetails");
                    return;
                };
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
            // case CreateAccountFLow.fingerPrint:
            //     setCurrentStep(CreateAccountFLow.createPassword)
            //     break;
            case CreateAccountFLow.pin:
                setCurrentStep(CreateAccountFLow.createPassword)
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
                        handleContinue={handleContinue}
                    />
                )
            case CreateAccountFLow.Otp:
                return (
                    <OTP
                        title="Kindly verify your number with the OTP you just received"
                        handleContinue={handleContinue}
                    />
                )
            case CreateAccountFLow.personalDetails:
                return (
                    <>
                        {formField === "personalDetails" ?
                            <PersonalDetails
                                key={0}
                                title={PERSONAL_DETAILS.title}
                                caption={PERSONAL_DETAILS.caption}
                                formFields={PERSONAL_DETAILS.fields}
                                handleContinue={() => setFormField("address")}
                            /> :
                            <PersonalDetails
                                key={1}
                                title={ADDRESS_DETAILS.title}
                                caption={ADDRESS_DETAILS.caption}
                                formFields={ADDRESS_DETAILS.fields}
                                handleContinue={handleContinue}
                            />
                        }
                    </>
                )
            case CreateAccountFLow.faceScan:
                return <FaceScan handleContinue={handleContinue} />
            case CreateAccountFLow.enterEmail:
                return <EnterEmail handleContinue={handleContinue} />
            case CreateAccountFLow.createPassword:
                return (
                    <CreatePassword
                        title="Your security is Key!  Set a strong password here"
                        caption=""
                        handleContinue={handleContinue}
                    />
                )
            case CreateAccountFLow.pin:
                return (
                    <EnterPin
                        title="Secure your transactions with a safe Authorization PIN"
                        buttonTitle="Finish"
                        handleContinue={handleContinue}
                        style={{ paddingVertical: 0, paddingHorizontal: 0 }}
                    />
                )
            default:
                return <CreateAccount handleContinue={handleContinue} />
        }
    };
    return (
        <View style={[styles.container, FLEX]}>
            <View style={styles.topButtonsContainer}>
                <BackButton onPress={handleGoBack} />
                <ProgressBar progress={progress} />
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
        paddingHorizontal: pixelSizeHorizontal(20),
        paddingTop: pixelSizeVertical(32),
        paddingBottom: pixelSizeVertical(29),
        backgroundColor: palette['white'],
    },
    topButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    }
})