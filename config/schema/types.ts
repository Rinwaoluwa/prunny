import { z } from 'zod';
import {
    addressSchema,
    airtimePurchaseSchema,
    createPasswordSchema,
    dataPurchaseSchema,
    forgotPasswordSchema,
    fundRequestSchema,
    loginSchema,
    otpSchema,
    pinSetupSchema,
    registrationSchema
} from './schema';

export type LoginFormValues = z.infer<typeof loginSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type OtpFormValues = z.infer<typeof otpSchema>;
export type CreatePasswordFormValues = z.infer<typeof createPasswordSchema>;
export type RegisterationFormValues = z.infer<typeof registrationSchema>;
export type AddressFormValues = z.infer<typeof addressSchema>;
export type PinFormValues = z.infer<typeof pinSetupSchema>;
export type FundFormValues = z.infer<typeof fundRequestSchema>;
export type AirtimeFormValue = z.infer<typeof airtimePurchaseSchema>;
export type DataFormValue = z.infer<typeof dataPurchaseSchema>;
