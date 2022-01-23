<template>
  <v-col
    cols="12"
    md="4"
    lg="3"
    :key="listData.id"
    class="align-center d-flex flex-column fill-height"
  >
    <Label :labelData="listData.label" />
    <v-card class="list rounded-lg d-flex flex-column align overflow-y-auto">
      <draggable
        v-model="listData.items"
        class="card-container pa-4"
        v-bind="dragOptions"
        @change="changed(listData.label, $event)"
        @end="sendAction"
      >
          <Card
            v-for="(element, index) in listData.items"
            :cardData="element"
            :key="index"
          />
      </draggable>
    </v-card>
  </v-col>
</template>
<script>
import draggable from "vuedraggable";
import Card from "./Card";
import Label from "./Label";
export default {
  components: {
    draggable,
    Card,
    Label,
  },
  props: {
    listData: Object,
  },
  methods: {
    changed(labelOfList,e) {
        if (e.removed) {
          e.removed.element.labels = e.removed.element.labels.filter(
            (e) => e.id != labelOfList.id
          );
        } else if(e.added) {
          e.added.element.labels.push(labelOfList);
        }        
    },
    sendAction(){
       this.$store.dispatch('updateList', {list:this.listData, listId: this.listData.id})
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        ghostClass: "ghost",
      };
    }, 
  },
};
</script>

<style>
.over {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.404);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  z-index: 10;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb !important ;
}
.list {
  width: 100%;
  height: 100%;
}

ul {
  height: 100%;
  list-style: none;
}

.card-container {
  max-height: calc(100% - 24px);
  min-height: calc(100% - 24px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
