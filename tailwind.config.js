/** @type {import('tailwindcss').Config} */
import tokens from './build/js/tailwind-tokens.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        //-------------------------🎨 Tokens Primitivos----------------------------------------//
        white: tokens.Primitives.color.white.white.$value,
        black: tokens.Primitives.color.black.black.$value,

        // 🎨 Primario: brand
        primary: {
          50: tokens.Primitives.color.brand['50'].$value,
          100: tokens.Primitives.color.brand['100'].$value,
          200: tokens.Primitives.color.brand['200'].$value,
          300: tokens.Primitives.color.brand['300'].$value,
          400: tokens.Primitives.color.brand['400'].$value,
          500: tokens.Primitives.color.brand['500'].$value,
          600: tokens.Primitives.color.brand['600'].$value,
          700: tokens.Primitives.color.brand['700'].$value,
          800: tokens.Primitives.color.brand['800'].$value,
          900: tokens.Primitives.color.brand['900'].$value,
          950: tokens.Primitives.color.brand['950'].$value,
        },

        // 🎨 Secundario: gris azulado (brand-2)
        secondary: {
          50: tokens.Primitives.color['brand-2']['50'].$value,
          100: tokens.Primitives.color['brand-2']['100'].$value,
          200: tokens.Primitives.color['brand-2']['200'].$value,
          300: tokens.Primitives.color['brand-2']['300'].$value,
          400: tokens.Primitives.color['brand-2']['400'].$value,
          500: tokens.Primitives.color['brand-2']['500'].$value,
          600: tokens.Primitives.color['brand-2']['600'].$value,
          700: tokens.Primitives.color['brand-2']['700'].$value,
          800: tokens.Primitives.color['brand-2']['800'].$value,
          900: tokens.Primitives.color['brand-2']['900'].$value,
          950: tokens.Primitives.color['brand-2']['950'].$value,
        },

        // 🎨 Acento: azul profundo
        accent: {
          50: tokens.Primitives.color.accent['50'].$value,
          100: tokens.Primitives.color.accent['100'].$value,
          200: tokens.Primitives.color.accent['200'].$value,
          300: tokens.Primitives.color.accent['300'].$value,
          400: tokens.Primitives.color.accent['400'].$value,
          500: tokens.Primitives.color.accent['500'].$value,
          600: tokens.Primitives.color.accent['600'].$value,
          700: tokens.Primitives.color.accent['700'].$value,
          800: tokens.Primitives.color.accent['800'].$value,
          900: tokens.Primitives.color.accent['900'].$value,
          950: tokens.Primitives.color.accent['950'].$value,
        },
        // 🎨 Grises neutros
        gray: {
          50: tokens.Primitives.color.gray['50'].$value,
          100: tokens.Primitives.color.gray['100'].$value,
          200: tokens.Primitives.color.gray['200'].$value,
          300: tokens.Primitives.color.gray['300'].$value,
          400: tokens.Primitives.color.gray['400'].$value,
          500: tokens.Primitives.color.gray['500'].$value,
          600: tokens.Primitives.color.gray['600'].$value,
          700: tokens.Primitives.color.gray['700'].$value,
          800: tokens.Primitives.color.gray['800'].$value,
          900: tokens.Primitives.color.gray['900'].$value,
          950: tokens.Primitives.color.gray['950'].$value,
        },
        // 🎨 Azul
        blue: {
          50: tokens.Primitives.color.blue['50'].$value,
          100: tokens.Primitives.color.blue['100'].$value,
          200: tokens.Primitives.color.blue['200'].$value,
          300: tokens.Primitives.color.blue['300'].$value,
          400: tokens.Primitives.color.blue['400'].$value,
          500: tokens.Primitives.color.blue['500'].$value,
          600: tokens.Primitives.color.blue['600'].$value,
          700: tokens.Primitives.color.blue['700'].$value,
          800: tokens.Primitives.color.blue['800'].$value,
          900: tokens.Primitives.color.blue['900'].$value,
          950: tokens.Primitives.color.blue['950'].$value,
        },

        //---------------------------🎨 Tokens Semánticos---------------------------------------//
        // Alias directos basados en tokens primitivos
        'brand-primary': tokens.Semantic.color.main['brand-primary'].$value,
        'brand-secondary': tokens.Semantic.color.main['brand-secondary'].$value,
        'brand-tertiary': tokens.Semantic.color.main['brand-tertiary'].$value,

        // Fondos
        'bg-body': tokens.Semantic.color.background['bg-body'].$value,
        'bg-card': tokens.Semantic.color.background['bg-card'].$value,
        'bg-primary-button': tokens.Semantic.color.background['bg-primary-button'].$value.$value,
        'bg-footer': tokens.Semantic.color.background['bg-footer'].$value,
        'bg-header': tokens.Primitives.color.white.white.$value,
        'bg-drop-down': tokens.Primitives.color.white.white.$value,

        // Texto
        'text-primary': tokens.Semantic.color.text['text-primary'].$value,
        'text-secondary': tokens.Semantic.color.text['text-secondary'].$value,
        'text-tertiary': tokens.Semantic.color.text['text-tertiary'].$value,
        'text-title': tokens.Semantic.color.text['text-title'].$value,
        'text-paragraph': tokens.Semantic.color.text['text-paragraph'].$value,
        'text-contrast': tokens.Semantic.color.text['text-contrast'].$value,

        // Líneas
        'line-button-primary': tokens.Semantic.color.line['button-primary'].$value,
        'line-button-secondary': tokens.Semantic.color.line['button-secondary'].$value,
        'line-button-tertiary': tokens.Semantic.color.line['button-tertiary'].$value,
        'line-card': tokens.Semantic.color.line['card'].$value,
        'line-drop-down': tokens.Primitives.color.gray['300'].$value,
        'line-footer': tokens.Primitives.color.gray['200'].$value,
        'line-header': tokens.Primitives.color.gray['300'].$value,
      },

