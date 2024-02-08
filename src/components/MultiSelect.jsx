'use client';
import React, { useId } from 'react';
import CreatableSelect from 'react-select/creatable';

const MultiSelect = React.forwardRef(function MultiSelect(
  {
    onBlur,
    name,
    label,
    items,
    error,
    setValue,
    clearErrors,
  },
  ref
) {
  return (
    <label className='mb-4 block font-bold text-sm text-text-dark'>
      {label}
      <CreatableSelect
        instanceId={useId()}
        classNames={{
          control: ({ menuIsOpen }) => [
            `!rounded-xl ${
              error
                ? '!border-error'
                : '!border-primary-light'
            } ${menuIsOpen ? '!shadow-select' : '!shadow-none'}`,
          ],
        }}
        isMulti
        name={name}
        onBlur={onBlur}
        onChange={(e) => {
          setValue(name, e);
          clearErrors(name);
        }}
        ref={ref}
        options={items || []}
      />
      {error?.message && (
        <span className='text-error block font-normal'>
          {error.message}
        </span>
      )}
    </label>
  );
});

export default MultiSelect;
