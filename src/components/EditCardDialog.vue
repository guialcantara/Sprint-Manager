<template>
  <v-dialog :value="dialogStatus" max-width="700">
    <v-card>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-end" cols="12">
            <v-btn icon @click="$emit('closeDialog')">
              <v-icon color="red"> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-form ref="editCardForm" v-model="validForm">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="data.title"
                  :rules="titleRules"
                  :counter="30"
                  label="Card title"
                  clearable
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="$emit('closeDialog')"> Cancel </v-btn>
          <v-btn color="green" text @click="saveEditDialog"> Save </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogStatus: {
      required: true,
      type: Boolean,
    },
    dialogData: {
      required: true,
      type: Object,
    },
  },
  watch: {
    dialogStatus(value){
      if(value)
      this.data = { ...this.dialogData };
    }
  },
  data() {
    return {
      data: { ...this.dialogData },
      titleRules: [
        (v) => !!v || "Name is required",
        (v) =>  v && v.length <= 30 || "Name must be less than 30 characters",
      ],
      validForm: false,
    };
  },
  methods: {
    saveEditDialog() {
      if (this.$refs.editCardForm.validate()) {
        this.$emit("editCard", this.data);
        this.$emit("closeDialog");
      }
    },
  },
};
</script>

<style></style>
