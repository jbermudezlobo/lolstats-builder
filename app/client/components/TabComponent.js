import React from 'react';
import ajax from 'superagent';
import * as bs from 'react-bootstrap';
import ColorPicker from './utils/ColorPicker';
import ReactNativeSlider from "react-html5-slider";
import Stats from './stats/Stats';

class TabComponent extends React.Component {
  static propTypes = {
    builderData: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    [
      'getLink',
      'getLinkAjax',
      'generateStyleData',
      'rgbaToString',
      'setKey',
      'setSummonerName',
      'setServer',
      'setShowChampion',
      'setShowTier',
      'setShowWinrate',
      'setShowWeb',
      'setLoadAnimation',
      'setTextAlign',
      'setBackBorderWidth',
      'setBackBorderRadius',
      'setChampBorderWidth',
      'setChampBorderRadius',
      'setBackShadowH',
      'setBackShadowV',
      'setBackShadowB',
      'setChampShadowH',
      'setChampShadowV',
      'setChampShadowB',
      'setTextShadowH',
      'setTextShadowV',
      'setTextShadowB',
      'setBackColor',
      'setBackBorderColor',
      'setChampBorderColor',
      'setTextColor',
      'setBackShadowColor',
      'setChampShadowColor',
      'setTextShadowColor',
    ].forEach((func) => this[func] = this[func].bind(this));
    this.state = {
      isLoading: false,
      resultmessage: '',
      key: 1,
      summoner_name: '',
      server: 'euw',
      load_animation: 'flipInY',
      show_champion: true,
      show_winrate: true,
      show_tier: true,
      show_web: true,
      align: 'center',
      back_color: { r: 255, g: 0, b: 0, a: 1},
      text_color: { r: 255, g: 0, b: 0, a: 1},
      back_border_color: { r: 255, g: 0, b: 0, a: 1},
      champ_border_color: { r: 255, g: 0, b: 0, a: 1},
      back_shadow_color: { r: 255, g: 0, b: 0, a: 1},
      champ_shadow_color: { r: 255, g: 0, b: 0, a: 1},
      text_shadow_color: { r: 255, g: 0, b: 0, a: 1},
      back_border_width: 0,
      back_border_radius: 0,
      champ_border_width: 0,
      champ_border_radius: 0,
      back_shadow: { h: 0, v: 0, b: 10 },
      champ_shadow: { h: 0, v: 0, b: 10 },
      text_shadow: { h: 0, v: 0, b: 10 },
      ...this.props.builderData
    };
  }

  generateStyleData() {
    return {
      token: 'NOTOKEN',
      summoner_name: this.state.summoner_name,
      server: this.state.server,
      load_animation: this.state.load_animation,
      show_champion: this.state.show_champion,
      show_winrate: this.state.show_winrate,
      show_tier: this.state.show_tier,
      show_web: this.state.show_web,
      align: this.state.align,
      back_color: this.state.back_color,
      text_color: this.state.text_color,
      back_border_color: this.state.back_border_color,
      champ_border_color: this.state.champ_border_color,
      back_shadow_color: this.state.back_shadow_color,
      champ_shadow_color: this.state.champ_shadow_color,
      text_shadow_color: this.state.text_shadow_color,
      back_shadow: this.state.back_shadow,
      champ_shadow: this.state.champ_shadow,
      text_shadow: this.state.text_shadow,
      back_border_width: this.state.back_border_width,
      back_border_radius: this.state.back_border_radius,
      champ_border_width: this.state.champ_border_width,
      champ_border_radius: this.state.champ_border_radius
    };
  }

