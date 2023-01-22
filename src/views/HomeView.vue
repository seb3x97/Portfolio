<script setup lang="ts">
import CarouselView from '@/components/pages/home/Carousel/CarouselView.vue';
import ProjectsView from '@/components/pages/home/Project/ProjectsView.vue';
import StatsView from '@/components/pages/home/Stats/StatsView.vue';
import SkillsView from '@/components/pages/home/Skills/SkillsView.vue';
import ContactView from '@/components/pages/home/Contact/ContactView.vue';
</script>

<template>
    <!-- Container -->
    <section id="home">
        <div><CarouselView/></div>
        <section class="content">
            <ProjectsView/>
            <StatsView/>
            <SkillsView/>
            <ContactView/>
        </section>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Container */
#home {
    @include display(flex);
    @include flex-direction(column);
    align-items: center;
    height: 100%;
    width: 100%;

    > * {
        width: 100%;
    }

    > .content {
        @include display(flex);
        @include flex-direction(column);
        align-items: center;
        max-width: 1000px;
        width: 80%;
    }
}

@include for-phone-only {
    #home > .content {
        gap: 80px;
        padding: 30px 0;
    }
}

@include for-tablet-portrait-up {
    #home > .content {
        gap: 160px;
        padding: 80px 0;
    }
}
</style>
