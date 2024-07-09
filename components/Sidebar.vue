<script setup>
const links=ref([
    {text: "top", path: "/ils-food-cake"},
    {text: "gridlayout", path: "/ils-food-cake/gridlayout"},
    {text: "containers", path: "/ils-food-cake/containers"},
    {text: "tables", path: "/ils-food-cake/tables"}
])

const colors=ref(["violet", "red", "pink", "orange", "yellow", "green", "blue"])
</script>

<template>
<div class="container white grid">
    <div v-for="link, i in links"
     :key="link.path"
     class="s1 e5 container" 
     :class="colors[i%7]">
            <router-link :to="link.path">
                {{link.text}}
            </router-link>
    </div>
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