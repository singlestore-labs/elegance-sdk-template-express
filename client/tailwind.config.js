/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        s2: {
          purple: {
            "07": "#DFA1FF"
          },
          link: "#820DDF"
        }
      }
    }
  },
  plugins: []
};
