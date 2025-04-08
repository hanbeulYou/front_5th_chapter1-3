import { useState } from "react";

export interface FormState {
  name: string;
  email: string;
  age: number;
  preferences: string[];
}

export function useFormState(initialState?: Partial<FormState>) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    age: 0,
    preferences: [],
    ...initialState,
  });

  return {
    formData,
    setFormData,
  };
}
