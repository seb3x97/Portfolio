<template>
<!-- Header -->
<header id="header">
    <div class="content">
        <div id="header-logo"></div>
        <div id="header-main">
            <RouterLink to="/">INFO<span></span></RouterLink>
            <RouterLink to="/work">WORK<span></span></RouterLink>
            <RouterLink to="/editor">EDITOR<span></span></RouterLink>
            <RouterLink to="/contact">CONTACT<span></span></RouterLink>
        </div>
    </div>
</header>
</template>

<style>
#header {
    width: 100%;

    padding: var(--page-border-size);
}

#header > .content {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
}

#header-main {
    display: flex;
    flex-direction: row;

    gap: 4rem;
}

#header-main > a {
    font-family: 'GingerBold';
    font-size: 1.1rem;

    text-align: center;
    text-decoration: none;
    color: var(--header-text-color);
}

#header-main > a.last {
    position: absolute;
    right: 0;
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

@media only screen and (max-width: 700px) {
    #header-main {
        display: flex;
        flex-direction: column;

        width: 100%;

        gap: 16px;
    }

    #header-main > a {
        padding: 12px;
        text-align: center;
        border-radius: 5px;
    }

    #header-main > a.last {
        position: static;
    }

    .router-link-exact-active {
        background-color: #171a1c;
    }

    .router-link-exact-active > span {
        display: none;
    }
}
</style>