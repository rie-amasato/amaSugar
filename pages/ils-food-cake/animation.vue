<template>
    <div class="container white">
        <h2>ローディング用伸びる(?)素材</h2>
        <p>ちなみに、トルコの伸びるアイスは"ドンドゥルマ"言って、原材料に秘密があるらしいですよ</p>
        <p>並べるとこんな感じ</p>
        <div class="mh-auto"
            style="
                display: flex;
                gap: 16px"
            >
                <div v-for="(color, i) in colors.slice(1)" 
                  :class="{dondurma: true, [color]: true}" 
                  :style="`animation-delay: -${Math.floor((i+1)*2, 3)/10}s`" 
                />
        </div>

        <div v-for="(color, i) in colors"
            style="display: flex;gap: 16px">

            <div :class="{container: true, [colors[i+1]]: true, grid: true}">
                <div 
                  :class="{'mh-auto': true, s1: true,e2: true,dondurma: true, [color]: true}" 
                  :style="`animation-delay: -${Math.floor((i+1)*2, 3)/10}s`" 
                />

                <Code 
                  class="mv-auto s2 e5"
                  :code='`class="dondurma ${color}" style="animation-delay: -${Math.floor((i+1)*2, 3)/10}s"`' 
                />
            </div>
        </div>
    </div>

    <!--<div class="container white">
        まわるドーナツ
        <div class="rotate" style="width: fit-content;">
        🍩
        </div>
    </div>-->
</template>

<style scoped>
.mv-auto{
    margin-top: auto;    
    margin-bottom: auto;
}

.mh-auto{
    width: fit-content;
    margin-left: auto; 
    margin-right: auto;
}
</style>

<script setup>
useHead({title: "あま砂糖 | アニメーション"})
const colors=ref(["white", "violet", "pink", "red", "orange", "yellow", "green", "blue"])
</script>