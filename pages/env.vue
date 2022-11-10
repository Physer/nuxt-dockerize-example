<template>
    <div>
        <h2>This page shows environment variables:</h2>
        <p>[Public] Application name: {{ this.$config.applicationName }}</p>
        <p>A private environment variable is only visible on the server (see console log) - should be printed here: {{ this.$config.secret }}</p>
        <p>If you do not see a secret in your browser, that's expected behaviour</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('A secret environment variable is: ', this.$config.secret);
    }
}
</script>