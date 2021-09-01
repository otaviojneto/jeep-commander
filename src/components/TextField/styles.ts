import styled from 'styled-components';
import theme from '../../styles/theme';

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 27px;
  width: 100%;

  label {
    color: ${theme.colors.greyLight};
    font-size: 16px;
    margin-bottom: 7px;
  }

  input {
    background-color: transparent;
    border: 1px solid ${theme.colors.secondary};
    color: white;
    font-size: 16px;
    padding: 8px;
  }
`;
