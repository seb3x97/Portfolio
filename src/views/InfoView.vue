<template>
    <!-- Container -->
    <div class="container">
        <div id="info">
            <div v-motion-slide-visible-once-right>
                <p>Text 1</p>
                <p>Text 2</p>
            </div>

            <div
            class="target"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0}"
            >
                <p>Text 1</p>
                <p>Text 2</p>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
/*
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);

            console.log("we");
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                console.log("no");
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    console.log("BOnjour");*/

export default {
    data() {
        return {
            show: true,
        };
    },
}
</script>

<style scoped lang="scss">
/* IMPORTS */
@import '@/assets/scss/import.scss';

/* Container */
.container {
    @include display(flex);
    @include flex-direction(row);
	justify-content: center;
	align-items: center;

    height: 100%;
    widows: 100%;
}

#info {
    height: 100%;
    width: 100%;
}


#info > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.hidden {
    opacity: 0;
    transition: all 1s;
}

.show {
    opacity: 1;
}
</style>
