// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('tailwindcss/nesting'),
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// };

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'tailwindcss/nesting': {},
    'postcss-simple-vars': {},
    'postcss-functions': { functions: { toRem, stripUnit, unit, fluid, alpha } },
    'tailwindcss': {},
    'postcss-preset-env': {},
    'autoprefixer': {},
  },
};

/* Postcss functions
  ------------------ */

function toRem(number) {
  return `${stripUnit(number) / 16}rem`;
}

function toPx(number) {
  return `${stripUnit(number) * 16}px`;
}

function stripUnit(value) {
  let number = '';
  for (let char of String(value)) {
    if (!isNaN(char) || char == '.' || char == '-') number += char;
  }
  return Number(number);
}

function unit(value) {
  let unit = '';
  for (let char of String(value)) {
    if (isNaN(char) && char != '.') unit += char;
  }
  return unit;
}

function fluid(minValue, maxValue, convertTo) {
  let minVW = '400px'; // TODO: Convert to css custom properties
  let maxVW = '760px';

  if (convertTo == 'toRem') {
    minValue = toRem(minValue);
    maxValue = toRem(maxValue);
  } else if (convertTo == 'toPx') {
    minValue = toPx(minValue);
    maxValue = toPx(maxValue);
  }

  if (unit(minValue) == 'rem') {
    minVW = toRem(minVW);
    maxVW = toRem(maxVW);
  }

  const targetValue = `calc(${minValue} + (${stripUnit(maxValue) - stripUnit(minValue)}) * ((100vw - ${minVW}) / (${stripUnit(maxVW) - stripUnit(minVW)})))`;
  
  return `clamp(${minValue}, ${targetValue}, ${maxValue})`;
}

function alpha(color, alpha) {
  const colorValues = color.match(/(?<=\().*(?=\))/)[0]; // Everything between brackets
  return `rgb(${colorValues} / ${alpha})`;
}
