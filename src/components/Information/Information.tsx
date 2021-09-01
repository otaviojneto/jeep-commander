import React from 'react';
import { Description } from './styles';

//Images external

const Information: React.FC = () => {
  return (
    <Description>
      <div>
        <p>Cadastre-se para conteúdos</p>

        <p>em primeira mão.</p>
      </div>

      <img
        src="https://www.jeep.com.br/content/dam/jeep/products/671/receptiva/teaser/Path-566.svg"
        alt="Line"
      />
    </Description>
  );
};

export default Information;
