<script lang="ts">
/* Imports */

import TitleView from '@/components/pages/home/PageTitleView.vue';
import ProjectView from '@/components/pages/home/Project/ProjectView.vue';

/**
 * Vue Editor
 */
export default {
	data() {
		return {
            /* Constantes */
            MANAGER_URL: 'https://manager.sebastien-voide.ch?src=',            //Url du manager de projet

            /* Variables */
            projects: [
                {
                    html: 'https://github.com/seb3x97/Dice/blob/main/index.html',
                    name: 'Dice',
                    icon: '/images/home/projects/dice.png',
                },
                {
                    html: 'https://github.com/seb3x97/AudioAnalyser/blob/main/index.html',
                    name: 'AudioAnalyser',
                    icon: '/images/home/projects/audioAnalyser.png',
                },
            ]
        };
    },
    components: {
        TitleView,
        ProjectView,
    },
    methods: {

    },
}
</script>

<template>
    <section id="projects">
        <div class="projects">
            <TitleView
                title="Liste de quelques projets Web"
                description="(open source)">
            </TitleView>
            <div class="list">
                <template v-for="(project, index) in projects">
                    <ProjectView
                        :position="index + 1"
                        :html="`${MANAGER_URL}${project.html}`"
                        :name="project.name"
                        :icon="project.icon">
                    </ProjectView>
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Container */
#projects {
    width: 100%;
    padding-top: 20vh;

    .projects {
        @include display(flex);
        @include flex-direction(column);
        gap: min(60px, 5vw);

        > .list {
            @include display(flex);
            @include flex-direction(row);
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
        }
    }
}
</style>