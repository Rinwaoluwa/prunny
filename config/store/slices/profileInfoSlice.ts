import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfileSlice } from '../types/IProfile';

const initialState: IProfileSlice = {
    accounts: {
        accountName: "",
        accountNumber: "",
        availableBalance: 0,
        bankName: "",
    },
    profileInfo: {
        address: "",
        country: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfBirth: "",
    },
    isAuthenticated: false,
};


const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        resetProfileInfo: (
            { accounts, profileInfo },
            { payload }: PayloadAction<Pick<IProfileSlice, "accounts" | "profileInfo">>
        ) => {
            accounts.accountName = payload.accounts.accountName;
            accounts.accountNumber = payload.accounts.accountNumber;
            accounts.availableBalance = payload.accounts.availableBalance;
            accounts.bankName = payload.accounts.bankName;

            profileInfo.address = payload.profileInfo.address;
            profileInfo.country = payload.profileInfo.country;
            profileInfo.dateOfBirth = payload.profileInfo.dateOfBirth;
            profileInfo.firstName = payload.profileInfo.firstName;
            profileInfo.lastName = payload.profileInfo.lastName;
            profileInfo.phoneNumber = payload.profileInfo.phoneNumber;
        },
        setAuthenticatedUser: (
            { isAuthenticated },
            { payload }: PayloadAction<Pick<IProfileSlice, "isAuthenticated">>
        ) => {
            isAuthenticated = payload.isAuthenticated;
        }
    },
});

export const {
    resetProfileInfo,
    setAuthenticatedUser
} = profileSlice.actions;

export default profileSlice.reducer;
