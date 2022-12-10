<template>
    <a-tabs tabBarGutter="1" size="small" v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
            {{ pane.content }}
        </a-tab-pane>
    </a-tabs>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const panes = ref(new Array(1).fill(null).map((_, index) => {
            const id = "Dashboard";
            return {
                title: `Dashboard`,
                content: `Content of Tab Pane Dashboard`,
                key: id,
            };
        }));
        const activeKey = ref(panes.value[0].key);
        const newTabIndex = ref(0);
        const add = () => {
            activeKey.value = `newTab${newTabIndex.value++}`;
            panes.value.push({
                title: `New Tab ${activeKey.value}`,
                content: `New Content of Tab Pane ${activeKey.value}`,
                key: activeKey.value,
            });
        };
        const remove = targetKey => {
            let lastIndex = 0;
            panes.value.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });
            panes.value = panes.value.filter(pane => pane.key !== targetKey);
            if (panes.value.length && activeKey.value === targetKey) {
                if (lastIndex >= 0) {
                    activeKey.value = panes.value[lastIndex].key;
                } else {
                    activeKey.value = panes.value[0].key;
                }
            }
        };
        const onEdit = targetKey => {
            remove(targetKey);
        };
        return {
            panes,
            activeKey,
            onEdit,
            add,
        };
    },
})
</script>
