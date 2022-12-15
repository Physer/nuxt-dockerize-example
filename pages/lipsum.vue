<script setup lang="ts">
import { generateLoremIpsum, getStaticLipsum } from '@physer/lipsum-generator'

const lipsum = generateLoremIpsum();
const staticLipsum = getStaticLipsum();
</script>

<template>
    <div>
        <h2>This page generates a piece of lorem ipsum through a private module:</h2>
        <p>{{ lipsum }}</p>
        <p>{{ staticLipsum }}</p>
    </div>
</template>