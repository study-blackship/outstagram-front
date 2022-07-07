import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

type FloatInputProps = InputHTMLAttributes<HTMLInputElement>;

const FloatInput = forwardRef<HTMLInputElement, FloatInputProps>(
  ({ className, id, placeholder, ...props }, ref) => {
    return (
      <label className="relative flex h-9" htmlFor={id}>
        <input
          ref={ref}
          className={clsx(
            'peer flex-1 px-2 pt-3 pb-[2px] text-xs outline-none placeholder-shown:p-2',
            className
          )}
          id={id}
          placeholder=""
          {...props}
        />
        <div className="absolute top-0 left-2 h-9 origin-left -translate-y-3 scale-[0.83] text-xs leading-9 text-[#8e8e8e] transition-all duration-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100">
          {placeholder}
        </div>
      </label>
    );
  }
);

export default FloatInput;
