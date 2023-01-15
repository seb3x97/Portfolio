<template>
    <!-- Header -->
    <header id="header">
        <div class="content">
            <nav class="navigation">
                <RouterLink to="/">HOME<span></span></RouterLink>
                <RouterLink to="/work">WORK<span></span></RouterLink>
                <RouterLink to="/editor">EDITOR<span></span></RouterLink>
                <RouterLink class="last" to="/contact">CONTACT<span></span></RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/import.scss';

/* Component */
#header {
    position: fixed;
    @include display(flex);
    @include flex-direction(row);
    padding: min(3.5vw, 3.5vh);
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

            gap: 4rem;

            > a {
                font-family: "GingerBold";
                font-size: 1.1rem;
                font-weight: bold;

                text-align: center;
                text-decoration: none;
                color: var(--color-heading);
            }

            > .last {
                position: absolute;
	            right: 0;
            }
        }
    }
}

.router-link-exact-active {
	position: relative;
}

.router-link-exact-active > span {
	position: absolute;
	display: block;

	width: 100%;
	height: 3px;
	bottom: 0;

	background-color: black;
}

@include for-phone-only {
	#header > .content > .navigation {
        @include display(flex);
        @include flex-direction(column);

        width: 100%;

        gap: 16px;

        > a {
            padding: 12px;
            text-align: center;
            border-radius: 5px;
        }

        > .last {
            position: static;
        }
    }

	.router-link-exact-active {
		background-color: var(--color-background-mute);
	}

	.router-link-exact-active > span {
		display: none;
	}
}
</style>
