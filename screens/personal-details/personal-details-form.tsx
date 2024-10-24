import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { ADDRESS_DETAILS_TYPE, PERSONAL_DETAILS_TYPE } from '@/utils/form-fields';
import { GENDER, STATES } from '@/config/constants';
import Form from '../form/form';
import { AddressFormValues, RegisterationFormValues } from '@/config/schema/types';
import { registrationSchema, addressSchema } from '@/config/schema/schema';
import { useAppDispatch } from '@/config/store/hooks';
import { storeSignUpState2, storeSignUpState3 } from '@/config/store/slices/signUpSlice';
import { formatDate } from '@/utils/helpers';

interface Props {
    title: string;
    caption: string;
    formFields: PERSONAL_DETAILS_TYPE | ADDRESS_DETAILS_TYPE;
    handleContinue: () => void;
}

export default function PersonalDetails({ title, caption, formFields, handleContinue }: Props) {

    // Dynamically select the appropriate validation schema based on the first field of the form.
    // If the first field is "firstName", use the registrationSchema for validating personal details.
    // Otherwise, use the addressSchema for validating address details.
    const schema = formFields[0].name === "firstName" ?
        registrationSchema.omit({ phoneNumber: true, email: true }) : addressSchema;

    const isAddressDetails = formFields[0].name === "firstName" ? false : true;

    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        watch,
        setValue,
        getValues,
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: "",
            gender: "",
            address: "",
            city: "",
            state: "",
        },
        mode: "onSubmit",
        resolver: zodResolver(schema),
    });

    const [state, gender] = watch(["state", "gender"])
    const handleSelectGender = (provider: any) => {
        setValue("gender", provider)
    };

    const handleSelectState = (provider: any) => {
        setValue("state", provider)
    };

    const onSubmit: SubmitHandler<RegisterationFormValues | AddressFormValues> = (data: any) => {

        if (isAddressDetails) {
            dispatch(storeSignUpState3({
                address: data?.address,
                city: data.city,
                state: data?.state.name,
            }))
        } else {
            dispatch(storeSignUpState2({
                dob: formatDate(data?.dateOfBirth)?.replaceAll("_", "").replaceAll(" ", "") as string,
                firstName: data?.firstName,
                lastName: data?.lastName,
                gender: data?.gender.name,
            }));
        }
        handleContinue();
    };


    return (
        <>
            <Form
                title={title}
                caption={caption}
                formFields={formFields as any}
                control={control}
                setValue={setValue}
                watch={watch}
                errors={errors}
                handleContinue={handleSubmit(onSubmit)}
                dropdownPlaceholder={isAddressDetails ? "State" : "Gender"}
                dropdownProviders={isAddressDetails ? STATES : GENDER}
                selectedDropdown={isAddressDetails ? state : gender}
                onChangeDropdown={isAddressDetails ? handleSelectState : handleSelectGender}
            />
        </>
    )
}