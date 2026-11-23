# Danae Papadopetraki — profile website

A static website for GitHub Pages. No installation, build step, JavaScript framework or tracking. The top navigation and logo use DM Sans and Instrument Serif, self-hosted in `fonts/`; include that folder when uploading. The rest uses system fonts. Open index.html locally to preview. All asset links work under a GitHub project subdirectory too.

## Publish without affecting the tennis project

The profile and tennis website are separate GitHub Pages sites:
- Profile repository: `danae1968.github.io` → `https://danae1968.github.io/`
- Existing tennis repository: `tennis_database` → `https://danae1968.github.io/tennis_database/`

Upload this package ONLY to `danae1968.github.io`, not to `tennis_database`. Keep the tennis repository and its Pages settings unchanged. Do not add a custom domain or a `tennis_database/` directory as part of this setup. If a root-profile repository already exists, merge with it deliberately. The profile links to the existing tennis site without copying or replacing its pages.

1. Sign into the intended GitHub account. Create a public repository named danae1968.github.io for the main profile URL, or use a project repository. If that repository already exists, merge deliberately instead of overwriting its existing contents.
2. Upload all website files to the root of the repository, including .nojekyll.
3. In Settings → Pages, choose Deploy from a branch, main, /(root), and Save.
4. Open the URL GitHub displays after deployment.
Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Add a side project
Find the PROJECT ENTRY comment in index.html. Copy the complete <article class="featured-project"> ... </article> block immediately below it and paste it after the existing article, inside the projects section. Update the title, description, image, alt text, topic tags, project link and repository link. Increment the visible project number. Add a local image file next to index.html. Keep the description factual and concise: question, contribution, methods, result. No blank placeholder cards are shown to visitors.

## Update content
Edit text and links in index.html and styling in style.css. The experience rows use native HTML details/summary controls and work without JavaScript. Replace Danae_Papadopetraki_CV.pdf to update the download.

`motion.js` adds one-time fade-and-slide reveals as sections enter the viewport. Content stays visible without JavaScript, and scroll/reveal animations respect reduced-motion preferences.

## Public contact details
The profile lists Basel, Switzerland, danaepapadopetraki@gmail.com and the LinkedIn URL supplied by the user. The downloadable public CV omits phone and email; the private application CV is unchanged.

## Source and attribution
Professional information comes from the supplied CV. Tennis project description and the figure are from https://danae1968.github.io/tennis_database/ . The figure links to its original analysis. Tennis project data attribution: TennisMyLife and Jeff Sackmann / Tennis Abstract (CC BY-NC-SA 4.0); see the original project for methods, licences and data sources. Do not interpret this portfolio as independent validation of the research findings.

Nakama (https://github.com/cisakoglou/nakama) is co-developed with Danae; the screenshot `nakama.jpg` is of its landing page. The "Get in touch" button opens an email to the public contact address.

Instrument Serif and DM Sans are distributed under the SIL Open Font License 1.1. Their copyright notices and licenses are included in `fonts/`.

## Suggested next additions
- One short clinical research case study, using only material approved for public sharing.
- A professional portrait if desired; the current design works without one.
