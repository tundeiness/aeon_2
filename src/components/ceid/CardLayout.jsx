import React from 'react';

// eslint-disable-next-line react/prop-types
function CardLayout({ children }) {
  return (
    <div className="rounded-lg w-full h-full shadow-md p-4 mt-4">
      {children}
    </div>
  );
}

export default CardLayout;
