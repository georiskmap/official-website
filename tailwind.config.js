/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandgreen: '#134A39',
        lightgreen: '#EAF7F3',
        brandgray: '#1A1A1A',
        tertiary: '#415754',
        textgreen: '#134A39',
        primary500: '#2DB187',
        foundation: '#207E60',
        'transparent': 'rgba(0, 0, 0, 50%)',
      },
      gridTemplateColumns: {
        'temp': '2.5fr 2fr',
        'temp2': 'repeat(auto-fit, minmax(300px, 1fr))',
        'temp3': 'auto 1.5fr',
        'temp4': 'repeat(3, 1fr)',
        'temp5': 'repeat(5, 1fr)',
        'temp6': 'repeat(auto-fit, minmax(200px, 1fr))',
        'customGrid': 'repeat(auto-fit, minmax(200px, 1fr))',
        'customGrid2': 'repeat(auto-fit, minmax(250px, 1fr))',
        'customGrid3': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      gridTemplateRows: {
        'row': 'auto 1fr',
        'row2': '1fr auto'
      },
      // NOTE: these are emitted in declaration order, and most are max-width. Because
      // 'mob' (600) is declared before 'midDesk' (800), both match on a phone and the
      // midDesk rule wins — so `midDesk:text-sm mob:text-xs` silently renders text-sm on
      // a 375px screen. Do not stack mob: and midDesk: on the same property. The root fix
      // is to reorder these max-width entries largest to smallest; that changes emitted
      // CSS order site-wide, so it needs a visual pass over every page first.
      screens: {
        'tab': {'max': '900px'},
        'tab2': {'max': '1200px'},
        'tab3': {'max': '1058px'},
        'break': {'max': '1058px'},
        'break2': {'max': '1030px'},
        'break3': {'min': '1030px'},
        'mob': {'max': '600px'},
        'midDesk': {'max': '800px'},
        'desk': {'min': '900px'},
        'window': {'min': '1300px'},
      },
      fontFamily: {
        'cabin': ['Cabin'],
        'merri': ['Merriweather']
      }
    },
  },
  plugins: [],
}