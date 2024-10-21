import { AppText } from "@/components/AppText";
import OtpInput from "@/components/OtpInput";
import { FLEX } from "@/config/constants";
import { useState } from "react";
import { View } from "react-native";
import { styles } from "./style";
import { Button } from "@/components/buttons/Button";
import { heightPixel, widthPixel } from "@/config/normalise";

interface Props {
    handleContinue: () => void;
}

export default function EnterPin({ handleContinue }: Props) {
    const [pin, setPin] = useState("");
    const handleSetPin = (pin: string) => {
        setPin(pin);
        if (pin) {
            console.log("pin correct")
        }
    }
    return (
        <View style={[FLEX, styles.container]}>
            <AppText
                color="grey--2"
                fontFamily="regular"
                style={styles.textStyle}
            >
                Please enter your PIN to complete transaction
            </AppText>
            <OtpInput
                length={6}
                inputStyle={{ width: widthPixel(49.8), height: heightPixel(44) }}
                onComplete={handleSetPin}
            />
            <View style={FLEX} />
            <Button title="Proceed" backgroundColor="primary--4" onPress={handleContinue} />
        </View>
    )
}