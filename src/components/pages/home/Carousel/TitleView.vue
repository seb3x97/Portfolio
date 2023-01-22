<script lang="ts">
/**
 * Vue Editor
 */
export default {
	data() {
		return {
        };
    },
}
</script>

<template>
    <section class="title">
        <h3 class="name">Sébastien Voide</h3>
        <h1 class="profession">
            <span class="first">DEVELOPPEUR</span>
            <span class="second">EN</span>
            <span class="third">INFORMATIQUE</span>
        </h1>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Component */
.title {
    position: absolute;
    @include display(flex);
    @include flex-direction(column);
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 1;

    > .name {
        font-size: 2vw;
    }

    > .profession {
        @include display(flex);
        @include flex-direction(row);
        gap: 1vw;

        > span {
            font-size: 4vw;
            animation: title-color 10s linear infinite;
        }

        > .first {
            --color-1: var(--vt-c-dark-gradient-1);
            --color-2: var(--vt-c-dark-gradient-3);
            --color-3: var(--vt-c-dark-gradient-5);
        }

        > .second {
            --color-1: var(--vt-c-dark-gradient-3);
            --color-2: var(--vt-c-dark-gradient-1);
            --color-3: var(--vt-c-dark-gradient-5);
        }

        > .third {
            --color-1: var(--vt-c-dark-gradient-5);
            --color-2: var(--vt-c-dark-gradient-1);
            --color-3: var(--vt-c-dark-gradient-3);
        }
    }
}

@include keyframes('title-color') {
    0%   { color: var(--color-1); }
    33%  { color: var(--color-2); }
    66% { color: var(--color-3); }
    100%   { color: var(--color-1); }
}
</style>