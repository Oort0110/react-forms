import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types';

import TextField from '@data-driven-forms/pf4-component-mapper/dist/cjs/text-field';
import FormTemplate from '@data-driven-forms/pf4-component-mapper/dist/cjs/form-template';

const schema = {
  title: 'IsNotEmpty condition',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'field-1',
      label: 'Field 1',
      helperText: 'To show field 2 write anything here!'
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'field-2',
      label: 'Field 2',
      initialValue: 'I am shown!',
      isDisabled: true,
      condition: { when: 'field-1', isNotEmpty: true }
    }
  ]
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField
};

const IsNotEmpty = () => (
  <div className="pf4">
    <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
  </div>
);

export default IsNotEmpty;
