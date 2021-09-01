import React, { useCallback } from 'react';
import { Container } from './styles';
import { tagManagerArgs } from '../../tracks/Tracks';

const Logo =
  'https://www.jeep.com.br/content/dam/jeep/products/671/receptiva/teaser/logo.png';

const Nav: React.FC = () => {
  const handleTag = useCallback(() => {
    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'header',
      pageSubsection: 'menu',
      interactionType: 'clique',
      elementCategory: 'logo',
      element: 'jeep',
      selectedValue: null,
    });
  }, []);

  return (
    <Container>
      <button onClick={() => handleTag()}>
        <img src={Logo} alt="Brand" />
      </button>
    </Container>
  );
};

export default Nav;
