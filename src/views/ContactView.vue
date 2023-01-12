<script lang="ts">
/**
 * Vue Editor
 */
export default {
    name: 'PageContact',
    data() {
        return {
            buttonActived: false,
            email: 'sebastienvoide876@gmail.com',
            github: 'seb3x97',
        };
    },
};
</script>

<template>
    <!-- Contact -->
    <div class="contact">
        <!-- Header -->
        <section>
            <div class="content">
                <img class="image" src="./src/images/contact/avatar.jpg">
                <div class="title">
                    <h3>Sébastien Voide</h3>
                    <p>Bonjour, Je m'appelle Sébastien Voide et je suis un développeur full stack</p>
                </div>
            </div>
            <div class="button">
                <button @click="buttonActived = !buttonActived" v-bind:class="(buttonActived) ? 'active' : ''">
                    <p v-if="!buttonActived">CONTACT ME</p>
                    <img v-if="buttonActived" src="./src/icons/contact/arrow-right.svg">
                </button>
            </div>
        </section>
        <!-- Links -->
        <nav v-bind:class="(buttonActived) ? 'active' : ''">
            <!-- Github -->
            <a class="element" :href="`https://github.com/${github}`" target="_blank">
                <div class="content">
                    <img class="image" src="./src/icons/contact/github.svg">
                    <div class="title">
                        <p>Github</p>
                        <p class="more">{{github}}</p>
                    </div>
                    <img class="icon" src="./src/icons/contact/arrow-right.svg">
                </div>
            </a>

            <!-- Email -->
            <a class="element" :href="`mailto:${email}`" target="_blank">
                <div class="content">
                    <img class="image" src="./src/icons/contact/gmail.svg">
                    <div class="title">
                        <p>Email</p>
                        <p class="more">{{email}}</p>
                    </div>
                    <img class="icon" src="./src/icons/contact/arrow-right.svg">
                </div>
            </a>
        </nav>
    </div>
</template>

<style scoped>
/* Container */

#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contact {
    display: flex;
    flex-direction: column;

    width: 460px;
}


/* Header */

.contact > section {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: var(--content-main-padding);
    border-radius: var(--contact-border-radius);
    background-color: #bec7d0;
}

.contact > section > .content {
    display: flex;
    flex-direction: row;

    height: 100%;
    width: 100%;

    border-radius: var(--contact-border-radius);
}

.contact > section > .content > .image {
    height: var(--contact-avatar-height);
    width: var(--contact-avatar-height);

    border-radius: var(--contact-border-radius);
}

.contact > section > .content > .title {
    display: flex;
    flex-direction: column;

    margin-top: 12px;
    margin-left: 32px;
}

.contact > section > .content > .title > h3 {
    margin-bottom: 8px;
    font-size: 22px;
}

.contact > section > .content > .title > p {
    font-size: 16px;
    letter-spacing: 0.5px;
}

.contact > section > .content > .title > * {
    color: black;
    font-family: "Roboto Condensed", sans-serif;
}

.contact > section > .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 100%;
    margin-top: 32px;
}

.contact > section > .button > button {
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
}

.contact > section > .button > button.active {
    transform: rotateZ(-90deg);
}

.contact > section > .button > button > img {
    height: 10px;
    width: 10px;
}


/* Links */

.contact > nav {
    position: relative;
    display: flex;
    flex-direction: column;

    width: 100%;

    visibility: visible;
    opacity: 1;

    transition: visibility 0.3s linear, opacity 0.3s linear;;
}

.contact > nav:not(.active) {
    visibility: hidden;
    opacity: 0;
}

.contact > nav > .element {
    display: flex;
    flex-direction: row;

    width: 100%;
    margin-top: 25px;
    border-radius: var(--contact-border-radius);

    color: black;
    cursor: pointer;
    text-decoration: none;
    background-color: white;
}

.contact > nav > .element > .content {
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    height: var(--contact-element-height);

    margin: 20px;
}

.contact > nav > .element > .content > .image {
    height: var(--contact-element-height);
    width: var(--contact-element-height);
}

.contact > nav > .element > .content > .title {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    margin-left: 16px;
}

.contact > nav > .element > .content > .title > p {
    font-size: 16px;
    color: black;
}

.contact > nav > .element > .content > .icon {
    height: 30px;
    width: 30px;
}

@keyframes fadeIn {
    from {
        visibility: hidden;
    }
    to {
        visibility: visible;
    }
}

@media only screen and (max-width: 700px) {
    .contact {
        width: 70%;
    }

    .contact > section {
        padding: var(--content-main-padding-reduce);
    }

    .contact > section > .content {
        flex-direction: column;
    }
    
    .contact > section > .button {
        margin-top: var(--content-main-padding-reduce);
    }

    .contact > section > .content > .title {
        margin-top: 24px;
        margin-left: 0;
    }

    .contact > section > .content > .title > h3 {
        font-size: 18px;
    }
    
    .contact > section > .content > .title > p {
        font-size: 14px;
    }

    .contact > nav > .element > .content > .title > p {
        font-size: 14px;
    }

    .contact > nav > .element > .content > .title > .more {
        display: none;
    }
}
</style>