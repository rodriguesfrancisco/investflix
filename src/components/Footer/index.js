import React from 'react';
import { FooterBase } from './styles';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/rodriguesfrancisco/investflix" target="_blank" rel="noopener noreferrer"
        style={{ marginRight: 20 }} title="Github">
        <FiGithub style={{ fontSize: '25' }} />
      </a>
      <a href="https://www.linkedin.com/in/franciscovrodrigues/" target="_blank" rel="noopener noreferrer"
        title="LinkedIn">
        <FiLinkedin style={{ fontSize: '25' }} />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
