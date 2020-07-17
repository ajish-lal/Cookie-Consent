import React, {Component, Fragment} from 'react';
import './ColorPicker.scss'
import {SwatchesPicker} from 'react-color';

export class ColorPicker extends Component {
    state = {
        displayColorPicker: false,
        color: this.props.defaultColor
    };

    componentDidUpdate(prevProps) {
        if (prevProps.defaultColor !== this.props.defaultColor) {
            this.setState({color: this.props.defaultColor});
        }
    }

    handleClick = () => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        });
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    handleChange = (color) => {
        this.setState({
            color: color.hex,
            displayColorPicker: !this.state.displayColorPicker
        });
        this
            .props
            .colorPicked(color);
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2'
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }

        const colorDisplay = {
            background: this.state.color
        }

        return (
            <Fragment>
                <div style={colorDisplay} className="colorDisplay" onClick={this.handleClick}>&nbsp;</div>
                {this.state.displayColorPicker
                    ? <div style={popover}>
                            <div style={cover} onClick={this.handleClose}/>
                            <SwatchesPicker width={372} color={this.state.color} onChange={this.handleChange}/>
                        </div>
                    : null}
            </Fragment>
        )
    }
}

export default ColorPicker
