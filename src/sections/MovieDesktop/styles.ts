import styled from 'styled-components';
import theme from '../../styles/theme';
import img from '../../assets';

export const Container = styled.div`
  background-image: url(${img.commanderDesk});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

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
    font-size: 50px;
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
  padding-top: 42px;
  position: relative;
  span {
    display: flex;
    align-items: center;
    bottom: 16px;

    p {
      align-items: center;
      bottom: 14px;
      color: ${theme.colors.greyLight};
      display: table;
      font-size: 18px;
      margin: 0 auto;
      padding: 0 12px;
      position: relative;
      top: 0;
      text-align: center;
    }

    &::before {
      border-top: 1px dotted ${theme.colors.greyLight};
      content: '';
      opacity: 0.2;
      position: absolute;
      width: 30%;
    }

    &::after {
      border-top: 1px dotted ${theme.colors.greyLight};
      content: '';
      opacity: 0.2;
      position: absolute;
      width: 30%;
      right: 0;
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

export const Box = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 0 14px 0;
  width: 80%;

  button {
    background: transparent;
    position: relative;

    &::before {
      background-image: url('https://www.jeep.com.br/content/dam/jeep/products/671/receptiva/teaser/play.svg');
      background-position: contain;
      background-repeat: no-repeat;
      background-size: cover;
      content: '';
      height: 42px;
      left: 50%;
      opacity: 0.6;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: 0.4s ease-in-out;
      width: 42px;
    }

    img {
      width: 190px;
      height: 108px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
