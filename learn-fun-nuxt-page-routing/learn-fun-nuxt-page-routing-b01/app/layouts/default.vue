<template>
    <div>
        <slot />
        <div class="">
            <div class="">Full path: {{ route.fullPath }}</div>
            <div class="">Params: {{ route.params }}</div>
            <div class="">Page Name: {{ route.name }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute()
</script>

<style lang="scss" scoped>

</style>