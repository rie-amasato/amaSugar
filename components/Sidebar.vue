<script setup>
const links=ref([
    {text: "containers", path: "/ils-food-cake/containers"},
    {text: "tables", path: "/ils-food-cake/tables"}
])
</script>

<template>
<div class="sticky-t90 container white">

<div v-for="link in links" :key="link.path">
    <router-link :to="link.path">
        {{link.text}}
    </router-link>
</div>
    <!--<div v-for="link in links" :key="link.path">
        <router-link>
            {{link.text}}
        </router-link>
    </div>-->
</div>
</template>

<style scoped>
.sticky-t90{
    position: sticky;
    top: 90px;
    height: calc(100dvh - 150px);
}

.ma-auto{
    margin: 10px auto;
}
</style>