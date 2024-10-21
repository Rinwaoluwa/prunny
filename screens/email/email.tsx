import { AppText } from "@/components/AppText";
import { AppTextInput } from "@/components/AppTextInput";
import { Button } from "@/components/buttons/Button";
import { FLEX } from "@/config/constants";
import { pixelSizeVertical } from "@/config/normalise";
import { useForm } from "react-hook-form";
import { View } from "react-native";

interface Props {
    handleContinue: () => void;
}
export function EnterEmail({ handleContinue }: Props) {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        watch,
    } = useForm({
        defaultValues: {
            email: "",
        },
        mode: "onSubmit",
        // resolver: zodResolver(login),
    });
    return (
        <>
            <AppText
                fontSize={18}
                color="primary--1"
                fontFamily="bold"
                style={{ marginBottom: pixelSizeVertical(32) }}
            >
                We will keep you informed at all times with our emails
            </AppText>
            <AppTextInput
                control={control}
                label="Email"
                placeholder="Enter your email address"
                error={errors.email?.message}
                name="email"
                autoCapitalize="none"
            />
            <View style={FLEX} />
            <Button title="Continue" backgroundColor="primary--4" onPress={handleContinue} />
        </>
    )
}