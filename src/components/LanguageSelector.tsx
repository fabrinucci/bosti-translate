import { type ChangeEvent, type FC } from 'react'
import { FormSelect } from 'react-bootstrap'
import { type LanguageProps, type Language, SectionType } from '../types.d'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../utils/constants'

export const LanguageSelector: FC<LanguageProps> = ({
  type,
  value,
  onChange
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <FormSelect
      onChange={handleChange}
      aria-label='Language selector'
      value={value}
    >
      {type === SectionType.From && (
        <option value={AUTO_LANGUAGE}>Detect language</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, lng]) => (
        <option key={key} value={key}>
          {lng}
        </option>
      ))}
    </FormSelect>
  )
}
