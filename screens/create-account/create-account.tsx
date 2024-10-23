import { useState } from "react"
import { View } from "react-native"
import { z } from "zod"
import { FLEX } from "@/config/constants"
import { AppText } from "@/components/AppText"
import { pixelSizeVertical } from "@/config/normalise"
import { styles } from "./styles"
import PhoneNumberInput from "@/components/PhoneNumberInput"
import { Button } from "@/components/buttons/Button"
import { RegisterationFormValues } from "@/config/schema/types"
import { registrationSchema } from "@/config/schema/schema"
import { useAppDispatch } from "@/config/store/hooks"
import { storeSignUpState1 } from "@/config/store/slices/signUpSlice"


export default function CreateAccount({ handleContinue }: { handleContinue: () => void }) {
    const [phoneNumber, setPhoneNumber] = useState<RegisterationFormValues['phoneNumber']>("");
    const [error, setError] = useState<Partial<RegisterationFormValues['phoneNumber']>>("");
    const dispatch = useAppDispatch();

    const handleInput = (enteredText: string) => {
        setPhoneNumber(enteredText)
    };

    const validateForm = (): boolean => {
        try {
            registrationSchema.pick({ phoneNumber: true }).parse({ phoneNumber });
            setError("");
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.log(error)
                setError(error.errors[0].message);
            }
            return false;
        }
    };

    const handleSubmit = () => {
        if (validateForm()) {
            dispatch(storeSignUpState1({ phoneNumber }));
            handleContinue();
        }
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
            {error && (
                <AppText
                    fontSize={12}
                    color="red"
                    fontFamily="medium"
                    style={{ marginBottom: pixelSizeVertical(8) }}
                >
                    {error}
                </AppText>
            )}
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
            <Button title='Continue' backgroundColor="primary--4" onPress={handleSubmit} disabled={!phoneNumber} />
        </>
    )
}


