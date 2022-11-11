# nuxt-dockerize-example
A minimal NuxtJS docker image example application

## Nuxt Bridge
A preliminary version using Nuxt Bridge (https://v3.nuxtjs.org/bridge/overview/) is available in the `nuxt-bridge` directory.
Note that is not fully functional and still work-in-progress, which may result in undesired behaviour.

## Custom modules and server middleware
This application sports four different modules.
1. The `customModule`. This module adds a badge to the Nuxt start-up process saying the module is initialized. This is a `buildModule`.
2. The `middlewareModule`. This module logs every URL request it intercepts. This is a `module` and pushes `serverMiddleware`.
2. The `loremModule`. This module generates random lorem ipsum upon start-up using an external package: [lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum). This is a `buildModule`.
2. The `uuidModule`. This module logs generates a random UUID on start-up using an external package: [uuid](https://www.npmjs.com/package/uuid). This is a `module`.

## Available pages
Currently there are 4 pages available:
1. `/` - The home page, a page with static data
2. `/ssr` - A page that dynamically renders data from an external API
3. `/env` - A page that retrieves both a public and a private environment variable and prints them on-screen
4. `/guid` - A page that prints a GUID generated by an external library

## How to run
Copy the `.env.example` file and rename it to `.env`.
Run the following commands:
1. `npm i`
2. `npm run build`
3. `npm run start`

## Docker
### Docker Compose

The easiest way to get the application up and running is by using Docker Compose.
Simply run the command `docker-compose up -d` in the root of this repository. If you want to rebuild the image you can run the following Docker Compose command: `docker-compose up -d --build`.

This will result in two applications running:
1. The application now runs on http://localhost:3000/

### Manually building the image
1. Build the docker image by running `docker build -f .\Dockerfile . -t nuxt-dockerize-example`
2. Run the docker image by running `docker run -d -p 3000:3000 nuxt-dockerize-example`