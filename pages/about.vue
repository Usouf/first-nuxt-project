<template>
    <div>
        <h2>About</h2>
        <p>Hello to Nuxt website about</p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus magni facilis laudantium 
            atque eaque facere iste odio non quisquam nemo, voluptatibus et, consectetur ut. Saepe, 
            cumque reprehenderit? Sunt, accusantium sapiente.
        </p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/AED,GBP')

    if (!data.value) {
        throw createError({ statusCode: 404, statusMessage: "Couldn't fetch data from server", fatal: true })
    }
</script>

<style scoped>
    h2 {
        margin-bottom: 36px;
        font-size: 40px;
    }
    p {
        margin: 20px 0;
    }
</style>