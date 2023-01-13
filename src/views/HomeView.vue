<script setup lang="ts">
import SkillsProgress from '@/components/infos/SkillsView.vue';
import StatsInfo from '@/components/infos/StatsView.vue';
</script>

<template>
    <!-- Container -->
    <div class="container">
        <div id="info">
            <div class="content">
                <div
                v-motion
                :initial="{
                    opacity: 0,
                    y: 100,
                }"
                :visible="{
                    opacity: 1,
                    y: 0,
                }"
                :delay="200"
                >
                    <p>Text 1</p>
                    <p>Text 2</p>
                </div>
            </div>
            <div class="content">
                <div
                v-motion
                :initial="{
                    opacity: 0,
                    y: 100,
                }"
                :visible="{
                    opacity: 1,
                    y: 0,
                }"
                :delay="200"
                >
                    <p>Text 1</p>
                    <p>Text 2</p>
                </div>
            </div>
            <div class="content">
                <div
                v-motion
                :initial="{
                    opacity: 0,
                    y: 100,
                }"
                :visible="{
                    opacity: 1,
                    y: 0,
                }"
                :delay="200"
                >
                    <p>Text 1</p>
                    <p>Text 2</p>
                </div>
            </div>
            <div class="content">
                <StatsInfo/>
            </div>
            <div class="content">
                <SkillsProgress/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Container */
.container {
    @include display(flex);
    @include flex-direction(row);
	justify-content: center;
	align-items: center;

    height: 100%;
    widows: 100%;
}

#info {
    height: 100%;
    width: 20%;
}


#info > .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
}

.hidden {
    opacity: 0;
    transition: all 1s;
}

.show {
    opacity: 1;
}
</style>
