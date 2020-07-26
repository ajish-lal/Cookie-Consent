import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import './DataConfigure.scss';
import DataConfigureForm from './DataConfigureForm/DataConfigureForm';

class DataConfigure extends Component {
  render() {
    return (
      <Fragment>
        <Row className="DataWidgetPadding">
          <Col span={15}>
            <DataConfigureForm widgetDataModel={this.props.widgetData} handleChange={this.dataFromChild} />
          </Col>
          <Col offset={8}></Col>
        </Row>
      </Fragment>
    );
  }
  dataFromChild = (data) => {
    this.props.dataFromChild(data);
  };
}

export default DataConfigure;
