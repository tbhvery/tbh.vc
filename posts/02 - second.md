---
title: how this website works
tags:
  - post
  - webdev
date: 2025-10-24
---
good news everyone!

i've updated the crap out of the website and now it has a little more **personality**

this is also a great time to explain the architecture of this website...

this website is mostly developed using html, css, and javascript; i prefer using visual studio code as my text editor, but i should probably use [vscodium](https://vscodium.com) instead (it's the basically the same thing, but without any microsoft telemetry bs).

i'm also using a static site generator called [eleventy](https://www.11ty.dev) (i'm only using it because i've heard that it's a popular one to use on neocities lol; i also like learning things). eleventy makes it convenient for people to create page layouts and blog posts. you can basically create a template for your blog posts and then add markdown (.md, a fancy version of .txt) files to your site to create posts.

although you will need to understand npm (a node.js package manager) first before you can start using eleventy... node.js is a whole can of worms, and it's not really that easy to get into if you're not already familiar with web development. maybe i can talk about it more in-depth in another post.

whenever i finish editing this website, i push my changes to [github](https://github.com/tbhvery/tbh.vc) and it runs a script/workflow on [github actions](https://github.com/tbhvery/tbh.vc/actions/workflows/main.yml) to automatically build the website and upload only the "built" files over to neocities (thanks to [deploy-to-neocities from bcomnes](https://github.com/marketplace/actions/deploy-to-neocities)). git and github actions are another can of worms...

anyway thanks for attending my ted presentation! :D