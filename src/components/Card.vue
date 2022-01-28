<template>
  <v-card class="pa-3 mt-3 rounded-lg align-center" style="cursor: move">
    <v-row class="align-center">
      <v-col cols="6">
        {{ cardData.title }}
      </v-col>

      <v-col cols="6" class="d-flex justify-end">
        <v-btn icon @click="dialogStatus = true">
          <v-icon> mdi-pencil-outline </v-icon>
        </v-btn>

        <v-btn icon color="red">
          <v-icon> mdi-trash-can-outline </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="align-center">
      <v-col cols="9">
        <Label
          v-for="(l, index) in cardData.labels"
          :key="index"
          :labelData="l"
        />
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <v-avatar class="rounded-circle">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Close&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale"
            alt="Avatar"
          />
        </v-avatar>
      </v-col>
    </v-row>
    <EditCardDialog
      :dialogStatus="dialogStatus"
      :dialogData="cardData"
      @editCard="$emit('eventEditCard', $event)"
      @closeDialog="dialogStatus = false"
    />
  </v-card>
</template>
<script>
import Label from "./Label.vue";
import EditCardDialog from "./EditCardDialog.vue";
export default {
  components: {
    Label,
    EditCardDialog,
  },
  data() {
    return {
      dialogStatus: false,
    };
  },
  props: {
    cardData: Object,
  },
};
</script>

<style scoped></style>
