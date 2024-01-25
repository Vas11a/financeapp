/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oBut: '#FF8442',
        oBg: '#FFC9AF',
      },
      maxWidth:{
        form: '500px'
      },
      spacing: {
        form: '59.5px',
        onepx: '1px',
        switch: '42px'
      },
      borderWidth: {
        calendar: '0.5px',
      },
    },
  },
  plugins: [],
}

