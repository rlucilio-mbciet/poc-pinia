<template>
  <div id="app">
    <p>{{ nameUser }}</p>
    <p>{{ upperName }}</p>
    <input type="text" v-model="nameUser" />
    <button @click="fetchName">Fetch</button>
  </div>
</template>

<script>
import { useStore } from "./store/store";
import { mutation } from "./store/userStore";

export default {
  name: "App",
  setup() {
    const store = useStore();

    return { store };
  },
  methods: {
    fetchName() {
      this.store.users.fetchName()
    }
  },
  computed: {
    upperName() {
      return this.store.users.upperName
    },
    nameUser: {
      get() {
        return this.store.users.name;
      },
      set(value) {
        mutation.setName(value);
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
