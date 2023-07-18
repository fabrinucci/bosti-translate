import { type Action, type State } from '../types'

export const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

export const reducer = (state: State, action: Action) => {
  const { type } = action
  switch (type) {
    case 'EXCHANGE_LANGUAGE': {
      if (state.fromLanguage === 'auto') return state
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
    case 'SET_FROM_LANGUAGE': {
      return {
        ...state,
        fromLanguage: action.payload
      }
    }
    case 'SET_TO_LANGUAGE': {
      return {
        ...state,
        toLanguage: action.payload
      }
    }
    case 'SET_FROM_TEXT': {
      return {
        ...state,
        fromText: action.payload,
        loading: true
      }
    }
    case 'SET_RESULT': {
      return {
        ...state,
        result: action.payload,
        loading: false
      }
    }
    default:
      return state
  }
}
