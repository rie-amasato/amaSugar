<template>
<div class="container white">
    <div class="s1 e5">
        <nl>
            <li>
                <code>clas="grid"</code>を使用することでその要素が縦に4分割されます。
            </li>
            <li>
                CSSの Gridよろしく、最左端が1、最右端が5となります
            </li>
            <li>
                開始番号を設定するには、<code>class="s1"</code>のように<code>s${number}</code>の形で指定します
            </li>
            <li>
                終了番号も同じように、<code>class="e5"</code>のように<code>e${number}</code>の形で指定します
            </li>
            <li>
                つまるところ、縦分割のみ対応させた糖衣構文です
            </li>
        </nl>
    </div>
    <div class="container yellow grid">
        <code class="s1 e5">class="container yellow grid"</code>
        <div class="container green s1 e3">
            <code>
            class="container green s1 e3"
            </code>
        </div>
        <div class="container blue s2 e5">
            <code>
            class="container green s2 e5"
            </code>
        </div>
    </div>
</div>
</template>