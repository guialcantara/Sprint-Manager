<template>
  <v-col
    cols="12"
    md="4"
    lg="3"
    :key="listData.id"
    class="align-center d-flex flex-column fill-height"
  >
    <h2>{{ listData.title }}</h2>
    <v-card class="list rounded-lg d-flex flex-column align">
      <draggable
        class="overflow-y-auto"
        :name="'flip-list'"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group class="pa-4" tag="ul">
          <Card   v-for="(element, indexx) in listData.items" :cardTitle="element.name" :key="indexx" />
        </transition-group>
      </draggable>
    </v-card>
  </v-col>
</template>
<script>
import draggable from "vuedraggable";
import Card from "./Card";
export default {
  components: {
    draggable,
    Card,
  },
  props: {
    listData: Object,
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;

      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
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

</style>
