import React, { Component, Fragment } from 'react';
import { Row, Col, Divider } from 'antd';
import './DataConfigure.scss';
import DataConfigureForm from './DataConfigureForm/DataConfigureForm';
import DummyWidget from '../../Components/DummyWidget/DummyWidget';
import DummyJson from '../../Common/DummyJson';

class DataConfigure extends Component {
    state = {
        widgetDataModel: DummyJson.widgetProps
    };
    render() {
        return (
            <Fragment>
                <Row className="DataWidgetPadding">
                    <Col span={15}>
                        <DataConfigureForm
                            widgetDataModel={this.state.widgetDataModel}
                            handleChange={this.dataFromChild} />
                    </Col>
                    <Col span={8} className="WidgetData">
                        <Divider orientation="center" className="WidgetHeader">Widget Preview</Divider>
                        <DummyWidget widgetJsonData={this.state.widgetDataModel}/>
                    </Col>
                </Row>

            </Fragment>
        );
    }
    dataFromChild = (data) => {
        this.setState({widgetDataModel: data});
    }
}

export default DataConfigure;