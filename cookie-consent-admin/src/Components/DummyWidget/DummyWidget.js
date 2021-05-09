
import React, { Component } from "react";
import "./DummyWidget.scss";

export class DummyWidget extends Component {
  widget = null;

  componentDidMount() {
    this.widget = document.querySelector("cookie-consent");
    this.widget.popupProperties = this.props.widgetJsonData;
  }

  componentDidUpdate() {
    if (this.widget) {
      this.widget.popupProperties = this.props.widgetJsonData;
    }
  }

  render() {
    return <cookie-consent></cookie-consent>;
  }
}

export default DummyWidget;