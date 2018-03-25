import React, {Component} from 'react';
import Media from './media';

class Footer extends Component{
  render(){
    return(
      <footer className="Footer">
        <p className="Footer-text">Un producto de responsabilidad social de</p>
        <a href="http://www.dosmasuno.co">
          <img className="Footer-logo" src="" alt="Dos Más Uno"/>
        </a>
        <a className="Footer-link">Quiénes somos</a>
        <a className="Footer-link">Términos legales</a>
        <a className="Footer-link">Contáctanos</a>
      <div className="Footer-buttons">
          <Media link="http://www.google.com" image="blabla.jpg"/>
        </div>
      </footer>
    )
  }
}

export default Footer;
