'use client';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';

import { NotificationContext } from '@/providers/NotificationProvider';
import Form from '@/components/Form';
import ImageUploadInput from '@/components/ImageUploadInput';
import Button from '@/components/Button';

export default function UploadFileForm() {
  const { setContext } = useContext(NotificationContext);
  const [uploading, setUploading] = useState(false);

  const { register, handleSubmit, reset, watch } =
    useForm();

  const onSubmit = async (data) => {
    if (data.logo.length) {
      setUploading(true);
      const reader = new FileReader();
      reader.readAsDataURL(data.logo[0]);
      reader.onload = async function () {
        const res = await fetch(
          '/api/admin/company/save-logo',
          {
            headers: {
              'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ file: reader.result }),
          }
        );
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
          message: response.message,
        });
      };
      reader.onerror = function (error) {
        setContext({
          status: 'error',
          message: error,
        });
      };
      setUploading(false);
    }
  };

  return (
    <Form
      action={handleSubmit(onSubmit)}
      isSubmitting={uploading}
    >
      <div className='bg-secondary p-4 rounded-xl shadow-md mb-4'>
        <h2 className='mb-4'>Upload company logo</h2>
        <ImageUploadInput
          file={watch('logo')}
          label='Company logo'
          reset={reset}
          {...register('logo')}
        />
        <Button label='Upload' color='secondary' />
      </div>
    </Form>
  );
}
