# Fortnite OG Drop Guide

Static browser app for exploring the best Fortnite OG drop spots by season.

## Run

Open [index.html](/C:/Users/Jim/OneDrive%20-%20Higgins/Documents/Playground/index.html) in any modern browser on Windows.

## Publish With GitHub Pages

This repo is set up for a Codex-friendly GitHub Pages workflow.

1. Create a GitHub repository and push this project to the `main` branch.
2. In GitHub, open `Settings` > `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions` as the source.
4. Push changes to `main` and GitHub will publish the site automatically using [.github/workflows/deploy-pages.yml](/C:/Users/Jim/OneDrive%20-%20Higgins/Documents/Playground/.github/workflows/deploy-pages.yml).

After the first successful deploy, the site URL will usually be:

- `https://<your-github-username>.github.io/<your-repository-name>/`

Because the app uses relative asset paths, it is safe to host from a project subpath on GitHub Pages.

## Files

- `index.html`: app shell and layout regions
- `styles.css`: responsive visual design and component styling
- `src/main.js`: season data, spot data, and UI rendering
- `.github/workflows/deploy-pages.yml`: automatic GitHub Pages deployment workflow

## What It Does

- Browse curated drop spots for Fortnite OG seasons
- Compare loot, rotation, and risk scores
- View a detailed opening plan and loot highlights for each spot
- See map-based location and mobility guidance for each drop spot
- Use a dependency-free setup that runs locally without Xcode or Node
