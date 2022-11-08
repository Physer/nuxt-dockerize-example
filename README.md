# nuxt-dockerize-example
A minimal NuxtJS docker image example application

## Nuxt Bridge
Nuxt Bridge (https://v3.nuxtjs.org/bridge/overview/) is implemented and all commands are using `nuxi` as part of the pending migration from NuxtJS v2 to NuxtJS v3!

See the `package.json` for more details about which `nuxi` commands are available out-of-the-box.

## Available pages
Currently there are 2 pages available:
1. `/` - The home page, a page with static data
2. `/ssr` - A page that dynamically renders data from an external API

## How to run
Navigate to the `nuxt.config.js` file and verify whether SSR or SSG is used.

### SSR
If you're using SSR (the default mode, when the target and ssr values are commented out or explicitly set to SSR), run the following commands:
1. `npm i`
2. `npm run build` or `npm run build:standalone`
3. `npm run start`

### SSG
If you're using SSG (when the `target` is set to `static` and the `ssr` boolean is set to `true`), run the following commands:
1. `npm i`
2. `npm run generate`
3. `npm run start`

## Docker
If you're using the Docker containers, check whether SSR or SSG is used as previously mentioned in this `README.md`.

### SSR
1. Build the SSR docker image by running `docker build -f .\Dockerfile.ssr . -t nuxt-dockerize-example-ssr`
2. Run the SSR docker image by running `docker run -d -p 3000:3000 nuxt-dockerize-example-ssr`

### SSG
1. Build the SSR docker image by running `docker build -f .\Dockerfile.ssg . -t nuxt-dockerize-example-ssg`
2. Run the SSR docker image by running `docker run -d -p 3001:3000 nuxt-dockerize-example-ssg`
