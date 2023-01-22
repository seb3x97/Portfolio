<script lang="ts">
/* Imports */

import TitleView from '@/components/pages/home/PageTitleView.vue';
import SkillsElementView from '@/components/pages/home/Skills/SkillsElementView.vue';

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
        TitleView,
        SkillsElementView,
    },
};
</script>

<template>
    <section id="skills">
        <div class="skills">
            <TitleView
                title="Compétences"
            >
            </TitleView>
            <div class="content">
                <ul v-for="(skill, index) in skills">
                    <SkillsElementView
                        :index="index"
                        :language="skill.language"
                        :percent="skill.percent"
                        :color="skill.color">
                    </SkillsElementView>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Component */
#skills {
    width: 100%;
    padding-top: 20vh;

    .skills {
        @include display(flex);
        @include flex-direction(column);
        width: 100%;
        gap: min(60px, 5vw);

        .content {
            @include display(flex);
            @include flex-direction(column);
            width: 100%;
            padding: 22px;
            border-radius: 5px;
            background-color: rgb(236, 236, 254);
            box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.19);

            > ul {
                margin-bottom: 22px;
            }
        }
    }
}
</style>