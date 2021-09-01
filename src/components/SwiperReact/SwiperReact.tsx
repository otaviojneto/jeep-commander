import React, { useCallback, useEffect, useState } from 'react';
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

import { Swiper } from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { tagManagerArgs } from '../../tracks/Tracks';

SwiperCore.use([
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
]);

interface IconProps {
  snapIndex?: any;
}

const SwiperReact: React.FC<IconProps> = ({ children }) => {
  const Bullets = pagination => {
    if (pagination.target.localName === 'span') {
      const identifier = pagination.target.ariaLabel;
      const identifierTreated = identifier?.replace(
        'Go to slide ',
        '',
      );

      tagManagerArgs({
        event: 'interaction',
        brand: 'jeep',
        segment: 'landing-page',
        product: 'commander',
        path: 'teaser',
        pageSection: 'conteudo',
        pageSubsection: 'video-player',
        interactionType: 'clique',
        elementCategory: 'icone',
        element: `item-${identifierTreated}`,
        selectedValue: null,
      });
    }
  };

  const handlePrev = () => {
    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'conteudo',
      pageSubsection: 'video-player',
      interactionType: 'clique',
      elementCategory: 'icone',
      element: 'anterior',
      selectedValue: null,
    });
  };

  const handleNext = useCallback(() => {
    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'conteudo',
      pageSubsection: 'video-player',
      interactionType: 'clique',
      elementCategory: 'icone',
      element: 'proximo',
      selectedValue: null,
    });
  }, []);

  useEffect(() => {
    const pagination = document.querySelector(
      '.swiper-pagination',
    );

    pagination.addEventListener('click', Bullets);
    return () => window.removeEventListener('click', Bullets);
  }, []);

  useEffect(() => {
    const btnPrev = document.querySelector(
      '.swiper-button-prev',
    );

    btnPrev.addEventListener('click', handlePrev);
    return () => window.removeEventListener('click', handlePrev);
  }, []);

  useEffect(() => {
    const btnPrev = document.querySelector(
      '.swiper-button-next',
    );

    btnPrev.addEventListener('click', handleNext);
    return () => window.removeEventListener('click', handleNext);
  }, []);

  return (
    <Swiper
      navigation={true}
      slidesPerView="auto"
      spaceBetween={18}
      pagination={{ clickable: true }}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperReact;
