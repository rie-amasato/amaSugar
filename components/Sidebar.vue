<script setup>
const links=ref([
    {text: "トップ", path: "/ils-food-cake"},
    {text: "グリッドレイアウト", path: "/ils-food-cake/gridlayout"},
    {text: "カラー", path: "/ils-food-cake/colors"},
    {text: "コンテナ", path: "/ils-food-cake/containers"},
    {text: "テーブル", path: "/ils-food-cake/tables"},
    {text: "アニメーション", path: "/ils-food-cake/animation"},
    {text: "トースト", path: "/ils-food-cake/toast"},
    {text: "その他作ったもの", path: "/ils-food-cake/products"},
])

const colors=ref(["violet", "red", "pink", "orange", "yellow", "green", "blue"])
</script>

<template>
<div class="container white grid">
    <router-link 
        v-for="link, i in links"
        :key="link.path" 
        :to="link.path"
        class="s1 e5"
    >
        <div
        class="s1 e5 container" 
        :class="colors[i%7]">
                {{link.text}}
        </div>
    </router-link>
</div>
</template>

<style scoped>
.sticky-t90{
    position: sticky;
    top: 90px;
    min-height: calc(100dvh - 150px);
    height: fit-content;
}

.container{
    margin-top: 8px;
    margin-bottom: 16px;
}

.ma-auto{
    margin: 10px auto;
}
</style>