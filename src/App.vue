<script setup lang="ts">
import HeaderView from "@/components/main/HeaderView.vue";
</script>

<template>
    <!-- Loader -->


    <!-- Page -->
    <div class="page">
        <HeaderView/>

        <!-- Content -->
        <main>
            <RouterView/>
        </main>
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

	overflow-y: scroll;
	overflow-x: hidden;
}

.page {
    @include display(flex);
    @include flex-direction(column);
    height: 100vh;
    width: 100vw;

    main {
        flex: 1 1 0;
        width: 100%;
    }
}
</style>
