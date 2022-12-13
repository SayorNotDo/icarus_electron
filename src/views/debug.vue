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
        <a-row style="padding:2%">
            <a-col flex="auto">
                <a-badge-ribbon text="CASE FIELD">
                    <a-row>
                        <a-col flex="3">
                            <a-card title="CASE FIELD" size="small">
                                <a-textarea placeholder="" :autoSize="{ minRows: 15, maxRows: 20 }"
                                    :bordered="false"></a-textarea>
                            </a-card>
                        </a-col>
                        <a-col flex="2">
                            <a-card title="COMPONENT" size="small" style="height:100%">
                                <MethodTreeVue />
                            </a-card>
                        </a-col>
                    </a-row>
                </a-badge-ribbon>
            </a-col>
        </a-row>
        <a-row style="padding:2%">
            <a-col flex="auto">
                <a-badge-ribbon text="DEBUG CONSOLE">
                    <a-card title="DEBUG CONSOLE" size="small">
                        <a-textarea placeholder="" :autoSize="{ minRows: 5, maxRows: 20 }"
                            :bordered="false"></a-textarea>
                    </a-card>
                </a-badge-ribbon>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import MethodTreeVue from '../components/MethodTree.vue';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        PlayCircleOutlined,
        PauseCircleOutlined,
        MethodTreeVue,
    },
    setup() {

    },
})
</script>
