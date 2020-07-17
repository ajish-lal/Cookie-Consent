import React, {Component, Fragment} from 'react';
import './ThemeConfigureForm.scss'
import WidgetDataModel from '../../../Common/WidgetDataModel';
import CONSTANTS from '../../../Common/Constants'
import {
    Form,
    Divider,
    Button,
    Row,
    Col,
    Collapse,
    Select,
    Input
} from 'antd';
import ColorPicker from '../../../Components/ColorPicker/ColorPicker';
import TemplateJson from '../ThemeTemplates/TemplateJson'

const {Option} = Select;
const {Panel} = Collapse;

export class ThemeConfigureForm extends Component {
    constructor(props) {
        super(props);
        const {cookieNotifyData, cookieSettingsData} = this.props.widgetDataModel;
        this.state = {
            selectedTheme: 'default',

            backgroundColor: cookieNotifyData.backgroundColor,
            primaryColor: cookieNotifyData.acceptButtonData.backgroundColor,
            secondaryColor: cookieNotifyData.settingsLink.backgroundColor,
            headerColor: cookieNotifyData.headingData.textColor,
            contentColor: cookieNotifyData.contentData.textColor,

            notifyHeaderColor: cookieNotifyData.headingData.textColor,
            notifyBodyColor: cookieNotifyData.contentData.textColor,
            notifyBackgroundColor: cookieNotifyData.backgroundColor,
            notifyBorderColor: cookieNotifyData.borderColor,

            notifyAcceptTextColor: cookieNotifyData.acceptButtonData.textColor,
            notifyAcceptBackgroundColor: cookieNotifyData.acceptButtonData.backgroundColor,
            notifyAcceptBorderColor: cookieNotifyData.acceptButtonData.borderColor,

            notifySettingsTextColor: cookieNotifyData.settingsLink.textColor,
            notifySettingsBackgroundColor: cookieNotifyData.settingsLink.backgroundColor,
            notifySettingsBorderColor: cookieNotifyData.settingsLink.borderColor,

            settingsHeaderColor: cookieSettingsData.headingData.textColor,
            settingsBodyColor: cookieSettingsData.contentData.textColor,
            settingsBackgroundColor: cookieSettingsData.backgroundColor,
            settingsBorderColor: cookieSettingsData.borderColor,

            settingsAcceptTextColor: cookieSettingsData.acceptButtonData.textColor,
            settingsAcceptBackgroundColor: cookieSettingsData.acceptButtonData.backgroundColor,
            settingsAcceptBorderColor: cookieSettingsData.acceptButtonData.borderColor,

            settingsSaveTextColor: cookieSettingsData.saveButtonData.textColor,
            settingsSaveBackgroundColor: cookieSettingsData.saveButtonData.backgroundColor,
            settingsSaveBorderColor: cookieSettingsData.saveButtonData.borderColor,

            settingsAccordionHeaderColor: cookieSettingsData.accordionData.headerColor,
            settingsAccordionBodyColor: cookieSettingsData.accordionData.contentColor,
            settingsAccordionBackgroundColor: cookieSettingsData.accordionData.backgroundColor,
            settingsAccordionBorderColor: cookieSettingsData.accordionData.borderColor,

            settingsAccordionToggleSelectedColor: cookieSettingsData.accordionData.toggleSelectedColor,
            settingsAccordionToggleColor: cookieSettingsData.accordionData.toggleDefaultColor
        }
        this.widgetDataModel = new WidgetDataModel(props.widgetDataModel);
    }

