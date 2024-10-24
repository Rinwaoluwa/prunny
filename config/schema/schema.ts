import { number, z, ZodString } from 'zod';

const PHONE_REGEX = /^[0-9]{10}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const NETWORK_PROVIDERS = ['MTN', 'Airtel', 'Glo', '9mobile'] as const;

export const userSchema = z.object({
    // Login
    phoneNumber: z.string().regex(PHONE_REGEX, 'Invalid phone number'),
    password: z.string().regex(PASSWORD_REGEX, 'Password must be at least 8 characters, include uppercase, lowercase, number and special character'),

    // OTP
    otp: z.string().length(4, 'OTP must be 4 digits'),

    // User Details
    firstName: z.string().min(2, 'Name must be at least 2 characters'),
    lastName: z.string().min(2, 'Name must be at least 2 characters'),
    dateOfBirth: z.date().refine((dob) => {
        const date = new Date(dob);
        const ageDifMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
    }, 'You must be at least 18 years old'),
    gender: z.object({ name: z.string(), id: z.number() }),

    // Address
    address: z.string().min(5, 'Address must be at least 5 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    state: z.object({ name: z.string(), id: z.number() }),

    // Email
    email: z.string().email('Invalid email address'),

    // Transaction PIN
    transactionPin: z.string().length(6, 'PIN must be 6 digits'),

    // Fund Request
    fundAmount: z.number().min(100, 'Minimum amount to fund is N100'),
    fundDescription: z.string().optional(),
});

// Airtime Purchase Schema
export const airtimePurchaseSchema = z.object({
    phoneNumber: z.string().regex(PHONE_REGEX, 'Invalid phone number'),
    amount: z.number().min(100, 'Minimum amount is 100').max(10000, 'Maximum amount is 10000'),
});

// Data Purchase Schema
export const dataPurchaseSchema = z.object({
    phoneNumber: z.string().regex(PHONE_REGEX, 'Invalid phone number'),
    networkProvider: z.enum(NETWORK_PROVIDERS),
    dataPlan: z.string().min(1, 'Please select a data plan'),
});

// Separate schemas for different forms
export const loginSchema = userSchema.pick({ phoneNumber: true, password: true });
export const forgotPasswordSchema = userSchema.pick({ phoneNumber: true });
export const otpSchema = userSchema.pick({ otp: true });
export const createPasswordSchema = userSchema.pick({ password: true }).extend({
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});
export const registrationSchema = userSchema.pick({
    phoneNumber: true,
    firstName: true,
    lastName: true,
    dateOfBirth: true,
    gender: true,
    email: true
});
export const addressSchema = userSchema.pick({
    address: true,
    city: true,
    state: true,
});

export const pinSetupSchema = userSchema.pick({ transactionPin: true });
export const fundRequestSchema = userSchema.pick({ fundAmount: true, fundDescription: true });
