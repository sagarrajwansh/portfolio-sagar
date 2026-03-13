module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#4F46E5",
        "bg-dark": "#0F111A",
        "text-light": "#E5E7EB",
        "btn-hover": "#2563EB",
        secondary: "#22D3EE",
        highlight: "#E11D48",
        success: "#10B981",
      },

      animation: {
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "-200% 0%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
