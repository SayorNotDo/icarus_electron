<template>
    <a-card hoverable>
        <template #cover>
        </template>
        <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
                <a-avatar></a-avatar>
            </template>
        </a-card-meta>
    </a-card>
</template>
<script>
import { defineComponent } from 'vue';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: { SettingOutlined, EditOutlined, EllipsisOutlined },
    setup() {
        return {
        }

    },
})
</script>
