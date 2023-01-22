<template>
    <section id="footer">
        <p>Merci pour la lecture</p>
        <p class="middle">© Copyright {{ new Date().getFullYear() }}</p>
        <p>Sébastien Voide</p>
    </section>
</template>

<style scoped lang="scss">
/* Imports */
@import '@/assets/scss/script.scss';

/* Component */
#footer {
    position: relative;
    @include display(flex);
    @include flex-direction(row);
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: max(12px, 2vw);
    background-color: darkslategrey;
    @include clip-path(polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%));

    > p {
        color: white;
    }

    > .middle {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}

@include for-phone-only {
    #footer {
        height: 200px;
        @include clip-path(polygon(0 0, 20% 50px, 100% 0, 100% 100%, 0 100%));

        > p {
            font-size: 12px;
        }
    }
}

@include for-tablet-portrait-up {
    #footer {
        height: 250px;
        @include clip-path(polygon(0 0, 20% 80px, 100% 0, 100% 100%, 0 100%));

        > p {
            font-size: 14px;
        }
    }
}

@include for-tablet-landscape-up {
    #footer {
        height: 300px;

        > p {
            font-size: 18px;
        }
    }
}
</style>