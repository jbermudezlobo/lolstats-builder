import React from 'react';
import * as bs from 'react-bootstrap';
import ColorPicker from './ColorPicker';

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 2,
      color_bg: 'rgba(255, 255, 0, 0.5)'
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.rgbaToString = this.rgbaToString.bind(this);
    this.cp_bg = this.cp_bg.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  rgbaToString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  cp_bg(color) {
    console.log(this.rgbaToString(color));
  }

  render() {
    return (
      <bs.Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="builder.tabs" justified>
        <bs.Tab eventKey={1} title="Info">

          <bs.ControlLabel>Summoner name</bs.ControlLabel>
          <bs.FormControl
            type="text"
            placeholder="Lobo Bot"
          />
          <br/>

          <bs.ControlLabel>Server</bs.ControlLabel>
          <bs.FormControl componentClass="select" placeholder="select" defaultValue={0}>
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

        <bs.Tab eventKey={2} title="Colors">
          <table>
            <tbody>
              <tr>
                <td>Background color</td>
                <td><ColorPicker returnColor={this.cp_bg} /></td>
              </tr>
            </tbody>
          </table>
        </bs.Tab>
        <bs.Tab eventKey={3} title="Borders">Tab 4 content</bs.Tab>
      </bs.Tabs>
    );
  }
}

TabComponent.propTypes = {
};

export default TabComponent;
