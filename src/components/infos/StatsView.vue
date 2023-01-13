<script lang="ts">
/**
 * Vue Editor
 */
export default {
	data() {
		return {
            infos: {
                startCodeYear: 2018,
                cupOfCoffeePerYear: 5 * 52,
                numberOfCodeLines: 50230,
                githubViews: 32,
            }
		};
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
    <div id="component">
        <section>
            <img class="icon" src="@/assets/icons/infos/stats/number-views.svg">
            <p class="number">{{ getNumberOfVues() }}</p>
            <p class="description">Nombre de vues</p>
        </section>
        <section>
            <img class="icon" src="@/assets/icons/infos/stats/number-years.svg">
            <p class="number">{{ getNumberOfYears() }}</p>
            <p class="description">Années d'expériences</p>
        </section>
        <section>
            <img class="icon" src="@/assets/icons/infos/stats/number-coffees.svg">
            <p class="number">{{ getNumberOfCoffees() }}</p>
            <p class="description">Tasses de cafés</p>
        </section>
        <section>
            <img class="icon" src="@/assets/icons/infos/stats/number-lines.svg">
            <p class="number">{{ getNumberOfLines() }}</p>
            <p class="description">Lignes de code</p>
        </section>
    </div>
</template>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Component */
#component {
    @include display(flex);
    @include flex-direction(row);


    section {
        @include display(flex);
        @include flex-direction(column);
        justify-content: center;
        align-items: center;
        padding: 0 32px;

        .icon {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
        }

        .number {
            font-weight: bold;
            margin: 6px 0;
        }

        .description {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: clip;
        }
    }
}
</style>