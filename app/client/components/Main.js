import React from 'react';
import * as bs from 'react-bootstrap';
import _ from 'lodash';

import TabComponent from './TabComponent';
import BuilderSC from './smart-components/BuilderSC';

class Main extends React.Component {
  static propTypes = {
    builderData: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  };

  render() {
    const title = (<h3>Builder</h3>);
    return (
      <bs.Col sm={12}>
        <bs.Panel header={title}>
          <BuilderSC />
        </bs.Panel>
      </bs.Col>
    );
  };
}

export default Main;
// <TabComponent builderData={this.props.builderData}/>
