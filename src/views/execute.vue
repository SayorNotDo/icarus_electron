<template>
    <div style="padding: 12px; height: 100%;">
        <a-row style="height: 60%;">
            <a-col style="width: 100%;">
                <PictureCardVue />
            </a-col>
        </a-row>
        <a-row justify="start" :wrap="false">
            <a-col style="width: 70%;">
                <PictureCardVue />
            </a-col>
            <a-col style="width: 30%;">
                <PictureCardVue />
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import PictureCardVue from '../components/PictureCard.vue'

export default defineComponent({
    components: {
        PictureCardVue,
    },
    setup() {
    },
})
</script>
<style scoped>
.line-margin {
    margin-top: 2%;
}
</style>
