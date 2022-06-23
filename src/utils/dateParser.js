/* eslint-disable import/prefer-default-export */
export const handleDate = (rawDate) => {
  const dateData = new Date(rawDate);
  const dateString = new Date(
    dateData.getTime() - dateData.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0];

  const timeString = new Date(
    dateData.getTime() - dateData.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[1];

  return `${dateString} ${timeString.slice(0, 8)}`;
};
