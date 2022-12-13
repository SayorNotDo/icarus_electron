<template>
    <div :style="{ margin: '12px', padding: '12px' }">
        <a-row justify="center" :gutter="{ xs: 16, sm: 24, md: 32, lg: 48 }">
            <a-col>
                <PictureCardVue />
            </a-col>
            <a-col>
                <PictureCardVue />
            </a-col>
            <a-col>
                <PictureCardVue />
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import PictureCardVue from '../components/PictureCard.vue';

export default defineComponent({
    components: {
        PictureCardVue
    },
    setup() {
        return {
        }
    },
})
</script>

<style scoped>

</style>
