import UploadIcon from '@/icons/UploadIcon';
import Image from 'next/image';
import React from 'react';

const ImageUploadInput = React.forwardRef(
  function ImageUploadInput(
    {
      name,
      onChange,
      label,
      labelColor = 'text-dark',
      file = [],
      reset,
    },
    ref
  ) {
    const image = file[0]
      ? URL.createObjectURL(file[0])
      : '';
    return (
      <div
        className={`mb-4 block font-bold text-sm text-${labelColor} w-fit`}
      >
        {label}
        <div className='relative'>
          {image && (
            <div
              onClick={() => reset()}
              className='absolute top-2 right-2 rounded-full border-2 border-error w-8 h-8 flex items-center justify-center bg-error-light text-error pb-[2px] cursor-pointer'
            >
              x
            </div>
          )}
          <label>
            <div className='flex rounded-xl shadow-md hover:shadow-lg w-fit'>
              {image ? (
                <Image
                  src={image}
                  alt='Company logo'
                  width={300}
                  height={300}
                />
              ) : (
                <div className='w-[300px] h-[300px] bg-secondary-dark flex items-center justify-center text-lg flex-col'>
                  <p>Upload a file</p>
                  <UploadIcon
                    color='text-dark'
                    width='70px'
                    height='70px'
                  />
                </div>
              )}
            </div>
            <input
              className='hidden'
              ref={ref}
              type='file'
              accept='image/png, image/jpeg'
              name={name}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    );
  }
);

export default ImageUploadInput;
