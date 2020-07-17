import React from 'react'
import Color from '../Common/Color';

export default function LabelComponent({labelProps}) {
    return (
        <label
            style={labelProps.textColor
            ? {color: labelProps.textColor} : {color: Color.darkGray}}>
                {labelProps.text}
        </label>
    )
}

LabelComponent.defaultProps = {
    labelProps: {
        text: 'Cookie Widget'
    }
};
