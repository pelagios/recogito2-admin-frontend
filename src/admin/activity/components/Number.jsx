import React from 'react';
import NumberFormat from 'react-number-format';

const Number = (props) => {

  return (
    <span className="number">
      <NumberFormat
        displayType="text"
        value={props.value}
        thousandSeparator={true} />
    </span>
  )

}

export default Number;