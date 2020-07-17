import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ToogleSwitch from "./ToogleSwitch";
import Color from '../../Common/Color';

class AccordionSection extends Component {
  static propTypes = {
    // children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    hasToggle: PropTypes.bool.isRequired,
    toggleClick: PropTypes.func
  };
  constructor(props) {
    super(props);
    const switchValue = props.selected;
    this.state = {
      switchValue
    };
  }

  onClick = () => {
    this
      .props
      .onClick(this.props.label);
  };
  toggleClick = () => {
    this
      .props
      .toggleClick();
  };

  render() {
    const { onClick, toggleClick, props: { isOpen, label, content, hasToggle }, state: { switchValue } } = this;
    const AccordionElement = {
      background: this.props.children.backgroundColor
        ? this.props.children.backgroundColor
        : Color.gray,
      // color: buttonData.textColor ? buttonData.textColor : Color.white,
      border: '1px solid ' + (this.props.children.borderColor
        ? this.props.children.borderColor
        : (this.props.children.backgroundColor
          ? this.props.children.backgroundColor
          : Color.gray)).toString()
    }
    const AccordionHeaderElement = {
      color: this.props.children.headerColor
        ? this.props.children.headerColor
        : Color.black
    }
    const AccordionContentElement = {
      color: this.props.children.contentColor
        ? this.props.children.contentColor
        : Color.black,
      background: this.props.children.backgroundColor
        ? this.props.children.backgroundColor
        : Color.gray,
      // border: '2px solid ' + (this.props.children.borderColor
      //   ? this.props.children.borderColor
      //   : (this.props.children.backgroundColor
      //     ? this.props.children.backgroundColor
      //     : Color.gray)).toString()

    }
    const accordionStyle = `
  .Accordion {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 93.5%;
    padding: 3% 3%;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .LabelWrap {
    width: 75%;
  }
  .ToggleSwitch {
    width: 20%;
  }
  .AccordionHeader {
    display: flex;
    width: 100%;
  }
  .AccordionContent {
    margin-top: 13px;
    padding: 12px;
  }
  `;
    return (
      <Fragment>
        <style>{accordionStyle}</style>
        <div
          style={AccordionElement} className="Accordion" onClick={onClick}
        >

          <div style={AccordionHeaderElement
          } className="AccordionHeader">
            <div className="LabelWrap">
              {label}
            </div>

            <div className="ToggleSwitch">
              {hasToggle && (
                <ToogleSwitch
                  isOn={switchValue}
                  handleToggle={() => this.getToggleData(switchValue)}
                  toggleData={this.props.children}
                  />)}
            </div>

            <div>
              {!isOpen && <span>&#9655;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
          </div>
          {isOpen && (
            <div style={AccordionContentElement} className="AccordionContent">{content}</div>
          )}
        </div>
      </Fragment>
    );
  }
  // handleToggle= {() => this.setState({ switchValue: !switchValue }) }
  getToggleData = (switchValue) => {
    console.log("switchValueswitchValue", switchValue);
    this.setState({ switchValue: !switchValue });
    this.toggleClick();
  }
}

export default AccordionSection;
