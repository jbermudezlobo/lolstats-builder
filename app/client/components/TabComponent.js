import React from 'react';
import * as bs from 'react-bootstrap';
import ColorPicker from './ColorPicker';
import ReactNativeSlider from "react-html5-slider";

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      key: 1,
      summoner_name: '',
      load_animation: 'flipInY',
      show_champion: this.props.data ? this.props.data.show_champion : true,
      show_winrate: this.props.data ? this.props.data.show_winrate : true,
      show_tier: this.props.data ? this.props.data.show_tier : true,
      show_web: this.props.data ? this.props.data.show_web : true,
      align: 'center',
      back_color: this.props.data ? this.props.data.back_color : { r: 255, g: 0, b: 0, a: 1},
      text_color: this.props.data ? this.props.data.text_color : { r: 255, g: 0, b: 0, a: 1},
      back_border_color: this.props.data ? this.props.data.back_border_color : { r: 255, g: 0, b: 0, a: 1},
      champ_border_color: this.props.data ? this.props.data.champ_border_color : { r: 255, g: 0, b: 0, a: 1},
      back_shadow_color: this.props.data ? this.props.data.back_shadow_color : { r: 255, g: 0, b: 0, a: 1},
      champ_shadow_color: this.props.data ? this.props.data.champ_shadow_color : { r: 255, g: 0, b: 0, a: 1},
      text_shadow_color: this.props.data ? this.props.data.text_shadow_color : { r: 255, g: 0, b: 0, a: 1},
      back_border_width: this.props.data ? this.props.data.back_border_width : 0,
      back_border_radius: this.props.data ? this.props.data.back_border_radius : 0,
      champ_border_width: this.props.data ? this.props.data.champ_border_width : 0,
      champ_border_radius: this.props.data ? this.props.data.champ_border_radius : 0
    };
    [
      'setName',
      'setChampion',
      'setWinrate',
      'setTier',
      'setWeb',
      'handleSelect',
      'rgbaToString',
      'cp_bg',
      'cp_text',
      'cp_bbc',
      'cp_cbc',
      'cp_bsc',
      'cp_csc',
      'cp_tsc',
      'sl_back_border_width',
      'sl_back_border_radius',
      'sl_champ_border_width',
      'sl_champ_border_radius'
    ].forEach(m => { this[m] = this[m].bind(this); return null; });
  }

  setName(event) {
    this.setState({ summoner_name: event.currentTarget.value });
  }

  setChampion(event) {
    this.setState({ show_champion: event.currentTarget.checked });
  }

  setWinrate(event) {
    this.setState({ show_winrate: event.currentTarget.checked });
  }

  setTier(event) {
    this.setState({ show_tier: event.currentTarget.checked });
  }

  setWeb(event) {
    this.setState({ show_web: event.currentTarget.checked });
  }

  handleSelect(key) {
    this.setState({ key });
  }

  rgbaToString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  stringToRGBA(color) {

  }

  cp_bg(color) {
    this.setState({ text_color: color });
  }

  cp_text(color) {
    this.setState({ back_border_color: color });
  }

  cp_bbc(color) {
    this.setState({ champ_border_color: color });
  }

  cp_cbc(color) {
    this.setState({ back_shadow_color: color });
  }

  cp_bsc(color) {
    this.setState({ back_shadow_color: color });
  }

  cp_csc(color) {
    this.setState({ champ_shadow_color: color });
  }

  cp_tsc(color) {
    this.setState({ text_shadow_color: color });
  }

  sl_back_border_width(event) {
    this.setState({ back_border_width: parseInt(event.currentTarget.value) });
  }

  sl_back_border_radius(event) {
    this.setState({ back_border_radius: parseInt(event.currentTarget.value) });
  }

  sl_champ_border_width(event) {
    this.setState({ champ_border_width: parseInt(event.currentTarget.value) });
  }

  sl_champ_border_radius(event) {
    this.setState({ champ_border_radius: parseInt(event.currentTarget.value) });
  }

  render() {
    console.log(this.state);
    return (
      <bs.Tabs activeKey={this.state.key} onSelect={this.handleSelect} id='builder.tabs' justified>
        <bs.Tab eventKey={1} title='Info'>
          <div className='inside-tab'>
            <bs.ControlLabel>Summoner name</bs.ControlLabel>
            <bs.FormControl
              type='text'
              placeholder='Lobo Bot'
              onChange={this.setName}
            />
            <br/>

            <bs.ControlLabel>Server</bs.ControlLabel>
            <bs.FormControl componentClass='select' placeholder='select' defaultValue={0}>
              <option value={0}>EUW</option>
              <option value={1}>EUNE</option>
              <option value={2}>LAS</option>
              <option value={3}>LAN</option>
              <option value={4}>OCE</option>
              <option value={5}>BR</option>
              <option value={6}>NA</option>
              <option value={7}>KR</option>
              <option value={8}>TR</option>
              <option value={9}>RU</option>
            </bs.FormControl>
            <br/>

            <bs.ControlLabel>Misc</bs.ControlLabel>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td><bs.Checkbox inline onChange={this.setChampion} checked={this.state.show_champion}>Show champion</bs.Checkbox></td>
                  <td><bs.Checkbox inline onChange={this.setTier} checked={this.state.show_tier}>Show tier</bs.Checkbox></td>
                </tr>
                <tr>
                  <td><bs.Checkbox inline onChange={this.setWinrate} checked={this.state.show_winrate}>Show winrate</bs.Checkbox></td>
                  <td><bs.Checkbox inline onChange={this.setWeb} checked={this.state.show_web}>Show web</bs.Checkbox></td>
                </tr>
              </tbody>
            </table>
          </div>
        </bs.Tab>

        <bs.Tab eventKey={2} title='Colors'>
          <div className='inside-tab'>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td>Background color</td>
                  <td><ColorPicker returnColor={this.cp_bg} defaultColor={this.state.back_color} /></td>
                </tr>
                <tr>
                  <td>Text color</td>
                  <td><ColorPicker returnColor={this.cp_text} defaultColor={this.state.text_color} /></td>
                </tr>
                <tr>
                  <td>Background border color</td>
                  <td><ColorPicker returnColor={this.cp_bbc} defaultColor={this.state.back_border_color} /></td>
                </tr>
                <tr>
                  <td>Champ border color</td>
                  <td><ColorPicker returnColor={this.cp_cbc} defaultColor={this.state.champ_border_color} /></td>
                </tr>
                <tr>
                  <td>Background shadow color</td>
                  <td><ColorPicker returnColor={this.cp_bsc} defaultColor={this.state.back_shadow_color} /></td>
                </tr>
                <tr>
                  <td>Champ shadow color</td>
                  <td><ColorPicker returnColor={this.cp_csc} defaultColor={this.state.champ_shadow_color} /></td>
                </tr>
                <tr>
                  <td>Text shadow color</td>
                  <td><ColorPicker returnColor={this.cp_tsc} defaultColor={this.state.text_shadow_color} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </bs.Tab>
        <bs.Tab eventKey={3} title='Borders'>
          <div className='inside-tab'>
            <bs.ControlLabel>Background border</bs.ControlLabel>
            <ReactNativeSlider
              value={this.state.back_border_width}
              handleChange={this.sl_back_border_width}
              step={1}
              max={5}
              min={0}
            />

            <bs.ControlLabel>Background border radius</bs.ControlLabel>
            <ReactNativeSlider
              value={this.state.back_border_radius}
              handleChange={this.sl_back_border_radius}
              step={1}
              max={30}
              min={0}
            />

            <bs.ControlLabel>Champion border</bs.ControlLabel>
            <ReactNativeSlider
              value={this.state.champ_border_width}
              handleChange={this.sl_champ_border_width}
              step={1}
              max={5}
              min={0}
            />

            <bs.ControlLabel>Champion border radius</bs.ControlLabel>
            <ReactNativeSlider
              value={this.state.champ_border_radius}
              handleChange={this.sl_champ_border_radius}
              step={1}
              max={50}
              min={0}
            />
          </div>
        </bs.Tab>
      </bs.Tabs>
    );
  }
}

TabComponent.propTypes = {
};

export default TabComponent;
