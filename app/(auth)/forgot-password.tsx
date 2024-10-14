import { BackButton } from "@/components/buttons/BackButton";
import { FLEX } from "@/config/constants";
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import CreatePassword from "@/screens/create-password/create-password";
import ForgotPasswordPage from "@/screens/forgot-password/forgot-password";
import OTP from "@/screens/otp/otp";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, Pressable, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

enum ForgotPasswordFlow {
    forgotPassword,
    OTP,
    createPassword
}


export default () => {
    const [currentStep, setCurrentStep] = useState(ForgotPasswordFlow.forgotPassword);
    const router = useRouter();

    const handleContinue = (currentStep: ForgotPasswordFlow) => {
        switch (currentStep) {
            case ForgotPasswordFlow.forgotPassword:
                setCurrentStep(ForgotPasswordFlow.OTP)
                break;
            case ForgotPasswordFlow.OTP:
                setCurrentStep(ForgotPasswordFlow.createPassword)
                break;
            case ForgotPasswordFlow.createPassword:
                () => { };
                break;
            default:
                setCurrentStep(ForgotPasswordFlow.forgotPassword);
        }
    }
    const handleGoBack = (currentStep: ForgotPasswordFlow) => {
        switch (currentStep) {
            case ForgotPasswordFlow.forgotPassword:
                router.push("/");
                break;
            case ForgotPasswordFlow.OTP:
                setCurrentStep(ForgotPasswordFlow.forgotPassword);
                break;
            case ForgotPasswordFlow.createPassword:
                setCurrentStep(ForgotPasswordFlow.OTP);
                break;
            default:
                setCurrentStep(ForgotPasswordFlow.forgotPassword);
        }
    }

    const renderCurrentScreen = () => {
        switch (currentStep) {
            case ForgotPasswordFlow.forgotPassword:
                return <ForgotPasswordPage handleContinue={() => handleContinue(currentStep)} />
            case ForgotPasswordFlow.OTP:
                return <OTP title="Enter OTP sent to your phone number" handleContinue={() => handleContinue(currentStep)} />
            case ForgotPasswordFlow.createPassword:
                return <CreatePassword handleContinue={() => handleContinue(currentStep)} />
            default:
                return <ForgotPasswordPage handleContinue={() => handleContinue(currentStep)} />
        }
    }

    return (
        <View style={[styles.container, FLEX]}>
            <BackButton onPress={() => handleGoBack(currentStep)} />
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
    },
});