    changeGlobalTheme = (colorData, type) => {
        const color = colorData.hex;
        const {cookieNotifyData, cookieSettingsData} = this.widgetDataModel;
        this.setState({[type]: color});
        var textColor = this.calculateTextColor(colorData.rgb);
        switch (type) {
            case CONSTANTS.BACKGROUND:
                cookieNotifyData.backgroundColor = cookieSettingsData.backgroundColor = cookieNotifyData.borderColor = cookieSettingsData.borderColor = color;
                cookieNotifyData.headingData.textColor = cookieSettingsData.headingData.textColor = cookieNotifyData.contentData.textColor = cookieSettingsData.contentData.textColor = textColor;
                this.setState({
                    [CONSTANTS.NOTIFY_BACKGROUND]: color,
                    [CONSTANTS.SETTINGS_BACKGROUND]: color,
                    [CONSTANTS.NOTIFY_BORDER]: color,
                    [CONSTANTS.SETTINGS_BORDER]: color,
                    [CONSTANTS.HEADER_COLOR]: textColor,
                    [CONSTANTS.NOTIFY_HEADER]: textColor,
                    [CONSTANTS.SETTINGS_HEADER]: textColor
                });
                break;
            case CONSTANTS.PRIMARY_COLOR:
                textColor = this.calculateTextColor(colorData.rgb);
                cookieNotifyData.acceptButtonData.backgroundColor = cookieSettingsData.acceptButtonData.backgroundColor = cookieNotifyData.acceptButtonData.borderColor = cookieSettingsData.acceptButtonData.borderColor = cookieSettingsData.accordionData.toggleSelectedColor = color;
                cookieNotifyData.acceptButtonData.textColor = cookieSettingsData.acceptButtonData.textColor = textColor;
                this.setState({
                    [CONSTANTS.NOTIFY_ACCEPT_BACKGROUND]: color,
                    [CONSTANTS.SETTINGS_ACCEPT_BACKGROUND]: color,
                    [CONSTANTS.NOTIFY_ACCEPT_BORDER]: color,
                    [CONSTANTS.SETTINGS_ACCEPT_BORDER]: color,
                    [CONSTANTS.SETTINGS_ACCORDION_TOGGLE_SELECTED]: color,
                    [CONSTANTS.NOTIFY_ACCEPT_TEXT]: textColor,
                    [CONSTANTS.SETTINGS_ACCEPT_TEXT]: textColor
                });
                break;
            case CONSTANTS.SECONDARY_COLOR:
                textColor = this.calculateTextColor(colorData.rgb);
                cookieNotifyData.settingsLink.backgroundColor = cookieSettingsData.saveButtonData.backgroundColor = cookieNotifyData.settingsLink.borderColor = cookieSettingsData.saveButtonData.borderColor = color;
                cookieNotifyData.settingsLink.textColor = cookieSettingsData.saveButtonData.textColor = textColor;
                this.setState({
                    [CONSTANTS.NOTIFY_SETTINGS_BACKGROUND]: color,
                    [CONSTANTS.SETTINGS_SAVE_BACKGROUND]: color,
                    [CONSTANTS.NOTIFY_SETTINGS_BORDER]: color,
                    [CONSTANTS.SETTINGS_SAVE_BORDER]: color,
                    [CONSTANTS.NOTIFY_SETTINGS_TEXT]: textColor,
                    [CONSTANTS.SETTINGS_SAVE_TEXT]: textColor
                });
                break;
            case CONSTANTS.HEADER_COLOR:
                cookieNotifyData.headingData.textColor = cookieSettingsData.headingData.textColor = cookieSettingsData.accordionData.headerColor = color;
                this.setState({
                    [CONSTANTS.NOTIFY_HEADER]: color,
                    [CONSTANTS.SETTINGS_HEADER]: color,
                    [CONSTANTS.SETTINGS_ACCORDION_HEADER]: color
                });
                break;
            case CONSTANTS.CONTENT_COLOR:
                cookieNotifyData.contentData.textColor = cookieSettingsData.contentData.textColor = cookieSettingsData.accordionData.contentColor = color;
                this.setState({
                    [CONSTANTS.NOTIFY_BODY]: color,
                    [CONSTANTS.SETTINGS_BODY]: color,
                    [CONSTANTS.SETTINGS_ACCORDION_BODY]: color
                });
                break;
            default:
                break;
        }
        this
            .props
            .handleChange(this.widgetDataModel);
    }

    changeNotifyTheme = (colorData, type) => {
        const color = colorData.hex;
        const {cookieNotifyData} = this.widgetDataModel;
        this.setState({[type]: color});
        switch (type) {
            case CONSTANTS.NOTIFY_HEADER:
                cookieNotifyData.headingData.textColor = color
                break;
            case CONSTANTS.NOTIFY_BODY:
                cookieNotifyData.contentData.textColor = color
                break;
            case CONSTANTS.NOTIFY_BACKGROUND:
                cookieNotifyData.backgroundColor = color
                break;
            case CONSTANTS.NOTIFY_BORDER:
                cookieNotifyData.borderColor = color
                break;
            case CONSTANTS.NOTIFY_ACCEPT_TEXT:
                cookieNotifyData.acceptButtonData.textColor = color
                break;
            case CONSTANTS.NOTIFY_ACCEPT_BACKGROUND:
                cookieNotifyData.acceptButtonData.backgroundColor = color
                break;
            case CONSTANTS.NOTIFY_ACCEPT_BORDER:
                cookieNotifyData.acceptButtonData.borderColor = color
                break;
            case CONSTANTS.NOTIFY_SETTINGS_TEXT:
                cookieNotifyData.settingsLink.textColor = color
                break;
            case CONSTANTS.NOTIFY_SETTINGS_BACKGROUND:
                cookieNotifyData.settingsLink.backgroundColor = color
                break;
            case CONSTANTS.NOTIFY_SETTINGS_BORDER:
                cookieNotifyData.settingsLink.borderColor = color
                break;
            default:
                break;
        }
        this
            .props
            .handleChange(this.widgetDataModel);
    }

