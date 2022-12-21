<template>
    <div>
        <a-row>
            <TabCardVue />
        </a-row>
    </div>
</template>
<script>
import TabCardVue from '../components/TabCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        TabCardVue
    },
    setup() {
        return {}
    }
})
</script>