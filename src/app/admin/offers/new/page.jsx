'use client';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';

export default function NewOffer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
        <Input
          label='Last name'
          error={errors.lastName}
          {...register('lastName', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "This field doesn't match",
            },
          })}
        />
        <Button label='Save' />
      </form>
    </div>
  );
}
