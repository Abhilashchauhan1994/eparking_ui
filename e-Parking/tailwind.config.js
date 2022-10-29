
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.scss',
    './projects/**/*.html',
    './projects/**/*.ts',
    './projects/**/*.scss'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
        Grotto:'#189AB4',
        Navy:'#05445E',
        Tiffany:'#A4E5E0',
        aliceblue: '#d6e2e9ff',
        beaublue: '#bcd4e6ff',
        powderblue: '#c5deddff',
        darkslateblue: '#54478cff',
        sapphireblue: '#2c699aff',
        palecerulean: '#99c1deff',
        prussianblue: '#012a4aff',
        indigodye: '#013a63ff',
        indigodye2: '#01497cff',
        usafablue: '#014f86ff',
        sapphireblue: '#2a6f97ff',
        celadonblue: '#2c7da0ff',
        bluegreen: '#468fafff',
        maximumblue: '#61a5c2ff',
        darkskyblue: '#89c2d9ff',
        lightblue: '#a9d6e5ff',
        cadetblue: '#4d908eff',
        queenblue: '#577590ff',
        cgblue: '#277da1ff'
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
        palepink: '#fde2e4ff',
        mimipink: '#fad2e1ff'
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
        charcoal: '#264653ff',
        sandybrown: '#f4a261ff'
      },
      white: {
        DEFAULT: '#f9fafc',
        linen: '#fff1e6ff',
        champagnepink: '#eddcd2ff',
        powderblue: '#c5deddff'
      },
      yellow: {
        DEFAULT: '#f6f048',
        light: '#ffe081',
        maizecrayola: '#f9c74fff',
        yelloworangecolor: '#f8961eff',
        orangeyellowcrayola: '#e9c46aff',
        chromeyellow: '#ffaa00ff',
        selectiveyellow: '#ffb700ff',
        mikadoyellow: '#ffc300ff',
        cyberyellow: '#ffd000ff',
        sizzlingsunrise: '#ffdd00ff',
        middleyellow: '#ffea00ff'
      },
      Red: {
        DEFAULT: '#e01e37',
        light: '#f25c54',
        redsalsa: '#f94144ff',
        orangered: '#f3722cff',
        mangotango: '#f9844aff',
        burntsienna: '#e76f51ff',
        heatwave: '#ff7b00ff',
        darkorange: '#ff8800ff',
        orangeweb: '#ffa200ff'
      },
      green: {
        DEFAULT: '#49a078',
        light: '#52b788',
        zomp: '#43aa8bff',
        pistachio: '#90be6dff',
        persiangreen: '#2a9d8fff'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
