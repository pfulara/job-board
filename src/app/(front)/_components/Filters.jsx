'use client';
import { useEffect, useState } from 'react';
import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

import CustomSelect from '@/components/Select';
import categories from '@/utils/categories';
import locations from '@/utils/locations';
import formatUrl from '@/utils/formatUrl';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLocation = searchParams.get('location');
  const currentCategory = searchParams.get('category');

  const [params, setParams] = useState({
    category: currentCategory || '',
    location: currentLocation || '',
  });

  useEffect(() => {
    const newParams = formatUrl(params);
    router.push(`${newParams ? `?${newParams}` : '/'}`);
  }, [params, router]);

  const handleChange = (key, value) => {
    setParams({ ...params, [key]: value });
  };

  return (
    <div className='bg-secondary rounded-xl p-4 h-full shadow-md'>
      <h4 className='text-center mb-4'>Filters</h4>
      <CustomSelect
        label='Location'
        value={currentLocation}
        items={[
          { id: '', label: 'All offers' },
          ,
          ...locations?.map((item) => ({
            value: item,
            label: item,
          })),
        ]}
        onChange={(e) =>
          handleChange('location', e.target.value)
        }
      />
      <CustomSelect
        label='Category'
        value={currentCategory}
        items={[
          { id: '', label: 'All offers' },
          ...categories,
        ]}
        onChange={(e) =>
          handleChange('category', e.target.value)
        }
      />
    </div>
  );
}
