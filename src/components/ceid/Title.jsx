/* eslint-disable react/prop-types */
import React from 'react';
import SupportButton from '../support/support';

function Title() {
  return (
    <>
      <div className="flex justify-between align-middle font-medium">
        <h1 className="text-3xl"> Identity check</h1>
        <SupportButton />
      </div>
      <hr className="mt-4" />
    </>
  );
}

export default Title;
