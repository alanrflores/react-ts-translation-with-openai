import * as React from 'react';
import { useStore } from './hooks/useStore';
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Stack,
  FormText,
} from 'react-bootstrap';
import './style.css';
import { ArrowIcon } from './components/Icon';
import { LanguageSelector } from './components/LanguageSelector';
import { TextArea } from './components/TextArea';
import { translate } from './service/translate';
import { useEffect } from 'react';

function App() {
  const {
    setFromLanguage,
    fromLanguage,
    toLanguage,
    setLanguage,
    setFromText,
    fromText,
    interchangeLanguage,
    setResult,
    result,
  } = useStore();

  useEffect(() => {
    if (fromText === '') return;
    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result === null) return;
        setResult(result);
      })
      .catch((error) => setResult(error));
  }, [fromText]);
  return (
    <Container fluid>
      <h2>Google translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              onChange={setFromLanguage}
              type="from"
              value={fromLanguage}
            />
            <TextArea
              placeholder="Introducir texto"
              autoFocus
              type="from"
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs={'auto'}>
          <Button variant="dark" onClick={() => interchangeLanguage()}>
            <ArrowIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              onChange={setLanguage}
              type="to"
              value={toLanguage}
            />
            <TextArea
              placeholder="Traducción"
              autoFocus
              type="to"
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
