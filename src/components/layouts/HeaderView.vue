<template>
    <!-- Header -->
    <header id="header">
        <div class="content">
            <nav class="navigation">
                <a href="#projects">PROJECTS<span></span></a>
                <a href="#stats">STATS<span></span></a>
                <a href="#skills">SKILLS<span></span></a>
                <a href="#contact">CONTACT<span></span></a>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Component */
#header {
    position: fixed;
    @include display(flex);
    @include flex-direction(row);
    padding: 2.5vw;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
    z-index: 10;

    > .content {
        position: relative;
        @include display(flex);
        @include flex-direction(row);
        justify-content: center;
        align-items: center;

        width: 100%;

        > .navigation {
            display: flex;
            flex-direction: row;

            > a {
                font-family: "GingerBold";
                font-weight: bold;

                text-align: center;
                text-decoration: none;
                color: var(--color-heading);
            }
        }
    }
}

@include for-phone-only {
	#header > .content > .navigation {
        justify-content: space-evenly;
        width: 100%;
        gap: 0;

        > a {
            padding: 12px 0;
            font-size: 0.9rem;
        }

        > :last-child {
            position: static;
        }
    }
}

@include for-tablet-portrait-up {
    #header > .content > .navigation {
        justify-content: space-evenly;
        width: 100%;
        gap: 0;

        > a {
            padding: 12px 0;
            font-size: 1rem;
        }

        > :last-child {
            position: static;
        }
    }
}

@include for-tablet-landscape-up {
    #header > .content > .navigation {
        width: auto;
        gap: 4rem;

        > a {
            padding: 0;
            font-size: 1.1rem;
        }

        > :last-child {
            position: absolute;
            right: 0;
        }
    }
}
</style>
