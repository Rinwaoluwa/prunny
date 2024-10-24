import { AppText } from "@/components/AppText";
import { AppTextInput } from "@/components/AppTextInput";
import { Button } from "@/components/buttons/Button";
import { FLEX } from "@/config/constants";
import { RegisterationFormValues } from "@/config/schema/types"
import { pixelSizeVertical } from "@/config/normalise";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { registrationSchema } from "@/config/schema/schema";
import { useAppDispatch } from "@/config/store/hooks";
import { storeSignUpState4 } from "@/config/store/slices/signUpSlice";

interface Props {
    handleContinue: () => void;
}
export function EnterEmail({ handleContinue }: Props) {

    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
        },
        mode: "onSubmit",
        resolver: zodResolver(registrationSchema.pick({ email: true })),
    });

    const onSubmit: SubmitHandler<Pick<RegisterationFormValues, "email">> = (data: Pick<RegisterationFormValues, "email">) => {
        dispatch(storeSignUpState4({ email: data?.email }));
        handleContinue();
    }

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
            <Button title="Continue" backgroundColor="primary--4" onPress={handleSubmit(onSubmit)} />
        </>
    )
}