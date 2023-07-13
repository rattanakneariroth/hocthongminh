/** @type {import('tailwindcss').Config} */
const flattenColors = require("tailwindcss/src/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            "--text-shadow-color": value,
          }),
        },
        {
          values: flattenColors(theme("colors", {})),
          type: "color",
        }
      );

      matchUtilities(
        {
          "text-shadow": (value) => {
            const shadows = [
              `calc(var(--text-shadow-size) * 1) calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * -1) calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * 1) calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * -1) calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * 1) 0 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * -1) 0 0 var(--text-shadow-color, hotpink)`,
              `0 calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
              `0 calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
            ];

            return {
              "--text-shadow-size": value,
              "text-shadow": shadows.join(", "),
            };
          },
        },
        {
          values: theme("spacing", {}),
          type: "length",
        }
      );
    },

    // ...
  ],
};
