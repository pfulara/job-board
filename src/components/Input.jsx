import React from 'react';

const Input = React.forwardRef(function Input(
  { onChange, onBlur, name, label, error },
  ref
) {
  return (
    <label className='mb-4 block font-bold text-sm text-text-dark'>
      {label}
      <input
        className={`py-2 px-4 block w-full border font-normal rounded-xl outline-none ${
          error ? 'border-error' : 'border-primary-light'
        } ${
          error
            ? 'focus-visible:shadow-select-error'
            : 'focus-visible:shadow-select'
        }`}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error?.message && (
        <span className='text-error block font-normal'>
          {error.message}
        </span>
      )}
    </label>
  );
});

export default Input;
