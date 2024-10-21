import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { AppTextInput } from '@/components/AppTextInput';
import { Button } from '@/components/buttons/Button';
import { AppText } from '@/components/AppText';
import { normalise, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import { FLEX } from '@/config/constants';
import { styles } from './style';
import { formatDate } from '@/utils/helpers';
import Dropdown from '@/components/Dropdown';

interface FormField {
    name: string;
    label: string;
    placeholder: string;
    type: 'text' | 'dropdown' | 'date';
    options?: { label: string, value: string, color?: string }[];
}

interface Props {
    title: string;
    caption: string;
    formFields: FormField[];
    control: any;
    setValue: (name: any, value: any) => void;
    watch: (fields: string[]) => any[];
    errors: any;
    handleContinue: () => void;
    dropdownProviders?: Array<any>;
    selectedDropdown?: any;
    dropdownPlaceholder?: string;
    onChangeDropdown?: (provider: any) => void;
}

export default function Form({
    title,
    caption,
    formFields,
    control,
    setValue,
    watch,
    errors,
    handleContinue,
    dropdownProviders,
    selectedDropdown,
    dropdownPlaceholder,
    onChangeDropdown,
}: Props) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [focused, setFocused] = useState(false);
    const [dateFocused, setDateFocused] = useState(false);

    const [date, gender] = watch(["dateOfBirth", "gender"]);

    return (
        <>
            {title && (
                <AppText
                    fontSize={18}
                    color="primary--1"
                    fontFamily="bold"
                    style={{ marginBottom: pixelSizeVertical(8) }}
                >
                    {title}
                </AppText>
            )}
            {caption && (
                <AppText
                    fontSize={14}
                    color="grey--2"
                    fontFamily="regular"
                    style={{ marginBottom: pixelSizeVertical(33) }}
                >
                    {caption}
                </AppText>
            )}

            {formFields.map((field, index) => {
                if (field.type === 'dropdown') {
                    return (
                        <Dropdown
                            key={index}
                            placeholder={dropdownPlaceholder}
                            providers={dropdownProviders as any}
                            selectedProvider={selectedDropdown}
                            onSelectProvider={onChangeDropdown as any}
                            dropdownListStyle={{ backgroundColor: "transparent" }}
                            dropdownStyle={{ backgroundColor: "transparent" }}
                        />
                    );
                }

                // Handle Date fields
                if (field.type === 'date') {
                    return (
                        <View key={index}>
                            <Pressable
                                style={[
                                    styles.dob,
                                    {
                                        borderColor: dateFocused || date
                                            ? palette['primary--2']
                                            : palette['grey--4'],
                                    },
                                ]}
                                onPress={() => setShowDatePicker(true)}
                                onBlur={() => setDateFocused(false)}
                                onFocus={() => setDateFocused(true)}
                            >
                                <AppText fontFamily='medium' color={date ? "primary--1" : 'grey'}>
                                    {formatDate(date as any) || field.placeholder}
                                </AppText>
                            </Pressable>
                            {showDatePicker && (
                                <DateTimePicker
                                    value={new Date()} // This should be controlled externally via setValue
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowDatePicker(false);
                                        setValue("dateOfBirth", selectedDate || "");
                                    }}
                                />
                            )}
                        </View>
                    );
                }

                // Handle Text Inputs
                return (
                    <AppTextInput
                        key={index}
                        control={control}  // Passed externally
                        name={field.name}
                        label={field.label}
                        placeholder={field.placeholder}
                        error={errors[field.name]?.message}  // Handle errors externally
                    />
                );
            })}

            <View style={FLEX} />
            <Button
                title="Continue"
                backgroundColor="primary--4"
                style={{ marginVertical: pixelSizeVertical(50) }}
                onPress={handleContinue}
            />
        </>
    );
}
