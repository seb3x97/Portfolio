<script lang="ts">
/**
 * Vue Editor
 */
export default {
    props: {
        title: String,
        description: String,
    },
};
</script>

<template>
    <div class="title">
        <h1 v-if="title">{{ title }}</h1>
        <h3 v-if="description">{{ description }}</h3>
    </div>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Container */
.title {
    @include display(flex);
    @include flex-direction(column);
    justify-content: center;
    align-items: center;

    > h1, > h3 {
        text-align: center;
        font-size: max(min(3vw, 46px), 40px);
    }
}
</style>