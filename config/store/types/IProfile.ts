export interface IProfileSlice {
    accounts: {
        bankName: string;
        accountName: string;
        accountNumber: string;
        availableBalance: number;
    },
    profileInfo: {
        lastName: string;
        country: string;
        address: string;
        dateOfBirth: string;
        firstName: string;
        phoneNumber: string;
    };
    isAuthenticated: boolean;
};
