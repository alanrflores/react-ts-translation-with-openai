import { Form } from 'react-bootstrap';
import * as React from 'react';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constanst';
import { type FromLanguage, type Language } from '../types';

// interface Props {
// onChange: (language: string) => void
// }

type Props =
  | {
      type: 'from';
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: 'to';
      value: Language;
      onChange: (language: Language) => void;
    };

export const LanguageSelector = ({ onChange, value, type }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <Form.Select
      aria-label="Selecciona el idioma"
      onChange={handleChange}
      value={value}
    >
      {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};
