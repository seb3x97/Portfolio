<script lang="ts">
/* CONSTANTES */

const INTERVAL_TIMEOUT = 10_000;

/**
 * Vue Editor
 */
export default {
	data() {
		return {
            imageScale: 1.5,
            interval: -1,
            slideIndex: 0,
            images: [
                {
                    title: "Image d'un ordinateur Apple",
                    src: '/src/assets/images/home/carousel/image1.jpg',
                },
                {
                    title: "Image d'un ordinateur Apple",
                    src: '/src/assets/images/home/carousel/image2.jpg',
                },
                {
                    title: "Image d'un ordinateur Apple",
                    src: '/src/assets/images/home/carousel/image3.jpg',
                },
            ],
		};
	},
    mounted() {
        //On démarre la boucle d'animation
        this.resetInterval();

        //On update la taille des images
        this.updateImageSize();

        //On ajoute l'event
        window.addEventListener('resize', this.updateImageSize);
    },
    methods: {
        updateImageSize() {
            //On récupère le container des slides et la liste des images
            const slides = (this.$refs.slides as HTMLDivElement);
            const images = (this.$refs.images as HTMLImageElement[]);

            //On boucles la liste des images dans le carousel
            for(let i = 0; i < images.length; ++i) {
                const image = images[i];

                //On check si on doit scale par rapport au "width" ou "height"
                const scaleForWidth = (slides.clientWidth / this.imageScale > slides.clientHeight);

                //On change la taille de l'element
                image.style.width = scaleForWidth ? '100%' : 'auto';
                image.style.height = !scaleForWidth ? '100%' : 'auto';
            }
        },
        /**
         * On reset l'intervl qui change de slide automatiquement
         */
        resetInterval() {
            //Si un interval éxsite déjà on le supprime
            if(this.interval != -1) clearInterval(this.interval);

            //On ajoute un nouvel interval
            this.interval = setInterval(() => this.stepSlideNext(), INTERVAL_TIMEOUT);
        },
        /**
         * On change de slide (previous)
         */
        stepSlidePrevious() {
            this.setSlide(-1);
        },
        /**
         * On change de slide (next)
         */
        stepSlideNext() {
            this.setSlide(1);
        },
        /**
         * On change de slide
         */
        setSlide(direction: number) {
            //On récupère le container des slides
            const slides = (this.$refs.slides as HTMLDivElement);
            console.log(slides);

            //On récupére le prochain index
            let nextIndex = this.slideIndex + direction;
            if(nextIndex < 0) nextIndex = (slides.children.length - 1);
            if(nextIndex >= slides.children.length) nextIndex = 0;
            if(this.slideIndex == nextIndex) return;

            //On récupére l'element actuel et le prochain element
            const currentElement = (slides.children[this.slideIndex] as HTMLElement);
            const nextElement = (slides.children[nextIndex] as HTMLElement);

            //On modifie les classes
            currentElement.classList.remove('active');
            nextElement.classList.add('active');

            //On enregistre l'index
            this.slideIndex = nextIndex;

            //On reset l'interval
            this.resetInterval();
        },
    },
};
</script>

<template>
    <section id="carousel">
        <div class="container">
            <div class="actions">
                <button class="left" @click="stepSlidePrevious()"><img src="/src/assets/icons/home/carousel/arrow-left.svg" alt="Flèche gauche pour changer l'image du carrousel"></button>
                <button class="right" @click="stepSlideNext()"><img src="/src/assets/icons/home/carousel/arrow-right.svg" alt="Flèche droite pour changer l'image du carrousel"></button>
            </div>
            <div ref="slides" class="slides">
                <div v-for="(image, index) in images" class="slide" :class="{ 'active': index === 0}">
                    <img ref="images" :src="image.src" :alt="image.title">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/import.scss';

/* Component */
#carousel {
    height: 100vh;
    width: 100%;

    > .container {
        position: relative;
        height: 100%;
        width: 100%;

        > .actions {
            position: absolute;
            display: none;
            height: 100%;
            width: 100%;

            > button {
                position: absolute;
                background-color: transparent;
                height: 80px;
                width: 80px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;

                > img {
                    height: 100%;
                    width: 100%;
                }
            }

            > button.left {
                left: 0;
            }

            > button.right {
                right: 0;
            }
        }

        > .slides {
            height: 100%;
            width: 100%;

            > .slide {
                overflow: hidden;
                position: absolute;
                height: 100%;
                width: 100%;
                opacity: 0;
                z-index: -1;
                //@include transition(transform .6s ease-in-out opacity 3 ease-in-out);
                @include transition(opacity 1s ease-in-out);

                > img {
                    position: absolute;
                    min-height: 100%;
                    min-width: 100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            > .slide.active {
                opacity: 1;
            }
        }
    }

    > .container:hover > .actions {
        display: block;
    }
}
</style>