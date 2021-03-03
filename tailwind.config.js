const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')

module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: (content) => [
        // This is an internal Tailwind function that we're not supposed to be allowed to use
        // So if this stops working, please open an issue at
        // https://github.com/babichjacob/sapper-postcss-template/issues
        // rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
      ],
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        main: '#6516a1',
        base: '#777777',
        success: '#62b959',
        danger: '#e27c7c',
      },
      height: {
        video: '480px',
        videoList: '608px',
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
      },
      width: {
        toggle: '4%',
        toogleSm: '8%',
        wide: '14%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
