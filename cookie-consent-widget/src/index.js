import 'core-js/stable/promise';
import 'core-js/stable/object/assign';
import 'core-js/stable/string/starts-with';
import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce';
import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import CookieWidget from './Widget/CookieWidget';
// import './index.css'

class CookieConsentWidget extends HTMLElement {
  mountPoint;
  componentAttributes = {};
  componentProperties = {};

  connectedCallback() {
    this.mountReactApp();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {
    return ['apikey'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.componentAttributes[name] = newVal;
    this.mountReactApp();
  }

  get popupProperties() {
    return this.componentProperties.popupProperties;
  }

  set popupProperties(newValue) {
    this.componentProperties.popupProperties = newValue;
    this.mountReactApp();
  }

  widgetProps() {
    return {
      ...this.componentAttributes,
      ...this.componentProperties
    };
  }

  mountReactApp() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.attachShadow({mode: 'open'}).appendChild(this.mountPoint);
      retargetEvents(this);
    }

    ReactDOM.render(
      <CookieWidget { ...this.widgetProps() }/>, this.mountPoint);
  }
}

window.customElements.define('cookie-consent', CookieConsentWidget);