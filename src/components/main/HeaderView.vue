<template>
    <!-- Header -->
    <header class="header">
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
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Component */
.header {
    @include display(flex);
    @include flex-direction(row);
    padding: 3.5vw;
    width: 100%;

    .content {
        position: relative;
        @include display(flex);
        @include flex-direction(row);
        justify-content: center;
        align-items: center;

        width: 100%;

        .navigation {
            display: flex;
            flex-direction: row;

            gap: 4rem;

            > a {
                font-family: "GingerBold";
                font-size: 1.1rem;

                text-align: center;
                text-decoration: none;
                color: var(--color-heading);
            }

            .last {
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
	height: 1px;
	bottom: 0;

	background-color: white;
}

@include for-phone-only {
	.header .content .navigation {
        @include display(flex);
        @include flex-direction(column);

        width: 100%;

        gap: 16px;

        > a {
            padding: 12px;
            text-align: center;
            border-radius: 5px;
        }

        .last {
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
