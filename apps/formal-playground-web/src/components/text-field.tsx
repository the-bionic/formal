import React from 'react'

import styled from '../utils/styled'

interface TextFieldProps {
  id: string
  label: string
  disabled: boolean
  error?: string
}

export default function TextField({
  id,
  label,
  error,
  ...props
}: TextFieldProps & React.InputHTMLAttributes<any>): JSX.Element {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input error={error} type="text" {...props} />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing.l} 0;
`

const Label = styled.label`
  color: ${props => props.theme.colors.inputLabel};
  margin-bottom: ${props => props.theme.spacing.m};
`

const Input = styled.input<{ disabled: boolean; error?: string }>`
  background-color: ${props => props.theme.colors.inputInactiveBackground};
  border: none;
  border: ${props =>
    props.error ? `1px solid ${props.theme.colors.error}` : 'none'};
  border-radius: ${props => props.theme.spacing.s};
  color: ${props => props.theme.colors.inputText};
  font-size: 1em;
  font-weight: bold;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
  outline: none;
  padding: 0.75em;
  transition: all 0.25s ease;

  &:focus {
    background-color: ${props => props.theme.colors.inputActiveBackground};
  }
`

const Error = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 0.8;
  margin-top: ${props => props.theme.spacing.s};
`
