<template>
    <div class="bg-white h-screen">
    <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl mb-3">Sign In</h1>


          <FormError>
            <BaseInput
              :type="'text'"
              :placeholder="'info@gmail.com'"
            />
          </FormError>

          <FormError>
            <BaseInput
              :type="'password'"
              :placeholder="'password'"
            />
          </FormError>

          <BaseBtn

            label="Sign in"
          ></BaseBtn>
          <p
            class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
          >
            Dont have an account ?
            <NuxtLink
              to="/auth/signup"
              class="text-indigo-500 hover:text-brand-600 font-semibold"
              >Sign up</NuxtLink
            >
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
    definePageMeta({
        layout: 'admin',
    })
</script>
