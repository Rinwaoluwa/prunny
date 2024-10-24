import { useState } from "react";
import { Keyboard, View } from "react-native";
import { FLEX } from "@/config/constants";
import { AppText } from "@/components/AppText";
import { pixelSizeVertical } from "@/config/normalise";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppTextInput } from "@/components/AppTextInput";
import PasswordStrengthIndicator from "@/components/PasswordStrengthIndicator";
import { Button } from "@/components/buttons/Button";
import { createPasswordSchema } from "@/config/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePasswordFormValues } from "@/config/schema/types";
import { useAppDispatch } from "@/config/store/hooks";
import { storeSignUpState5 } from "@/config/store/slices/signUpSlice";

export default function CreatePassword(
    { title, caption, handleContinue }:
        { title: string; caption: string; handleContinue: () => void }
) {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfrimPassword, setHideConfirmPassword] = useState(true);

    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
        mode: "onSubmit",
        resolver: zodResolver(createPasswordSchema),
    });
    const [password, confirmPassword] = watch(["password", "confirmPassword"]);
    const disabled = password ? confirmPassword ? false : true : true;
    
    const onSubmit: SubmitHandler<CreatePasswordFormValues> = (data: CreatePasswordFormValues) => {
        dispatch(storeSignUpState5({ password: data?.password }));
        handleContinue();
    }

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
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}