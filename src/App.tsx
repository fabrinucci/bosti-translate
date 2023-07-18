import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { ArrowSelector } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { SectionType } from './types.d'

const App = () => {
  const state = useStore()

  const {
    interchangeLanguage,
    fromLanguage,
    toLanguage,
    fromText,
    loading,
    result,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = state

  return (
    <Container className='d-flex flex-column align-items-center'>
      <h1 className='p-3 text-center'>Bosti translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button
            variant='link'
            onClick={interchangeLanguage}
            disabled={fromLanguage === 'auto'}
          >
            <ArrowSelector />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
