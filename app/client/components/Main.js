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
          <TabComponent data={this.props.builderData}/>
        </bs.Panel>
      </bs.Col>
    );
  };
}

Main.propTypes = {
  builderData: React.PropTypes.object
};

export default Main;
