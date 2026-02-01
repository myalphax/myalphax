/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ui-black': '#0A0A0A',      // 纯黑背景
        'ui-card': '#161616',       // 卡片深灰
        'ui-accent': '#FFFFFF',     // 纯白文字
        'ui-gray': '#888888',       // 辅助文字
        'ui-border': 'rgba(255,255,255,0.08)', // 极细边框
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% -20%, #222222, #0A0A0A)',
      }
    },
  },
  plugins: [],
}