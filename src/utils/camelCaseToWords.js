export const camelCaseToWords = (camelCaseText) => {
  const result = camelCaseText.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};
