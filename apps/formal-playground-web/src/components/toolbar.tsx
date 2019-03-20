import styled from '../utils/styled'

export default styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-evenly;
  margin-top: ${props => props.theme.spacing.l};

  @media (max-width: ${props => props.theme.exampleWidth}) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: ${props => props.theme.spacing.m};
    }
  }
`
