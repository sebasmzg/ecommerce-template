'use client'

import { FormType } from "@/app/core/application/model/form.type";
import { formSchemas, FormSchemaData } from "@/app/lib/validation/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useFormBuilder<T extends FormType>(type: T) {
    const schema = formSchemas[type];
    
    const methods = useForm<FormSchemaData<T>>({
        resolver: zodResolver(schema),
        mode: 'onTouched'
    });

    return methods;
}