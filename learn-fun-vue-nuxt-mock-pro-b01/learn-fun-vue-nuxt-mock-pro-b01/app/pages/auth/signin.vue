<template>
    <div class="bg-white h-screen">
    <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl mb-3">Sign In</h1>

          <FormError :errors="v$.email.$errors">
            <BaseInput
                v-model="loginInput.email"
                :type="'text'"
                :placeholder="'abc@email.com'"
            />
          </FormError>
            
          <FormError :errors="v$.password.$errors">
            <BaseInput
                v-model="loginInput.password"
                :type="'password'"
                :placeholder="'info@gmail.com'"
            />
          </FormError>

          <BaseBtn
            @click="submitInput"
            :loading="loading"
            label="Sign In"
          ></BaseBtn>
          <p
            class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
          >
          Dont have an account ?
          <NuxtLink
            to="/auth/signup"
            class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
            >
            Sign Up
          </NuxtLink>
          </p>

        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import BaseBtn from '~/components/base-components/BaseBtn.vue';
import BaseInput from '~/components/base-components/BaseInput.vue';
import FormError from '~/components/base-components/FormError.vue';


    definePageMeta({
        layout: 'auth',
    });

    const loginInput = ({
        email: "",
        password: ""

    });

    const rules = {
        email: {
            required, email
        },
        password: {
            required
        }
    };

    const v$ = useVuelidate(rules, loginInput);

    const loading = ref(false);

    const router = useRouter();

    const userCookie = useCookie('user', userCookieSettings);

    const submitInput = async () => {
      const isValid = v$.value.$validate();

      if (!isValid) {
          return;
      }

      
    }

</script>
