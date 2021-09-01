import React, { useCallback, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { SwiperSlide } from 'swiper/react';

import VideoProps from '../../@types/Video';
import { SwiperReact } from '../../components';
import video from '../../mocks/video';
import { tagManagerArgs } from '../../tracks/Tracks';

import {
  BtnScroll,
  Close,
  Container,
  Newsletter,
  Play,
  PlayBox,
} from './styles';

const MovieMobile: React.FC = () => {
  const [isVideo, setIsVideo] = useState('');

  const goToBottom = useCallback(() => {
    const scrollingElement =
      document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }, []);

  const handleOpenVideo = useCallback((value: VideoProps) => {
    const title = value.title.toLowerCase().replaceAll(' ', '-');

    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'conteudo',
      pageSubsection: 'video-player',
      interactionType: 'clique',
      elementCategory: 'botao',
      element: `play-${title}`,
      selectedValue: null,
    });

    setIsVideo(value.video);
  }, []);

  return (
    <>
      <Container>
        <h1>
          <span>VEM AÍ O</span> JEEP COMMANDER
        </h1>

        <SwiperReact>
          {video.map(item => (
            <SwiperSlide key={item.id}>
              <button
                key={item.id}
                onClick={() => handleOpenVideo(item)}
              >
                <img src={item.Image} alt={item.title} />
              </button>
            </SwiperSlide>
          ))}
        </SwiperReact>

        <Newsletter>
          <p>Cadastre-se receber conteúdos em primeira mão.</p>

          <BtnScroll onClick={() => goToBottom()}>
            <img
              src="https://www.jeep.com.br/content/dam/jeep/products/671/receptiva/teaser/seta-1.svg"
              alt="Line"
            />
          </BtnScroll>
        </Newsletter>
      </Container>

      {isVideo && (
        <Play>
          <PlayBox>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${isVideo}?enablejsapi=1&autoplay=1&&rel=0&origin=https://commander.jeep.com.br"`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <Close onClick={() => setIsVideo('')}>
              <BsX size={18} />
            </Close>
          </PlayBox>
        </Play>
      )}
    </>
  );
};

export default MovieMobile;
