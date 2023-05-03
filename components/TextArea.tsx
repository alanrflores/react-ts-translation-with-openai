import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  type: string;
  placeholder: string;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
  autoFocus: boolean;
}

const commonStyles = { border: 0, height: '200px' };

const getPlaceHolder = ({
  type,
  loading,
}: {
  type: string;
  loading: boolean;
}) => {
  if (type === 'from') return 'Introducir texto';
  if (loading === true) return 'Cargando...';
  return 'Traducción';
};

export const TextArea = ({
  type,
  autoFocus,
  loading,
  onChange,
  value,
}: Props) => {
  const styles =
    type === 'from'
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f5f5f5' };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <Form.Control
      as="textarea" //lo que quiero renderizar
      autoFocus={type === 'from'}
      placeholder={getPlaceHolder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
