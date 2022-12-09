<script setup>
// const { ipcRenderer } = window.require('electron')

function toMin() {
    // ipcRenderer.send('min-app')
}

function toClose() {
    // ipcRenderer.send('close-app')
}

</script>

<template>
    <div class="header">
        <span class="float-right">
            <i @click="toMin"></i>
            <i @click="toClose"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: 'titleBar',
    methods: {}
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    -webkit-app-region: drag;
}
</style>