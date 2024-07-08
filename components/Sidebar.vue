<script setup>
const links=ref([
    {text: "top", path: "/ils-food-cake"},
    {text: "containers", path: "/ils-food-cake/containers"},
    {text: "tables", path: "/ils-food-cake/tables"}
])
</script>

<template>
<div class="sticky-t90 container white">

    <div v-for="link, i in links" :key="link.path">
        <div class="container w-100" :class="colors[i%7]">
            <router-link :to="link.path">
                {{link.text}}
            </router-link>
        </div>
    </div>

</div>
</template>

<script>
const colors=ref(["violet", "red", "pink", "orange", "yellow", "green", "blue"])
</script>

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