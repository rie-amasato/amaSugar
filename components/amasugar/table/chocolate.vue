<template>
        <div>チョコレートケーキ（表）</div>
    
        <table class="chocolateplate chocolatecake">
            <thead>
                <tr><th>head1</th><th>head2</th></tr>
            </thead>
            <tbody>
                <tr><td>data11</td><td>data12</td></tr>
                <tr><td>data21</td><td>data22</td></tr>

                <tr><td>data31</td><td>data32</td></tr>
            </tbody>
        </table>
        <div class="mt-4">
            <div class="container blue">  
                <div>コード例</div>
                    <pre>
            {{`
<table class="`}}<span style="color: red;">chocolateplate chocolatecake</span>{{`">
    <thead>
        <tr><th>head1</th><th>head2</th></tr>
    </thead>
    <tbody>
        <tr><td>data11</td><td>data12</td></tr>
        <tr><td>data21</td><td>data22</td></tr>
        <tr><td>data31</td><td>data32</td></tr>
    </tbody>
</table>`}}
                </pre>
            </div>
        </div>
    
</template>