    changeSettingsTheme = (colorData, type) => {
        const color = colorData.hex;
        const {cookieSettingsData} = this.widgetDataModel;
        this.setState({[type]: color});
        switch (type) {
            case CONSTANTS.SETTINGS_HEADER:
                cookieSettingsData.headingData.textColor = color
                break;
            case CONSTANTS.SETTINGS_BODY:
                cookieSettingsData.contentData.textColor = color
                break;
            case CONSTANTS.SETTINGS_BACKGROUND:
                cookieSettingsData.backgroundColor = color
                break;
            case CONSTANTS.SETTINGS_BORDER:
                cookieSettingsData.borderColor = color
                break;
            case CONSTANTS.SETTINGS_ACCEPT_TEXT:
                cookieSettingsData.acceptButtonData.textColor = color
                break;
            case CONSTANTS.SETTINGS_ACCEPT_BACKGROUND:
                cookieSettingsData.acceptButtonData.backgroundColor = color
                break;
            case CONSTANTS.SETTINGS_ACCEPT_BORDER:
                cookieSettingsData.acceptButtonData.borderColor = color
                break;
            case CONSTANTS.SETTINGS_SAVE_TEXT:
                cookieSettingsData.saveButtonData.textColor = color
                break;
            case CONSTANTS.SETTINGS_SAVE_BACKGROUND:
                cookieSettingsData.saveButtonData.backgroundColor = color
                break;
            case CONSTANTS.SETTINGS_SAVE_BORDER:
                cookieSettingsData.saveButtonData.borderColor = color
                break;
            case CONSTANTS.SETTINGS_ACCORDION_HEADER:
                cookieSettingsData.accordionData.headerColor = color
                break;
            case CONSTANTS.SETTINGS_ACCORDION_BODY:
                cookieSettingsData.accordionData.contentColor = color
                break;
            case CONSTANTS.SETTINGS_ACCORDION_BACKGROUND:
                cookieSettingsData.accordionData.backgroundColor = color
                break;
            case CONSTANTS.SETTINGS_ACCORDION_BORDER:
                cookieSettingsData.accordionData.borderColor = color
                break;
            case CONSTANTS.SETTINGS_ACCORDION_TOGGLE_SELECTED:
                cookieSettingsData.accordionData.toggleSelectedColor = color
                break;
            case CONSTANTS.SETTINGS_ACCORDION_TOGGLE:
                cookieSettingsData.accordionData.toggleDefaultColor = color
                break;
            default:
                break;
        }
        this
            .props
            .handleChange(this.widgetDataModel);
    }

    loadTheme = (value) => {
        if (value === 'light') {
            this.setState({selectedTheme: value});
            this
                .props
                .handleChange(TemplateJson.widgetProps.light);
        } else if (value === 'dark') {
            this.setState({selectedTheme: value});
            this
                .props
                .handleChange(TemplateJson.widgetProps.dark);
        } else {
            this
                .props
                .handleChange(this.widgetDataModel);
        }
    }

    saveTheme = () => {
        console.log(JSON.stringify(this.widgetDataModel));
    }

    calculateTextColor = (colorData) => {
        let luminance = 0.2126 * colorData.r + 0.7152 * colorData.g + 0.0722 * colorData.b;
        let calculatedColor = "#000000";
        if (luminance < 140) {
            calculatedColor = "#ffffff";
        }
        return calculatedColor;
    }

