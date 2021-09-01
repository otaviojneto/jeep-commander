import styled from 'styled-components';
import theme from '../../styles/theme';
import img from '../../assets';

export const Container = styled.div`
  background-image: url(${img.commanderMobile});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  span {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.pro.light}, sans-serif;
    font-weight: 300;

    @media (max-width: 512px) {
      display: block;
    }
  }

  h1 {
    color: ${theme.colors.greyLight};
    font-family: ${theme.fonts.pro.bold}, sans-serif;
    font-size: 32px;
    text-align: center;
  }
`;

export const Play = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
`;

export const PlayBox = styled.div`
  align-items: start;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  width: 983px;

  iframe {
    border: 1px solid ${theme.colors.primary};
    height: 400px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 90%;

    iframe {
      height: 240px;
      width: 100%;
    }
  }
`;

export const BtnScroll = styled.button`
  display: block;
  margin: 24px auto;
  background-color: transparent;
`;

export const Newsletter = styled.div`
  margin-top: 38px;

  &::before {
    border-top: 1px dotted ${theme.colors.greyLight};
    content: '';
    opacity: 0.3;
    position: absolute;
    width: 100%;

    @media (max-width: 1024px) {
      margin-top: 42px;
    }
  }

  p {
    background: black;
    bottom: 10px;
    color: ${theme.colors.greyLight};
    display: table;
    font-size: 18px;
    margin: 0 auto;
    padding: 0 12px;
    position: relative;
    text-align: center;

    @media (max-width: 768px) {
      background-color: transparent;
    }
  }
`;

export const Close = styled.button`
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 16px;
  padding: 10px;
  position: relative;
  right: 0;
  z-index: 1;
`;
