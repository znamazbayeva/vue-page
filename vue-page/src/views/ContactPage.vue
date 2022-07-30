<template>
    <div class="flex flex-col items-center gap-y-8 mb-4">
      <HeaderComponent />
      <p class="font-sm text-center text-purple-300 m-4">You are eligible for a 10% discount on first purchase</p>
      <HeaderIcons/>
      <FormComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import FormComponent from '@/components/FormComponent';
import HeaderIcons from '@/components/HeaderIcons';

export default {
  name: 'ContactPage',
  components: {
    HeaderComponent,
    FormComponent,
    HeaderIcons
  }
}
</script>
