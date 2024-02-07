import React from 'react';

const Input = React.forwardRef(function Input(
  { onChange, onBlur, name, label, error },
  ref
) {
  return (
    <label className='mb-4 block'>
      {label}
      <input
        className={`py-2 px-4 block w-full border ${
          error ? 'border-error' : 'border-primary-light'
        } rounded-xl ${
          error
            ? 'focus-visible:outline-error'
            : 'focus-visible:outline-primary'
        }`}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error?.message && (
        <span className='text-error block'>
          {error.message}
        </span>
      )}
    </label>
  );
});

export default Input;
