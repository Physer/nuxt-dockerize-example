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
            text: 'Loading...'
        }
    },
    async fetch() {
        this.text = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').then(res => res.json());
    }
}
</script>