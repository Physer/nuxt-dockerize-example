<template>
    <div>
        <h2>This page generates a piece of lorem ipsum through a private module:</h2>
        <p>{{ lipsum }}</p>
    </div>
</template>

<script>
import generateLoremIpsum from '@physer/lipsum-generator'

export default {
    data() {
        return {
            lipsum: ''
        }
    },
    fetch() {
        this.lipsum = generateLoremIpsum();
    }
}
</script>