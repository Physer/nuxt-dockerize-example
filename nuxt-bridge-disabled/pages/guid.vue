<template>
    <div>
        <h2>A page that generates a GUID using an external library (<a href="https://www.npmjs.com/package/uuid">UUID</a>):</h2>
        <p>{{ this.guid }}</p>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
            guid: ''
        }
    },
    fetch() {
        this.guid = uuidv4();
    }
}
</script>