import { memo } from "../../hocs";

interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = memo(
  ({ type, name, value, onChange, placeholder, className }) => {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded text-black ${className}`}
      />
    );
  }
);
