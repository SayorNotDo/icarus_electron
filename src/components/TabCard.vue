<template>
    <a-card style="width: 100%" title="Resource" :tab-list="ResourceList" :active-tab-key="key"
        @tabChange="key => onTabChange(key, 'key')">
        <template #customTab="item">
            <span v-if="item.key === 'case'">
                {{ item.key }}
            </span>
        </template>
    </a-card>
</template>
<script>
import { HomeOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {
        HomeOutlined,
    },
    setup() {
        const ResourceList = [{
            key: 'case',
            tab: 'case'
        }]
        const ContentList = [{
            case: 'content'
        }]
        const key = ref('case')
        const onTabChange = (value, type) => {
            console.log(value, type);
            if (type === 'key') {
                key.value = value;
            }
        }
        return {
            ResourceList,
            ContentList,
            key,
            onTabChange,
        }
    }
})
</script>