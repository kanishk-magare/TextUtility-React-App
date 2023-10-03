// Alert.js
import React from 'react';

const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
  <div style={{height: "50px"}}>
    {props.alert && <div  className={`alert alert-primary alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.msg)}</strong>
      </div>}
      </div>
    )
  
};

export default Alert;
