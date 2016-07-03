import React from 'react';
import * as bs from 'react-bootstrap';

import InfoTab from './tabs/InfoTab';

class Builder extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      tabKey: 1
    };
    [
      'setTabKey'
    ].forEach((f) => this[f] = this[f].bind(this));
  }

  setTabKey(tabKey) {
    this.setState({ tabKey });
  }

  render() {
    return (
      <div>
        <bs.Tabs activeKey={ this.state.tabKey } onSelect={ this.setTabKey } id='builder.tabs' justified>
          <bs.Tab eventKey={1} title='Info'>
            <InfoTab />
          </bs.Tab>

          <bs.Tab eventKey={2} title='Style'>
            sss
          </bs.Tab>
        </bs.Tabs>
      </div>
    );
  }
}

export default Builder;

/*
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
*/
