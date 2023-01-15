<script lang="ts">
/* Imports */

//Components
import SkillsElementView from '@/components/pages/home/SkillsElementView.vue';

/**
 * Vue Editor
 */
export default {
	data() {
		return {
			skills: [
                {
                    language: 'HTML5',
                    percent: 100,
                    color: '#e44d26',
                },
                {
                    language: 'CSS3 · SASS',
                    percent: 90,
                    color: '#016db6',
                },
                {
                    language: 'Javascript · Node.js',
                    percent: 85,
                    color: '#efd81d',
                },
                {
                    language: 'PHP',
                    percent: 75,
                    color: '#7377ad',
                },
            ],
		};
	},
    components: {
        SkillsElementView,
    },
};
</script>

<template>
    <section id="skills">
        <ul v-for="(skill, index) in skills">
            <SkillsElementView
                :index="index"
                :language="skill.language"
                :percent="skill.percent"
                :color="skill.color">
            </SkillsElementView>
        </ul>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/import.scss';

/* Component */
#skills {
    @include display(flex);
    @include flex-direction(column);
    width: 100%;
    padding: 22px;
    border-radius: 5px;

    background-color: #f1f1f1;
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.19);

    > ul {
        margin-bottom: 22px;
    }
}
</style>