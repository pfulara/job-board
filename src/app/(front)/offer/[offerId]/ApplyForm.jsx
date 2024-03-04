'use client';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';

import { NotificationContext } from '@/providers/NotificationProvider';
import Form from '@/components/Form';
import Button from '@/components/Button';
import Input from '@/components/Input';
import UploadIcon from '@/icons/UploadIcon';

export default function ApplyForm({ offer, company }) {
  const { setContext } = useContext(NotificationContext);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      offer,
      company,
    },
  });

  const onSubmit = async (data) => {
    if (data.cv.length) {
      const reader = new FileReader();
      reader.readAsDataURL(data.cv[0]);
      reader.onload = async function () {
        const res = await fetch('/api/offers/apply', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            cv: reader.result,
          }),
        });
        const response = await res.json();

        if (!res.ok) {
          setContext({
            status: 'error',
            message: response.message,
          });
          return;
        }

        if (response.message === 'ok') {
          setSent(true);
        }
      };
      reader.onerror = function (error) {
        setContext({
          status: 'error',
          message: error,
        });
      };
    }
  };

  return sent ? (
    <div className='text-center py-8'>
      <h3>Your application has been sent</h3>
      <p className='font-medium text-lg mt-4'>
        Please wait for recuiter response
      </p>
    </div>
  ) : (
    <Form action={handleSubmit(onSubmit)}>
      <h3 className='mb-4 pb-2 border-b border-text'>
        Apply for this offer
      </h3>
      <div className='block lg:grid grid-cols-2 gap-4'>
        <Input
          label='Name'
          error={errors.name}
          {...register('name', {
            required: 'This field is required',
          })}
        />
        <Input
          label='Email'
          error={errors.email}
          {...register('email', {
            required: 'This field is required',
          })}
        />
      </div>

      <div className='relative mb-4'>
        {watch('cv')?.length ? (
          <p
            onClick={() => setValue('cv', null)}
            className='absolute top-8 right-2 rounded-full border-2 border-error w-8 h-8 flex items-center justify-center bg-error-light text-error pb-[2px] cursor-pointer'
          >
            x
          </p>
        ) : null}
        <label>
          <span
            className={`block font-bold text-sm text-text-dark`}
          >
            CV
          </span>
          <div
            className={`border ${errors?.cv ? 'border-error text-error' : 'border-primary-light text-primary'} w-full p-4 rounded-xl font-medium bg-white`}
          >
            <input
              type='file'
              accept='application/pdf'
              {...register('cv', {
                required: 'This field is required',
              })}
              className='absolute w-0 h-0'
            />
            {watch('cv')?.length ? (
              <p>{watch('cv')[0].name}</p>
            ) : (
              <p className='flex gap-4'>
                <UploadIcon
                  color={errors?.cv ? 'error' : 'primary'}
                />
                Add file
              </p>
            )}
          </div>
          {errors?.cv && (
            <span className='text-error block font-normal'>
              {errors.cv.message}
            </span>
          )}
        </label>
      </div>
      <label>
        <span
          className={`block font-bold text-sm text-text-dark`}
        >
          Message to recruiter
        </span>
        <textarea
          rows={3}
          className='w-full border border-primary rounded-xl mb-4 outline-none p-2 focus-visible:shadow-select'
          {...register('message')}
        />
      </label>

      <Button label='Apply' />
    </Form>
  );
}
