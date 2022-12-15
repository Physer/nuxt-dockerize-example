<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
const guid = uuidv4();
</script>

<template>
    <div>
        <h2>A page that generates a GUID using an external library (<a href="https://www.npmjs.com/package/uuid">UUID</a>):</h2>
        <p>{{ guid }}</p>
    </div>
</template>