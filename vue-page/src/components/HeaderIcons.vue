<template>
  <div class="w-full max-w-lg px-5 flex justify-between">
    <div class="flex flex-col justify-stretch items-center gap-y-2">
      <div class="flex justify-center items-center p-4 w-12 h-12 text-white rounded-full bg-light-purple">
        <UilMapMarkerShield class="w-8 h-8"/>
      </div>
      <h1 class="text-light-purple">Directions</h1>
    </div>
    <div class="flex flex-col justify-stretch items-center gap-y-2">
      <div class="flex justify-center items-center p-4 w-12 h-12 text-white rounded-full bg-light-purple">
        <UilPhone class="w-8 h-8"/>
      </div>
      <h1 class="text-light-purple">Call</h1>
    </div>
    <div class="flex flex-col justify-stretch items-center gap-y-2">
      <div class="flex justify-center items-center p-4 w-12 h-12 text-white rounded-full bg-light-purple">
        <UilGlobe class="w-8 h-8"/>
      </div>
      <h1 class="text-light-purple">Website</h1>
    </div>
  </div>
</template>

<script>
import { UilMapMarkerShield } from '@iconscout/vue-unicons';
import { UilPhone } from '@iconscout/vue-unicons';
import { UilGlobe } from '@iconscout/vue-unicons';

export default {
  name: 'HeaderIcons',
  components: {
    UilMapMarkerShield,
    UilPhone,
    UilGlobe
  }
}
</script>

<style>

</style>