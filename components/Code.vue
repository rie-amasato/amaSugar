<template>
    <code class="codebox">
        {{code}}
    </code>
</template>

<style scoped>
.codebox{
    white-space: pre-wrap;
}
</style>

<script setup>
const props=defineProps(["code"])
</script>