<template>
  <v-chip class="ma-2" :color="labelData.color" text-color="white">
    {{ labelData.title }}
  </v-chip>
</template>
<script>
export default {
  props: {
    labelData: Object,
  },
};
</script>

<style scoped></style>
