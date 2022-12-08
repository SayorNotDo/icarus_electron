<template>
    <div :style="{ width: fullWidth + 'px', height: fullHeight + 'px' }">
        <a-layout>
            <a-layout-sider :style="{ height: fullHeight + 'px' }" v-model:collapsed="collapsed" :trigger="null"
                collapsible>
                <div class="logo" />
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <a-menu-item key="1">
                        <user-outlined />
                        <span>nav 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <video-camera-outlined />
                        <span>nav 2</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <upload-outlined />
                        <span>nav 3</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header :style="{ background: '#fff', padding: '0' }">
                    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                    <menu-unfold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                </a-layout-header>
                <a-layout-content
                    :style="{ margin: 's4px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    Content
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, onBeforeUnmount, onMounted } from 'vue'

export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    setup() {
        let fullWidth = document.documentElement.clientWidth;
        let fullHeight = document.documentElement.clientHeight;
        function handleResize() {
            fullHeight = document.documentElement.clientHeight
            fullWidth = document.documentElement.clientWidth
        }
        onMounted(() => {
            window.addEventListener("resize", handleResize)
        });
        onBeforeUnmount(() => {
            window.removeEventListener("resize", handleResize)
        });
        return {
            selectedKeys: ref(['1']),
            collapsed: ref(false),
            fullWidth,
            fullHeight,
        }
    },
})
</script>
<style scoped>
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
