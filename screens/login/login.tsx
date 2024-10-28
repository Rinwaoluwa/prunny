import { Keyboard, Pressable, TouchableWithoutFeedback, View } from "react-native";
import { AppText } from "@/components/AppText";
import { FLEX } from "@/config/constants";
import { styles } from "./styles";
import { normalise, pixelSizeVertical } from "@/config/normalise";
import { AppTextInput } from "@/components/AppTextInput";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, router } from "expo-router";
import Icon from "@/assets/svgs/icons";
import { Button } from "../../components/buttons/Button";
import { BiometricsButton } from "../../components/buttons/BiometricsButton";
import { AppBottomSheet } from "../../components/BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FingerPrintIcon } from "../../components/FingerPrintIcon";
import { useBiometrics } from "@/hooks/useBiometrics";
import { useAppDispatch } from "@/config/store/hooks";
import { resetProfileInfo, setAuthenticatedUser } from "@/config/store/slices/profileInfoSlice";

export default function LoginPage() {
    const sheetRef = useRef<null | BottomSheetModal>(null);
    const [hidePassword, setHidePassword] = useState(true);
    const { isBiometricSupported, handleBiometricsAuthentication } = useBiometrics();

    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        watch,
    } = useForm({
        defaultValues: {
            phoneNumber: '',
            password: '',
        },
        mode: "onSubmit",
    });
    const [password, phoneNumber] = watch(["password", "phoneNumber"]);
    const disable = phoneNumber && password ? false : true;

    const onSubmit = () => {
        if (phoneNumber === "09167658262" && password === "Aaabbb333@") {
            dispatch(resetProfileInfo({
                accounts: {
                    accountName: "Peter Odejobi",
                    accountNumber: "10120003456",
                    availableBalance: 10000,
                    bankName: "CTMFB",
                },
                profileInfo: {
                    address: "10 Glover road ikoyi Lagos.",
                    country: "Nigeria",
                    dateOfBirth: "10122003",
                    firstName: "Peter",
                    lastName: "Odejobi",
                    phoneNumber: "09167658262",
                }
            }));
            dispatch(setAuthenticatedUser({ isAuthenticated: true }));
        } else {
            setError("phoneNumber", {
                type: "custom",
                message: "Phone number or account details are incorrect.",
            });
            setError("password", {
                type: "custom",
                message: "Password or account details are incorrect.",
            });
        }

        router.push("/(main)")

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
                        error={errors.password?.message}
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
                        <Button title='Log In' onPress={handleSubmit(onSubmit)} backgroundColor="primary--4" style={styles.loginButton} disabled={disable} />
                        <BiometricsButton disabled={!isBiometricSupported} onPress={expandBottomSheet} />
                    </View>

                    {/* White spacing view. */}
                    <View style={FLEX}></View>

                    <View style={styles.footer}>
                        <AppText fontFamily="regular" color="primary--1">I don’t have an account?{" "}</AppText>
                        <Link href="/register" asChild>
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
