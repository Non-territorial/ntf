/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Add this line to include Autoprefixer
  },
};

export default config;
