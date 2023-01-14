<script setup lang="ts">
import HeaderView from "@/components/main/HeaderView.vue";
import FooterView from "./components/main/FooterView.vue";
</script>

<template>
    <!-- Loader -->


    <!-- Page -->
    <div class="page">
        <!-- Header -->
        <HeaderView/>

        <!-- Content -->
        <main>
            <RouterView/>
        </main>

        <!-- Footer -->
        <FooterView/>
    </div>
</template>

<style lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

#app {
	display: flex;
	flex-direction: column;

	height: 100%;
	width: 100%;
}

.page {
    @include display(flex);
    @include flex-direction(column);
    align-items: center;
    height: 100vh;
    width: 100vw;

    main {
        flex: 1 1 auto;
        @include display(flex);
        @include flex-direction(row);
        justify-content: center;
        width: 100%;
        max-width: 1350px;
    }
}
</style>
