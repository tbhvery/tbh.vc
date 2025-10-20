export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.ignores.add("README.md");

    eleventyConfig.addFilter("truncate", function (str, len) {
      if (!str) return "";
      if (str.length <= len) return str;
    });
  };