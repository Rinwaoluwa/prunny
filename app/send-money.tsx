import { useRouter } from "expo-router";
import { useState } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import OTP from "@/screens/otp/otp";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { AppText } from "@/components/AppText";
import { BackButton } from "@/components/buttons/BackButton";
import { FLEX } from "@/config/constants";
import EnterBankDetails from "@/screens/send-money/EnterBankDetails";
import PaymentMethod from "@/screens/payment-method/payment-method";

enum SendMoneyFlow {
    bankDetails,
    paymentMethod,
    enterAmount,
    transactionSummary,
    pin,
    success,
}

export default function SendMoney() {
    const [currentStep, setCurrentStep] = useState(SendMoneyFlow.bankDetails);
    const router = useRouter();

    const handleContinue = (currentStep: SendMoneyFlow) => {
        switch (currentStep) {
            case SendMoneyFlow.bankDetails:
                setCurrentStep(SendMoneyFlow.paymentMethod)
                break;
            case SendMoneyFlow.paymentMethod:
                setCurrentStep(SendMoneyFlow.enterAmount)
                break;
            case SendMoneyFlow.enterAmount:
                setCurrentStep(SendMoneyFlow.transactionSummary)
                break;
            case SendMoneyFlow.transactionSummary:
                setCurrentStep(SendMoneyFlow.pin)
                break;
            case SendMoneyFlow.pin:
                setCurrentStep(SendMoneyFlow.success)
                break;
            case SendMoneyFlow.success:
                () => { }
                break;
            default:
                setCurrentStep(SendMoneyFlow.bankDetails);
        }
    };
    const handleGoBack = () => {
        switch (currentStep) {
            case SendMoneyFlow.bankDetails:
                router.back();
                break;
            case SendMoneyFlow.paymentMethod:
                setCurrentStep(SendMoneyFlow.bankDetails)
                break;
            case SendMoneyFlow.enterAmount:
                setCurrentStep(SendMoneyFlow.paymentMethod)
                break;
            case SendMoneyFlow.transactionSummary:
                setCurrentStep(SendMoneyFlow.enterAmount);
                break;
            case SendMoneyFlow.pin:
                setCurrentStep(SendMoneyFlow.transactionSummary)
                break;
            case SendMoneyFlow.success:
                () => { };
                break;
            default:
                setCurrentStep(SendMoneyFlow.bankDetails)
        }
    };
    const renderCurrentScreen = () => {
        switch (currentStep) {
            case SendMoneyFlow.bankDetails:
                return <EnterBankDetails handleContinue={() => handleContinue(currentStep)} />
            case SendMoneyFlow.paymentMethod:
                return <PaymentMethod />
            case SendMoneyFlow.enterAmount:
            // return <EnterAmount />
            case SendMoneyFlow.transactionSummary:
            // return <TransactionSummary />
            case SendMoneyFlow.pin:
                return <OTP title="Please enter your PIN to complete transaction" handleContinue={() => handleContinue(currentStep)} />
            case SendMoneyFlow.success:
            // return <TransactionSuccess />
        }
    }
    return (
        <>
            <View style={styles.header}>
                <View style={styles.buttonContainer}>
                    <BackButton onPress={handleGoBack} />
                </View>
                <AppText fontFamily="bold" fontSize={18} color="primary--1">Send Money</AppText>
                {/* Add empty view to center Send Money Text */}
                <View />
            </View>
            <View style={FLEX}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {renderCurrentScreen()}
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}


export const styles = StyleSheet.create({
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
        justifyContent: "space-between"
    },
    buttonContainer: {
        marginTop: pixelSizeVertical(30)
    }
})