import React, { Component, Fragment } from 'react';
import ThemeConfigureForm from './ThemeConfigureForm/ThemeConfigureForm';
import './ThemeConfiguration.scss';
import { Row, Col } from 'antd';

export class ThemeConfiguration extends Component {
  render() {
    return (
      <Fragment>
        <Row className="ThemePadding">
          <Col span={15} className="ThemeForm">
            <ThemeConfigureForm widgetDataModel={this.props.widgetData} handleChange={this.dataFromChild} />
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

export default ThemeConfiguration;
