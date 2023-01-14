<script setup lang="ts">
import CarouselView from '@/components/home/CarouselView.vue';
import StatsView from '@/components/home/StatsView.vue';
import SkillsView from '@/components/home/SkillsView.vue';
</script>

<template>
    <!-- Container -->
    <section id="home">
        <CarouselView/>
        <div><p>Text 1</p></div>
        <div><p>Text 1</p></div>
        <div><p>Text 1</p></div>
        <StatsView class="limited"/>
        <SkillsView class="limited"/>
        <div><p>Text 1</p></div>
        <div><p>Text 1</p></div>
        <div><p>Text 1</p></div>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/import.scss';

/* Container */
#home {
    @include display(flex);
    @include flex-direction(column);
    align-items: center;
    height: 100%;
    width: 100%;

    > * {
        width: 100%;
        margin-bottom: 90px;
    }

    > .limited {
        max-width: 1300px;
        width: 80%;
    }
}

@include for-phone-only {
    #home > * {
        margin-bottom: 30px;
    }
}

@include for-tablet-portrait-up {
    #home > * {
        margin-bottom: 50px;
    }
}
</style>
