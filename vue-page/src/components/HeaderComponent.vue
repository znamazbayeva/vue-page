<template>
  <div 
    :style="{
      backgroundImage: `url(${image})`,
      width: '100%',
      height: '400px',
    }" class="">
    <div class="h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-50">
      <h1 class="font-bold text-4xl text-white">D-FITNESS</h1>
      <h2 class="text-2xl text-white">Be Strong, Just do it!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      image: require("@/assets/background_image.jpg")
    };
  },
}
</script>