import { useState } from "react";
import { View, ViewStyle } from "react-native";
import { z } from "zod"
import { AppText } from "@/components/AppText";
import OtpInput from "@/components/OtpInput";
import { FLEX } from "@/config/constants";
import { styles } from "./style";
import { Button } from "@/components/buttons/Button";
import { heightPixel, pixelSizeVertical, widthPixel } from "@/config/normalise";
import { PinFormValues } from "@/config/schema/types";
import { pinSetupSchema } from "@/config/schema/schema";
import { useAppDispatch } from "@/config/store/hooks";
import { storeSignUpState6 } from "@/config/store/slices/signUpSlice";

interface Props {
    handleContinue: () => void;
    title?: string;
    caption?: string;
    style?: ViewStyle;
    buttonTitle?: string;
}

export default function EnterPin({
    title,
    caption = "Please enter your PIN to complete transaction",
    style,
    buttonTitle = "Proceed",
    handleContinue
}: Props) {
    const [pin, setPin] = useState<PinFormValues | string>("");
    const [error, setError] = useState("");
    const dispatch = useAppDispatch();

    const handleSetPin = (pin: string) => {
        setPin(pin);
    };

    const validateForm = (): boolean => {
        try {
            pinSetupSchema.parse({ transactionPin: pin });
            setError("");
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            }
            return false;
        }
    };

    const handleSubmit = () => {
        if (validateForm()) {
            dispatch(storeSignUpState6({ pin } as any));
            handleContinue();
        }
    };

    return (
        <View style={[FLEX, styles.container, style]}>
            {title && (
                <AppText
                    fontSize={18}
                    color="primary--1"
                    fontFamily="bold"
                    style={styles.title}
                >
                    {title}
                </AppText>
            )}
            <AppText
                color="grey--2"
                fontFamily="regular"
                style={styles.textStyle}
            >
                {caption}
            </AppText>
            <OtpInput
                length={6}
                inputStyle={{ width: widthPixel(49.8), height: heightPixel(44), marginRight: pixelSizeVertical(4.24) }}
                onComplete={handleSetPin}
            />
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
            <View style={FLEX} />
            <Button title={buttonTitle} backgroundColor="primary--4" onPress={handleSubmit} />
        </View>
    )
}