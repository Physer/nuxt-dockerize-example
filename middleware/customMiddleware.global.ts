export default defineNuxtRouteMiddleware((to) => {
    console.log('The custom middleware intercepted the following URL:', to.fullPath);
});