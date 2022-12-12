<template>
    <div>
        <h2>A server-side rendered page:</h2>
        <p>{{ text[0] }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    async fetch() {
        console.log('This log line can show up on the server or the client, depending on how the page is rendered!');
        this.text = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').then(res => res.json());
    }
}
</script>
