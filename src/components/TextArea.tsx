import { type FC, type ChangeEvent, type CSSProperties } from 'react'
import { FormControl } from 'react-bootstrap'
import { SectionType, type TextAreaProps } from '../types.d'

export const TextArea: FC<TextAreaProps> = ({
  type,
  value,
  onChange,
  loading
}) => {
  const getPlaceholder = ({
    type,
    loading
  }: {
    type: SectionType
    loading?: boolean
  }) => {
    if (type === SectionType.From) return 'Type text to translate'
    if (loading === true) return 'Translating...'
    return 'Translate'
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const commonStyles: CSSProperties = {
    height: '200px',
    border: 0,
    resize: 'none'
  }

  const styles =
    type === SectionType.From
      ? commonStyles
      : {
          ...commonStyles,
          backgroundColor: '#e2e2e2'
        }

  return (
    <FormControl
      as='textarea'
      autoFocus={type === SectionType.From}
      style={styles}
      value={value}
      placeholder={getPlaceholder({ type, loading })}
      onChange={handleChange}
    />
  )
}
