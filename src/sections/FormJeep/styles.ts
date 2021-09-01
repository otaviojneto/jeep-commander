import styled from 'styled-components';
import theme from '../../styles/theme';

export const FormSession = styled.div`
  padding: 0 300px;

  @media (max-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 8%;
    width: 100%;
  }
`;

export const TextDescription = styled.p`
  color: ${theme.colors.greyLight};
  font-size: 8px;
  padding: 34px 20px 20px;
  width: 100%;

  a {
    color: ${theme.colors.greyLight};
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`;

export const RowField = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Col = styled.div`
  padding: 0 20px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonField = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const SelectStyle = styled.div`
  width: 100%;

  label {
    color: ${theme.colors.greyLight};
    text-align: left;
  }

  select {
    background-color: ${theme.colors.dark};
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.greyLight};
    cursor: pointer;
    font-size: 16px;
    margin: 0 0 26px 0;
    outline: none;
    padding: 8px;
    width: 100%;
  }

  option {
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    width: 100%;
  }
`;

export const LeadSent = styled.button`
  background-color: transparent;
  color: ${theme.colors.greyLight};
  font-family: ${theme.fonts.pro.bold}, sans-serif;
  font-size: 22px;
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
`;
