import { View } from "react-native"
import { FLEX } from "@/config/constants"
import { AppText } from "@/components/AppText"
import { pixelSizeVertical } from "@/config/normalise"
import { styles } from "./styles"
import PhoneNumberInput from "@/components/PhoneNumberInput"
import { useState } from "react"
import { Button } from "@/components/buttons/Button"

export default function CreateAccount() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleInput = (enteredText: string) => {
        setPhoneNumber(enteredText)
    };

    return (
        <>
            <AppText
                fontSize={18}
                color="primary--1"
                fontFamily="bold"
                style={{ marginBottom: pixelSizeVertical(12) }}
            >
                Get Started
            </AppText>
            <AppText
                fontSize={14}
                color="grey--2"
                fontFamily="regular"
                style={{ marginBottom: pixelSizeVertical(21) }}
            >
                Start making your payments, settling your bills easily and faster
            </AppText>
            <PhoneNumberInput value={phoneNumber} onChangeText={handleInput} />
            <View style={styles.terms}>
                <AppText
                    fontSize={13}
                    color="grey--2"
                    fontFamily="regular"
                >
                    By adding your phone number, you agree to {" "}
                    <AppText
                        fontSize={13}
                        color="primary--1"
                        fontFamily="bold"
                    >
                        Prunny Terms & Conditions
                    </AppText>
                </AppText>
            </View>
            {/* White spacing view. */}
            <View style={FLEX}></View>
            <Button title='Continue' backgroundColor="primary--4" disabled={!phoneNumber} />
        </>
    )
}


