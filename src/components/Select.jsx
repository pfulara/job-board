import React from 'react';

const Select = React.forwardRef(function Select(
  { onChange, onBlur, name, label, items },
  ref
) {
  return (
    <label className='mb-4 block font-bold text-sm text-text-dark'>
      {label}
      <select
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        className={`block w-full px-4 py-2 font-normal border border-primary-light rounded-xl focus-visible:outline-primary`}
      >
        {items?.map((item) => (
          <option
            key={item.value || item.id}
            value={item.value || item.id}
          >
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
});

export default Select;
