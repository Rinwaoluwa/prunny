import { Keyboard, Pressable, TouchableWithoutFeedback, View } from "react-native";
import { AppText } from "@/components/AppText";
import { FLEX } from "@/config/constants";
import { styles } from "./styles";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { AppTextInput } from "@/components/AppTextInput";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";
import Icon from "@/assets/svgs/icons";
import { Button } from "../../components/buttons/Button";
import { BiometricsButton } from "../../components/buttons/BiometricsButton";
import { AppBottomSheet } from "../../components/BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FingerPrintIcon } from "../../components/FingerPrintIcon";
import { useBiometrics } from "@/hooks/useBiometrics";

export default function LoginPage() {
    const sheetRef = useRef<null | BottomSheetModal>(null);
    const [hidePassword, setHidePassword] = useState(true);
    const { isBiometricSupported, handleBiometricsAuthentication } = useBiometrics();

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

    const expandBottomSheet = () => sheetRef.current?.present();

    return (
        <View style={[FLEX, styles.container]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={FLEX}>
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
                    <Link href="/forgot-password" asChild>
                        <Pressable style={styles.linkStyle}>
                            <Icon name="security" size={normalise(14)} />
                            <AppText fontFamily="regular" color="primary--1">Forgot Password</AppText>
                        </Pressable>
                    </Link>


                    <View style={styles.buttonsContainer}>
                        <Button title='Log In' backgroundColor="primary--4" style={styles.loginButton} disabled={disable} />
                        <BiometricsButton disabled={!isBiometricSupported} onPress={expandBottomSheet} />
                    </View>
                    
                    {/* White spacing view. */}
                    <View style={FLEX}></View>

                    <View style={styles.footer}>
                        <AppText fontFamily="regular" color="primary--1">I don’t have an account?{" "}</AppText>
                        <Link href="/" asChild>
                            <AppText fontFamily="bold" color="primary--1">Create Account</AppText>
                        </Link>
                    </View>
                    <AppBottomSheet style={styles.bottomSheetStyle} ref={sheetRef}>
                        <AppText
                            fontSize={16}
                            color="primary--1"
                            fontFamily="bold"
                            style={{ alignSelf: "center" }}
                        >
                            Fingerprint Login
                        </AppText>
                        <FingerPrintIcon onPress={handleBiometricsAuthentication} style={{ alignSelf: "center" }} />
                        <AppText
                            fontSize={14}
                            color="grey--2"
                            fontFamily="regular"
                        >
                            Kindly verify your fingerprint.
                        </AppText>
                    </AppBottomSheet>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
