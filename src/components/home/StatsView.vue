<script lang="ts">
/* Imports */

//Libraries
import gsap from 'gsap';

//Components
import StatsViewElement from './StatsElementView.vue';

/**
 * Vue Editor
 */
export default {
	data() {
		return {
            number: 0,
            tweened: 0,
            infos: {
                startCodeYear: 2018,
                cupOfCoffeePerYear: 52 * 5,
                numberOfCodeLines: 50230,
                githubViews: 32,
            },
            stats: [
                {
                    icon: '/src/assets/icons/home/stats/number-views.svg',
                    count: this.getNumberOfVues,
                    description: "Vues sur github"
                },
                {
                    icon: '/src/assets/icons/home/stats/number-years.svg',
                    count: this.getNumberOfYears,
                    description: "Années d'expériences"
                },
                {
                    icon: '/src/assets/icons/home/stats/number-coffees.svg',
                    count: this.getNumberOfCoffees,
                    description: "Tasses de cafés"
                },
                {
                    icon: '/src/assets/icons/home/stats/number-lines.svg',
                    count: this.getNumberOfLines,
                    description: "Lignes de code"
                },
            ],
		};
	},
    components: {
        StatsViewElement,
    },
    watch: {
        number(n) {
            gsap.to(this, { duration: 2, tweened: Number(n) || 0});
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
    <section id="stats">
        <template v-for="stat in stats">
            <StatsViewElement
                :icon="stat.icon"
                :count="stat.count()"
                :description="stat.description">
            </StatsViewElement>
        </template>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/import.scss';

/* Component */
#stats {
    @include display(flex);
    @include flex-direction(row);
    flex-wrap: wrap;
    width: 100%;
}
</style>