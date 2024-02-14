'use client';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { NotificationContext } from '@/providers/NotificationProvider';

import Form from '@/components/Form';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function RegisterPage() {
  const { setContext } = useContext(NotificationContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch('/api/register', {
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
    router.push('/login');
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Input
          label='Email'
          error={errors.email}
          {...register('email', {
            required: 'This field is required',
          })}
        />
        <Input
          label='Company name'
          error={errors.companyName}
          {...register('companyName', {
            required: 'This field is required',
          })}
        />
        <Input
          type='password'
          label='Password'
          error={errors.password}
          {...register('password', {
            required: 'This field is required',
          })}
        />
        <div className='mt-6'>
          <Button fullWidth label='Sign up' />
        </div>
      </Form>
      <p className='mt-4 text-center'>
        {'Have an account? '}
        <Link className='font-bold' href='/login'>
          Login here
        </Link>
      </p>
    </>
  );
}
