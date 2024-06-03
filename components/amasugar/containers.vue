<template>
    <div class="flex">
        <div class="container">
            class="container"でコンテナ作成し、
        </div>
        <div class="container violet">
            <div>
                class="container <span style="color: red;font-weight: bold;">color</span>"でコンテナに色をつける
            </div>
        </div>
    </div>

    <div class="flex">
        <div class="container">コンテナカラーは8種類</div>
    </div>

    
        <span class="container white" >
            class="conteiner white"
        </span>
        <span class="container violet" >
            class="conteiner violet"
        </span>
        <span class="container red">
            class="conteiner red"
        </span>
        <span class="container pink">
            class="conteiner pink"
        </span>
        <span class="container orange">
            class="conteiner orange"
        </span>
        <span class="container yellow">
            class="conteiner yellow"
        </span>
        <span class="container green">
            class="conteiner green"
        </span>
        <span class="container blue">
            class="conteiner blue"
        </span>
    
</template>

<style scoped>
.flex{
    display: flex;
}
</style>