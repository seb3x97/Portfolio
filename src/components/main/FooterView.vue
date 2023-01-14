<template>
    <section id="footer">
        <h1>Test</h1>
        <div>
            <h3>MERCI</h3>
        </div>
    </section>
</template>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Component */
#footer {
    height: 300px;
    width: 100%;
    @include clip-path(polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%));

    background-color: darkslategrey;
}
</style>