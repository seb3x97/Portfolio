<script lang="ts">
/* IMPORTS */

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
        <StatsViewElement
            icon="/src/assets/icons/infos/stats/number-views.svg"
            :count="getNumberOfVues()"
            description="Nombre de vues">
        </StatsViewElement>
        <StatsViewElement
            icon="/src/assets/icons/infos/stats/number-years.svg"
            :count="getNumberOfYears()"
            description="Années d'expériences">
        </StatsViewElement>
        <StatsViewElement
            icon="/src/assets/icons/infos/stats/number-coffees.svg"
            :count="getNumberOfCoffees()"
            description="Tasses de cafés">
        </StatsViewElement>
        <StatsViewElement
            icon="/src/assets/icons/infos/stats/number-lines.svg"
            :count="getNumberOfLines()"
            description="Lignes de code">
        </StatsViewElement>
    </section>
</template>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Component */
#stats {
    @include display(flex);
    @include flex-direction(row);
    flex-wrap: wrap;
    width: 100%;
}
</style>