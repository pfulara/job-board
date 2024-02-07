'use client';
import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const MultiSelect = React.forwardRef(function MultiSelect(
  { onChange, onBlur, name, label, items, setValue },
  ref
) {
  // const [selected, setSelected] = useState([]);

  // const handleSelect = (e) => {
  //   setSelected([...selected, e.target.value]);
  // };

  // useEffect(() => {
  //   // onChange(selected);
  //   setValue('location', selected);
  // }, [selected, setValue]);

  return (
    <label className='mb-4 block font-bold text-sm text-text-dark'>
      {label}
      <CreatableSelect
        isMulti
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        options={items.map((item) => ({
          value: item,
          label: item,
        }))}
      />
      {/* <select
        multiple
        name={name}
        onBlur={onBlur}
        onChange={handleSelect}
        ref={ref}
        className={`block w-full px-4 py-2 font-normal border border-primary-light rounded-xl focus-visible:outline-primary`}
      >
        {items?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select> */}
    </label>
  );
});

export default MultiSelect;
