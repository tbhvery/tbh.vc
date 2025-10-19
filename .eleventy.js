export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
          output: "public"
        }
      };
  };