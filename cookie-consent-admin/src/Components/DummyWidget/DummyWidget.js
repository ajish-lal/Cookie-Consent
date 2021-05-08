import React, { useEffect } from "react";
import "./DummyWidget.scss";

let dummyWidget = null;

export function DummyWidget({ widgetJsonData }) {

  useEffect(() => {
    dummyWidget = document.querySelector("cookie-consent");
  }, []);

  useEffect(() => {
    dummyWidget.popupProperties = widgetJsonData;
  }, [widgetJsonData]);

  return (<cookie-consent></cookie-consent>);
}

export default DummyWidget;
