<template> 
<div class="flex-8">
    <Sidebar class="w-30p"/>
    <div class="w-80p">
        <div class="container violet">
            <amasugar-table-shortcake />
        </div>

        <div class="container violet">
            <amasugar-table-chocolate />
        </div>
    </div>
</div>
</template>

<script setup>
    useHead({title: "あま砂糖"})

</script>

<style scoped>
.w-30p{
    width: 30%;
}

.w-80p{
    width: 70%;
}
</style>