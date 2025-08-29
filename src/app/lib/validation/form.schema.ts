import { z } from 'zod';

export const checkoutSchema = z.object({
    // Personal Information
    firstName: z.string()
        .min(1, "First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be less than 50 characters")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "First name can only contain letters and spaces"),
    
    lastName: z.string()
        .min(1, "Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be less than 50 characters")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Last name can only contain letters and spaces"),
    
    email: z.string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    
    phone: z.string()
        .min(1, "Phone number is required")
        .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),

    // Address Information
    address: z.string()
        .min(1, "Address is required")
        .min(5, "Address must be at least 5 characters")
        .max(100, "Address must be less than 100 characters"),
    
    city: z.string()
        .min(1, "City is required")
        .min(2, "City must be at least 2 characters")
        .max(50, "City must be less than 50 characters")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "City can only contain letters and spaces"),
    
    department: z.string()
        .min(1, "Department is required"),
    
    postalCode: z.string()
        .min(1, "Postal code is required")
        .regex(/^\d{4,6}$/, "Postal code must be 4-6 digits"),

    // Payment Information
    cardNumber: z.string()
        .min(1, "Card number is required")
        .regex(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, "Please enter a valid card number (16 digits)")
        .transform(val => val.replace(/\s/g, '')), // Remove spaces
    
    cardHolder: z.string()
        .min(1, "Cardholder name is required")
        .min(2, "Cardholder name must be at least 2 characters")
        .max(50, "Cardholder name must be less than 50 characters")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Cardholder name can only contain letters and spaces"),
    
    expiryDate: z.string()
        .min(1, "Expiry date is required")
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Please enter a valid expiry date (MM/YY)")
        .refine((val) => {
            const [month, year] = val.split('/');
            const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
            return expiry > new Date();
        }, "Card has expired"),
    
    cvv: z.string()
        .min(1, "CVV is required")
        .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),

    // Checkboxes
    saveInfo: z.boolean().optional(),
    
    acceptTerms: z.boolean()
        .refine(val => val === true, "You must accept the terms and conditions"),
    
    newsletter: z.boolean().optional(),
    
    personalData: z.boolean().optional(),
});

export const formSchemas = {
    checkout: checkoutSchema,
} as const;

export type FormSchemas = typeof formSchemas;
export type FormSchemaKeys = keyof FormSchemas;
export type FormSchemaData<T extends FormSchemaKeys> = z.infer<FormSchemas[T]>;

export type CheckoutFormData  = FormSchemaData<'checkout'>;