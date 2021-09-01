import styled from 'styled-components';
import theme from '../../styles/theme';

export const TextFieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: ${theme.colors.greyLight};
    font-size: 16px;
    margin-bottom: 5px;
  }

  textarea {
    background-color: transparent;
    border: 1px solid ${theme.colors.secondary};
    color: white;
    padding: 5px;
    height: 100px;
    width: 100%;
  }
`;
