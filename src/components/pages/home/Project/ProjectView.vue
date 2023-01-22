<script lang="ts">
/**
 * Vue Editor
 */
export default {
    props: {
        position: Number,
        html: String,
        name: String,
        icon: String,
    },
};
</script>

<template>
    <div id="project">
        <a class="project" :href="html" target="_blank">
            <div class="header">
                <img :src="icon">
            </div>
            <div class="footer">
                <div class="content">
                    <p>{{ name }}</p>
                    <div class="position">
                        <p>#{{ position }}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

.project {
    --color: var(--color-background-1);
    --background-color: var(--color-background-6);
}

/* Container */
#project {
    @include display(flex);
    @include flex-direction(row);
    justify-content: center;

    .project {
        @include display(flex);
        @include flex-direction(column);
        max-width: min(30vw, 300px);
        border-radius: 5px;
        border: 1.5px solid var(--background-color);
        text-decoration: none;
        overflow: hidden;

        > .header {
            width: 100%;

            > img {
                width: 100%;
            }
        }

        > .footer {
            height: 45px;
            width: 100%;
            padding: 5px 10px;
            background-color: var(--background-color);

            > .content {
                position: relative;
                @include display(flex);
                @include flex-direction(row);
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;

                p {
                    font-weight: bold;
                    color: var(--color);
                }

                > .position {
                    position: absolute;
                    right: 0;
                }
            }
        }
    }
}

@include for-phone-only {
    #project {
        flex: 0 0 55%;

        > .project > .footer > .content p {
            font-size: 14px;
        }
    }
}

@include for-tablet-portrait-up {
    #project {
        flex: 0 0 35%;

        > .project > .footer > .content p {
            font-size: 18px;
        }
    }
}

@include for-tablet-landscape-up {
    #project {
        flex: 0 0 28%;

        > .project > .footer > .content p {
            font-size: 20px;
        }
    }
}
</style>