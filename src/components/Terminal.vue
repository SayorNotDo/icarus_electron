<template>
    <div id="terminal"></div>
</template>
<script>
import { defineComponent, onMounted } from 'vue';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import 'xterm/lib/xterm.js';
import { FitAddon } from 'xterm-addon-fit';

export default defineComponent({
    setup() {
        onMounted(() => {
            const terminal = document.getElementById('terminal');
            var fitAddon = new FitAddon();
            var term = new Terminal({
                rendererType: 'canvas',
                rows: 10,
                convertEol: true,
                disableStdin: true,
                cursorStyle: 'underline',
                cursorBlink: true,
                theme: {
                    foreground: '#7e9192',
                    background: '#002833',
                    lineHeight: 16
                }
            });
            term.loadAddon(fitAddon);
            fitAddon.fit();
            term.open(terminal);

            term.prompt = () => {
                term.write('\r$ ');
            };
            term.prompt();
        })
    },
})
</script>

<style scoped>
:deep(.xterm-screen) {
    padding: 1%;
}
</style>
