import React, { Component, Fragment } from 'react';
import Color from '../Common/Color';
import Font from '../Common/Font';

class ButtonComponent extends Component {
    static defaultProps = {
      buttonData: {
        text: 'Default Button'
      }
    }

    render() {
      const { buttonData, buttonClick } = this.props;
        const ButtonElement = {
          background: buttonData.backgroundColor,
          color: buttonData.textColor,
          border: '1px solid ' + (buttonData.borderColor ? buttonData.borderColor :
            (buttonData.backgroundColor ? buttonData.backgroundColor : Color.blue)).toString()
      }
      const styles = `
        button {
          font-size: ${Font['font-size-m']};
          border-radius: 4px;
          width: 100%;
          padding: 10px 0;
          text-align: center;
          cursor: pointer;
          backgroundColor: ${Color.blue};
          color: ${Color.white};
        }
      }`;
      
      return (
          <Fragment>
            <style>{styles}</style>
            <button style={ButtonElement} onClick={buttonClick}>
              { buttonData.text }
            </button>
          </Fragment>
      );
    }
  }

export default ButtonComponent;
