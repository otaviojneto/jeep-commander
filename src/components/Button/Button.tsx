import React from 'react';
import { Btn } from './styles';

interface BtnProps {
  onClick: () => void;
}

const Button: React.FC<BtnProps> = ({ children }) => {
  return <Btn type="submit">{children}</Btn>;
};

export default Button;
