import React from 'react';
import { Portifolio } from './Informations';

const Header = () => {
  return (
    <div className='header-container'>
      {Portifolio.map((text, index) => (
        <div key={index}>
          <h1 className='title'>Olá, meu nome é {text.title}</h1>
          <h2 className='subtitle'>{text.subtitle}</h2>
          <p className='bio'>{text.bio}</p>
        </div>
      ))}     
    </div>
  );
};

export default Header;
