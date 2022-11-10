# nuxt-dockerize-example
A minimal NuxtJS docker image example application

## Nuxt Bridge
Nuxt Bridge (https://v3.nuxtjs.org/bridge/overview/) is implemented and all commands are using `nuxi` as part of the pending migration from NuxtJS v2 to NuxtJS v3!

See the `package.json` for more details about which `nuxi` commands are available out-of-the-box.

## Available pages
Currently there are 3 pages available:
1. `/` - The home page, a page with static data
2. `/ssr` - A page that dynamically renders data from an external API
3. `/env` - A page that retrieves both a public and a private environment variable and prints them (only available on SSR!)
4. `/guid` - A page that prints a GUID generated by an external library

## How to run
Copy the `.env.example` file and rename it to `.env`.
If you wish to run the configuration in SSG rather than in SSR, change the value of the `SSR` environment variable to `false`.

### SSR
If you're using SSR, run the following commands:
1. `npm i`
2. `npm run build`
3. `npm run start`

### SSG
If you're using SSG, run the following commands:
1. `npm i`
2. `npm run generate`
3. `npm run start`

## Docker
If you're using the Docker containers, check whether SSR or SSG is used as previously mentioned in this `README.md`.

### Docker Compose

The easiest way to get these applications (both SSG and SSR examples) up and running is by using Docker Compose.
Simply run the command `docker-compose up -d` in the root of this repository. If you want to rebuild the images you can run the following Docker Compose command: `docker-compose up -d --build`.

This will result in two applications running:
1. The SSR application now runs on http://localhost:3000/
2. The SSG application now runs on http://localhost:3001/

### Manually building the images
#### SSR
1. Build the SSR docker image by running `docker build -f .\Dockerfile.ssr . -t nuxt-dockerize-example-ssr`
2. Run the SSR docker image by running `docker run -d -p 3000:3000 nuxt-dockerize-example-ssr`

#### SSG
1. Build the SSR docker image by running `docker build -f .\Dockerfile.ssg . -t nuxt-dockerize-example-ssg`
2. Run the SSR docker image by running `docker run -d -p 3001:3000 nuxt-dockerize-example-ssg`