<template> 
    <div class="container pink">
        <h2>CSS定義されたカラー</h2>
        <code>--amasugar-${color}</code>という形で、CSSの変数としてパステルカラー8色とそれぞれに対して明るいlightカラーと暗いdarkカラーを定義しています。
    </div>
    <div v-for="color in colors" :key="color"
    class="container white color"
    >
        <div class="grid">
            <div class="s1 e2">
                <span :style="`color: var(--amasugar-${color}-light); `">
                    ⬛︎
                </span>
                {{colorcodes[`--amasugar-${color}-light`]}}
            </div>

            <div class="s2 e5">
                <code>style="color: var(--amasugar-{{color}}-light);"</code>
            </div>
        </div>
        
        <div class="grid">
            <div class="s1 e2">
                <span :style="`color: var(--amasugar-${color}); `">
                    ⬛︎
                </span>
                {{colorcodes[`--amasugar-${color}`]}}
            </div>

            <div class="s2 e5">
                <code>style="color: var(--amasugar-{{color}});"</code>
            </div>
        </div>

        <div class="grid">
            <div class="s1 e2">
                <span :style="`color: var(--amasugar-${color}-dark); `">
                    ⬛︎
                </span>
                {{colorcodes[`--amasugar-${color}-dark`]}}
            </div>

            <div class="s2 e5">
                <code>style="color: var(--amasugar-{{color}}-dark);"</code>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({title: "あま砂糖 | カラー"})
    const colors=ref([
        "white",// "white-sub",
        "violet",// "violet-sub", 
        "pink",// "pink-sub", 
        "red",// "red-sub",
        "orange",// "orange-sub",
        "yellow",// "yellow-sub", 
        "green",// "green-sub", 
        "blue",// "blue-sub"
    ])

    const colorcodes=ref({
        "--amasugar-white-light": "#fefefe",
        "--amasugar-white": "#fafafa",
        "--amasugar-white-dark": "#dadada",
        "--amasugar-violet-light": "#ffe6ff",
        "--amasugar-violet": "#e2c6ff",
        "--amasugar-violet-dark": "#c2a6df",
        "--amasugar-pink-light": "#fff1ff",
        "--amasugar-pink": "#ffd1ff",
        "--amasugar-pink-dark": "#dfb1df",
        "--amasugar-red-light": "#ffe6e6",
        "--amasugar-red": "#ffc6c6",
        "--amasugar-red-dark": "#dfa6a6",
        "--amasugar-orange-light": "#fffddc",
        "--amasugar-orange": "#ffddbc",
        "--amasugar-orange-dark": "#dfbd9c",
        "--amasugar-yellow-light": "#ffffe6",
        "--amasugar-yellow": "#ffffc6",
        "--amasugar-yellow-dark": "#dfdfa6",
        "--amasugar-green-light": "#e6ffe6",
        "--amasugar-green": "#c6ffc6",
        "--amasugar-green-dark": "#a6dfa6",
        "--amasugar-blue-light": "#e6ffff",
        "--amasugar-blue": "#c6e2ff",
        "--amasugar-blue-dark": "#a6c2df"
    })
    
</script>

<style scoped>

</style>