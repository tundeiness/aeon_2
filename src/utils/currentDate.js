import React from 'react';

const currentDate = () => {
  const today = new Date();
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const month = today.getMonth();
  const date = `${monthArray[month]} ${today.getDate()} ${today.getFullYear()}`;
  return (
    <>{date}</>
  );
};

export default currentDate;
