<template>
    <a-layout-sider :collapsed="true" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1" title="Dashboard">
                <router-link to="/dashboard"></router-link>
                <home-outlined />
                <span>Dashboard</span>
            </a-menu-item>
            <a-menu-item key="2" title="Schedule">
                <router-link to="/schedule"></router-link>
                <schedule-outlined />
                <span>Schedule</span>
            </a-menu-item>
            <a-menu-item key="3" title="Execute">
                <router-link to="/execute"></router-link>
                <code-outlined />
                <span>Execute</span>
            </a-menu-item>
            <a-menu-item key="4" title="Debug">
                <router-link to="/debug"></router-link>
                <bug-outlined />
                <span>Debug</span>
            </a-menu-item>
            <a-menu-item key="5" title="Analystic">
                <router-link to="/analystic"></router-link>
                <bar-chart-outlined />
                <span>Analystic</span>
            </a-menu-item>
            <a-menu-item key="6" title="Framework">
                <router-link to="/framework"></router-link>
                <ImportOutlined />
                <span>Framework</span>
            </a-menu-item>
        </a-menu>
        <a-menu v-model:selectKeys="selectedKeys" theme="dark" mode="inline"
            style="position:absolute; bottom: 3% !important">
            <a-sub-menu key="profile">
                <template #expandIcon>
                </template>
                <template #icon>
                    <user-outlined />
                </template>
                <template #title>
                    Profile
                </template>
            </a-sub-menu>
            <a-sub-menu key="setting">
                <template #expandIcon>
                </template>
                <template #icon>
                    <settingOutlined />
                </template>
                <template #title>
                    Settings
                </template>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>
<script>
import {
    DashOutlined, HomeOutlined, ScheduleOutlined, CodeOutlined,
    BugOutlined, BarChartOutlined, SettingOutlined, UserOutlined,
    MenuUnfoldOutlined, MenuFoldOutlined, ImportOutlined
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    components: {
        DashOutlined,
        HomeOutlined,
        ScheduleOutlined,
        CodeOutlined,
        BugOutlined,
        BarChartOutlined,
        SettingOutlined,
        UserOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        ImportOutlined,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        return {
            selectedKeys: ref(['1']),
        }
    },
})
</script>
<style scoped>
.content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to right, #f5f5f5, #e5e5e5);
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
    margin-top: 32px;
}
</style>
