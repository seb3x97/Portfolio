<script setup lang="ts">
import Header from "@/components/header/Header.vue";
</script>

<template>
    <Header></Header>

    <RouterView />
</template>

<style scoped>
#page {
    height: 100%;
    width: 100%;

    background-color: var(--page-background-color);
}

#app {
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 100%;

    overflow-y: scroll;
    overflow-x: hidden;
}

#container {
    flex: 1 1 0;
    width: 100%;

    padding: var(--page-border-size);
    padding-top: calc(var(--page-border-size) * 2);
}
</style>