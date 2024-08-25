export const validateExp = (exp) => {
  return new Date(exp).getTime() >= Date.now();
};
