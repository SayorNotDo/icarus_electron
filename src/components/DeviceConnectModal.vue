<template>
    <div>
        <a-button @click="showModal">Test Config</a-button>
        <a-modal :destroyOnClose=true v-model:visible="visible" title="Device Connect" width="100%" @ok="handleOk"
            :maskClosable=false>
            <template #footer>
                <a-button v-if="current == steps.length - 1" style="float: left;" @click="deviceConnect">Test
                    Connect</a-button>
                <div v-if="connectStatus && current == steps.length - 1"
                    style="float: left; margin: 0.5%; color: #52c41a;">
                    <CheckCircleFilled />
                </div>
                <a-button @click="handleCancel">Cancel</a-button>
                <a-button type="primary" @click="handleOk" :disabled="!connectStatus">Ok</a-button>
            </template>
            <Stepsbar />
        </a-modal>
    </div>
</template>
<script>
import { defineComponent, ref, inject } from 'vue';
import { CheckCircleFilled } from '@ant-design/icons-vue';
import Stepsbar from './DeviceConnectSteps.vue';
export default defineComponent({
    components: {
        CheckCircleFilled,
        Stepsbar
    },
    setup() {
        const steps = inject('steps');
        const current = inject('current');
        const connectStatus = inject('connectStatus');
        const visible = ref(false);
        const handleOk = (e) => {
            console.log(e)
            visible.value = false;
        }
        const handleCancel = (e) => {
            console.log(e)
            visible.value = false;
        }
        const showModal = () => {
            visible.value = true;
            connectStatus.value = false
        }
        // TODO: implement method for device connect testing 
        const deviceConnect = () => {
            console.log('=====>device connect:')
            connectStatus.value = true
        }
        return {
            handleOk,
            handleCancel,
            showModal,
            deviceConnect,
            visible,
            connectStatus,
            steps,
            current
        }
    }
})
</script>
<style scoped>
:deep(.ant-modal) {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0
}

:deep(.ant-model-content) {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
}

:deep(.ant-modal-body) {
    flex: 1
}
</style>