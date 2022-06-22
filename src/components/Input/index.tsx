import type { FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';

interface InputProps {
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  value: string;
}

const Input: FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClick = () => {
    setPasswordVisible((previousVisible) => !previousVisible);
  };

  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {type === 'password' && (
        <button type="button" onClick={handleClick}>
          {passwordVisible ? '숨기기' : '비밀번호 표시'}
        </button>
      )}
    </div>
  );
};

export default Input;
