<template>
    <NuxtLink to="/auth/login">
        <Transition name="pop-in" mode="out-in">
            <span v-if="useCookie" class="relative avatar">

            </span>
        </Transition>
    </NuxtLink>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

</style>