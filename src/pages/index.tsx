import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import {
  FormJeep,
  MovieMobile,
  Nav,
  MovieDesktop,
} from '../sections';

const Home: React.FC = () => {
  const [size, setSize] = useState<number>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth);
    }
    const onResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
  }, []);

  return (
    <>
      <Head>
        <title>JEEP COMMANDER</title>
      </Head>

      <Nav />

      {size < 768 ? <MovieMobile /> : <MovieDesktop />}

      <FormJeep />
    </>
  );
};

export default Home;
