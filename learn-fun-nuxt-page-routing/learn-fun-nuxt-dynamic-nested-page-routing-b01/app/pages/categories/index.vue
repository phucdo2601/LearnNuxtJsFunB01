<template>
    <div>
        <ul>
            <li v-for="category in 10" :key="category">
                <NuxtLink v-bind:to="`/categories/category-${category}`">Category {{ category }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss" scoped>

</style>