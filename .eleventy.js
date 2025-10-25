import { DateTime } from "luxon";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.ignores.add("README.md");

    eleventyConfig.addFilter("truncate", function (str, len) {
      if (!str) return "";
      const words = str.split(/\s+/);
      if (words.length <= len) return str;
  
      return words.slice(0, len).join(" ") + "...";
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'pst'}).toFormat("dd MMM yyyy hh:mm");
    });
  };