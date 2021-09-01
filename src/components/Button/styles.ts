import styled from 'styled-components';
import theme from '../../styles/theme';

export const Btn = styled.button`
  align-items: center;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  display: flex;
  font-size: 24px;
  height: 48px;
  justify-content: center;
  padding: 10px;
  transition: ease-in-out 0.2s;
  width: 300px;

  &:hover {
    opacity: 0.8;
  }
`;
