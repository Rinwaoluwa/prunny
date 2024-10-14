import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { styles } from "./styles";
import { FLEX } from "@/config/constants";
import { AppText } from "@/components/AppText";
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import OtpInput from "@/components/OtpInput";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import Icon from "@/assets/svgs/icons";
import { useOtp } from "@/hooks/useFakeOtp";
import { Button } from "@/components/buttons/Button";

export default function OTP({ title, handleContinue }: { title: string, handleContinue: () => void }) {

    const { timeLeft, start, reset } = useCountdownTimer(60);
    const { otp, resend } = useOtp();
    const [otpValue, setOtpValue] = useState("");

    useEffect(() => {
        start(60) // start count down;
    }, []);

    const handleSetOtpValue = (otp: string) => {
        setOtpValue(otp);
        if(otp) {
            handleContinue();
        }
    }

    return (
        <View style={[styles.container, FLEX]}>
            <View style={FLEX}>
                <AppText
                    fontSize={18}
                    color="primary--1"
                    fontFamily="bold"
                    style={{ marginBottom: pixelSizeVertical(58) }}
                >
                    {title}
                </AppText>
                <View style={styles.caption}>

                    <AppText
                        fontSize={14}
                        color="grey--2"
                        fontFamily="regular"
                    >
                        Enter the 4 digit code
                    </AppText>
                    <AppText
                        fontSize={14}
                        color="grey--2"
                        fontFamily="regular"
                    >
                        {timeLeft}
                    </AppText>
                </View>
                <OtpInput length={4} onComplete={handleSetOtpValue} />
                <Pressable
                    onPress={() => {
                        resend();
                        reset();
                        start(59);
                    }}
                    style={styles.resend}
                >
                    <Icon name="mail" />
                    <AppText
                        fontSize={14}
                        color="primary--1"
                        fontFamily="medium"
                    >
                        Resend SMS
                    </AppText>
                </Pressable>
            </View>
            <Button 
                title="Continue"
                backgroundColor="primary--4"
                onPress={handleContinue} 
                disabled={Boolean(!otpValue)}
                style={{marginBottom: pixelSizeHorizontal(44)}}
            />
        </View>
    )
}