<template>
  <div class="w-full max-w-lg">
    <input 
      class="
        w-full py-4 px-6 
        bg-light-purple bg-opacity-10 rounded-3xl
        border-transparent focus:outline-none focus:ring
        focus:ring-purple-400
      "
      type="text" 
      v-model="value" 
      :placeholder="placeholder" 
      @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      value: '',
      error: ''
    }
  },
  // methods: {
  //   onInput() {
  //     // Can add validation here
  //     this.$emit('input', this.value);
  //   },
  // },
}
</script>