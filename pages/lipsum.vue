<template>
    <div>
        <h2>This page generates a piece of lorem ipsum through a private module:</h2>
        <p>{{ lipsum }}</p>
        <p>{{ staticLipsum }}</p>
    </div>
</template>

<script>
import { generateLoremIpsum, getStaticLipsum } from '@physer/lipsum-generator'

export default {
    data() {
        return {
            lipsum: '',
            staticLipsum: getStaticLipsum()
        }
    },
    fetch() {
        this.lipsum = generateLoremIpsum();
    }
}
</script>