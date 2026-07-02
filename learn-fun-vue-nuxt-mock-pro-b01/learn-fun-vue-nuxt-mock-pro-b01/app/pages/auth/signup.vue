<template>
  <div class="bg-white h-screen">
    <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl mb-3">Sign up</h1>
          <FormError :errors="v$.name.$errors">
            <BaseInput
              v-model="registerInput.name"
              :type="'text'"
              :placeholder="'name'"
            />
          </FormError>

          <FormError :errors="v$.email.$errors">
            <BaseInput
              v-model="registerInput.email"
              :type="'text'"
              :placeholder="'info@gmail.com'"
            />
          </FormError>

          <FormError :errors="v$.password.$errors">
            <BaseInput
              v-model="registerInput.password"
              :type="'password'"
              :placeholder="'password'"
            />
          </FormError>

          <BaseBtn
            @click="submitInput"
            :loading="loading"
            label="Sign up"
          ></BaseBtn>

          <p
            class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
          >
            Already have an account?
            <NuxtLink
              to="/auth/signin"
              class="text-indigo-500 hover:text-brand-600 font-semibold"
              >Sign in</NuxtLink
            >
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import BaseBtn from "~/components/base-components/BaseBtn.vue";
import BaseInput from "~/components/base-components/BaseInput.vue";
import FormError from "~/components/base-components/FormError.vue";
import { useSignUpStore } from "~/stores/auth/signup-store";

definePageMeta({
  layout: "auth",
});

const rules = {
  name:{required},
  email: { required, email }, // Matches state.firstName
  password: { required }, // Matches state.lastName
};

const signUpStore=useSignUpStore()
const {registerInput}=storeToRefs(signUpStore)

const v$ = useVuelidate(rules, registerInput);
const loading = ref(false);
const router = useRouter();

const submitInput = async () => {};
</script>
