import React, {Component, Fragment} from 'react'
import ThemeConfigureForm from './ThemeConfigureForm/ThemeConfigureForm'
import './ThemeConfiguration.scss'
import DummyWidget from '../../Components/DummyWidget/DummyWidget'
import DummyJson from '../../Common/DummyJson';
import {Row, Col, Divider} from 'antd';

export class ThemeConfiguration extends Component {
    state = {
        widgetDataModel: DummyJson.widgetProps
    };
    render() {
        return (
            <Fragment>
                <Row className="ThemePadding">
                    <Col span={15} className="ThemeForm">
                        <ThemeConfigureForm
                            widgetDataModel={this.state.widgetDataModel}
                            handleChange={this.dataFromChild}/>
                    </Col>
                    <Col span={8}>
                        <div className="WidgetTheme">
                            <Divider orientation="center" className="ThemeHeader">Widget Preview</Divider>
                            <DummyWidget widgetJsonData={this.state.widgetDataModel}/>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }

    dataFromChild = (data) => {
        this.setState({widgetDataModel: data});
    }
}

export default ThemeConfiguration
