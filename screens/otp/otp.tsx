import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { z } from "zod";
import { styles } from "./styles";
import { FLEX } from "@/config/constants";
import { AppText } from "@/components/AppText";
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import OtpInput from "@/components/OtpInput";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import Icon from "@/assets/svgs/icons";
import { useOtp } from "@/hooks/useFakeOtp";
import { Button } from "@/components/buttons/Button";
import { otpSchema } from "@/config/schema/schema";

type OTP_Z_Type = z.infer<typeof otpSchema>;

export default function OTP({ title, handleContinue }: { title: string, handleContinue: () => void }) {

    const { timeLeft, start, reset } = useCountdownTimer(60);
    const { otp, resend } = useOtp();
    const [otpValue, setOtpValue] = useState("");

    useEffect(() => {
        start(60) // start count down;
    }, []);

    const [error, setError] = useState<Partial<OTP_Z_Type['otp']>>("");

    const validateForm = (): boolean => {
        try {
            otpSchema.parse({ otp: otpValue });
            setError("");
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            }
            return false;
        }
    };

    const handleSetOtpValue = (otp: string) => {
        setOtpValue(otp);
    }

    const handleSubmit = () => {
        const validOtp = otpValue === "1234" ? true : otpValue === "4321" ? true : false;
        if (validateForm()) {
            if (!validOtp) {
                setError("Invalid Otp!");
                setOtpValue("");
            } else {
                handleContinue();
            }
        }
    };

    return (
        <>
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
            {error && (
                <AppText
                    fontSize={12}
                    color="red"
                    fontFamily="medium"
                    style={{ marginVertical: pixelSizeVertical(8) }}
                >
                    {error}
                </AppText>
            )}
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
            <View style={FLEX} />
            <Button
                title="Continue"
                backgroundColor="primary--4"
                onPress={handleSubmit}
                disabled={Boolean(!otpValue)}
                style={{ marginBottom: pixelSizeHorizontal(44) }}
            />
        </>
    )
}