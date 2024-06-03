<template>
        <div>ショートケーキ（表）</div>
    
        <table class="strobery shortcake">
            <thead>
                <tr><th>head1</th><th width="140">head2</th></tr>
            </thead>
            <tbody>
                <tr height="80"><td>data11</td><td>data12</td></tr>
                <tr><td>data21</td><td>data22</td></tr>

                <tr><td>data31</td><td>data32</td></tr>
            </tbody>
        </table>
        <div class="mt-4">
            <div class="container blue">  
                <div>コード例</div>
                    <pre>
            {{`
<table class="`}}<span style="color: red;">strobery shortcake</span>{{`">
    <thead>
        <tr><th>head1</th><th width="140">head2</th></tr>
    </thead>
    <tbody>
        <tr height="80"><td>data11</td><td>data12</td></tr>
        <tr><td>data21</td><td>data22</td></tr>
        <tr><td>data31</td><td>data32</td></tr>
    </tbody>
</table>`}}
                </pre>
            </div>
        </div>
    
</template>