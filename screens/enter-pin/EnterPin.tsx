import { AppText } from "@/components/AppText";
import OtpInput from "@/components/OtpInput";
import { FLEX } from "@/config/constants";
import { useState } from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./style";
import { Button } from "@/components/buttons/Button";
import { heightPixel, pixelSizeVertical, widthPixel } from "@/config/normalise";

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
    const [pin, setPin] = useState("");
    const handleSetPin = (pin: string) => {
        setPin(pin);
        if (pin) {
            console.log("pin correct")
        }
    }
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
            <View style={FLEX} />
            <Button title={buttonTitle} backgroundColor="primary--4" onPress={handleContinue} />
        </View>
    )
}