import React from 'react'

import styled from '../utils/styled'

interface SwitchProps {
  label: string
  on: boolean
  toggle: () => void
}

export default function Switch({
  label,
  on,
  toggle,
}: SwitchProps): JSX.Element {
  return (
    <Container onClick={toggle}>
      <Label>{label}</Label>

      <SwitchContainer on={on}>
        <SwitchIndicator on={on} />
      </SwitchContainer>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0.5em;
`

const Label = styled.div`
  color: ${props => props.theme.colors.inputLabel};
  font-size: 0.8em;
  font-weight: bold;
  margin-right: ${props => props.theme.spacing.s};
`

const SwitchContainer = styled.div<{ on: boolean }>`
  background-color: ${props =>
    props.on
      ? props.theme.colors.primary
      : props.theme.colors.inputInactiveBackground};
  border-radius: ${props => props.theme.spacing.m};
  height: ${props => props.theme.spacing.m};
  position: relative;
  transition: all 0.25s ease;
  width: ${props => props.theme.spacing.l};
`

const SwitchIndicator = styled.div<{ on: boolean }>`
  background-color: white;
  border-radius: ${props => props.theme.spacing.m};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  height: ${props => props.theme.spacing.m};
  left: ${props => (props.on ? props.theme.spacing.m : 0)};
  position: absolute;
  transition: all 0.25s ease;
  width: ${props => props.theme.spacing.m};
`
