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
    <section id="title">
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
@import '@/assets/scss/import.scss';

/* Component */
#title {
    position: absolute;
    @include display(flex);
    @include flex-direction(column);
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 0;

    > .title {

    }

    > .profession {
        @include display(flex);
        @include flex-direction(row);

        > span {
            font-size: 3vw;
        }
        
        > span:not(:first-child) {
            margin-left: 1vw;
        }

        > .first {
            --color-1: ;
            --color-2: ;
            --color-3: ;
        }

        > .second {
            --color-1: ;
            --color-2: ;
            --color-3: ;
        }

        > .third {
            --color-1: ;
            --color-2: ;
            --color-3: ;
        }
    }
}
</style>