<script setup lang="ts">
import HeaderView from "@/components/layouts/HeaderView.vue";
import FooterView from "@/components/layouts/FooterView.vue";
</script>

<template>
    <!-- Loader -->


    <!-- Page -->
    <div class="page">
        <HeaderView/>
        <main><RouterView/></main>
        <FooterView/>
    </div>
</template>

<style lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

#app {
	display: flex;
	flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: var(--color-background-1);
}

.page {
    position: relative;
    @include display(flex);
    @include flex-direction(column);
    align-items: center;
    height: 100%;
    width: 100%;

    main {
        flex: 1 1 auto;
        @include display(flex);
        @include flex-direction(row);
        justify-content: center;
        width: 100%;
    }
}
</style>
