<template>
    <div class="flyout">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.flyout {
    position: fixed;
    top: 25%;
    left: -19rem;
    width: 20rem;
    height: 20rem;

    background: repeating-linear-gradient(45deg,
            #bc6060,
            #ba5a5a 10px,
            #d13535 10px,
            #ce3232 20px);

    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    transition: left 0.5s ease-in-out;
    overflow-y: scroll;
    border-radius: 1rem;
}

.flyout:hover {
    left: 0;
}

.flyout.is-active{
    left: 0;
}

</style>