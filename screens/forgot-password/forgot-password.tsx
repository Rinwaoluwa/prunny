import { View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "@/components/buttons/BackButton";
import { AppText } from "@/components/AppText";
import { pixelSizeVertical } from "@/config/normalise";
import { Link, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { AppTextInput } from "@/components/AppTextInput";
import { Button } from "@/components/buttons/Button";
import { FLEX } from "@/config/constants";

export default function ForgotPassword() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        watch,
        setValue
    } = useForm({
        defaultValues: {
            phoneNumber: '9988777271',
        },
        mode: "onSubmit",
        // resolver: zodResolver(login),
    });
    const disable = watch("phoneNumber");

    const handleBackButton = () => router.push("/");
    return (
        <View style={[styles.container, FLEX]}>
            <BackButton onPress={handleBackButton} />
            <View style={FLEX}>
                <AppText
                    fontSize={18}
                    color="primary--1"
                    fontFamily="bold"
                    style={{ marginBottom: pixelSizeVertical(12) }}
                >
                    Forgot Password
                </AppText>
                <AppText
                    fontSize={14}
                    color="grey--2"
                    fontFamily="regular"
                    style={{ marginBottom: pixelSizeVertical(29) }}
                >
                    Enter the phone number associated with your account to reset your password
                </AppText>

                <AppTextInput
                    control={control}
                    label="Phone Number*"
                    placeholder="Phone Number"
                    error={errors.phoneNumber?.message}
                    name="phoneNumber"
                    textContentType="telephoneNumber"
                    keyboardType="phone-pad"
                />
            </View>
            <View style={styles.footer}>
                <Button title='Continue' backgroundColor="primary--4" disabled={!disable} />
                <View style={styles.footerText}>
                    <AppText fontFamily="regular" color="primary--1">I can remember the password?{" "}</AppText>
                    <Link href="/" asChild>
                        <AppText fontFamily="bold" color="primary--1">Login</AppText>
                    </Link>
                </View>
            </View>
        </View>
    )
}