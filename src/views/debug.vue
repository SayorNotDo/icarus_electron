<template>
    <div>
        <a-row style="padding:1%">
            <a-col :span="1">
                <DeviceConnectModal />
            </a-col>
            <a-col :span="1" :offset="21">
                <a-button type="circle" disabled>
                    <template #icon>
                        <PauseCircleOutlined />
                    </template>
                </a-button>
            </a-col>
            <a-col :span="1">
                <a-button type="circle" :disabled="!connectStatus">
                    <template #icon>
                        <PlayCircleOutlined />
                    </template>
                </a-button>
            </a-col>
        </a-row>
        <a-row style="padding:1%">
            <a-col flex="auto">
                <a-row>
                    <a-col flex="3">
                        <a-card title="CASE FIELD" size="small" :bordered="false" hoverable="true">
                            <a-textarea placeholder="" :autoSize="{ minRows: 17, maxRows: 17 }"
                                :bordered="false"></a-textarea>
                        </a-card>
                    </a-col>
                    <a-col flex="2">
                        <a-card title="COMPONENT" size="small" style="height:100%; margin-left: 1%;" hoverable="true">
                            <MethodTree v-if="connectStatus" />
                            <a-empty v-else style="margin: 25%;">
                                <template #description>
                                    <span>Test Config Not Complete</span>
                                </template>
                            </a-empty>
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row style="padding:1%">
            <a-col flex="auto">
                <a-card title="DEBUG CONSOLE" size="small" :hoverable="true">
                    <Terminal />
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { defineComponent, ref, provide } from 'vue';
import MethodTree from '../components/MethodTree.vue';
import Terminal from '../components/Terminal.vue';
import DeviceConnectModal from '../components/DeviceConnectModal.vue';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        PlayCircleOutlined,
        PauseCircleOutlined,
        MethodTree,
        Terminal,
        DeviceConnectModal
    },
    setup() {
        const steps = [
            { title: 'Test Type', content: 'First-content' },
            { title: 'Choose Framework', content: 'Second-content' },
            { title: 'Device Config', content: 'Last-content' },
        ];
        const current = ref(0);
        const connectStatus = ref(false);
        provide('connectStatus', connectStatus);
        provide('steps', steps);
        provide('current', current);
        return {
            steps,
            current,
            connectStatus,
        }
    },
})
</script>
<style scoped>
:deep(.ant-card-head) {
    background: #001529;
    color: #fff;
}

:deep(.ant-card-body) {
    padding: 0%;
}
</style>
