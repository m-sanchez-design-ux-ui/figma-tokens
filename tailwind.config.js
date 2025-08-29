// tailwind.config.js

const tokens = require('./src/tokens/tokens.json');

// Función para aplanar y resolver las referencias de tokens
// La función usa un enfoque recursivo para manejar la estructura anidada y las referencias.
function resolveTokens(obj) {
  const result = {};

  const resolveValue = (value, currentPath = '') => {
    if (typeof value === 'string') {
      // Reemplaza referencias anidadas como {dimension.xs}
      return value.replace(/\{([^}]+)\}/g, (match, key) => {
        const keys = key.split('.');
        let resolved = obj;
        for (const k of keys) {
          if (resolved && typeof resolved === 'object' && resolved[k] !== undefined) {
            resolved = resolved[k];
          } else {
            return match; // Retorna la referencia si no se puede resolver
          }
        }
        return resolved.value !== undefined ? resolved.value : resolved;
      });
    }
    return value;
  };

  const processTokens = (currentObj, prefix = '') => {
    for (const key in currentObj) {
      const newKey = prefix ? `${prefix}-${key}` : key;
      const token = currentObj[key];

      if (token && typeof token.value === 'object' && token.value !== null) {
        processTokens(token.value, newKey);
      } else if (token && token.value !== undefined) {
        result[newKey] = resolveValue(token.value, newKey);
      } else if (typeof token === 'object' && token !== null) {
        processTokens(token, newKey);
      }
    }
  };

  // El nombre de la raíz de tu JSON es 'origin-design-system'
  processTokens(obj['origin-design-system']);
  return result;
}

// Resuelve y aplanea tus tokens
const resolvedTokens = resolveTokens(tokens);

// Mapea las categorías de tokens para Tailwind
const tailwindColors = {};
const tailwindSpacing = {};
const tailwindBorderRadius = {};
const tailwindFontFamily = {};

for (const key in resolvedTokens) {
  if (key.startsWith('colors-')) {
    const tailwindKey = key.replace('colors-', '');
    tailwindColors[tailwindKey] = resolvedTokens[key];
  } else if (key.startsWith('spacing-')) {
    const tailwindKey = key.replace('spacing-', '');
    tailwindSpacing[tailwindKey] = resolvedTokens[key];
  } else if (key.startsWith('borderRadius-')) {
    const tailwindKey = key.replace('borderRadius-', '');
    tailwindBorderRadius[tailwindKey] = resolvedTokens[key];
  } else if (key.startsWith('fontFamilies-')) {
    const tailwindKey = key.replace('fontFamilies-', '');
    tailwindFontFamily[tailwindKey] = [resolvedTokens[key]]; // Tailwind requiere un array para font-family
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: tailwindColors,
      spacing: tailwindSpacing,
      borderRadius: tailwindBorderRadius,
      fontFamily: {
        ...tailwindFontFamily,
        'sans': ['Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      // Aquí puedes agregar más categorías como fontSize, fontWeight, etc.
    },
  },
  plugins: [],
};
