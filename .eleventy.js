export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.ignores.add("README.md")
  };