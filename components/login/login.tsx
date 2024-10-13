import { Pressable, ScrollView, View } from "react-native";
import { AppText } from "@/components/AppText";
import { FLEX } from "@/config/constants";
import { styles } from "./styles";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { AppTextInput } from "@/components/AppTextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";
import Icon from "@/assets/svgs/icons";
import { Button } from "../buttons/Button";
import { BiometricsButton } from "../buttons/BiometricsButton";
import { getMaskedPassword } from "@/util/helpers";

export default function LoginPage() {

    const [hidePassword, setHidePassword] = useState(true);
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
            phoneNumber: '',
            password: 'aaabbbccc',
        },
        mode: "onSubmit",
        // resolver: zodResolver(login),
    });
    const [password, phoneNumber] = watch(["password", "phoneNumber"]);
    const disable = phoneNumber && password ? false : true;

    const onSubmit = () => {
        try {

        } catch (error) { }

    };

    return (
        <ScrollView style={[FLEX, styles.container]}>
            <AppText
                fontSize={18}
                color="primary--1"
                fontFamily="bold"
                style={{ lineHeight: normalise(22), marginBottom: pixelSizeVertical(12) }}
            >
                Welcome Back
            </AppText>
            <AppText
                fontSize={14}
                color="grey--2"
                fontFamily="regular"
                style={{ lineHeight: normalise(16), marginBottom: pixelSizeVertical(44) }}
            >
                Log into your account and continue to make your transactions easily
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
            <AppTextInput
                control={control}
                label="Password"
                placeholder="Password"
                error={errors.phoneNumber?.message}
                name="password"
                secureTextEntry={hidePassword}
                right={hidePassword ? "eye-closed" : "eye-open"}
                onPressRigthtIcon={() => setHidePassword(!hidePassword)}
                autoCapitalize="none"
            />
            <Link href="/" asChild>
                <Pressable style={styles.linkStyle}>
                    <Icon name="security" size={normalise(14)} />
                    <AppText fontFamily="regular" color="primary--1">Forgot Password</AppText>
                </Pressable>
            </Link>

            <View style={styles.buttonsContainer}>
                <Button title='Log In' backgroundColor="primary--4" style={styles.loginButton} disabled={disable} />
                <BiometricsButton />
            </View>

            <View style={styles.footer}>
                <AppText fontFamily="regular" color="primary--1">I don’t have an account?{" "}</AppText>
                <Link href="/" asChild>
                    <AppText fontFamily="bold" color="primary--1">Create Account</AppText>
                </Link>
            </View>

        </ScrollView>
    )
}
