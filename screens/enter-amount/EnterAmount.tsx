import { FLEX } from "@/config/constants";
import { TextInput, View } from "react-native";
import { styles } from "./style";
import { AppText } from "@/components/AppText";
import { fontPixel, normalise, pixelSizeVertical } from "@/config/normalise";
import Icon from "@/assets/svgs/icons";
import { palette } from "@/config/palette";
import { useState } from "react";
import { formatAmount } from "@/utils/helpers";
import { useForm, Controller } from "react-hook-form";
import { AppTextInput } from "@/components/AppTextInput";
import { Button } from "@/components/buttons/Button";

interface Props {
    handleContinue: () => void;
}

export default function EnterAmount({ handleContinue }: Props) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            amount: '',
            description: '',
        },
    });

    return (
        <View style={[FLEX, styles.container]}>
            <AppText
                fontSize={18}
                color="primary--1"
                fontFamily="bold"
                style={{ marginBottom: pixelSizeVertical(32) }}
            >
                How much do you want to request?
            </AppText>

            <View style={styles.amountContainer}>
                <Icon name="naira-sign" size={normalise(50)} />
                <Controller
                    control={control}
                    name="amount"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.amount}
                            value={value}
                            onChangeText={(text) => {
                                const formattedText = formatAmount(text);
                                onChange(formattedText);
                            }}
                            keyboardType="numeric"
                            selectionColor={palette['primary--2']}
                            placeholder="0"

                        />
                    )}
                />
            </View>
            <AppText
                fontSize={12}
                color="grey--2"
                fontFamily="regular"
                style={{ marginBottom: pixelSizeVertical(44) }}
            >
                Minimum amount to fund is N100
            </AppText>
            <AppTextInput
                control={control}
                label="Description"
                placeholder="Description"
                error={errors.description?.message}
                name="password"
                autoCapitalize="none"
            />
            <View style={FLEX} />
            <Button title="Continue" backgroundColor="primary--4"onPress={handleContinue} />
        </View>
    )
}