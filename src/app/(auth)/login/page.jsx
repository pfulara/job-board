'use client';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { signIn } from 'next-auth/react';

import { NotificationContext } from '@/providers/NotificationProvider';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function LoginPage() {
  const { setContext } = useContext(NotificationContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setContext({
        status: 'error',
        message: 'Wrong email or password',
      });
      return;
    }
    router.replace('/admin');
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
          type='password'
          label='Password'
          error={errors.password}
          {...register('password', {
            required: 'This field is required',
          })}
        />
        <div className='mt-6'>
          <Button fullWidth label='Log in' />
        </div>
      </Form>
      <p className='mt-4 text-center'>
        {"Don't have an account? "}
        <Link className='font-bold' href='/register'>
          Register here
        </Link>
      </p>
    </>
  );
}
