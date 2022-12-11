<template>
    <div>
        <a-layout class="wrapper">
            <Sidebar />
            <a-layout class="content">
                <a-layout-header style="height:4%">
                </a-layout-header>
                <a-layout-content
                    :style="{ padding: '1px', background: 'rgba(255, 255, 255, 0.85)', minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Sidebar
    },
    setup() {
        return {
        }
    },
})
</script>
<style scoped>
@media (prefer-color-scheme: dark) {
    body {
        background: #333;
        color: white;
    }
}

@media (prefer-color-scheme: light) {
    body {
        background: #ddd;
        color: white;
    }
}

.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-app-region: drag;
}
</style>
