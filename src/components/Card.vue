<template>
  <v-card class="pa-3 mt-3 rounded-lg align-center" style="cursor: move">
    <v-row class="align-center">
      <v-col>
        <v-avatar class="rounded-circle">
          <img style="cursor: pointer" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Close&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale" alt="Avatar" />
        </v-avatar>
      </v-col>
      <v-col order-sm="3" order-md="2" order-xl="3" class="d-flex justify-end">
        <v-icon> mdi-pencil-outline </v-icon>
        <v-icon color="red"> mdi-trash-can-outline </v-icon>
      </v-col>

      <v-col
        order-sm="2"
        order-md="3"
        order-xl="2"
        md="12"
        xl="6"
        class="text-md-center"
      >
        {{cardTitle}}
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    cardTitle: String,
  },
};
</script>

<style scoped>
</style>