//-------------------------📏 Spacing----------------------------------------//
spacing: {
  // Primitivos
  'spacing-0': `${tokens.Primitives.spacing['spacing-0'].$value}px`,
  'spacing-1': `${tokens.Primitives.spacing['spacing-1'].$value}px`,
  'spacing-2': `${tokens.Primitives.spacing['spacing-2'].$value}px`,
  'spacing-2.5': `${tokens.Primitives.spacing['spacing-2-5'].$value}px`,
  'spacing-3': `${tokens.Primitives.spacing['spacing-3'].$value}px`,
  'spacing-4': `${tokens.Primitives.spacing['spacing-4'].$value}px`,
  'spacing-5': `${tokens.Primitives.spacing['spacing-5'].$value}px`,
  'spacing-6': `${tokens.Primitives.spacing['spacing-6'].$value}px`,
  'spacing-7': `${tokens.Primitives.spacing['spacing-7'].$value}px`,
  'spacing-8': `${tokens.Primitives.spacing['spacing-8'].$value}px`,
  'spacing-9': `${tokens.Primitives.spacing['spacing-9'].$value}px`,
  'spacing-10': `${tokens.Primitives.spacing['spacing-10'].$value}px`,
  'spacing-11': `${tokens.Primitives.spacing['spacing-11'].$value}px`,
  'spacing-12': `${tokens.Primitives.spacing['spacing-12'].$value}px`,
  'spacing-13': `${tokens.Primitives.spacing['spacing-13'].$value}px`,
  'spacing-14': `${tokens.Primitives.spacing['spacing-14'].$value}px`,
  'spacing-15': `${tokens.Primitives.spacing['spacing-15'].$value}px`,
  'spacing-16': `${tokens.Primitives.spacing['spacing-16'].$value}px`,
  'spacing-17': `${tokens.Primitives.spacing['spacing-17'].$value}px`,
  'spacing-18': `${tokens.Primitives.spacing['spacing-18'].$value}px`,
  'spacing-19': `${tokens.Primitives.spacing['spacing-19'].$value}px`,
  'spacing-20': `${tokens.Primitives.spacing['spacing-20'].$value}px`,
  'spacing-21': `${tokens.Primitives.spacing['spacing-21'].$value}px`,
  'spacing-22': `${tokens.Primitives.spacing['spacing-22'].$value}px`,
  'spacing-23': `${tokens.Primitives.spacing['spacing-23'].$value}px`,
  'spacing-24': `${tokens.Primitives.spacing['spacing-24'].$value}px`,
  'spacing-25': `${tokens.Primitives.spacing['spacing-25'].$value}px`,

  // Semánticos - Gaps y Padding
  "gap-xs-2": `${tokens.Semantic.gap['gap-xl'].$value.$value}px`,
/*   'gap-xs': `${tokens.Semantic.spacing['gap-xs'].$value}px`,
  'gap-sm': `${tokens.Semantic.spacing['gap-sm'].$value}px`,
  'gap-md': `${tokens.Semantic.spacing['gap-md'].$value}px`,
  'gap-lg': `${tokens.Semantic.spacing['gap-lg'].$value}px`,
  'gap-xl': `${tokens.Semantic.spacing['gap-xl'].$value}px`,
  'button-base-x': `${tokens.Semantic.spacing['button-base-x'].$value}px`,
  'button-base-y': `${tokens.Semantic.spacing['button-base-y'].$value}px`,
  'button-lg-x': `${tokens.Semantic.spacing['button-lg-x'].$value}px`,
  'button-lg-y': `${tokens.Semantic.spacing['button-lg-y'].$value}px`,
  'button-xl-x': `${tokens.Semantic.spacing['button-xl-x'].$value}px`,
  'button-xl-y': `${tokens.Semantic.spacing['button-xl-y'].$value}px`,
  'link-button': `${tokens.Semantic.spacing['link-button'].$value}px`,
  'card': `${tokens.Semantic.spacing['card'].$value}px`,
  'drop-down': `${tokens.Semantic.spacing['drop-down'].$value}px`,
  'footer': `${tokens.Semantic.spacing['footer'].$value}px`,
  'header': `${tokens.Semantic.spacing['header'].$value}px`, */
},

      //-------------------------🔲 Border Radius----------------------------------//
      borderRadius: {
        // Primitivos
        'radius-0': `${tokens.Primitives.radius['radius-0'].$value}px`,
        'radius-1': `${tokens.Primitives.radius['radius-1'].$value}px`,
        'radius-2': `${tokens.Primitives.radius['radius-2'].$value}px`,
        'radius-3': `${tokens.Primitives.radius['radius-3'].$value}px`,
        'radius-4': `${tokens.Primitives.radius['radius-4'].$value}px`,
        'radius-5': `${tokens.Primitives.radius['radius-5'].$value}px`,
        'radius-6': `${tokens.Primitives.radius['radius-6'].$value}px`,
        'radius-7': `${tokens.Primitives.radius['radius-7'].$value}px`,
        'radius-8': `${tokens.Primitives.radius['radius-8'].$value}px`,
        'radius-9': `${tokens.Primitives.radius['radius-9'].$value}px`,
        'radius-10': `${tokens.Primitives.radius['radius-10'].$value}px`,
        'radius-11': `${tokens.Primitives.radius['radius-11'].$value}px`,

        // Semánticos
        'card': `${tokens.Semantic.radius['card'].$value}px`,
        'button': `${tokens.Semantic.radius['button'].$value}px`,
        'drop-down': `${tokens.Semantic.radius['dropdown'].$value}px`,
      },

      //-------------------------🔳 Border Width-----------------------------------//
      borderWidth: {
        // Primitivos
        'stroke-0': `${tokens.Primitives.line['stroke-0'].$value}px`,
        'stroke-1': `${tokens.Primitives.line['stroke-1'].$value}px`,
        'stroke-2': `${tokens.Primitives.line['stroke-2'].$value}px`,
        'stroke-3': `${tokens.Primitives.line['stroke-3'].$value}px`,
        'stroke-4': `${tokens.Primitives.line['stroke-4'].$value}px`,
      },

      //-------------------------🌑 Shadows----------------------------------------//
      boxShadow: {
        'shadow-sm': `0 1px 2px 0 ${tokens.Primitives.shadow['color-shadow-sm'].$value}`,
        'shadow': `0 1px 3px 0 ${tokens.Primitives.shadow['color-shadow'].$value}`,
        'shadow-md': `0 4px 6px -1px ${tokens.Primitives.shadow['color-shadow-md'].$value}`,
        'shadow-lg': `0 10px 15px -3px ${tokens.Primitives.shadow['color-shadow-lg'].$value}`,
        'shadow-xl': `0 20px 25px -5px ${tokens.Primitives.shadow['color-shadow-xl'].$value}`,
        'shadow-2xl': `0 25px 50px -12px ${tokens.Primitives.shadow['color-shadow-2xl'].$value}`,
      },

      //-------------------------🔤 Tipografías-------------------------------------//
      fontFamily: {
        montserrat: [`"${tokens.Primitives.typography.font['font-family'].$value}"`, 'sans-serif'],
      },

      //-------------------------📏 Font Size----------------------------------------//
      fontSize: {
        // Primitivos
        'xs': `${tokens.Primitives.typography.sizes['font-size-xs'].$value}px`,
        'sm': `${tokens.Primitives.typography.sizes['font-size-sm'].$value}px`,
        'base': `${tokens.Primitives.typography.sizes['font-size-md'].$value}px`,
        'lg': `${tokens.Primitives.typography.sizes['font-size-lg'].$value}px`,
        'xl': `${tokens.Primitives.typography.sizes['font-size-xl'].$value}px`,
        '2xl': `${tokens.Primitives.typography.sizes['font-size-2xl'].$value}px`,
        '3xl': `${tokens.Primitives.typography.sizes['font-size-3xl'].$value}px`,
        '4xl': `${tokens.Primitives.typography.sizes['font-size-4xl'].$value}px`,
        '5xl': `${tokens.Primitives.typography.sizes['font-size-5xl'].$value}px`,
        '6xl': `${tokens.Primitives.typography.sizes['font-size-6xl'].$value}px`,
        '7xl': `${tokens.Primitives.typography.sizes['font-size-7xl'].$value}px`,

        // Semánticos
        'h1': `${tokens.Semantic['font-sizes'].h1.$value}px`,
        'h2': `${tokens.Semantic['font-sizes'].h2.$value}px`,
        'h3': `${tokens.Semantic['font-sizes'].h3.$value}px`,
        'h4': `${tokens.Semantic['font-sizes'].h4.$value}px`,
        'h5': `${tokens.Semantic['font-sizes'].h5.$value}px`,
        'h6': `${tokens.Semantic['font-sizes'].h6.$value}px`,
        'p': `${tokens.Semantic['font-sizes'].p.$value}px`,
        'span': `${tokens.Semantic['font-sizes'].span.$value}px`,
        'label': `${tokens.Semantic['font-sizes'].label.$value}px`,
      },

      //-------------------------💪 Font Weight-------------------------------------//
      fontWeight: {
        '100': tokens.Primitives.typography.weight['weight-100'].$value,
        '200': tokens.Primitives.typography.weight['weight-200'].$value,
        '300': tokens.Primitives.typography.weight['weight-300'].$value,
        '400': tokens.Primitives.typography.weight['weight-400'].$value,
        '500': tokens.Primitives.typography.weight['weight-500'].$value,
        '600': tokens.Primitives.typography.weight['weight-600'].$value,
        '700': tokens.Primitives.typography.weight['weight-700'].$value,
        '800': tokens.Primitives.typography.weight['weight-800'].$value,
        '900': tokens.Primitives.typography.weight['weight-900'].$value,
      },
    },
  },
  plugins: [],
};