import * as React from 'react';
import GetItem from './GetItem';
import { useStore } from './hooks/useStore';

import './style.css';

export default function App() {
  const { setFromLanguage, fromLanguage } = useStore();
  console.log({ fromLanguage });
  return (
    <div>
      <h3>Google translate</h3>
      <button onClick={() => setFromLanguage('es')}>Cambiar a español</button>
      <span style={{ padding: 10 }}>{fromLanguage}</span>
    </div>
  );
}
