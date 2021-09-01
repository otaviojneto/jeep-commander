import React, { useCallback } from 'react';
import { Field } from 'formik';

import { TextFieldStyle } from './styles';
import { tagManagerArgs } from '../../tracks/Tracks';

interface TextFieldProps {
  label: String;
  name: string;
  error?: string;
  tag?: string;
}

const TextArea: React.FC<TextFieldProps> = ({
  label,
  tag,
  name,
  error,
}) => {
  const handleFocus = useCallback(() => {
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
  }, []);

  return (
    <TextFieldStyle>
      <label htmlFor={name}>{label}</label>

      <Field
        as="textarea"
        cols={50}
        name={name}
        onBlur={() => handleFocus()}
      />

      {error && <p>{error}</p>}
    </TextFieldStyle>
  );
};

export default TextArea;