    render() {

        return (
            <Fragment>
                <Divider orientation="center">Basic Theming</Divider>
                <Row justify='center'>
                    <Col span={12}>
                        <Form.Item label="Theme:" className="ThemeLabel">
                            <Select
                                onChange={this.loadTheme}
                                defaultValue={this.state.selectedTheme}
                                style={{
                                width: '100%'
                            }}
                                placeholder="Select a theme">
                                <Option value="default">Default</Option>
                                <Option value="light">Light</Option>
                                <Option value="dark">Dark</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify='space-around'>
                    <Form.Item label="Background:" className="ThemeLabel">
                        <ColorPicker
                            defaultColor={this.state.backgroundColor}
                            colorPicked={(color) => {
                            this.changeGlobalTheme(color, CONSTANTS.BACKGROUND)
                        }}></ColorPicker>
                    </Form.Item>
                    <Form.Item label="Primary Button:" className="ThemeLabel">
                        <ColorPicker
                            defaultColor={this.state.primaryColor}
                            colorPicked={(color) => {
                            this.changeGlobalTheme(color, CONSTANTS.PRIMARY_COLOR)
                        }}></ColorPicker>
                    </Form.Item>
                    <Form.Item label="Secondary Button:" className="ThemeLabel">
                        <ColorPicker
                            defaultColor={this.state.secondaryColor}
                            colorPicked={(color) => {
                            this.changeGlobalTheme(color, CONSTANTS.SECONDARY_COLOR)
                        }}></ColorPicker>
                    </Form.Item>
                    <Form.Item label="Header Color:" className="ThemeLabel">
                        <ColorPicker
                            defaultColor={this.state.headerColor}
                            colorPicked={(color) => {
                            this.changeGlobalTheme(color, CONSTANTS.HEADER_COLOR)
                        }}></ColorPicker>
                    </Form.Item>
                    <Form.Item label="Body Color:" className="ThemeLabel">
                        <ColorPicker
                            defaultColor={this.state.contentColor}
                            colorPicked={(color) => {
                            this.changeGlobalTheme(color, CONSTANTS.CONTENT_COLOR)
                        }}></ColorPicker>
                    </Form.Item>
                </Row>

                <Divider orientation="center">Advanced Theming</Divider>
                <Row justify='center'>
                    <Col span={12}>
                        <Form.Item label="Theme Name:" className="ThemeLabel">
                            <Input placeholder="Enter a Theme name"></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Collapse>
                    <Panel header="Notify Pop-up" key="1">
                        <Row gutter={[0, 16]} className="ThemeBorder">
                            <Divider orientation="left">Content</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Header:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyHeaderColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_HEADER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Body:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyBodyColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_BODY)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyBorderColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Divider orientation="left" className="ThemeHeader">Accept Button</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyAcceptBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_ACCEPT_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyAcceptBorderColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_ACCEPT_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;&nbsp;Text:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifyAcceptTextColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_ACCEPT_TEXT)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>

                            <Divider orientation="left" className="ThemeHeader">Settings Button</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifySettingsBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_SETTINGS_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifySettingsBorderColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_SETTINGS_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;&nbsp;Text:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.notifySettingsTextColor}
                                    colorPicked={(color) => {
                                    this.changeNotifyTheme(color, CONSTANTS.NOTIFY_SETTINGS_TEXT)
                                }}></ColorPicker>
                            </Form.Item>
                        </Row>
                    </Panel>
                </Collapse>
                <Collapse style={{
                    marginTop: '10px'
                }}>
                    <Panel header="Settings Pop-up" key="2">
                        <Row gutter={[0, 16]} className="ThemeBorder">
                            <Divider orientation="left">Content</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Header:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsHeaderColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_HEADER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Body:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsBodyColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_BODY)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsBorderColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Divider orientation="left" className="ThemeHeader">Accordion</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAccordionBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCORDION_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Header:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAccordionHeaderColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCORDION_HEADER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Body:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAccordionBodyColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCORDION_BODY)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAccordionBorderColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCORDION_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Divider orientation="left" className="ThemeHeader">Accept Button</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAcceptBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCEPT_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAcceptBorderColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCEPT_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;&nbsp;Text:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAcceptTextColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCEPT_TEXT)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Divider orientation="left" className="ThemeHeader">Save Button</Divider>
                            <Col offset={4}></Col>
                            <Form.Item label="Background:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsSaveBackgroundColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_SAVE_BACKGROUND)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;Border:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsSaveBorderColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_SAVE_BORDER)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="&nbsp;&nbsp;Text:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsSaveTextColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_SAVE_TEXT)
                                }}></ColorPicker>
                            </Form.Item>
                            <Divider orientation="left" className="ThemeHeader">Toggle</Divider>
                            <Col offset={4}></Col>
                            <Form.Item
                                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selected:"
                                className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAccordionToggleSelectedColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCORDION_TOGGLE_SELECTED)
                                }}></ColorPicker>
                            </Form.Item>
                            <Col offset={1}></Col>
                            <Form.Item label="Default:" className="ThemeLabel">
                                <ColorPicker
                                    defaultColor={this.state.settingsAccordionToggleColor}
                                    colorPicked={(color) => {
                                    this.changeSettingsTheme(color, CONSTANTS.SETTINGS_ACCORDION_TOGGLE)
                                }}></ColorPicker>
                            </Form.Item>
                        </Row>
                    </Panel>
                </Collapse>

                <Row justify="center" className="ThemeButton">
                    <Col span={4}>
                        <Button type="primary" danger onClick={this.saveTheme}>Reset</Button>
                    </Col>
                    <Col offset={1}></Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.saveTheme}>Save</Button>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default ThemeConfigureForm
