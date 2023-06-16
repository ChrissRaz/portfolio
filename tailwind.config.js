/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: "url('./public/images/background.png')",
      // backgroundSize: {
      //   "cover": "cover"
      // }
    },
    colors: {
      'principal': '#05c4ba',
      "secondaire": "#FFFFFF"
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    animation: {

      wave: "wave 2s linear infinite",
      gelatine: "gelatine 1.2s infinite",
      gelatineSlow: "gelatine 1 infinite"

    },
    keyframes: {

      wave: {

        "0%": { transform: "rotate(0.0deg)" },
        "10%" :{ transform: "rotate(14.0deg)" },
        "20%" : { transform: "rotate(-8.0deg)" },
        "30%" : { transform: "rotate(14.0deg)" },
        "40%" : { transform:"rotate(-4.0deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": { transform: "rotate( 0.0deg)" } ,
       "100%": { transform: "rotate( 0.0deg)" }

      },
      gelatine: {
        "from, to" : { transform: "scale(1, 1)"},
        "25%" : { transform: "scale(0.9, 1.1)"},
        "50%" : { transform: "scale(1.1, 0.9)"},
        "75%" : { transform: "scale(0.95, 1.05)"}
      }
    }
  },
  plugins: [],
}
