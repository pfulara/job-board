'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { NotificationContext } from '@/providers/NotificationProvider';
import dynamic from 'next/dynamic';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import MultiSelect from '@/components/MultiSelect';
import Form from '@/components/Form';

import categories from '@/utils/categories';
import locations from '@/utils/locations';
import contracts from '@/utils/contracts';
import currencies from '@/utils/currencies';
import Loader from '@/app/loader';

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

export default function EditOffer({ offer }) {
  const { setContext } = useContext(NotificationContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    clearErrors,
    getValues,
    watch,
  } = useForm({
    defaultValues: offer,
  });

  const [skills, setSkills] = useState(
    categories.find(
      (category) =>
        category.id === watch('category') || 'js'
    ).skills
  );

  watch((data) =>
    setSkills(
      categories.find(
        (category) => category.id === data.category
      ).skills
    )
  );

  const onSubmit = async (data) => {
    const res = await fetch('/api/admin/offers/save', {
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
  };

  return (
    <Form
      action={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
    >
      <h2>Edit offer {offer.title}</h2>
      <Input
        label='Title'
        error={errors.title}
        {...register('title', {
          required: 'This field is required',
        })}
      />
      <MultiSelect
        label='Locations'
        items={locations?.map((item) => ({
          value: item,
          label: item,
        }))}
        values={getValues('locations')}
        setValue={setValue}
        clearErrors={clearErrors}
        error={errors.locations}
        {...register('locations', {
          required: 'This field is required',
        })}
      />
      <Select
        label='Category'
        items={categories}
        {...register('category')}
      />
      <MultiSelect
        label='Skills'
        setValue={setValue}
        values={getValues('skills')}
        clearErrors={clearErrors}
        error={errors.skills}
        items={skills?.map((item) => ({
          value: item.id,
          label: item.label,
        }))}
        {...register('skills', {
          required: 'This field is required',
        })}
      />
      <div className='flex gap-4'>
        <div className='flex'>
          <div className='w-60'>
            <Input
              label='Salary'
              type='number'
              {...register('salary')}
            />
          </div>
          <Select
            label='Currency'
            items={currencies}
            {...register('currency')}
          />
        </div>
        <div>
          <Select
            label='Contract type'
            items={contracts}
            {...register('contract')}
          />
        </div>
      </div>

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
      <div className='flex gap-4'>
        <Button label='Save' />
        <Button
          type='reset'
          color='secondary'
          label='Cancel'
          onClick={() =>
            router.push(`/admin/offers/${offer._id}`)
          }
        />
      </div>
    </Form>
  );
}
