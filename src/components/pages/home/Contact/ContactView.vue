<script lang="ts">
/* Imports */

import TitleView from '@/components/pages/home/PageTitleView.vue';

/**
 * Vue Editor
 */
export default {
	data() {
		return {
			buttonActived: false,
			email: "sebastienvoide876@gmail.com",
			github: "seb3x97",
		};
	},
    components: {
        TitleView,
    },
};
</script>

<template>
    <!-- Contact -->
    <div id="contact">
        <div class="contact">
            <!-- Title -->
            <TitleView
                title="Contact">
            </TitleView>

            <!-- Container -->
            <div class="container">
                <!-- Header -->
                <section>
                    <div class="content">
                        <img class="image" src="/images/images/home/contact/avatar.jpg" />
                        <div class="title">
                            <h3>Sébastien Voide</h3>
                            <p>
                                Je suis un développeur full stack<br/>
                                et j'adore automatiser des tâches<br/>
                                (intelligence artificielle)<br/>
                            </p>
                        </div>
                    </div>
                    <div class="button">
                        <button
                            @click="buttonActived = !buttonActived"
                            :class="{ 'active' : buttonActived }"
                        >
                            <p v-if="!buttonActived">CONTACTEZ-MOI</p>
                            <img
                                v-if="buttonActived"
                                src="/images/icons/home/contact/arrow-right.svg"
                            />
                        </button>
                    </div>
                </section>
                
                <!-- Links -->
                <nav :class="{ 'active' : buttonActived }">
                    <!-- Github -->
                    <a
                        class="element"
                        :href="`https://github.com/${github}`"
                        target="_blank"
                    >
                        <div class="content">
                            <img class="image" src="/images/icons/home/contact/github.svg" />
                            <div class="title">
                                <p>Github</p>
                                <p class="more">{{ github }}</p>
                            </div>
                            <img
                                class="icon"
                                src="/images/icons/home/contact/arrow-right.svg"
                            />
                        </div>
                    </a>

                    <!-- Email -->
                    <a class="element" :href="`mailto:${email}`" target="_blank">
                        <div class="content">
                            <img class="image" src="/images/icons/home/contact/gmail.svg" />
                            <div class="title">
                                <p>Email</p>
                                <p class="more">{{ email }}</p>
                            </div>
                            <img
                                class="icon"
                                src="/images/icons/home/contact/arrow-right.svg"
                            />
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Component */
#contact {
    @include display(flex);
    @include flex-direction(row);
    justify-content: center;
    width: 100%;
    padding-top: 20vh;

    .contact {
        @include display(flex);
        @include flex-direction(column);
        justify-content: center;
        align-items: center;
        width: 460px;
        gap: min(60px, 5vw);

        > .container {
            @include display(flex);
            @include flex-direction(column);
            
            > section {
                @include display(flex);
                @include flex-direction(column);
                width: 100%;
                padding: var(--content-main-padding);
                border-radius: var(--rounded-border);
                background-color: #bec7d0;

                > .content {
                    @include display(flex);
                    @include flex-direction(row);
                    height: 100%;
                    width: 100%;

                    > .image {
                        height: var(--contact-avatar-height);
                        width: var(--contact-avatar-height);
                        border-radius: var(--rounded-border);
                    }

                    > .title {
                        display: flex;
                        flex-direction: column;
                        margin-top: 12px;
                        margin-left: 32px;

                        > * {
                            color: black;
                            font-family: "Roboto Condensed", sans-serif;
                        }

                        > h3 {
                            margin-bottom: 8px;
                            font-size: 22px;
                        }

                        > p {
                            font-size: 16px;
                            letter-spacing: 0.5px;
                        }
                    }
                }

                > .button {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 40px;
                    width: 100%;
                    margin-top: 32px;

                    > button {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 10px;
                        left: 50%;
                        bottom: 0;
                        border-radius: 25px;
                        cursor: pointer;
                        text-decoration: none;
                        background-color: white;
                        transition: bottom 2s, right 2s;

                        > img {
                            height: 10px;
                            width: 10px;
                        }
                    }

                    > button.active {
                        transform: rotateZ(-90deg);
                    }
                }
            }

            /* Links */
            > nav {
                position: relative;
                visibility: visible;
                display: flex;
                flex-direction: column;
                width: 100%;
                opacity: 1;
                transition: visibility 0.3s linear, opacity 0.3s linear;

                > .element {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    margin-top: 25px;
                    border-radius: var(--rounded-border);
                    color: black;
                    cursor: pointer;
                    text-decoration: none;
                    background-color: white;

                    > .content {
                        flex: 1 1 0;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        height: var(--contact-element-height);
                        margin: 20px;

                        > .image {
                            height: var(--contact-element-height);
                            width: var(--contact-element-height);
                        }

                        > .title {
                            flex: 1 1 auto;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            margin-left: 16px;

                            > p {
                                font-size: 16px;
                                color: black;
                            }
                        }

                        > .icon {
                            height: 30px;
                            width: 30px;
                        }
                    }
                }
            }

            > nav:not(.active) {
                visibility: hidden;
                opacity: 0;
            }
        }
    }
}

@media only screen and (max-width: 700px) {
	.contact {
		width: 70%;

        > .container > section {
            padding: var(--content-main-padding-reduce);

            > .content {
                flex-direction: column;

                > .title {
                    margin-top: 24px;
                    margin-left: 0;

                    > h3 {
                        font-size: 18px;
                    }

                    > p {
                        font-size: 14px;
                    }
                }
            }

            > .button {
                margin-top: var(--content-main-padding-reduce);
            }
        }

        nav > .element > .content > .title {
            > p {
                font-size: 14px;
            }

            > .more {
                display: none;
            }
        }
	}
}

@keyframes fadeIn {
	from {
		visibility: hidden;
	}

	to {
		visibility: visible;
	}
}
</style>
