<script setup>
console.log('This log line can show up on the server or the client, depending on how the page is rendered!');
const text = await useFetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1');
</script>

<template>
    <div>
        <h2>A server-side rendered page:</h2>
        <p>{{ text.data }}</p>
    </div>
</template>
