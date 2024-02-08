'use client';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import MultiSelect from '@/components/MultiSelect';

import categories from '@/utils/categories';
import locations from '@/utils/locations';
import Textarea from '@/components/Textarea';

export default function NewOffer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    getValues,
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
          label='Locations'
          items={locations?.map((item) => ({
            value: item,
            label: item,
          }))}
          setValue={setValue}
          clearErrors={clearErrors}
          error={errors.locations}
          {...register('locations', {
            required: 'This field is required',
          })}
        />
        <MultiSelect
          label='Skills'
          setValue={setValue}
          clearErrors={clearErrors}
          error={errors.skills}
          {...register('skills', {
            required: 'This field is required',
          })}
        />
        <Input label='Salary' {...register('salary')} />
        <Textarea
          label='Description'
          value={getValues('description')}
          setValue={setValue}
          clearErrors={clearErrors}
          error={errors.description}
          {...register('description', {
            required: 'This field is required',
          })}
          ref={null}
        />
        <Button label='Save' />
      </form>
    </div>
  );
}
