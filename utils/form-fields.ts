import { palette } from "@/config/palette";

export const PERSONAL_DETAILS = {
    title: "Please enter your details",
    caption: "Tell us a little bit about yourself",
    fields: [
        { placeholder: "Phone Number", keyboardType: "default", name: "phoneNumber", label: "Phone Number",},
        { placeholder: " Enter your lastname e.g Ogbensi", keyboardType: "default", name: "lastName", label: "Last Name" },
        { type: "date", placeholder: "Date of birth", keyboardType: "default", name: "dateOfBirth", label: "Date of birth"},
        {
            type: "dropdown",
            placeholder: "Choose your gender",
            name: "gender",
            label: "Gender",
            options: [
                { label: 'Choose your gender', value: 'null', color: palette['grey'] },
                { label: 'Male', value: 'male', color: "" },
                { label: 'Female', value: 'female', color: "" },
                { label: 'Prefer not to say', value: 'nil', color: "" },
            ],
        },
    ]
}

export type PERSONAL_DETAILS_TYPE = typeof PERSONAL_DETAILS.fields;

export const ADDRESS_DETAILS = {
    title: "Where do you live?",
    caption: "Tell us a little bit about yourself",
    fields: [
        { placeholder: "Enter your address", keyboardType: "default", name: "address", label: "Address"},
        { placeholder: "City", keyboardType: "default", name: "city", label: "City", },
        {
            type: "dropdown",
            placeholder: "State",
            name: "state",
            label: "State",
            options: [
                { label: 'Lagos', value: 'lagos', color: "" },
                { label: 'Abuja', value: 'abuja', color: "" },
                { label: 'Kano', value: 'kano', color: "" },
                { label: 'Enugu', value: 'enugu', color: "" },
            ],
        },
    ]   
}

export type ADDRESS_DETAILS_TYPE = typeof ADDRESS_DETAILS.fields;

export const BANK_DETAILS = {
    fields: [
        {
            type: "dropdown",
            placeholder: "Select Bank",
            name: "selectBank",
            label: "Select Bank",
            options: [
                { label: 'CTMFB', value: 'ctmfb', color: "" },
                { label: 'UBA', value: 'uba', color: "" },
                { label: 'Zenith', value: 'zenith', color: "" },
                { label: 'GTB', value: 'gtb', color: "" },
            ],
        }, 
        {
            type: "text",
            placeholder: "Account Number",
            name: "accountNumber",
            label: "Account Number",
        }
    ]
}