  getLink(){
    if(this.state.summoner_name !== '') {
      this.setState({ isLoading: true });
      const post = JSON.stringify(this.generateStyleData());
      console.log('Sending data...', post);
      fetch('http://localhost/test/public_html/actions/newstats.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: post
      })
      .then((_data) => {
        console.log(_data.json());
        if (!_data.error) {
          this.setState({ resultmessage: 'Link: http://lobobot.com/link/?q=' + _data.token, isLoading: false });
        } else {
          this.setState({ resultmessage: _data.message, isLoading: false });
        }
      }).catch((err) => {
        console.log(err)
        this.setState({ resultmessage: 'ERROR', isLoading: false });
      })
    } else {
      alert('Summoner Name is empty!')
    }
  }

  getLinkAjax(){
    if(this.state.summoner_name !== '') {
      this.setState({ isLoading: true, resultmessage: null });
      console.log('Sending data...');
      ajax
      .post('http://localhost/test/public_html/actions/newstats.php')
      .set('Content-Type', 'application/json')
      .send(this.generateStyleData())
      .accept('json')
      .end((err, res) => {
        if (!err) {
          const _data = res.body;
          console.log(_data);
          if (!_data.error) {
            this.setState({ resultmessage: 'Link: http://lobobot.com/link/?q=' + _data.token, isLoading: false });
          } else {
            this.setState({ resultmessage: _data.message, isLoading: false });
          }
        } else {
          this.setState({ resultmessage: 'ERROR', isLoading: false });
        }
      });
    } else {
      alert('Summoner Name is empty!')
    }
  }

  rgbaToString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  // INFO
  setKey (key) {
    this.setState({ key });
  }
  setSummonerName (event) {
    this.setState({ summoner_name: event.currentTarget.value });
  }
  setServer (event) {
    this.setState({ server: event.currentTarget.value });
  }
  setShowChampion (event) {
    this.setState({ show_champion: event.currentTarget.checked });
  }
  setShowTier (event) {
    this.setState({ show_tier: event.currentTarget.checked });
  }
  setShowWinrate (event) {
    this.setState({ show_winrate: event.currentTarget.checked });
  }
  setShowWeb (event) {
    this.setState({ show_web: event.currentTarget.checked });
  }
  setLoadAnimation (event) {
    this.setState({ load_animation: event.currentTarget.value });
  }
  setTextAlign (event) {
    this.setState({ align: event.currentTarget.value });
  }

  // STYLE

  setBackBorderWidth (event) {
    this.setState({ back_border_width: parseInt(event.currentTarget.value) });
  }
  setBackBorderRadius (event) {
    this.setState({ back_border_radius: parseInt(event.currentTarget.value) });
  }
  setChampBorderWidth (event) {
    this.setState({ champ_border_width: parseInt(event.currentTarget.value) });
  }
  setChampBorderRadius (event) {
    this.setState({ champ_border_radius: parseInt(event.currentTarget.value) });
  }
  setBackShadowH (event) {
    this.setState(Object.assign(this.state, { back_shadow: Object.assign(this.state.back_shadow, { h: parseInt(event.currentTarget.value) }) }));
  }
  setBackShadowV (event) {
    this.setState(Object.assign(this.state, { back_shadow: Object.assign(this.state.back_shadow, { v: parseInt(event.currentTarget.value) }) }));
  }
  setBackShadowB (event) {
    this.setState(Object.assign(this.state, { back_shadow: Object.assign(this.state.back_shadow, { b: parseInt(event.currentTarget.value) }) }));
  }
  setChampShadowH (event) {
    this.setState(Object.assign(this.state, { champ_shadow: Object.assign(this.state.champ_shadow, { h: parseInt(event.currentTarget.value) }) }));
  }
  setChampShadowV (event) {
    this.setState(Object.assign(this.state, { champ_shadow: Object.assign(this.state.champ_shadow, { v: parseInt(event.currentTarget.value) }) }));
  }
  setChampShadowB (event) {
    this.setState(Object.assign(this.state, { champ_shadow: Object.assign(this.state.champ_shadow, { b: parseInt(event.currentTarget.value) }) }));
  }
  setTextShadowH (event) {
    this.setState(Object.assign(this.state, { text_shadow: Object.assign(this.state.text_shadow, { h: parseInt(event.currentTarget.value) }) }));
  }
  setTextShadowV (event) {
    this.setState(Object.assign(this.state, { text_shadow: Object.assign(this.state.text_shadow, { v: parseInt(event.currentTarget.value) }) }));
  }
  setTextShadowB (event) {
    this.setState(Object.assign(this.state, { text_shadow: Object.assign(this.state.text_shadow, { b: parseInt(event.currentTarget.value) }) }));
  }
  setBackColor (color) {
    this.setState({ back_color: color });
  }
  setBackBorderColor (color) {
    this.setState({ back_border_color: color });
  }
  setChampBorderColor (color) {
    this.setState({ champ_border_color: color });
  }
  setTextColor (color) {
    this.setState({ text_color: color });
  }
  setBackShadowColor (color) {
    this.setState({ back_shadow_color: color });
  }
  setChampShadowColor (color) {
    this.setState({ champ_shadow_color: color });
  }
  setTextShadowColor (color) {
    this.setState({ text_shadow_color: color });
  }

  render() {
    const styleData = this.generateStyleData();
    // console.log(JSON.stringify(styleData));
    return (
      <div>
        <bs.Row>
          <bs.Col xs={12}>
            <bs.Button bsStyle="primary" onClick={this.getLinkAjax} disabled={this.state.isLoading}>
              {this.state.isLoading ?
                <div><i className="fa fa-spinner fa-pulse fa-fw"></i> Loading</div> : 'Get Link'}
            </bs.Button>
            <bs.ControlLabel style={{ marginLeft: '15px' }}>{this.state.resultmessage}</bs.ControlLabel>
          </bs.Col>
        </bs.Row>
        <hr/>
        <bs.Row>
          <bs.Col xs={6}>
            <bs.Tabs activeKey={this.state.key} onSelect={ this.setKey } id='builder.tabs' justified>
              <bs.Tab eventKey={1} title='Info'>
                <div className='inside-tab'>
                  <bs.Row>
                    <bs.Col xs={8}>
                      <bs.ControlLabel>Summoner name</bs.ControlLabel>
                      <bs.FormControl
                        type='text'
                        placeholder='Lobo Bot'
                        onChange={ this.setSummonerName }
                        required
                      />
                    </bs.Col>
                    <bs.Col xs={4}>
                      <bs.ControlLabel>Server</bs.ControlLabel>
                      <bs.FormControl componentClass='select' placeholder='select' defaultValue={this.state.server} onChange={ this.setServer }>
                        <option value={'euw'}>EUW</option>
                        <option value={'eune'}>EUNE</option>
                        <option value={'las'}>LAS</option>
                        <option value={'lan'}>LAN</option>
                        <option value={'oce'}>OCE</option>
                        <option value={'br'}>BR</option>
                        <option value={'na'}>NA</option>
                        <option value={'kr'}>KR</option>
                        <option value={'tr'}>TR</option>
                        <option value={'ru'}>RU</option>
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
                          onChange={ this.setShowChampion }
                          checked={this.state.show_champion}>
                            Show champion
                          </bs.Checkbox>
                        </td>
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={ this.setShowTier }
                          checked={this.state.show_tier}>
                            Show tier
                          </bs.Checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={ this.setShowWinrate }
                          checked={this.state.show_winrate}>
                            Show winrate
                          </bs.Checkbox>
                        </td>
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={ this.setShowWeb }
                          checked={this.state.show_web}>
                            Show web
                          </bs.Checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                  <bs.Row>
                    <bs.Col xs={6}>
                      <bs.ControlLabel>Load animation</bs.ControlLabel>
                      <bs.FormControl componentClass='select' placeholder='select' defaultValue={this.state.load_animation} onChange={ this.setLoadAnimation }>
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
                      <bs.FormControl componentClass='select' placeholder='select' defaultValue={this.state.align} onChange={ this.setTextAlign }>
                        <option value='left'>left</option>
                        <option value='center'>center</option>
                        <option value='right'>right</option>
                      </bs.FormControl>
                    </bs.Col>
                  </bs.Row>
                </div>
              </bs.Tab>

              <bs.Tab eventKey={2} title='Style'>
                <div className='inside-tab'>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Background</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <bs.Col xs={3}>
                      {`Width: ${this.state.back_border_width}px`}
                      <ReactNativeSlider
                        value={this.state.back_border_width}
                        handleChange={ this.setBackBorderWidth }
                        step={1}
                        max={5}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`Radius: ${this.state.back_border_radius}px`}
                      <ReactNativeSlider
                        value={this.state.back_border_radius}
                        handleChange={ this.setBackBorderRadius }
                        step={1}
                        max={30}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={ this.setBackColor } defaultColor={this.state.back_color} />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Border
                      <ColorPicker returnColor={ this.setBackBorderColor } defaultColor={this.state.back_border_color} />
                    </bs.Col>
                  </bs.Row>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Champion</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <bs.Col xs={3}>
                      {`Width: ${this.state.champ_border_width}px`}
                      <ReactNativeSlider
                        value={this.state.champ_border_width}
                        handleChange={ this.setChampBorderWidth }
                        step={1}
                        max={5}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`Radius: ${this.state.champ_border_radius}px`}
                      <ReactNativeSlider
                        value={this.state.champ_border_radius}
                        handleChange={ this.setChampBorderRadius }
                        step={1}
                        max={30}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3} xsOffset={3}>
                      Border
                      <ColorPicker returnColor={ this.setChampBorderColor } defaultColor={this.state.champ_border_color} />
                    </bs.Col>
                  </bs.Row>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Text</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em' }}>
                    <bs.Col xs={12}>
                      Color
                      <ColorPicker returnColor={ this.setTextColor } defaultColor={this.state.text_color} />
                    </bs.Col>
                  </bs.Row>
                  <br/>
                  <hr/>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Background shadow</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <bs.Col xs={3}>
                      {`H: ${this.state.back_shadow.h}px`}
                      <ReactNativeSlider
                        value={this.state.back_shadow.h}
                        handleChange={ this.setBackShadowH  }
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`V: ${this.state.back_shadow.v}px`}
                      <ReactNativeSlider
                        value={this.state.back_shadow.v}
                        handleChange={ this.setBackShadowV  }
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`B: ${this.state.back_shadow.b}px`}
                      <ReactNativeSlider
                        value={this.state.back_shadow.b}
                        handleChange={ this.setBackShadowB  }
                        step={1}
                        max={10}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={ this.setBackShadowColor } defaultColor={this.state.back_shadow_color} />
                    </bs.Col>
                  </bs.Row>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Champion shadow</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <bs.Col xs={3}>
                      {`H: ${this.state.champ_shadow.h}px`}
                      <ReactNativeSlider
                        value={this.state.champ_shadow.h}
                        handleChange={ this.setChampShadowH  }
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`V: ${this.state.champ_shadow.v}px`}
                      <ReactNativeSlider
                        value={this.state.champ_shadow.v}
                        handleChange={ this.setChampShadowV  }
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`B: ${this.state.champ_shadow.b}px`}
                      <ReactNativeSlider
                        value={this.state.champ_shadow.b}
                        handleChange={ this.setChampShadowB  }
                        step={1}
                        max={10}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={ this.setChampShadowColor } defaultColor={this.state.champ_shadow_color} />
                    </bs.Col>
                  </bs.Row>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Text shadow</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <bs.Col xs={3}>
                      {`H: ${this.state.text_shadow.h}px`}
                      <ReactNativeSlider
                        value={this.state.text_shadow.h}
                        handleChange={ this.setTextShadowH  }
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`V: ${this.state.text_shadow.v}px`}
                      <ReactNativeSlider
                        value={this.state.text_shadow.v}
                        handleChange={ this.setTextShadowV  }
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`B: ${this.state.text_shadow.b}px`}
                      <ReactNativeSlider
                        value={this.state.text_shadow.b}
                        handleChange={ this.setTextShadowB  }
                        step={1}
                        max={10}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={ this.setTextShadowColor } defaultColor={this.state.text_shadow_color} />
                    </bs.Col>
                  </bs.Row>

                </div>
              </bs.Tab>
            </bs.Tabs>
          </bs.Col>
          <bs.Col xs={6}>
            <div>
              <Stats styleData={ styleData } />
            </div>
          </bs.Col>
        </bs.Row>
      </div>
    );
  }
}

export default TabComponent;
