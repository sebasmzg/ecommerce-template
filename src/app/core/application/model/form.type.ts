import { CheckoutFormData } from "@/app/lib/validation/form.schema";

export enum FieldType {
  Text = "text",
  Email = "email",
  Password = "password",
  Number = "number",
  Date = "date",
  Url = "url",
  Tel = "tel",
  Search = "search",
  Color = "color",
  Checkbox = "checkbox",
  Radio = "radio",
  File = "file",
  Select = "select",
}

export type FormType = "checkout";

export interface SelectOption {
  label: string;
  value: string;
}

export interface BaseField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: SelectOption[];
}

export interface FormFieldProps {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: SelectOption[];
}

export interface DynamicFormProps {
  title: string;
  type: FormType;
  onSubmit: (data: CheckoutFormData) => void;
    isLoading?: boolean;
    globalError?: string | null;
}