import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import AccordionSection from "./AccordionSection";

class AccordionComponent extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    accordionData: PropTypes.instanceOf(Object).isRequired
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    // this.props.children.forEach(child => {
    //   if (child.props.isOpen) {
    //     openSections[child.props.label] = true;
    //   }
    // });

    this.state = { openSections };
  }

  onClick = label => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;

    const isOpen = !!openSections[label];
    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };
  toggleClick = () => {
    this.props.toggleClick();
  }

  render() {
    const {
      onClick,
      toggleClick,
      props: { accordionData },
      state: { openSections },
    } = this;
    return (
      <Fragment>
        {accordionData.accordionList.map((accordion, index) => (
          <AccordionSection
            key={index}
            isOpen={!!openSections[accordion.text]}
            label={accordion.text}
            content={accordion.content}
            selected={accordion.selected}
            hasToggle={accordion.hasToggle}
            onClick={onClick}
            toggleClick = {toggleClick}
          >
            {accordionData}
          </AccordionSection>
        ))}
      </Fragment>
    );
  }
}

export default AccordionComponent;