<script setup>
    const config = useRuntimeConfig();
    const applicationName = config.public.applicationName;
    const secret = config.secret;
    console.log('A secret environment variable is: ', secret);
</script>

<template>
    <div>
        <h2>This page shows environment variables:</h2>
        <p>[Public] Application name: {{ applicationName }}</p>
        <p>A private environment variable is only visible on the server (see console log) - should be printed here: {{ secret }}</p>
        <p>If you do not see a secret in your browser, that's expected behaviour</p>
    </div>
</template>