import { useState } from "react";
import { Keyboard, View } from "react-native";
import { FLEX } from "@/config/constants";
import { styles } from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AppText } from "@/components/AppText";
import { pixelSizeVertical } from "@/config/normalise";
import { useForm } from "react-hook-form";
import { AppTextInput } from "@/components/AppTextInput";
import PasswordStrengthIndicator from "@/components/PasswordStrengthIndicator";
import { Button } from "@/components/buttons/Button";

export default function CreatePassword(
    { title, caption, handleContinue }: 
    { title: string; caption: string; handleContinue: () => void }
) {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfrimPassword, setHideConfirmPassword] = useState(true);

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
            password: 'aaabbbccc',
            confirmPassword: 'aaabbbccc',
        },
        mode: "onSubmit",
        // resolver: zodResolver(login),
    });
    const [password, confirmPassword] = watch(["password", "confirmPassword"]);
    const disabled = password ? confirmPassword ? false : true : true;

    return (
        <View style={FLEX}>
            <AppText
                fontSize={18}
                color="primary--1"
                fontFamily="bold"
                style={{ marginBottom: pixelSizeVertical(5) }}
            >
                {title}
            </AppText>
            <AppText
                fontSize={14}
                color="grey--2"
                fontFamily="regular"
                style={{ marginBottom: pixelSizeVertical(32) }}
            >
                {caption}
            </AppText>

            <AppTextInput
                control={control}
                label="Password"
                placeholder="Choose Password"
                error={errors.password?.message}
                name="password"
                secureTextEntry={hidePassword}
                right={hidePassword ? "eye-closed" : "eye-open"}
                onPressRigthtIcon={() => setHidePassword(!hidePassword)}
                autoCapitalize="none"
            />
            {password && <PasswordStrengthIndicator password={password} />}
            <AppTextInput
                control={control}
                label="Confrim Password"
                placeholder="Confirm Password"
                error={errors.confirmPassword?.message}
                name="confirmPassword"
                secureTextEntry={hideConfrimPassword}
                right={hideConfrimPassword ? "eye-closed" : "eye-open"}
                onPressRigthtIcon={() => setHideConfirmPassword(!hideConfrimPassword)}
                autoCapitalize="none"
            />
            <View style={FLEX} />
            <Button
                title="Create password"
                backgroundColor="primary--4"
                style={{ marginBottom: pixelSizeVertical(44) }}
                disabled={disabled}
            />
        </View>
    )
}