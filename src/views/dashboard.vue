<template>
    <div style="padding: 12px; height: 100%;">
        <a-row class="line-margin" justify="space-around" :gutter="{ xs: 2, sm: 4, md: 8, lg: 16 }">
            <a-col style="width: 60%">
                <PictureCardVue></PictureCardVue>
            </a-col>
            <a-col style="width: 40%;">
                <a-col>
                    <PictureCardVue />
                </a-col>
                <a-col class="line-margin">
                    <PictureCardVue />
                </a-col>
            </a-col>
        </a-row>
        <a-row class="line-margin" justify="start" :wrap="false" :gutter="{ xs: 1, sm: 2, md: 4, lg: 8 }">
            <a-col>
                <PictureCardVue></PictureCardVue>
            </a-col>
            <a-col>
                <PictureCardVue></PictureCardVue>
            </a-col>
            <a-col>
                <PictureCardVue></PictureCardVue>
            </a-col>
            <a-col>
                <PictureCardVue></PictureCardVue>
            </a-col>
        </a-row>
        <a-row class="line-margin">
            <a-col style="width: 100%;">
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
.line-margin {
    margin-top: 2%;
}
</style>
