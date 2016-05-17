import React from 'react';
import * as bs from 'react-bootstrap';
import ColorPicker from './ColorPicker';
import ReactNativeSlider from "react-html5-slider";

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      isLoading: false,
      resultmessage: '',
      key: 1,
      summoner_name: '',
      server: 0,
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
      champ_border_radius: this.props.data ? this.props.data.champ_border_radius : 0,
      back_shadow: this.props.data ? this.props.data.back_shadow : { h: 0, v: 0, b: 10 },
      champ_shadow: this.props.data ? this.props.data.champ_shadow : { h: 0, v: 0, b: 10 },
      text_shadow: this.props.data ? this.props.data.text_shadow : { h: 0, v: 0, b: 10 },
      ...this.props.data
    };
  }

  generateJSON() {
    return {
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
      back_border_width: this.state.back_border_width,
      back_border_radius: this.state.back_border_radius,
      champ_border_width: this.state.champ_border_width,
      champ_border_radius: this.state.champ_border_radius
    };
  }

  getLink(){
    this.setState({ isLoading: true });
    console.log('Sending data...');
    fetch('http://test.lobobot.com/actions/newstats.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((response) => {
      console.log('Data received');
      response.json().then((_data) => {
        console.log(_data);
        this.setState({ resultmessage: _data.message, isLoading: false });
      });
    });
  }

  rgbaToString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  render() {
    console.log(JSON.stringify(this.state));
    return (
      <div>
        <bs.Row>
          <bs.Col xs={12}>
            <bs.Button bsStyle="primary" onClick={this.getLink} disabled={this.state.isLoading}>
              {this.state.isLoading ?
                <div><i className="fa fa-spinner fa-pulse fa-fw"></i> Loading</div> : 'Get Link'}
            </bs.Button>
            <bs.ControlLabel>{this.state.resultmessage}</bs.ControlLabel>
          </bs.Col>
        </bs.Row>
        <hr/>
        <bs.Row>
          <bs.Col xs={6}>
            <bs.Tabs activeKey={this.state.key} onSelect={(key) => this.setState({ key })} id='builder.tabs' justified>
              <bs.Tab eventKey={1} title='Info'>
                <div className='inside-tab'>
                  <bs.ControlLabel>Summoner name</bs.ControlLabel>
                  <bs.FormControl
                    type='text'
                    placeholder='Lobo Bot'
                    onChange={(event) => this.setState({ summoner_name: event.currentTarget.value })}
                  />
                  <br/>

                  <bs.ControlLabel>Server</bs.ControlLabel>
                  <bs.FormControl componentClass='select' placeholder='select' defaultValue={this.state.server} onChange={(event) => this.setState({ server: event.currentTarget.value })}>
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
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={(event) => this.setState({ show_champion: event.currentTarget.checked })}
                          checked={this.state.show_champion}>
                            Show champion
                          </bs.Checkbox>
                        </td>
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={(event) => this.setState({ show_tier: event.currentTarget.checked })}
                          checked={this.state.show_tier}>
                            Show tier
                          </bs.Checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={(event) => this.setState({ show_winrate: event.currentTarget.checked })}
                          checked={this.state.show_winrate}>
                            Show winrate
                          </bs.Checkbox>
                        </td>
                        <td>
                          <bs.Checkbox
                          inline
                          onChange={(event) => this.setState({ show_web: event.currentTarget.checked })}
                          checked={this.state.show_web}>
                            Show web
                          </bs.Checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        handleChange={(event) => this.setState({ back_border_width: parseInt(event.currentTarget.value) })}
                        step={1}
                        max={5}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`Radius: ${this.state.back_border_radius}px`}
                      <ReactNativeSlider
                        value={this.state.back_border_radius}
                        handleChange={(event) => this.setState({ back_border_radius: parseInt(event.currentTarget.value) })}
                        step={1}
                        max={30}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={(color) => this.setState({ back_color: color})} defaultColor={this.state.back_color} />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Border
                      <ColorPicker returnColor={(color) => this.setState({ back_border_color: color })} defaultColor={this.state.back_border_color} />
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
                        handleChange={(event) => this.setState({ champ_border_width: parseInt(event.currentTarget.value) })}
                        step={1}
                        max={5}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`Radius: ${this.state.champ_border_radius}px`}
                      <ReactNativeSlider
                        value={this.state.champ_border_radius}
                        handleChange={(event) => this.setState({ champ_border_radius: parseInt(event.currentTarget.value) })}
                        step={1}
                        max={30}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3} xsOffset={3}>
                      Border
                      <ColorPicker returnColor={(color) => this.setState({ champ_border_color: color})} defaultColor={this.state.champ_border_color} />
                    </bs.Col>
                  </bs.Row>

                  <bs.Row>
                    <bs.Col xs={12}>
                      <bs.ControlLabel>Text</bs.ControlLabel>
                    </bs.Col>
                  </bs.Row>
                  <bs.Row style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={(color) => this.setState({ text_color: color})} defaultColor={this.state.text_color} />
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
                        handleChange={(event) => this.setState(Object.assign(this.state, {back_shadow: Object.assign(this.state.back_shadow, { h: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`V: ${this.state.back_shadow.v}px`}
                      <ReactNativeSlider
                        value={this.state.back_shadow.v}
                        handleChange={(event) => this.setState(Object.assign(this.state, {back_shadow: Object.assign(this.state.back_shadow, { v: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`B: ${this.state.back_shadow.b}px`}
                      <ReactNativeSlider
                        value={this.state.back_shadow.b}
                        handleChange={(event) => this.setState(Object.assign(this.state, {back_shadow: Object.assign(this.state.back_shadow, { b: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={(color) => this.setState({ back_shadow_color: color})} defaultColor={this.state.back_shadow_color} />
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
                        handleChange={(event) => this.setState(Object.assign(this.state, {champ_shadow: Object.assign(this.state.champ_shadow, { h: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`V: ${this.state.champ_shadow.v}px`}
                      <ReactNativeSlider
                        value={this.state.champ_shadow.v}
                        handleChange={(event) => this.setState(Object.assign(this.state, {champ_shadow: Object.assign(this.state.champ_shadow, { v: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`B: ${this.state.champ_shadow.b}px`}
                      <ReactNativeSlider
                        value={this.state.champ_shadow.b}
                        handleChange={(event) => this.setState(Object.assign(this.state, {champ_shadow: Object.assign(this.state.champ_shadow, { b: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={(color) => this.setState({ champ_shadow_color: color})} defaultColor={this.state.champ_shadow_color} />
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
                        handleChange={(event) => this.setState(Object.assign(this.state, {text_shadow: Object.assign(this.state.text_shadow, { h: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`V: ${this.state.text_shadow.v}px`}
                      <ReactNativeSlider
                        value={this.state.text_shadow.v}
                        handleChange={(event) => this.setState(Object.assign(this.state, {text_shadow: Object.assign(this.state.text_shadow, { v: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={-10}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      {`B: ${this.state.text_shadow.b}px`}
                      <ReactNativeSlider
                        value={this.state.text_shadow.b}
                        handleChange={(event) => this.setState(Object.assign(this.state, {text_shadow: Object.assign(this.state.text_shadow, { b: parseInt(event.currentTarget.value) }) }))}
                        step={1}
                        max={10}
                        min={0}
                      />
                    </bs.Col>
                    <bs.Col xs={3}>
                      Color
                      <ColorPicker returnColor={(color) => this.setState({ text_shadow_color: color})} defaultColor={this.state.text_shadow_color} />
                    </bs.Col>
                  </bs.Row>

                </div>
              </bs.Tab>
            </bs.Tabs>
          </bs.Col>
        </bs.Row>
      </div>
    );
  }
}

TabComponent.propTypes = {
};

export default TabComponent;
