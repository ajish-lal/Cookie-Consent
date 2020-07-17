import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Modal, Table, Divider, Row, Col } from 'antd';
import './DataConfigureForm.scss';
import WidgetDataModel from '../../../Common/WidgetDataModel';
import DummyJson from '../../../Common/DummyJson';
import CONSTANTS from '../../../Common/Constants';

const { Column, ColumnGroup } = Table;

class DataConfigureForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookiePrivacyHeader: this.props.widgetDataModel.cookieNotifyData.headingData.text,
            cookiePrivacyDescription: this.props.widgetDataModel.cookieSettingsData.contentData.text,
            cookieSettingsHeader: this.props.widgetDataModel.cookieSettingsData.headingData.text,
            cookieSettingsDescription: this.props.widgetDataModel.cookieSettingsData.contentData.text,
            cookiePrivacyAcceptBtn: this.props.widgetDataModel.cookieNotifyData.acceptButtonData.text,
            cookiePrivacySettingsBtn: this.props.widgetDataModel.cookieNotifyData.settingsLink.text,
            cookieSettingsAcceptBtn: this.props.widgetDataModel.cookieSettingsData.acceptButtonData.text,
            cookieSettingsSaveBtn: this.props.widgetDataModel.cookieSettingsData.saveButtonData.text,
            // showCategoryModal: false,
            cookieCategoryList: [
                {
                    key: '1',
                    cookie: 'Strictly necessary',
                    
                },
                {
                    key: '2',
                    cookie: 'Functional cookies',
                }
            ],
            selectedCookieKeys: []
            
        }
        this.widgetDataModel = new WidgetDataModel(props.widgetDataModel);
        this.widgetDataModel = DummyJson.widgetProps;
    }


    // showModal = () => {
    //     this.setState({
    //         showCategoryModal: true
    //     })
    // };

    // handleCancel = () => {
    //     this.setState({ showCategoryModal: false });
    // };

    // handleOk = () => {
    //     this.setState({ showCategoryModal: false });
    // };

    dataChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
        switch (event.target.name) {
            case CONSTANTS.COOKIEPRIVACYHEADER:
                this.widgetDataModel.cookieNotifyData.headingData.text = event.target.value;
                break;
            case CONSTANTS.COOKIESETTINGSHEADER:
                this.widgetDataModel.cookieSettingsData.headingData.text = event.target.value;
                break;
            case CONSTANTS.COOKIEPRIVACYDESCRIPTION:
                this.widgetDataModel.cookieNotifyData.contentData.text = event.target.value;
                break;
            case CONSTANTS.COOKIESETTINGSDESCRIPTION:
                this.widgetDataModel.cookieSettingsData.contentData.text = event.target.value;
                break;
            case CONSTANTS.COOKIEPRIVACYACCEPTBUTTON:
                this.widgetDataModel.cookieNotifyData.acceptButtonData.text = event.target.value;
                break;
            case CONSTANTS.COOKIEPRIVACYSETTINGSBUTTON:
                this.widgetDataModel.cookieNotifyData.settingsLink.text = event.target.value;
                break;
            case CONSTANTS.COOKIESETTINGSACCEPTBUTTON:
                this.widgetDataModel.cookieSettingsData.acceptButtonData.text = event.target.value;
                break;
            case CONSTANTS.COOKIESETTINGSSAVEBUTTON:
                this.widgetDataModel.cookieSettingsData.saveButtonData.text = event.target.value;
                break;
            default:
                break;
        }
        this
            .props
            .handleChange(this.widgetDataModel);
    }

    selectCookieCategory = (selectedCookieKeys, selectedCookieCategories) => {
        console.log('Cookie category', selectedCookieCategories);
        console.log('Cookie category keys', selectedCookieKeys);
        this.setState({selectedCookieKeys});
    }

    render() {
        // const showCategoryModal = this.state.showCategoryModal;
        const { selectedCookieKeys } = this.state;

        const cookieSelection = {
            selectedCookieKeys,
            onChange: this.selectCookieCategory,
            getCheckboxProps: categoryList => ({
                disabled: categoryList.cookie === 'Strictly necessary', 
            })
        };
        return (
            <Fragment>
                <Row className="WidgetDataForm">
                    <Col span={24}>
                        <Divider orientation="center" className="Header">Data Configure</Divider>
                        <Form
                            layout="vertical"
                        >
                            <div className="DataForm">
                                <div className="FieldsWrap">
                                    <Divider className="NoMargin">Notify pop up</Divider>
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item label="Header">
                                                <Input placeholder="Header"
                                                    name="cookiePrivacyHeader"
                                                    value={this.state.cookiePrivacyHeader}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item label="Description">
                                                <Input.TextArea placeholder="Description"
                                                    name="cookiePrivacyDescription"
                                                    value={this.state.cookiePrivacyDescription}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row justify="space-between">
                                        <Col span={11}>
                                            <Form.Item label="Accept button">
                                                <Input placeholder="Button text"
                                                    name="cookiePrivacyAcceptBtn"
                                                    value={this.state.cookiePrivacyAcceptBtn}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={11}>
                                            <Form.Item label="Settings button">
                                                <Input placeholder="Button text"
                                                    name="cookiePrivacySettingsBtn"
                                                    value={this.state.cookiePrivacySettingsBtn}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="FieldsWrap">
                                    <Divider className="NoMargin">Settings pop up</Divider>
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item label="Header">
                                                <Input placeholder="Header"
                                                    name="cookieSettingsHeader"
                                                    value={this.state.cookieSettingsHeader}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item label="Description">
                                                <Input.TextArea placeholder="Description"
                                                    name="cookieSettingsDescription"
                                                    value={this.state.cookieSettingsDescription}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row justify="space-between">
                                        <Col span={11}>
                                            <Form.Item label="Accept button">
                                                <Input placeholder="Button text"
                                                    name="cookieSettingsAcceptBtn"
                                                    value={this.state.cookieSettingsAcceptBtn}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={11}>
                                            <Form.Item label="Save button">
                                                <Input placeholder="Button text"
                                                    name="cookieSettingsSaveBtn"
                                                    value={this.state.cookieSettingsSaveBtn}
                                                    onChange={this.dataChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>
                            </div>


                            <Divider orientation="center">Cookie category</Divider>

                            <Table bordered 
                                dataSource={this.state.cookieCategoryList}
                                rowSelection={cookieSelection}
                                pagination={false}
                            >
                                <Column title="No" dataIndex="key"  />
                                <Column title="Cookie" dataIndex="cookie" />

                            </Table>


                        </Form>

                        {/* <Modal
                            visible={showCategoryModal}
                            title="Title"
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer={[

                                <Button key="submit" type="primary" onClick={this.handleOk}>
                                    Submit
                            </Button>,
                            ]}
                        >
                            <p>Some contents...</p>
                            
                        </Modal> */}
                    </Col>
                </Row>
            </Fragment >
        );
    }
}
export default DataConfigureForm;