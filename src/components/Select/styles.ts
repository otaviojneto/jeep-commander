import styled from 'styled-components';
import theme from '../../styles/theme';

export const SelectStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 27px;
  width: 100%;

  label {
    color: ${theme.colors.greyLight};
    font-size: 16px;
    margin-bottom: 5px;
  }

  select {
    background-color: ${theme.colors.dark};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 2px;
    color: ${theme.colors.greyLight};
    cursor: pointer;
    font-size: 16px;
    margin: 0;
    outline: none;
    padding: 8px;
    width: 100%;

    option {
      width: 100%;
    }
  }
`;
