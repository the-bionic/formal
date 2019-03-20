import styled from '../utils/styled'

interface ButtonProps {
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>`
  border: ${props =>
    props.variant === 'primary'
      ? 'none'
      : `2px solid ${props.theme.colors.primary}`};
  background-color: ${props =>
    props.variant === 'primary' ? props.theme.colors.primary : 'white'};
  border-radius: ${props => props.theme.spacing.s};
  color: ${props =>
    props.variant === 'primary' ? 'white' : props.theme.colors.primary};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
  outline: none;
  padding: 0.25em 2em;
  transition: all 0.25s ease;

  &:hover {
    opacity: ${props => (props.disabled ? 0.2 : 0.75)};
  }

  &:active {
    opacity: ${props => (props.disabled ? 0.2 : 0.9)};
  }
`

Button.defaultProps = {
  variant: 'primary',
}

export default Button
