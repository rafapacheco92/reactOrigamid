import React from 'react';
/* eslint-disable react/prop-types */
function Input({ label, id, ...props }) {
  return (
    <>
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...props} />
      </div>
    </>
  );
}

export default Input;
