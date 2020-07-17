import React, {Component} from 'react';
import ButtonComponent from '../../Components/Button';
import LabelComponent from '../../Components/Label';
import Color from '../../Common/Color';

class CookieNotifyPopup extends Component {
    static defaultProps = {
        notifyData: {},
        showNotifyPopup: false
    }

    render() {
        const {notifyData, showNotifyPopup} = this.props;
        const notifyStyle = {
            backgroundColor: notifyData.backgroundColor,
            border: '1px solid ' + (notifyData.borderColor ? notifyData.borderColor :
                (notifyData.backgroundColor ? notifyData.backgroundColor : Color.white)).toString()
        };

        if (showNotifyPopup) {
            return (
                <div className="NotifyPopupContainer" style={notifyStyle}>
                    <div className="CookieTextContainer">
                        <div className="LabelContainer HeaderLabel">
                            <LabelComponent labelProps={notifyData.headingData}></LabelComponent>
                        </div>
                        <div className="LabelContainer CookieInfoLabel">
                            <LabelComponent labelProps={notifyData.contentData}></LabelComponent>
                        </div>
                    </div>
                    <div className="ButtonContainer ccwButtonSpace">
                        <ButtonComponent buttonData={notifyData.acceptButtonData} buttonClick={this.acceptClicked}/>
                        <div className="SettingsLinkContainer">
                            <ButtonComponent buttonData={notifyData.settingsLink} buttonClick={this.settingsClicked}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (null);
        }
    }

    acceptClicked = () => {
        this.props.onAcceptClick();
    }

    settingsClicked = () => {
        this.props.onSettingsClick();
    }
}

export default CookieNotifyPopup;
