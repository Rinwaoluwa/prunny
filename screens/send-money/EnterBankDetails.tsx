import { AppText } from "@/components/AppText";
import Form from "../form/form";
import { useForm } from "react-hook-form";
import { BANK_DETAILS } from "@/utils/form-fields";
import { pixelSizeVertical } from "@/config/normalise";
import { styles } from "./styles";
import { View } from "react-native";
import { FLEX } from "@/config/constants";

interface Props {
    handleContinue: () => void;
}

export default function EnterBankDetails({ handleContinue }: Props) {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            selectbank: '',
            accountNumber: '',
        },
    });

    const onSubmit = (data: any) => {
        console.log("Form Submitted!", data);
    };
    return (
        <View style={[FLEX,styles.container]}>
            <AppText
                fontSize={18}
                color="primary--1"
                fontFamily="bold"
                style={{ marginBottom: pixelSizeVertical(24) }}
            >
                Enter Bank Account Details
            </AppText>
            <Form
                title=""
                caption=""
                formFields={BANK_DETAILS.fields as any}
                control={control}
                setValue={setValue}
                watch={watch}
                errors={errors}
                handleContinue={() => {
                    handleSubmit(onSubmit);
                    handleContinue();
                }}
            />
        </View>
    )
}