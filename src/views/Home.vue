<template>
  <v-container class="d-flex overflow-hidden" style="height: 100vh">
    <list v-for="list in data" :key="list.id" :listData="list"/>
  </v-container>
</template>

<script>
import List from "../components/List";
import {data} from "../mock/listsData.js"

export default {
  name: "Home",

  components: {
    List,
  },
  data(){
    return{
      data:data
    }
  }
};
</script>
