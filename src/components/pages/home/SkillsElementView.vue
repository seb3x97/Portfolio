<script lang="ts">
/* Animation */
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/**
 * Vue Editor
 */
export default {
    props: {
        index: Number,
        language: String,
        percent: Number,
        color: String,
    },
	data() {
		return {
            
        };
	},
    mounted() {
        //On récupére l'instance de l'objet
        const me = this;

        const index = this.index || 0;

        //calc(100% + 2px)
        gsap.to(this.$refs.progress as Element, {
            width: `calc(${me.percent}% + 2px)`,
            delay: index * 0.2 + 0.5,
            duration: 1,
            ease: Power1.easeIn,
            scrollTrigger: {
                trigger: '#skills',
                end: "bottom 90%",
                start: "top 100%",
                toggleActions: "play none none reset",
            },
        });
    },
};
</script>

<template>
    <li class="skills-element-view">
        <div class="title">
            <h3 class="language">{{ language }}</h3>
            <p class="percent">{{ percent }}%</p>
        </div>
        <div class="content">
            <span ref="progress" :style="`background-color: ${color};`"></span>
        </div>
    </li>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/import.scss';

/* Component */
.skills-element-view {
    list-style-type: none;

    > .title {
        @include display(flex);
        @include flex-direction(row);
        justify-content: space-between;

        > .language {
            color: var(--color-text);
            font-family: "PT Sans", sans-serif;
        }

        > .percent {
            margin-right: 5px;
            color: var(--color-text);
            font-family: "PT Sans", sans-serif;
            font-size: 18px;
        }
    }

    > .content {
        position: relative;
        height: 9px;
        width: 100%;
        margin-top: 6px;
        border-radius: 5px;
        background-color: white;

        > span {
            position: absolute;
            display: block;
            height: 100%;
            left: -1px;
            border-radius: 5px;
        }
    }
}
</style>