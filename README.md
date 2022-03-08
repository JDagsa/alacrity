# Project Alacrity

![](https://img.shields.io/badge/website-online-brightgreen) ![](https://img.shields.io/badge/tailwind-v3.0.23-blue) ![](https://img.shields.io/badge/version-2.0-blue)

Project Alacrity is a project by the Ministry of Technology under the leadership of Jayden Dagsa, to accomplish three things.

1. Abandon the use of external CSS component libraries
2. Simplify development/updating and create a responsive website.

Alacrity is in version 2.

## Prior versions
Alacrity 1.0 was the first version of this project. It set out to accomplish the same two goals that 2.0 currently sets out to accomplish, but did not mention the simplification of the development and updating process. As a result, it became very hard to style the HTML and create the responsive expereince, and ultimately was abandoned in favor of Tailwind and Alacrity 2.0.

## Setting up

1. Install TailwindCSS via npm. Since we already have a config file, it is fine to leave it untouched.
`npm install -D tailwindcss`
2. Build the html and you're probably done.
`npx tailwindcss -i ./src/input.css -o ./style.css --watch`

If there are problems, you may open an issue in the "issues" tab.
