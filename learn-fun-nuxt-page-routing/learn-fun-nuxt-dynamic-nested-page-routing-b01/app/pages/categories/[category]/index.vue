<template>
    <div>
        <h1>Category {{ $route.params.category }}</h1>
        <ul>
            <li v-for="product in 10" v-bind:key="product">
                <NuxtLink v-bind:to="`/categories/${$route.params.category}/product-${product}`">Product {{ product }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>