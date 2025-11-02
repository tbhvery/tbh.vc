import RSSParser from "rss-parser";
import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
  const feedUrl = "https://status.cafe/users/very.atom";

  // Fetch + cache the feed for 1 hour
  const xml = await EleventyFetch(feedUrl, {
    duration: "1h",
    type: "text",
  });

  const parser = new RSSParser();
  const feed = await parser.parseString(xml);

  // Grab just the latest entry
  const latest = feed.items[0]; // Atom feeds are usually ordered newest → oldest

  // Return only what you need
  return {
    title: latest.title,
    link: latest.link,
    content: latest.contentSnippet || latest.content,
    date: latest.isoDate,
  };
}