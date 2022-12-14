<template>
    <div>
        <a-button @click="showModal">Device Connect</a-button>
        <a-modal :destroyOnClose=true v-model:visible="visible" title="Device Connect" width="100%" @ok="handleOk"
            :maskClosable=false>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <template #footer>
                <a-button style="float: left;" @click="deviceConnect">Test Connect</a-button>
                <div v-if="connectStatus" style="float: left; margin: 0.5%; color: #52c41a;">
                    <CheckCircleFilled />
                </div>
                <a-button @click="handleCancel">Cancel</a-button>
                <a-button type="primary" @click="handleOk">Ok</a-button>
            </template>
        </a-modal>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { CheckCircleFilled } from '@ant-design/icons-vue'
export default defineComponent({
    components: {
        CheckCircleFilled
    },
    setup() {
        const visible = ref(false);
        const connectStatus = ref(false);
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
            connectStatus
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