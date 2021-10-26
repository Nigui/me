const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano")({
      autoprefixer: false,
      preset: ["default"],
    }),
    // Only purge css on production
    production &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.html", "./src/**/*.svelte"],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g || []),
      }),
  ],
};
