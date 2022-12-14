<template>
    <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
        {{ steps[current].content }}
    </div>
    <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">Preious</a-button>
    </div>
</template>
<script>
import { defineComponent, inject } from 'vue';
import { message } from 'ant-design-vue';

export default defineComponent({
    setup() {
        const current = inject('current');
        const steps = inject('steps');
        const next = () => {
            current.value++;
        };
        const prev = () => {
            current.value--;
        };
        return {
            message,
            current,
            steps: steps,
            next,
            prev,
        };
    },
})
</script>
<style scoped>
.steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px
}

.steps-action {
    margin-top: 24px;
}

[data-theme="dark"] .steps-content {
    background-color: #2f2f2f;
    border: 1px dashed #404040;
}
</style>