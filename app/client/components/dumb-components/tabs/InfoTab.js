import React from 'react';
import * as bs from 'react-bootstrap';


const defaultState = {
  summonerName: '',
  server: 'euw',
  showChampion: false,
  showTier: false,
  showWinrate: false,
  showWeb: false,
  animation: 'flipInY',
  align: 'center'
};

class InfoTab extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      ...defaultState
    };
    [
      'handleSummName',
      'handleServer',
      'handleChampion',
      'handleTier',
      'handleWinrate',
      'handleWeb',
      'handleAnimation',
      'handleAlign',
    ].forEach((f) => this[f] = this[f].bind(this));
  }

  handleSummName(e) { this.setState({ summonerName: e.currentTarget.value }); }
  handleServer(e) { this.setState({ server: e.currentTarget.value }); }

  handleChampion(e) { this.setState({ showChampion: e.currentTarget.checked }); }
  handleTier(e) { this.setState({ showTier: e.currentTarget.checked }); }
  handleWinrate(e) { this.setState({ showWinrate: e.currentTarget.checked }); }
  handleWeb(e) { this.setState({ showWeb: e.currentTarget.checked }); }

  handleAnimation(e) { this.setState({ animation: e.currentTarget.value }); }
  handleAlign(e) { this.setState({ align: e.currentTarget.value }); }

  render() {
    return (
      <div className='inside-tab'>
        <bs.Row>
          <bs.Col xs={8}>
            <bs.ControlLabel>Summoner name</bs.ControlLabel>
            <bs.FormControl
              type='text'
              placeholder='Lobo Bot'
              onChange={ this.handleSummName }
              value={ this.summonerName }
            />
          </bs.Col>
          <bs.Col xs={4}>
            <bs.ControlLabel>Server</bs.ControlLabel>
            <bs.FormControl
              componentClass='select'
              defaultValue={ this.state.server }
              onChange={ this.handleServer }
            >
              <option value='euw'>EUW</option>
              <option value='eune'>EUNE</option>
              <option value='las'>LAS</option>
              <option value='lan'>LAN</option>
              <option value='oce'>OCE</option>
              <option value='br'>BR</option>
              <option value='na'>NA</option>
              <option value='kr'>KR</option>
              <option value='tr'>TR</option>
              <option value='ru'>RU</option>
            </bs.FormControl>
          </bs.Col>
        </bs.Row>

        <br/>
        <br/>
        <hr/>
        <bs.ControlLabel>Misc</bs.ControlLabel>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>
                <bs.Checkbox
                  inline
                  onChange={ this.handleChampion }
                  checked={ this.state.showChampion }
                >Show champion</bs.Checkbox>
              </td>
              <td>
                <bs.Checkbox
                  inline
                  onChange={ this.handleTier }
                  checked={ this.state.showTier }
                >Show tier</bs.Checkbox>
              </td>
            </tr>
            <tr>
              <td>
                <bs.Checkbox
                  inline
                  onChange={ this.handleWinrate }
                  checked={ this.state.showWinrate }
                >Show winrate</bs.Checkbox>
              </td>
              <td>
                <bs.Checkbox
                  inline
                  onChange={ this.handleWeb }
                  checked={ this.state.showWeb }
                >Show web</bs.Checkbox>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <bs.Row>
          <bs.Col xs={6}>
            <bs.ControlLabel>Load animation</bs.ControlLabel>
            <bs.FormControl
              componentClass='select'
              defaultValue={ this.state.animation }
              onChange={ this.handleAnimation }
            >
              <option value='none'>none</option>
              <option value='bounceIn'>bounceIn</option>
              <option value='bounceInDown'>bounceInDown</option>
              <option value='bounceInLeft'>bounceInLeft</option>
              <option value='bounceInRight'>bounceInRight</option>
              <option value='bounceInUp'>bounceInUp</option>
              <option value='fadeIn'>fadeIn</option>
              <option value='fadeInDown'>fadeInDown</option>
              <option value='fadeInDownBig'>fadeInDownBig</option>
              <option value='fadeInLeft'>fadeInLeft</option>
              <option value='fadeInLeftBig'>fadeInLeftBig</option>
              <option value='fadeInRight'>fadeInRight</option>
              <option value='fadeInRightBig'>fadeInRightBig</option>
              <option value='fadeInUp'>fadeInUp</option>
              <option value='fadeInUpBig'>fadeInUpBig</option>
              <option value='flipInX'>flipInX</option>
              <option value='flipInY'>flipInY</option>
              <option value='lightSpeedIn'>lightSpeedIn</option>
              <option value='rotateIn'>rotateIn</option>
              <option value='rotateInDownLeft'>rotateInDownLeft</option>
              <option value='rotateInDownRight'>rotateInDownRight</option>
              <option value='rotateInUpLeft'>rotateInUpLeft</option>
              <option value='rotateInUpRight'>rotateInUpRight</option>
              <option value='slideInUp'>slideInUp</option>
              <option value='slideInDown'>slideInDown</option>
              <option value='slideInLeft'>slideInLeft</option>
              <option value='slideInRight'>slideInRight</option>
              <option value='zoomIn'>zoomIn</option>
              <option value='zoomInDown'>zoomInDown</option>
              <option value='zoomInLeft'>zoomInLeft</option>
              <option value='zoomInRight'>zoomInRight</option>
              <option value='zoomInUp'>zoomInUp</option>
              <option value='rollIn'>rollIn</option>
            </bs.FormControl>
          </bs.Col>
          <bs.Col xs={6}>
            <bs.ControlLabel>Text align</bs.ControlLabel>
            <bs.FormControl
              componentClass='select'
              defaultValue={this.state.align}
              onChange={ this.handleAlign }
            >
              <option value='left'>left</option>
              <option value='center'>center</option>
              <option value='right'>right</option>
            </bs.FormControl>
          </bs.Col>
        </bs.Row>
      </div>
    );
  }
}

export default InfoTab;
