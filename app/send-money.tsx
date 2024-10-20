import { useRouter } from "expo-router";
import { useState } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import OTP from "@/screens/otp/otp";
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise";
import { palette } from "@/config/palette";
import { AppText } from "@/components/AppText";
import { BackButton } from "@/components/buttons/BackButton";
import { FLEX } from "@/config/constants";
import EnterBankDetails from "@/screens/send-money/EnterBankDetails";
import PaymentMethod from "@/screens/payment-method/payment-method";
import EnterAmount from "@/screens/enter-amount/EnterAmount";
import TransactionSummary from "@/components/TransactionSummary";

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
    const [isVisible, setIsVisible] = useState(false);
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
                setIsVisible(true);
                setCurrentStep(SendMoneyFlow.transactionSummary)
                break;
            default:
                setCurrentStep(SendMoneyFlow.bankDetails)
        }
    };


    const handleCloseModal = () => {
        setIsVisible(false);
        setCurrentStep(SendMoneyFlow.enterAmount);
    };

    const handleModalContinue = () => {
        setIsVisible(false);
        handleContinue(currentStep)
    };

    const renderCurrentScreen = () => {
        switch (currentStep) {
            case SendMoneyFlow.bankDetails:
                return <EnterBankDetails handleContinue={() => handleContinue(currentStep)} />
            case SendMoneyFlow.paymentMethod:
                return <PaymentMethod handleContinue={() => handleContinue(currentStep)} />
            case SendMoneyFlow.enterAmount:
            case SendMoneyFlow.transactionSummary:
                return (
                    <>
                        <EnterAmount
                            handleContinue={() => {
                                setIsVisible(true);
                                handleContinue(currentStep);
                            }}
                        />
                        <TransactionSummary
                            isVisible={isVisible}
                            onClose={handleCloseModal}
                            onContinue={handleModalContinue}
                        />
                    </>
                )
            case SendMoneyFlow.pin:
                return (
                    <View style={[FLEX, styles.container]}>
                        <OTP
                            title=" Enter OTP you just received"
                            handleContinue={() => router.replace("/transaction-successful")}
                        />
                    </View>
                )
            default:
                return <EnterBankDetails handleContinue={() => handleContinue(currentStep)} />
        }
    }
    return (
        <>
            <View style={styles.header}>
                <View style={styles.buttonContainer}>
                    <BackButton onPress={handleGoBack} />
                </View>
                <View style={styles.titleContainer}>
                    <AppText fontFamily="bold" fontSize={18} color="primary--1">Send Money</AppText>
                </View>
                {/* Add empty view to center Send Money Text */}
                <View style={styles.emptyView} />
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={FLEX}>
                    {renderCurrentScreen()}
                </View>
            </TouchableWithoutFeedback>
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