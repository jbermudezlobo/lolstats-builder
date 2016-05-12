import React from 'react';
import * as bs from 'react-bootstrap';
import _ from 'lodash';
import TierColors from './../utils/TierColors';

import TabComponent from './TabComponent';

class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const title = (<h3>Builder</h3>);
    return (
      <bs.Col xs={12}>
        <bs.Panel header={title}>
          <bs.Row>
            <bs.Col xs={12}>
              <bs.Button bsStyle="primary">Get link</bs.Button>
            </bs.Col>
          </bs.Row>
          <hr/>
          <bs.Row>
            <bs.Col xs={12}>
              <TabComponent />
            </bs.Col>
          </bs.Row>
        </bs.Panel>
      </bs.Col>
    );
  };
}

Main.propTypes = {
  builderData: React.PropTypes.object
};

export default Main;
