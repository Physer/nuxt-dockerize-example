<template>
    <div>
        <h2>This page shows environment variables:</h2>
        <p>[Public] Application name: {{ this.$config.public.applicationName }}</p>
        <p>A private environment variable is only visible on the server (see console log) - should be printed here: {{ this.$config.secret }}</p>
        <p>If you do not see a secret in your browser, that's expected behaviour</p>
        <br />
        <p>Note: the private environment variables are only available when using SSR, not when using SSG as there is no server.</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('A secret environment variable is: ', this.$config.secret);
    }
}
</script>