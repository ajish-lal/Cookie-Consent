import React, {Component, Fragment} from 'react';
import CookieNotifyPopup from '../Layout/CookieNotifyPopup/CookieNotifyPopup';
import CookieSettingsPopup from '../Layout/CookieSettingsPopup/CookieSettingsPopup';
import {CookieWidgetStyles} from './CookieWidget.styles';
import {CookieWidgetConstants} from '../Common/CookieWidget.constants';
import DummyJson from '../Common/DummyJson';
import Cookie from '../Common/Cookie';
//import Cookies from 'universal-cookie';
import axios from 'axios';
import { unblock } from 'yett';

class CookieWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            cookieData: {},
            showSettings: false,
            showNotifyPopup: true,
            cookieBackup: {}
        }
    }

    dummyData = DummyJson.widgetProps;

    componentDidMount() {
        this.readConfigFromAPI(this.props.apikey);
        this.widgetOnLoad();
    }

    widgetOnLoad() {
        console.log(Cookie.getAllCookies());
        this.setState({cookieBackup: Cookie.getAllCookies()});
        //Expire all cookies except strictly necessary ones
        Cookie.deleteAllCookies();
        console.log(Cookie.getAllCookies());

        this.setState({cookieData: this.dummyData});
        this.setState({loading: false});
    }

    async readConfigFromAPI(apikey) {
        let response = null;
        try {
            response = await(await axios.get('https://api.github.com/' + apikey)).data;
        } catch {
            console.log("Cookie Widget API error");
        }
        console.log(response);
        // Below lines will be uncommented once API is ready
        // this.setState({cookieData: this.dummyData});
        // this.setState({loading: false});
    }

    render() {
        const widgetStyle = {
            right: this.state.cookieData.position === CookieWidgetConstants.RIGHT ? '10px' : 'auto',
            left: this.state.cookieData.position === CookieWidgetConstants.LEFT ? '10px' : 'auto',
            backgroundColor: this.state.cookieData.backgroundColor
        };
        if (!this.state.loading) {
            return (
                <Fragment>
                    <style>{CookieWidgetStyles}</style>
                    <div className="PopupContainer FontStyle" style={widgetStyle}>
                        <CookieSettingsPopup
                            closePopup={this.closeSettings}
                            showSettings={this.state.showSettings}
                            settingsData={this.state.cookieData.cookieSettingsData}/>
                        <CookieNotifyPopup
                            onAcceptClick={this.acceptClicked}
                            onSettingsClick={this.openSettings}
                            notifyData={this.state.cookieData.cookieNotifyData}
                            showNotifyPopup={this.state.showNotifyPopup}/>
                    </div>
                </Fragment>
            );
        } else {
            return (null)
        }
    }

    openSettings = () => {
        if (!this.state.showSettings) 
            this.setState({showSettings: true});
        this.setState({showNotifyPopup: false});
    }

    closeSettings = () => {
        this.setState({showSettings: false});
        this.setState({showNotifyPopup: true});
    }

    acceptClicked = () => {
        //const cookies = new Cookies();
        //console.log(cookies.getAll(), 'npm');
        console.log(window.YETT_BLACKLIST)

        unblock(/googletagmanager/);
        unblock(/facebook/);
        console.log(Cookie.getAllCookies());
    }
}

export default CookieWidget;
