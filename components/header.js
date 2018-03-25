import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <header className="Hero">
        <img className="Hero-logo" alt="Dosis de vida" />
        <h2 className="Hero-subtitle">Tal vez tengas el medicamento que alguien más necesita para sobrevivir.</h2>
        <h2 className="Hero-subtitle">¡Dale una dosis de vida!</h2>
      </header>
    )
  }
}

export default Header;
