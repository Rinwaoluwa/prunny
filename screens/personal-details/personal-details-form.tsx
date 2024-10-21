import React from 'react';
import { useForm } from 'react-hook-form';
import { ADDRESS_DETAILS_TYPE, PERSONAL_DETAILS_TYPE } from '@/utils/form-fields';
import { GENDER } from '@/config/constants';
import Form from '../form/form';

interface Props {
    title: string;
    caption: string;
    formFields: PERSONAL_DETAILS_TYPE | ADDRESS_DETAILS_TYPE;
    handleContinue: () => void;
}

export default function PersonalDetails({ title, caption, formFields, handleContinue }: Props) {

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
            phoneNumber: '9988777271',
            lastName: 'Ogbensi',
            dateOfBirth: "",
            gender: "",
            address: "12B Glover road",
            city: "Ikoyi",
            state: "Lagos",
        },
        mode: "onSubmit",
        // resolver: zodResolver(login),
    });
    const handleSelectGender = (provider: any) => {
        setValue("gender", provider)
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
                handleContinue={() => {
                    // handleSubmit(onSubmit);
                    handleContinue();
                }}
                dropdownPlaceholder='Gender'
                dropdownProviders={GENDER}
                selectedDropdown={getValues("gender")}
                onChangeDropdown={handleSelectGender}
            />
        </>
    )
}