import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { FLEX } from "@/config/constants";
import { palette } from "@/config/palette";
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/config/normalise";
import { AppText } from "@/components/AppText";
import { BackButton } from "@/components/buttons/BackButton";
import AirtimeData from "@/screens/airtime-data/airtime-data";
import { useState } from "react";
import { useRouter } from "expo-router";
import PaymentMethod from "@/screens/payment-method/payment-method";
import TransactionSummary from "@/components/TransactionSummary";
import EnterPin from "@/screens/enter-pin/EnterPin";

enum AirtimeDataFlow {
    airtimeData,
    paymentMethod,
    transactionSummary,
    enterPin,
}

export default function AirtimeDataScreen() {
    const [currentStep, setCurrentStep] = useState(AirtimeDataFlow.airtimeData);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const router = useRouter();

    const handleContinue = () => {
        switch (currentStep) {
            case AirtimeDataFlow.airtimeData:
                setCurrentStep(AirtimeDataFlow.paymentMethod);
                break;
            case AirtimeDataFlow.paymentMethod:
                setCurrentStep(AirtimeDataFlow.transactionSummary);
                break;
            case AirtimeDataFlow.transactionSummary:
                setCurrentStep(AirtimeDataFlow.enterPin);
                break;
            default:
                setCurrentStep(AirtimeDataFlow.airtimeData);
        }
    };
    const handleGoBack = () => {
        switch (currentStep) {
            case AirtimeDataFlow.airtimeData:
                router.back();
            case AirtimeDataFlow.paymentMethod:
                setCurrentStep(AirtimeDataFlow.airtimeData);
                break;
            case AirtimeDataFlow.transactionSummary:
                setCurrentStep(AirtimeDataFlow.paymentMethod);
                break;
            case AirtimeDataFlow.enterPin:
                setIsModalVisible(true);
                setCurrentStep(AirtimeDataFlow.transactionSummary);
                break;
            default:
                setCurrentStep(AirtimeDataFlow.airtimeData);
        }
    };
    const handleCloseModal = () => {
        setIsModalVisible(false);
        setCurrentStep(AirtimeDataFlow.paymentMethod);
    };

    const handleModalContinue = () => {
        setIsModalVisible(false);
        handleContinue()
    };

    const renderCurrentScreen = () => {
        switch (currentStep) {
            case AirtimeDataFlow.airtimeData:
                return <AirtimeData onContinue={handleContinue} />
            case AirtimeDataFlow.paymentMethod:
            case AirtimeDataFlow.transactionSummary:
                return (
                    <>
                        <PaymentMethod handleContinue={() => {
                            setIsModalVisible(true);
                            handleContinue();
                        }} />
                        <TransactionSummary
                            isVisible={isModalVisible}
                            onClose={handleCloseModal}
                            onContinue={handleModalContinue}
                        />
                    </>
                )
            case AirtimeDataFlow.enterPin:
                return <EnterPin handleContinue={() => router.replace("/transaction-successful")} />
            default:
                return <AirtimeData onContinue={handleContinue} />

        }
    };

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
                    {renderCurrentScreen()}
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