import React from 'react';

const CustomSelect = React.forwardRef(function CustomSelect(
  {
    onChange,
    onBlur,
    name,
    label,
    items,
    value = undefined,
  },
  ref
) {
  return (
    <label className='mb-4 block font-bold text-sm text-text-dark'>
      {label}
      <select
        defaultValue={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        className={`block w-full px-4 py-2 font-normal border border-primary-light rounded-xl outline-none focus-visible:shadow-select`}
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

export default CustomSelect;
