<script lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/**
 * Vue Editor
 */
export default {
    props: {
        icon: String,
        count: Number,
        description: String,
    },
	data() {
		return {
            number: 0,
            text: '0',
            infos: {
                startCodeYear: 2018,
                cupOfCoffeePerYear: 52 * 5,
                numberOfCodeLines: 50230,
                githubViews: 32,
            }
		};
	},
    mounted() {
        //On récupére l'instance de l'objet
        const me = this;

        let animation: gsap.core.Tween | null = null;

        function enter() {
            animation = gsap.to(me, {
                duration: 4,
                number: Number(me.count)
            });
        };

        function enterBack() {
            if(animation != null) animation.kill();
            me.number = 0;
        }

        gsap.to(this.$refs.number as Element, {
            scrollTrigger: {
                trigger: '.number',
                end: "bottom 90%",
                start: "top 100%",
                onEnter: enter,
                onLeaveBack: enterBack,
            },
        });
    },
    watch: {
        number(number: Number) {
            this.text = number.toFixed(0);
        },
    },
    methods: {
        getNumberOfYears() {
            return (new Date().getFullYear() - this.infos.startCodeYear);
        },
        getNumberOfCoffees() {
            return this.infos.cupOfCoffeePerYear * this.getNumberOfYears();
        },
        getNumberOfLines() {
            return this.infos.numberOfCodeLines;
        },
        getNumberOfVues() {
            return this.infos.githubViews;
        },
    },
};
</script>

<template>
    <div class="stats-element">
        <img class="icon" :src="icon">
        <p ref="number" class="number">{{ text }}</p>
        <p class="description">{{  description }}</p>
    </div>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Component */
.stats-element {
    @include display(flex);
    @include flex-direction(column);
    justify-content: center;
    align-items: center;

    > .icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
    }

    > .number {
        font-weight: bold;
        margin: 6px 0;
    }

    > .description {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
    }
}

@include for-phone-only {
    .stats-element {
        flex: none;
        width: 100%;
        margin: 24px 0;
    }
}

@include for-tablet-portrait-up {
    .stats-element {
        flex: 1 0 50%;
        margin: 32px 0;
    }
}

@include for-tablet-landscape-up {
    .stats-element {
        flex: 1 0 auto;
        padding: 16px;
    }
}
</style>