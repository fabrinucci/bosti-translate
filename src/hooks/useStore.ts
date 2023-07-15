import { useReducer } from 'react'
import { type FromLanguage, type Language } from '../types'
import { initialState, reducer } from '../reducer'

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { fromLanguage, fromText, toLanguage, result, loading } = state

  const interchangeLanguage = () => {
    dispatch({ type: 'EXCHANGE_LANGUAGE' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({
      type: 'SET_FROM_LANGUAGE',
      payload
    })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({
      type: 'SET_TO_LANGUAGE',
      payload
    })
  }

  const setFromText = (payload: string) => {
    dispatch({
      type: 'SET_FROM_TEXT',
      payload
    })
  }

  const setResult = (payload: string) => {
    dispatch({
      type: 'SET_RESULT',
      payload
    })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
