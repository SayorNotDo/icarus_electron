<template>
    <div>
        <a-layout class="wrapper">
            <a-layout-sider :collapsed="true" :trigger="null" collapsible>
                <div class="logo" />
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <a-menu-item key="1" title="Dashboard">
                        <home-outlined />
                        <span>Dashboard</span>
                    </a-menu-item>
                    <a-menu-item key="2" title="Schedule">
                        <schedule-outlined />
                        <span>Schedule</span>
                    </a-menu-item>
                    <a-menu-item key="3" title="Execute">
                        <code-outlined />
                        <span>Execute</span>
                    </a-menu-item>
                    <a-menu-item key="4" title="Debug">
                        <bug-outlined />
                        <span>Debug</span>
                    </a-menu-item>
                    <a-menu-item key="5" title="Chart">
                        <bar-chart-outlined />
                        <span>Chart</span>
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
            <a-layout class="content">
                <!-- <a-layout-header :style="{ background: 'rgba(0, 0, 0, 0.85)', padding: '0' }"> -->
                    <!-- <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                    <menu-unfold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" /> -->
                <!-- </a-layout-header> -->
                <a-layout-content
                    :style="{ margin: '10px 10px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    Content
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import { DashOutlined, HomeOutlined, ScheduleOutlined, CodeOutlined, BugOutlined, BarChartOutlined, SettingOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue'

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
    },
    setup() {
        return {
            selectedKeys: ref(['1']),
            collapsed: ref(false),
        }
    },
})
</script>
<style scoped>
.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to right, #f5f5f5, #e5e5e5);
}

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
