import styled from 'styled-components';
import assets from '../../../public/assets/seta.svg';
import theme from '../../styles/theme';
import { Swiper as SwiperReact } from 'swiper/react';

export const Swiper = styled(SwiperReact)`
  height: 60vh;

  /* @media (max-width: 768) {
    height: 64vh;
  } */

  .swiper-button-next,
  .swiper-button-prev {
    height: 20px;
    top: 100%;

    @media (max-width: 512px) {
      left: auto !important;
    }

    &::after {
      background-position: center;
      background-repeat: no-repeat;
      color: transparent;
    }
  }

  .swiper-button-next {
    left: 60%;

    &::after {
      background-image: url(${assets});
      content: '';
      height: 20px;
      width: 20px;
    }
  }

  .swiper-button-prev {
    left: 38%;

    &::after {
      background-image: url(${assets});
      content: '';
      height: 20px;
      transform: rotate(180deg);
      width: 20px;
    }
  }

  .swiper-slide {
    align-items: flex-end;
    display: flex;
    padding-bottom: 30px;
    position: relative;

    @media (max-width: 768px) {
      width: 270px;
    }

    img {
      object-fit: cover;
      transition: 0.3s ease-in-out;

      @media (max-width: 768px) {
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
    }

    button {
      background-color: transparent;
      display: inline-block;
      opacity: 0.6;
      position: relative;
      text-align: center;

      img {
        border: 2px solid ${theme.colors.greyLight};
      }

      &::after {
        background-image: url('https://www.jeep.com.br/content/dam/jeep/products/671/receptiva/teaser/play.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
        height: 56px;
        left: 50%;
        opacity: 0.6;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 0.4s ease-in-out;
        width: 56px;

        @media (max-width: 768px) {
          height: 46px;
          top: 50%;
          width: 46px;
        }
      }

      p {
        @media (max-width: 768px) {
          position: absolute;
        }
      }

      @media (max-width: 978px) {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    &-active {
      button {
        opacity: 1;

        &::after {
          height: 106px;
          width: 106px;
          opacity: 1;

          @media (max-width: 978px) {
            height: 76px;
            width: 76px;
          }
        }

        p {
          bottom: 34px;
          font-size: 16px;
          font-weight: 300;
          opacity: 0.6;
          padding: 2px;
          opacity: 1;

          @media (max-width: 768px) {
            bottom: 20px;
            padding: 10px;
          }
        }
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .swiper-pagination {
    align-items: center;
    bottom: -10px;
    display: flex;
    height: 40px;
    justify-content: center;
    z-index: 2;

    &-bullets {
      .swiper-pagination-bullet {
        background-color: ${theme.colors.greyMedium};
        margin: 0 10px;

        &::before {
          border: 0 solid ${theme.colors.white};
          border-radius: 50%;
          content: '';
          height: 0;
          position: absolute;
          transform: translate(-40%, 4px);
          transition: 0.3s ease-in-out;
          width: 0;
        }

        &-active {
          background-color: ${theme.colors.white};
          height: 6px;
          position: relative;
          width: 6px;

          &::before {
            border-width: 1px;
            height: 16px;
            transform: translate(-50%, -6px);
            width: 16px;
          }
        }
      }
    }
  }
`;
