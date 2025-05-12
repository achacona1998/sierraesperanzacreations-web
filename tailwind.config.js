/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Mobile: "390px",
        Tablet: "768px",
        Laptop: "1280px",
        Desktop: "1920px",
        DesktopHd: "2560px",
      },
      backgroundImage: {
        PythonImg: "url('/src/assets/img/Python.avif')",
        CollaborativeImg: "url('/src/assets/img/Collaborative.avif')",
        ProvenImg: "url('/src/assets/img/ProvenTrack.avif')",
        HeroImg: "url('/src/assets/img/Hero.avif')",
        JsImg: "url('/src/assets/img/JavaScript.avif')",
        DevOpsImg: "url('/src/assets/img/DevOps.avif')",
      },
    },
  },
  plugins: ["tailwindcss-animated"],
};
