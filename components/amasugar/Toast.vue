<template>
    <div class="container red" @click="click_bakeToast">
        トースト出現
    </div>

    <div class="container blue">
        <code>class="toast"</code>と<code>class="nonde"</code>つけ外しで切り替えることでアニメーションします。<br>
        <br>
        以下Vue3系でのサンプルコード<br>
        <div class="container green">
        トースト本体
        <pre>{{`
<div :class="{'toast': is_toasted, 'none': !is_toasted}">
    <div class="container red w-150">
        トースト内容
    </div> 
</div>`}}</pre>
    </div>
    <div class="container green">
トースト切り替え用関数（<code>@click</code>に接続）
<pre>{{`
const click_bakeToast = ()=>{
    if (!is_toasted.value){
        is_toasted.value=true;
        setTimeout(()=>{
            is_toasted.value= false;
        },3500)
    }
}
`}}</pre>
        </div>
    </div>

    <div :class="{'toast': is_toasted, 'none': !is_toasted}">
        <div class="container yellow w-150">
            this is toast<br>
            <code>
                class="toast"
            </code>
        </div> 
    </div>
</template>

<script setup>
    const is_toasted=ref(false);

    const click_bakeToast = ()=>{
        if (!is_toasted.value){
            is_toasted.value=true;
            setTimeout(()=>{
                is_toasted.value= false;
            },3500)
        }
    }
</script>

<style scoped>
.none{
    display: none;
}

.w-150{
    width: 150px;
}

</style>