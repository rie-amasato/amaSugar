<template> 
    <div class="container pink">
        <h2>そのほかのものいろいろ</h2>
        ここは筆者が作ったその他のものを紹介するページです。
        <div class="container violet">
            <h2>fAkePedia-ウソ辞書-</h2>
            <ul>
                <li>fAkePediaは意図的にハルシネーションを起こさせ、“実はAIってこんな出鱈目な、悪意のある記事を書かせることができるんだよ“という、あくまで啓発的な、でもどこか愉快で学術的な辞書を目指して作られました。</li>
                <li>Geminiの無料版APIを使っており返答は学習されるので、もしかするとタチの悪いデータを生成させて、Geminiを混乱させる一因になるのかもしれないね。（たのしい）</li>
            </ul>
            <iframe 
                class="container frame"
                src="https://fakepedia.pages.dev/" />
        </div>
    </div>

</template>

<script setup>
    useHead({title: "あま砂糖"})

</script>

<style scoped>
.frame{
    padding: 0;
    height: 40vh;
    width: 100%;
}

</style>