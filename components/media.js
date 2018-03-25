import React, {Component} from 'react';

class Media extends Component{
  render(){
    var background = this.props.image;

    var mediaStyle = {
      backgroundImage: 'url('+ background + ')',
      backgroundSize: 'cover'
    };

    return(
      <a href={this.props.link}>
        <div className="Footer-buttons-media" style={mediaStyle}></div>
      </a>
    )
  }
}

export default Media;
