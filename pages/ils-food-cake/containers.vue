<template> 
<div class="flex-8">
    <Sidebar class="w-sidebar"/>
    <div class="w-80p">
        <div class="mt-4">
            <amasugar-containers />
        </div>
    </div>
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