import React from 'react';
import { Portifolio } from './Informations';

import avatar from '../assets/avatar.jpg'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <div className='container-profile'>
        <img className='img-profile' alt='img-profile' src={avatar}></img>
      </div>
      {Portifolio.map((text, index) => (
        <div className='container-item' key={index}>
          <h1 className='title'>{text.title}</h1>
          <h2 className='subtitle'>{text.subtitle}</h2>
          <p className='bio'>{text.bio}</p>
          <button>Meus projetos</button>
          <button>Currículo</button>
        </div>
      ))}
      <div className='container-social'>
        <img alt='linkedin' className='social' src={linkedin}></img>
        <img alt='github' className='social' src={github}></img>
        <img alt='instagram' className='social'src={instagram}></img>
      </div>
    </div>
  );
};

export default Header;
