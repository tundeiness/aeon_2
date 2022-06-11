/* eslint-disable import/prefer-default-export */
// import React from 'react';

export const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return (
    wrapperElement
  );
};

// export default CreateWrapperAndAppendToBody;
