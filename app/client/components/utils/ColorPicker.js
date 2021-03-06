'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPicker extends ReactCSS.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: this.props.defaultColor
    };
    ['handleClick', 'handleClose', 'handleChange', 'handleColor'].forEach(m => { this[m] = this[m].bind(this); return null; });
  }

  handleColor() {
    this.props.returnColor(this.state.color);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose() {
    this.setState({ displayColorPicker: false })
  }

  handleChange(color){
    this.setState({ color: color.rgb })
    this.handleColor();
  };

  render() {
    const color = {
      width: '40px',
      height: '10px',
      borderRadius: '2px',
      background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
    };
    const swatch = {
      margin: '0px',
      padding: '2px',
      backgroundImage: 'url(http://www.transparenttextures.com/patterns/dark-denim-3.png)',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    };
    const popover = {
      position: 'absolute',
      zIndex: 2,
    };
    const cover = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
    return (
      <div>
        <div style={swatch} onClick={ this.handleClick }>
          <div style={color} />
        </div>
        { this.state.displayColorPicker ? <div style={popover}>
          <div style={cover} onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default ColorPicker;
