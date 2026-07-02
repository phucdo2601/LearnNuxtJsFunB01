import { defineStore } from "pinia";

export const useSignUpStore = defineStore('signup-store', () => {
  const registerInput = ref({
    name:'',
    email: "testEmailB01@gmail.com",
    password: "",
   otpCode:''
  });
  
    return { registerInput }
  })