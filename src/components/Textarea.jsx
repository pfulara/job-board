import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Textarea = ({
  name,
  label,
  error,
  setValue,
  value = '',
  clearErrors = () => null,
}) => {
  return (
    <>
      <label className='font-bold block text-sm text-text-dark'>
        {label}
      </label>
      <CKEditor
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
          ],
          heading: {
            options: [
              {
                model: 'paragraph',
                title: 'Paragraph',
                class: 'ck-heading_paragraph',
              },
              {
                model: 'heading1',
                view: 'h1',
                title: 'Heading 1',
                class: 'ck-heading_heading1',
              },
              {
                model: 'heading2',
                view: 'h2',
                title: 'Heading 2',
                class: 'ck-heading_heading2',
              },
            ],
          },
        }}
        editor={ClassicEditor}
        data={value}
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
