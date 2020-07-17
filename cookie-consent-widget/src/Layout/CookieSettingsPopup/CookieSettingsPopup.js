import React, {Component, Fragment} from 'react'
import ButtonComponent from '../../Components/Button';
import LabelComponent from '../../Components/Label';
import AccordionComponent from '../../Components/AccordionToggleComponent/Accordion';
import Color from '../../Common/Color';

export class CookieSettingsPopup extends Component {
    static defaultProps = {
        settingsData: {},
        showSettings: false
    }

    state = {
        selectedCookiesList: this.props.settingsData.accordionData
    }

    render() {
        const {settingsData, showSettings} = this.props;
        const settingsStyle = {
            backgroundColor: settingsData.backgroundColor,
            border: '1px solid ' + (settingsData.borderColor ? settingsData.borderColor :
                (settingsData.backgroundColor ? settingsData.backgroundColor : Color.white)).toString()
        };

        if (showSettings) {
            return (
                <Fragment>
                    <div style={settingsStyle}
                        className={`NotifyPopupContainer SettingPopupContainer ${ !showSettings ? 'SettingPopupAnimation' : ''}`}>
                        <div className="CookieTextContainer SettingsCookieTextContainer">
                            <div className="LabelContainer HeaderLabel">
                                <LabelComponent labelProps={settingsData.headingData}></LabelComponent>
                                <span className="SettingsCloseBtn" onClick={this.closeSettings}></span>
                            </div>

                            <div className="LabelContainer CookieInfoLabel">
                                <LabelComponent labelProps={settingsData.contentData}></LabelComponent>
                            </div>
                        </div>
                        <div className="ButtonContainer">
                            <ButtonComponent buttonData={settingsData.acceptButtonData}/>
                        </div>
                        <div className="AccordionContainer">
                            <AccordionComponent accordionData={settingsData.accordionData} toggleClick={this.setToogleData}></AccordionComponent>
                        </div>
                        <div className="ButtonContainer SettingsSaveButtonContainer">
                            <ButtonComponent
                                buttonData={settingsData.saveButtonData}
                                buttonClick={this.closeSettings}/>
                        </div>
                    </div>
                </Fragment>
            );
        } else 
            return (null);
        }
    
    closeSettings = () => {
        this.props.closePopup();
    }
    setToogleData = () => {
        console.log("cookieeeeeeeeeeeeeeeeeeeeeeData");
    }
}

export default CookieSettingsPopup
