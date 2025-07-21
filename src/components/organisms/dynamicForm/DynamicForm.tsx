'use client'

import { formConfigs } from "@/app/infrastructure/utils/formConfig";
import { FormProvider } from "react-hook-form";
import { DynamicFormProps } from "@/app/core/application/models/form.type";
import styles from './DynamicForm.module.scss';
import { useFormBuilder } from "@/app/infrastructure/hooks/UseFormBuilder";
import { Button, Title } from "../../atoms";
import { ErrorMessage as GlobalErrorMessage } from "../../atoms";
import { FormField } from "../../molecule/formField/FormField";

export const DynamicForm = ({
  type,
  onSubmit,
  isLoading = false,
  globalError,
  title
}: DynamicFormProps) => {
  const config = formConfigs[type];
  const methods = useFormBuilder(type);

  return (
    <div className={styles.formContainer}>
      <FormProvider {...methods}>
        <form 
          onSubmit={methods.handleSubmit(onSubmit)} 
          className={styles.form}
        >
          <div className={styles.header}>
            <Title level={2} variant="primary">
              {title}
            </Title>
            {globalError && (
              <div className={styles.globalError}>
                <GlobalErrorMessage message={globalError} />
              </div>
            )}
          </div>

          <div className={styles.fieldsContainer}>
            {config.map((field) => (
              <FormField
                key={field.name}
                {...field}
                type={field.type as "email" | "text" | "select" | "textarea" | "tel" | "checkbox"}
              />
            ))}
          </div>

          <div className={styles.actions}>
            <Button 
              variant="primary" 
              size="large" 
              type="submit" 
              isLoading={isLoading}
              className={styles.submitButton}
            >
              {isLoading ? "Processing..." : "Submit"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};