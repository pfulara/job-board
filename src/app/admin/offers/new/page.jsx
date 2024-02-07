'use client';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import MultiSelect from '@/components/MultiSelect';

import categories from '@/utils/categories';
import locations from '@/utils/locations';

export default function NewOffer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Title'
          error={errors.title}
          {...register('title', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "This field doesn't match",
            },
          })}
        />
        <Select
          label='Category'
          items={categories}
          {...register('category')}
        />
        <MultiSelect
          label='Location'
          items={locations}
          setValue={setValue}
          {...register('location', {
            required: 'This field is required',
          })}
        />
        <Button label='Save' />
      </form>
    </div>
  );
}
