/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#202223',
        'danger': '#D82C0D',
        'danger-bg': '#FFF4F4',
        'success': '#008060',
        'grey': '#E4E5E7',
        'primary': '#022647',
        'secondary': '#D3E4F3',
        'tertiary': '#A9BED1',
        'interactive': '#0B5ED7',
        'placeholder': '#6D7175',
        'border': '#8C9196',
        'disabled-bg': '#F1F2F3',
        'disabled-bg-light': '#FAFBFB',
        'disabled-text': '#8C9196',
      },
      fontSize: {
        'body': '16px',
        'body-sm': '14px',
        'h1': '32px',
        'h2': '28px',
        'h3': '24px',
        'h4': '20px',
      }
    }
  },
  plugins: [],
}