export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8 && 
         /[A-Z]/.test(password) && 
         /[0-9]/.test(password);
};

export const validateConvoyName = (name) => {
  return name.trim().length >= 3 && 
         name.length <= 50;
};