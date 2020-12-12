module.exports = {
  future: {},
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      width: {
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '200': '50rem'
      },
      screens: {
        '2xl': '1560px'
      },
      maxHeight: {
        '32': '8rem',
        '64': '16rem',
        '100': '25rem',
        '120': '30rem'
      },
      maxWidth: {
        xss: '16rem',
        '100': '25rem',
        '160': '40rem'
      },
      minWidth: {
        '100': '25rem'
      },
      zIndex: {
        '100': 100
      }
    }
  },
  variants: {},
  plugins: []
};
