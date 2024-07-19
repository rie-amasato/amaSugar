<template>
    <div class="allbody container blue grid">
        <div class="header s1 e5">        
            <div class="header container red w-100">AmaSugar-あま砂糖</div>
        </div>

        <div class="sidebar s1 e2">
            <Sidebar />
        </div>

        <div class="s2 e5">
            <NuxtPage />
        </div>
    </div>
</template>

<style scoped>
.allbody{
    width: 90%;
    max-width: 800px;
    height: 90svh;

    margin-right: auto;
    margin-left: auto;
}

.header{
    position: sticky;
    top: 0;
    width: 100%;
    z-index: calc(infinity);
}

.sidebar{
    height: fit-content;
    position: sticky;
    top: 120px;
    height: fit-content;
}

.mainpage{
    width: 90%;
    margin-left: 5%;
}
</style>
