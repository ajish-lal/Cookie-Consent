import React, {Component, Fragment} from 'react';
import './DummyWidget.scss';

export class DummyWidget extends Component {

    componentDidMount() {
        const widget = document.querySelector('cookie-consent');
        widget.popupProperties = this.props.widgetJsonData;
    }

    // componentDidUpdate(newProps) {
    //     const widget = document.querySelector('cookie-consent');
    //     widget.popupProperties = newProps.widgetJsonData;
    // }

    componentWillReceiveProps(newProps) {
        const widget = document.querySelector('cookie-consent');
        widget.popupProperties = newProps.widgetJsonData;
    }

    render() {
        return (
            <Fragment>
                <cookie-consent></cookie-consent>
            </Fragment>
        )
    }
}

export default DummyWidget
