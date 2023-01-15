<script lang="ts">
/* Imports */

//Libraries
import gsap from 'gsap';

//Components
import StatsElementView from '@/components/pages/home/StatsElementView.vue';

/* Constantes */

//1
const DATE_START_CODE = new Date(2018, 6, 12);              //Date à la quelle j'ai commencer à coder (~ 12.07.2018)
const NUMBER_WORK_DAY_PER_YEAR = (52 - 5) * 5;              //Nombre de jour par année de travail => (semaine par ans - semaines de congés) * nombre de jour de travail dans une semaine

/**
 * Vue Editor
 */
export default {
	data() {
		return {
            infos: {
                numberOfCodeLines: 50230,                       //Nombre de lignes de code
                githubViews: 32,                                //Nombre de vues sur github
            },
            stats: [
                {
                    icon: '/icons/home/stats/number-views.svg',
                    count: this.getNumberVues,
                    description: "Vues sur github"
                },
                {
                    icon: '/icons/home/stats/number-years.svg',
                    count: this.getNumberYears,
                    description: "Années d'expériences"
                },
                {
                    icon: '/icons/home/stats/number-coffees.svg',
                    count: this.getNumberCoffees,
                    description: "Tasses de cafés"
                },
                {
                    icon: '/icons/home/stats/number-lines.svg',
                    count: this.getNumberLines,
                    description: "Lignes de code"
                },
            ],
		};
	},
    components: {
        StatsElementView,
    },
    mounted() {
        console.log(this.getWorkingDays());
    },
    methods: {
        getWorkingDays() {
            const from = new Date(DATE_START_CODE.getTime());
            const to = new Date();

            let odays = 6 - from.getDay();
            if(odays == 6) odays = 0;

            from.setFullYear(from.getFullYear(), from.getMonth(), from.getDay() + odays);

            return Math.floor(((((to.getTime() - from.getTime()) / 1000 / 60 / 60 / 24) / 7) * 5) + odays);
        },
        getNumberYears() {
            return (new Date().getFullYear() - DATE_START_CODE.getFullYear());
        },
        getNumberCoffees() {
            return this.getNumberYears() * NUMBER_WORK_DAY_PER_YEAR;
        },
        getNumberLines() {
            return this.infos.numberOfCodeLines;
        },
        getNumberVues() {
            return this.infos.githubViews;
        },
    },
};
</script>

<template>
    <section id="stats">
        <template v-for="stat in stats">
            <StatsElementView
                :icon="stat.icon"
                :count="stat.count()"
                :description="stat.description">
            </StatsElementView>
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