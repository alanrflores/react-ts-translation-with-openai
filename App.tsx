import * as React from 'react';
import GetItem from './GetItem';
import { useStore } from './hooks/useStore';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './style.css';
import { ArrowIcon } from './components/Icon';
import { LanguageSelector } from './components/LanguageSelector';
import { SectorType } from './types.d';

export default function App() {
  const {
    setFromLanguage,
    fromLanguage,
    toLanguage,
    setFromText,
    setLanguage,
    interchangeLanguage,
  } = useStore();
  console.log({ fromLanguage });
  return (
    <Container fluid>
      <h2>Google translate</h2>
      <Row>
        <Col>
          <LanguageSelector
            onChange={setFromLanguage}
            type="from"
            value={fromLanguage}
          />
          {fromLanguage}
        </Col>
        <Col>
          <Button variant="dark" onClick={() => interchangeLanguage()}>
            <ArrowIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            onChange={setLanguage}
            type="to"
            value={toLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}
