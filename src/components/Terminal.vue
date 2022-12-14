<template>
    <div id="terminal"></div>
</template>
<script>
import { defineComponent, onMounted } from 'vue';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import 'xterm/lib/xterm.js';
import { WebLinksAddon } from 'xterm-addon-web-links';

export default defineComponent({
    setup() {
        onMounted(() => {
            const terminal = document.getElementById('terminal')
            var term = new Terminal({
                rendererType: 'canvas',
                rows: 9,
                convertEol: true,
                disableStdin: true,
                cursorStyle: 'underline',
                cursorBlink: true,
            });
            term.open(terminal);
        })
    },
})
</script>

<style scoped>
canvas {
    display: block;
    margin: 0 auto;
}
</style>
