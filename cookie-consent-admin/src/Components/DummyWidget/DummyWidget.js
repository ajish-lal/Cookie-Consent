import React, { Component } from "react";
import "./DummyWidget.scss";

export class DummyWidget extends Component {
  widget;
  componentDidMount() {
    this.widget = document.querySelector("cookie-consent");
    this.widget.popupProperties = this.props.widgetJsonData;
  }

  render() {
    if (this.widget) {
      this.widget.popupProperties = this.props.widgetJsonData;
    }
    return <cookie-consent></cookie-consent>;
  }
}

export default DummyWidget;
