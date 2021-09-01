import styled from 'styled-components';
import theme from '../../styles/theme';

export const Description = styled.span`
  padding-top: 100px;
  text-align: center;
  width: 100%;

  div {
    padding-bottom: 10px;

    p {
      color: ${theme.colors.greyLight};
      font-size: 20px;
    }
  }

  img {
    width: 100%;
  }
`;
