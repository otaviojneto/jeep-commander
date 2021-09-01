import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.greyDark};
  border-bottom: 1px solid rgba(234, 223, 211, 0.16);
  color: ${theme.colors.white};
  display: flex;
  height: 44px;
  margin-bottom: 42px;
  justify-content: center;

  button {
    background-color: transparent;
  }

  div {
    align-items: center;
    display: flex;

    img {
      width: 100%;
    }
  }
`;
