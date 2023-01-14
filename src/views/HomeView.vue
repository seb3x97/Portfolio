<script setup lang="ts">
import StatsView from '@/components/infos/StatsView.vue';
import SkillsView from '@/components/infos/SkillsView.vue';
import FooterView from '@/components/main/FooterView.vue';
</script>

<template>
    <!-- Container -->
    <section id="home">
        <div class="content"><p>Text 1</p></div>
        <div class="content"><p>Text 1</p></div>
        <div class="content"><p>Text 1</p></div>
        <div class="content"><StatsView/></div>
        <div class="content"><SkillsView/></div>
        <div class="content"><p>Text 1</p></div>
        <div class="content"><p>Text 1</p></div>
        <div class="content"><p>Text 1</p></div>
    </section>
</template>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Container */
#home {
    @include display(flex);
    @include flex-direction(column);
    align-items: center;

    height: 100%;
    width: 80%;

    > .content {
        width: 100%;
        margin-top: 90px;
    }
}

@include for-phone-only {
    #home > .content {
        margin-top: 30px;
    }
}

@include for-tablet-portrait-up {
    #home > .content {
        margin-top: 50px;
    }
}
</style>
