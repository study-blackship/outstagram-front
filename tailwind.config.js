/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['src/**/*.@(j|t)s?(x)'],
  theme: {
    extend: {
      borderWidth: { 1: '1px' },
      screens: {
        sm: '480px',
      },
    },
  },
};
