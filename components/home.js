import React, {Component} from 'react';
import Header from './header';
import Button from './button';
import Footer from './footer';

class Home extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Button/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
