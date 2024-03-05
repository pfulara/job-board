'use client';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import { NotificationContext } from '@/providers/NotificationProvider';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const Textarea = dynamic(
  () => {
    return import('@/components/Textarea');
  },
  {
    loading: () => (
      <div className='text-center my-8'>Loading...</div>
    ),
    ssr: false,
  }
);

export default function EditAccount({ company }) {
  const { setContext } = useContext(NotificationContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
  } = useForm({
    defaultValues: company,
  });

  const onSubmit = async (data) => {
    const res = await fetch('/api/admin/company/edit', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (!res.ok) {
      setContext({
        status: 'error',
        message: response.message,
      });
      return;
    }
    setContext({
      status: 'success',
      message: 'Saved successfully',
    });
    router.refresh();
  };

  return (
    <Form
      action={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
    >
      <div className='bg-secondary p-4 rounded-xl shadow-md'>
        <h2 className='mb-4'>Edit Account information</h2>
        <Input
          label='Company name'
          error={errors.companyName}
          {...register('companyName', {
            required: 'This field is required',
          })}
        />

        <Input
          label='Address'
          {...register('companyAddress')}
        />
      </div>
      <div className='bg-secondary p-4 rounded-xl shadow-md mt-4'>
        <Textarea
          label='Description'
          {...register('description')}
          value={getValues('description')}
          setValue={setValue}
          ref={null}
        />
        <Button label='Save' color='secondary' />
      </div>
    </Form>
  );
}
