/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { createWrapperAndAppendToBody } from '../../utils/createWrapperAndAppendToBody';

const ReactPortal = ({ children, wrapperId = 'react-portal-wrapper' }) => {
  const test = 0;
  const [wrapperElement, setWrapperElement] = useState(null);
  // let element = document.getElementById(wrapperId);

  // if (!element) {
  //   element = createWrapperAndAppendToBody(wrapperId);
  // }

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
    // delete the programatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
};
export default ReactPortal;
