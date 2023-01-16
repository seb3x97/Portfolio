<script lang="ts">
/* IMPORTS */

//1
import { fetchDataText, fetchDataJson } from '@/scripts/utils.js';

/* CONSTANTES */

//1
const USERNAME = 'seb3x97';                                                                         //Mon nom d'utilisateur Github
const getReposUrl = (username: String) => `https://api.github.com/users/${username}/repos/`;        //Url qui récupére la liste des repos d'un utilisateur
const getRepoContentUrl = (repoUrl: String) => `${repoUrl}/content/`;                               //Url qui permets de télécharger le contenu d'un projet

type ProjectType = {
    created_at: string;
};

/**
 * Vue Editor
 */
export default {
	data() {
		return {
            projects: [
                {
                    name: "Audio Analyser",
                    src: '',
                },
                {
                    name: "Dice",
                    src: '',
                }
            ],
        };
    },
    mounted() {
    },
    methods: {
        /*
        async init() {
            //On récupére l'url
            const reposUrl = getReposUrl(USERNAME);

            //On essaye de récupérer les projets
            const repositories: ProjectType[] | null = await this.getProjectList(reposUrl);
            if(repositories == null) return false;

            //On boucle les projets
            const length = repositories.length || 0;
            for(let i = 0; i < length; ++i) {
                const project = repositories[0];
            };
        },
        async loadProject(files: String) {

        },
        getProjectList(url: string): Promise<ProjectType[] | null> {
            return new Promise((resolve, _) => {
                fetchDataJson(url)
                .then((response: any) => resolve(response))
                .catch(() => resolve(null));
            });
        },
        getProjectContent(url: string) {
            return new Promise((resolve, _) => {
                fetchDataText(url)
                .then((response: any) => resolve(response))
                .catch(() => resolve(null));
            });
        },*/
    },
}
</script>

<template>

</template>

<style scoped lang="scss">
</style>