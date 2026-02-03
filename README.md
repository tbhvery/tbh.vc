# tbh.vc

a random personal website using 11ty and hosted by neocities.org!

i'm just gonna throw a bunch of random stuff into this website.

yup.

## Testing Locally

1. Install deps:
   - `npm install`
2. Build once:
   - `npx @11ty/eleventy`
   - Output goes to `_site/`.
3. Run the local dev server:
   - `npx @11ty/eleventy --serve`
   - Eleventy will serve the site (defaults to http://localhost:8080).

## CI/CD (GitHub Actions)

This repo deploys to Neocities via GitHub Actions when changes are pushed to `main`.

Workflow: `.github/workflows/main.yml`
What it does:
1. Checks out the repo.
2. Sets up Node (latest LTS).
3. Installs dependencies and builds the site with Eleventy.
4. Deploys the `_site/` folder to Neocities using `bcomnes/deploy-to-neocities@v3`.

Required secrets:
- `NEOCITIES_API_TOKEN` in GitHub repo secrets (used to authenticate deploys).

Notes:
- Deploys are serialized via a concurrency group to avoid overlapping releases.

## AI Tools Policy

I am experimenting with AI, but I use Codex and other AI tools only to automate repetitive tasks. I do not "vibe code" this website.
