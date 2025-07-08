/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ App Router 사용 시 (여기선 선택사항)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
