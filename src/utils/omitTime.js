/* eslint-disable import/prefer-default-export */
export const handleDateOmitTime = (rawDate) => {
  const dateData = new Date(rawDate);
  const dateString = new Date(
    dateData.getTime() - dateData.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0];

  return `${dateString}`;
};
