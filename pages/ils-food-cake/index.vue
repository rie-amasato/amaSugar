<template> 
<div class="flex-8">
    <Sidebar class="w-sidebar"/>
    <div class="w-80p">
        <div class="container pink w-100p">
            <h2>AmaSugarとは</h2>
            <nl>
              <li>お菓子、お砂糖のような甘いパステルめを目指したCSS集です</li>
              <li>CSSのみを使用しているのでフレームワークを問いません</li>
            </nl> 
        </div>
        <div class="container orange w-100p">
            <h2>使い方 for Nuxt3</h2>
            <ol>
              <li>
                yarnにてインストールを行います
                <div class="container violet"><code>yarn add amasugar</code></div>
              </li>
              <li>
                <code>nuxt.config.ts</code>で、インストールしたCSSを適用させるとamaSugarを使用可能になります
                <div class="container violet"><code>css: ["amasugar/amasugar.css"]</code></div>
              </li>
            </ol> 
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