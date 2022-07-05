import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: ButtonSize;
}

const buttonSizes: {
  [key in Required<ButtonSize>]: string;
} = {
  large: 'text-lg',
  medium: 'text-base',
  small: 'text-sm',
};

// Storybook Example
const Button: FC<ButtonProps> = ({ size = 'medium', ...props }) => {
  return (
    <button
      className={clsx(
        'border border-black bg-white p-1 text-black hover:bg-gray-100',
        buttonSizes[size]
      )}
      type="button"
      {...props}
    />
  );
};

export default Button;
