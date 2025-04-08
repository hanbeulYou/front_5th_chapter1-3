import { memo } from "../../hocs";
import { useFormState, useFormHandler, useFormSubmit } from "../../hooks/form";
import { renderLog } from "../../utils";
import { InputField } from "./InputField";
import { PreferenceCheckbox } from "./PreferenceCheckbox";
import { INPUT_FIELDS, PREFERENCES } from "./consts";
import { Button } from "../common";

export const ComplexForm: React.FC = memo(() => {
  renderLog("ComplexForm rendered");

  const { formData, setFormData } = useFormState();
  const { handleInputChange, handlePreferenceChange } =
    useFormHandler(setFormData);
  const { handleSubmit } = useFormSubmit();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">복잡한 폼</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {INPUT_FIELDS.map((field) => (
          <InputField
            key={field.name}
            {...field}
            value={String(formData[field.name as keyof typeof formData])}
            onChange={handleInputChange}
          />
        ))}

        <div className="space-x-4">
          {PREFERENCES.map((pref) => (
            <PreferenceCheckbox
              key={pref}
              preference={pref}
              checked={formData.preferences.includes(pref)}
              onChange={() => handlePreferenceChange(pref)}
            />
          ))}
        </div>
        <Button type="submit">제출</Button>
      </form>
    </div>
  );
});
