<template> 
    <div class="container violet">
        <h2>ショートケーキ表</h2>
        <amasugar-table-shortcake />
    </div>

    <div class="container violet">
        <h2>チョコレートケーキ表</h2>
        <amasugar-table-chocolate />
    </div>
</template>

<script setup>
    useHead({title: "あま砂糖"})

</script>

<style scoped>
.w-sidebar{
    width: 30%;
    max-width: 240px;
}

.w-80p{
    width: 70%;
}
</style>