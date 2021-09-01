import React, { useCallback, useState } from 'react';
import { Field } from 'formik';
import { render } from 'react-dom';

import { tagManagerArgs } from '../../tracks/Tracks';
import { InputStyle } from './styles';
import MaskedInput from 'react-text-mask';

interface Input {
  label: string;
  mask?: any;
  name: string;
  error?: string;
  type?: string;
  value?: string;
  tag?: string;
  onChange?: (value: any) => void;
}

const TextField: React.FC<Input> = ({
  label,
  mask,
  name,
  error,
  type = 'text',
  tag,
  onChange,
}) => {
  let initialValue = '';

  const handleFocus = useCallback(value => {
    if (value !== initialValue && initialValue !== undefined) {
      tagManagerArgs({
        event: 'interaction',
        brand: 'jeep',
        segment: 'landing-page',
        product: 'commander',
        path: 'teaser',
        pageSection: 'conteudo',
        pageSubsection: 'lead-cadastro',
        interactionType: 'preencheu',
        elementCategory: 'campo',
        element: tag,
        selectedValue: null,
      });
    }
    initialValue = value;
  }, []);

  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      {mask ? (
        <Field
          name={name}
          id={name}
          render={() => (
            <MaskedInput
              mask={mask}
              id={name}
              onBlur={e => handleFocus(e.target.value)}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />
      ) : (
        <Field
          name={name}
          mask={mask}
          id={name}
          type={type}
          onBlur={e => handleFocus(e.target.value)}
          onChange={e => onChange(e.target.value)}
        />
      )}

      {error && <p>{error}</p>}
    </InputStyle>
  );
};

export default TextField;
