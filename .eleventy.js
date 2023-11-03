const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/app.js");

  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
