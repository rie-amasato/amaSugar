<template>

    <div class="container red" @click="click_bakeToast">
        トースト出現ボタン
    </div>
    <div :class="{'toast': is_toasted, 'none': !is_toasted}">
        <div class="container red">toast</div> 
    </div>
</template>

<script setup>
    const is_toasted=ref(false);

    function click_bakeToast(){
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
</style>