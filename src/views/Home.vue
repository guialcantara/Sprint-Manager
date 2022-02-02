<template>
  <v-container class="d-flex overflow-hidden" style="height: 100vh">
    <list v-for="list in data" :key="list.id" :listData="list" />
  </v-container>
</template>

<script>
import List from "../components/List";
export default {
  name: "Home",

  components: {
    List,
  },
  data() {
    return {
      data: this.$store.state.lists,
    };
  },
  sockets: {
    connect() {
      console.log("connected");
    },
    events: function (data) {
      console.log("event", data);
    },
    exception: function (data) {
      console.log("event", data);
    },
    disconnect() {
      console.log("Disconnected");
    },
  },
  mounted() {
    this.$socket.emit("events", { test: "test" });
    this.$socket.emit("identity", 2, (response) =>
      console.log("Identity:", response)
    );
  },
};
</script>
