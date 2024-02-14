import React from 'react';

const Input = React.forwardRef(function Input(
  {
    onChange,
    onBlur,
    name,
    label,
    error,
    labelColor = 'text-dark',
    type = 'text',
  },
  ref
) {
  return (
    <label
      className={`mb-4 block font-bold text-sm text-${labelColor}`}
    >
      {label}
      <input
        type={type}
        className={`py-2 px-4 block w-full border font-normal rounded-xl outline-none text-text-dark ${
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
