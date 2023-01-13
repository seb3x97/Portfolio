<script lang="ts">
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
};
</script>

<template>
    <div id="component">
        <ul v-for="(skill, index) in skills">
            <li>
                <div class="title">
                    <h3 class="language">{{ skill.language }}</h3>
                    <p class="percent">{{ skill.percent }}%</p>
                </div>
                <div class="content">
                    <span
                        v-motion
                        :initial="{
                            width: '0%',
                        }"
                        :visible="{
                            width: `${skill.percent}%`,
                            transition: {
                                delay: index * 200,
                                duration: 600,
                                ease: 'easeIn',
                            },
                        }"
                        :style="`background-color: ${skill.color};`">
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Component */
#component {
    @include display(flex);
    @include flex-direction(column);
    height: 100%;
    width: 100%;
    padding: 22px;
    border-radius: 5px;

    background-color: #f1f1f1;
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.19);

    ul {
        margin-bottom: 22px;

        li {
            list-style-type: none;

            .title {
                @include display(flex);
                @include flex-direction(row);
                justify-content: space-between;

                .language {
                    color: var(--color-text);
                    font-family: "PT Sans", sans-serif;
                }

                .percent {
                    margin-right: 5px;
                    color: var(--color-text);
                    font-family: "PT Sans", sans-serif;
                    font-size: 18px;
                }
            }

            .content {
                position: relative;
                height: 9px;
                width: 100%;
                margin-top: 6px;
                border-radius: 5px;
                background-color: white;

                span {
                    position: absolute;
                    display: block;
                    height: 100%;
                    width: calc(100% + 2px);
                    left: -1px;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>