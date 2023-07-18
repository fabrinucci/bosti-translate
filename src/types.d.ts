import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './utils/constants';

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage:   Language
  fromText:     string
  result:       string
  loading:      boolean
}

export type Action =
  | { type: 'EXCHANGE_LANGUAGE' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }

export enum SectionType {
  From = 'from',
  To = 'to' 
}

// Props

export type LanguageProps =
| { 
    type: SectionType.From
    value: FromLanguage
    onChange: (language: FromLanguage) => void 
  }
| { 
    type: SectionType.To
    value: Language
    onChange: (language: Language) => void 
  }

export type TextAreaProps =
  {
    type: SectionType
    value: string
    loading?: boolean
    onChange: (text: string) => void 
  }

