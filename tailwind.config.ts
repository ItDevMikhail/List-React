import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  /*   theme: {
    extend: {
      fontSize: {
        xxs: "30px",
      },
      maxHeight: {
        "img-sm": "var(--image-height-small)",
        "img-md": "var(--image-height-medium)",
        "img-lg": "var(--image-height-large)",
        "img-xl": "var(--image-height-xlarge)",
      },
      padding: {
        "7.5": "1.875rem",
      },
      colors: {
        my: "hsl(184, 98%, 35%)",
        rate: {
          DEFAULT: "hsl(var(--bg-rate))",
          bg: "hsl(var(--bg-rate))",
        },
        list: {
          item: {
            DEFAULT: "hsl(var(--bg-list-item))",
            bg: "hsl(var(--bg-list-item))",
          },
        },
      },
    },
  }, */
  plugins: [lineClamp],
};
