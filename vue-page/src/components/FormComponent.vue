<template>
  <div class="w-full flex flex-col items-center px-5 text-center gap-y-8 mb-8">
    <header class="text-gray-700 text-center">
      <div> 
        <h1 class="font-normal text-4xl mb-2">Remind me later</h1>
        <h2 class="font-thin text-xl">Your information will be shared only with D-Fitness</h2>
      </div>
    </header>
    <main class="w-full flex flex-col items-center gap-y-4">
      <CustomInput :placeholder="'Phone Number'" type="phone" v-model="phone"/>
      <p class="text-gray-700">or</p>
      <CustomInput :placeholder="'Email address'" type="email" v-model="email"/>
      <button 
        class="
          w-full max-w-lg mt-4 py-4 
          px-6 bg-light-purple text-white text-bold 
          outline-none border-transparent rounded-3xl 
          hover:bg-purple-800 hover:text-white 
          "
        type="button"
      >
        SUBMIT
      </button>
    </main>
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput"

export default {
  name: 'FormComponent',
  components: {
    CustomInput
  },
  data() {
    return {
      phone: '',
      email: ''
    }
  }
}
</script>
