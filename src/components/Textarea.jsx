import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Textarea = ({
  name,
  label,
  error,
  setValue,
  value,
  clearErrors,
}) => {
  return (
    <>
      <label className='font-bold block text-sm text-text-dark'>
        {label}
      </label>
      <CKEditor
        editor={ClassicEditor}
        value={value}
        onChange={(event, editor) => {
          setValue(name, editor.getData());
          clearErrors(name);
        }}
      />
      <div className='mb-4 text-error block font-normal text-sm'>
        {error?.message}
      </div>
    </>
  );
};

export default Textarea;
