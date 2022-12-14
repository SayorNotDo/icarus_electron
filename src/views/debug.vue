<template>
    <div>
        <a-row style="padding:2%">
            <a-col :span="1">
                <a-button>Device Connect</a-button>
            </a-col>
            <a-col :span="1" :offset="21">
                <a-button type="circle">
                    <template #icon>
                        <PauseCircleOutlined />
                    </template>
                </a-button>
            </a-col>
            <a-col :span="1">
                <a-button type="circle">
                    <template #icon>
                        <PlayCircleOutlined />
                    </template>
                </a-button>
            </a-col>
        </a-row>
        <a-row style="padding:1%">
            <a-col flex="auto">
                <a-badge-ribbon text="CASE">
                    <a-card :hoverable="true">
                        <a-row>
                            <a-col flex="3">
                                <a-card title="CASE FIELD" size="small" :bordered="false">
                                    <a-textarea placeholder="" :autoSize="{ minRows: 18, maxRows: 18 }"
                                        :bordered="false"></a-textarea>
                                </a-card>
                            </a-col>
                            <a-col flex="2">
                                <a-card title="COMPONENT" size="small" :bordered="false" style="height:100%">
                                    <MethodTree />
                                </a-card>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-badge-ribbon>
            </a-col>
        </a-row>
        <a-row style="padding:1%">
            <a-col flex="auto">
                <a-badge-ribbon text="DEBUG">
                    <a-card title="DEBUG CONSOLE" size="small" :hoverable="true">
                        <Terminal />
                    </a-card>
                </a-badge-ribbon>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue';
import MethodTree from '../components/MethodTree.vue';
import Terminal from '../components/Terminal.vue';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        PlayCircleOutlined,
        PauseCircleOutlined,
        MethodTree,
        Terminal
    },
    setup() { },
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
