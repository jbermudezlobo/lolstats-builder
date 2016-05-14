import React from 'react';
import * as bs from 'react-bootstrap';
import ColorPicker from './ColorPicker';

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 2,
      data: {
        load_animation: 'flipInY',
        show_champion: true,
        show_winrate: true,
        show_tier: true,
        show_web: true,
        align: 'center',
        colors: {
          back_color: { r: 255, g: 0, b: 0, a: 1},
          text_color: { r: 255, g: 255, b: 0, a: 1},
          back_border_color: { r: 255, g: 0, b: 255, a: 1},
          champ_border_color: { r: 0, g: 255, b: 0, a: 1},
          back_shadow_color: { r: 0, g: 0, b: 255, a: 1},
          champ_shadow_color: { r: 255, g: 100, b: 255, a: 1},
          text_shadow_color: { r: 255, g: 0, b: 100, a: 1}
        },
      }
    };
    [
      'handleSelect',
      'rgbaToString',
      'cp_bg',
      'cp_text',
      'cp_bbc',
      'cp_cbc',
      'cp_bsc',
      'cp_csc',
      'cp_tsc'
    ].forEach(m => { this[m] = this[m].bind(this); return null; });
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
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { text_color: color }
        ) }
      ) }
    ));
  }

  cp_text(color) {
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { back_border_color: color }
        ) }
      ) }
    ));
  }

  cp_bbc(color) {
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { champ_border_color: color }
        ) }
      ) }
    ));
  }

  cp_cbc(color) {
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { back_shadow_color: color }
        ) }
      ) }
    ));
  }

  cp_bsc(color) {
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { back_shadow_color: color }
        ) }
      ) }
    ));
  }

  cp_csc(color) {
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { champ_shadow_color: color }
        ) }
      ) }
    ));
  }

  cp_tsc(color) {
    this.setState( Object.assign(
      this.state, { data: Object.assign(
        this.state.data, { colors: Object.assign(
          this.state.data.colors, { text_shadow_color: color }
        ) }
      ) }
    ));
  }

  render() {
    return (
      <bs.Tabs activeKey={this.state.key} onSelect={this.handleSelect} id='builder.tabs' justified>
        <bs.Tab eventKey={1} title='Info'>

          <bs.ControlLabel>Summoner name</bs.ControlLabel>
          <bs.FormControl
            type='text'
            placeholder='Lobo Bot'
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
                <td><bs.Checkbox inline>Show champion</bs.Checkbox></td>
                <td><bs.Checkbox inline>Show tier</bs.Checkbox></td>
              </tr>
              <tr>
                <td><bs.Checkbox inline>Show winrate</bs.Checkbox></td>
                <td><bs.Checkbox inline>Show web</bs.Checkbox></td>
              </tr>
            </tbody>
          </table>
        </bs.Tab>

        <bs.Tab eventKey={2} title='Colors'>
          <table>
            <tbody>
              <tr>
                <td>Background color</td>
                <td><ColorPicker returnColor={this.cp_bg} defaultColor={this.state.data.colors.back_color} /></td>
              </tr>
              <tr>
                <td>Text color</td>
                <td><ColorPicker returnColor={this.cp_text} defaultColor={this.state.data.colors.text_color} /></td>
              </tr>
              <tr>
                <td>Background border color</td>
                <td><ColorPicker returnColor={this.cp_bbc} defaultColor={this.state.data.colors.back_border_color} /></td>
              </tr>
              <tr>
                <td>Champ border color</td>
                <td><ColorPicker returnColor={this.cp_cbc} defaultColor={this.state.data.colors.champ_border_color} /></td>
              </tr>
              <tr>
                <td>Background shadow color</td>
                <td><ColorPicker returnColor={this.cp_bsc} defaultColor={this.state.data.colors.back_shadow_color} /></td>
              </tr>
              <tr>
                <td>Champ shadow color</td>
                <td><ColorPicker returnColor={this.cp_csc} defaultColor={this.state.data.colors.champ_shadow_color} /></td>
              </tr>
              <tr>
                <td>Text shadow color</td>
                <td><ColorPicker returnColor={this.cp_tsc} defaultColor={this.state.data.colors.text_shadow_color} /></td>
              </tr>
            </tbody>
          </table>
        </bs.Tab>
        <bs.Tab eventKey={3} title='Borders'></bs.Tab>
      </bs.Tabs>
    );
  }
}

TabComponent.propTypes = {
};

export default TabComponent;
