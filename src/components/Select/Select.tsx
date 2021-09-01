import React, { useCallback } from 'react';
import { Field } from 'formik';

import { tagManagerArgs } from '../../tracks/Tracks';
import { SelectStyles } from './styles';

interface OptProps {
  name: string;
  value: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: OptProps[];
  error?: string;
  tag?: string;
  onChange?: (value: any) => void;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  error,
  tag,
  onChange,
}) => {
  const handleFocus = useCallback((value: string) => {
    const title = label.toLowerCase().replaceAll(' ', '-');
    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'conteudo',
      pageSubsection: 'lead-cadastro',
      interactionType: 'selecao',
      elementCategory: 'campo',
      element: title,
      selectedValue: value,
    });
  }, []);

  return (
    <SelectStyles>
      <label htmlFor={name}>{label}</label>

      <Field
        onChange={e => {
          onChange(e.target.value);
          handleFocus(e.target.value);
        }}
        as="select"
        name={name}
      >
        {options?.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </Field>

      {error && <p>{error}</p>}
    </SelectStyles>
  );
};

export default Select;
