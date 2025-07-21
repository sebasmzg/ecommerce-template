import { BaseField, FieldType, FormType } from "@/app/core/application/models/form.type";

export const formConfigs: Record<FormType, BaseField[]> = {
    checkout: [
        {
            name: 'firstName',
            label: 'First Name',
            type: FieldType.Text,
            required: true,
            placeholder: 'Enter your first name'
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: FieldType.Text,
            required: true,
            placeholder: 'Enter your last name'
        },
        {
            name: 'email',
            label: 'Email Address',
            type: FieldType.Email,
            required: true,
            placeholder: 'example@email.com'
        },
        {
            name: 'phone',
            label: 'Phone Number',
            type: FieldType.Tel,
            required: true,
            placeholder: '+57 300 123 4567'
        },
        {
            name: 'address',
            label: 'Street Address',
            type: FieldType.Text,
            required: true,
            placeholder: 'Street 123 #45-67'
        },
        {
            name: 'city',
            label: 'City',
            type: FieldType.Text,
            required: true,
            placeholder: 'Medellín'
        },
        {
            name: 'department',
            label: 'Department',
            type: FieldType.Select,
            required: true,
            placeholder: 'Select your department',
            options: [
                { value: 'antioquia', label: 'Antioquia' },
                { value: 'cundinamarca', label: 'Cundinamarca' },
                { value: 'valle', label: 'Valle del Cauca' },
                { value: 'atlantico', label: 'Atlántico' },
                { value: 'bolivar', label: 'Bolívar' },
                { value: 'santander', label: 'Santander' },
                { value: 'nariño', label: 'Nariño' },
                { value: 'boyaca', label: 'Boyacá' },
                { value: 'tolima', label: 'Tolima' },
                { value: 'caldas', label: 'Caldas' },
            ]
        },
        {
            name: 'postalCode',
            label: 'Postal Code',
            type: FieldType.Text,
            required: true,
            placeholder: '50001'
        },
        {
            name: 'cardNumber',
            label: 'Card Number',
            type: FieldType.Text,
            required: true,
            placeholder: '1234 5678 9012 3456',
        },
        {
            name: 'cardHolder',
            label: 'Cardholder Name',
            type: FieldType.Text,
            required: true,
            placeholder: 'FULL NAME'
        },
        {
            name: 'expiryDate',
            label: 'Expiry Date',
            type: FieldType.Text,
            required: true,
            placeholder: 'MM/YY',
        },
        {
            name: 'cvv',
            label: 'CVV',
            type: FieldType.Text,
            required: true,
            placeholder: '123',
        },
        {
            name: 'saveInfo',
            label: 'Save information for future purchases',
            type: FieldType.Checkbox,
            required: false
        },
        {
            name: 'acceptTerms',
            label: 'I accept the terms and conditions and marketplace policies',
            type: FieldType.Checkbox,
            required: true
        },
        {
            name: 'newsletter',
            label: 'I authorize the processing of my data for advertising purposes',
            type: FieldType.Checkbox,
            required: false
        },
        {
            name: 'personalData',
            label: 'I authorize the processing of my personal data',
            type: FieldType.Checkbox,
            required: false
        }
    ],
};