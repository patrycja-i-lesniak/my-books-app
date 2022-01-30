export const capitalizeFirstLetter = string => {
  const firstLetter = string.charAt(0).toUpperCase();
  const restString = string.slice(1).toLowerCase();

  return `${firstLetter}${restString}`;
};
