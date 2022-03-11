import { defineStore } from "pinia";

// mutations
export const mutation = {
    setName(value) {
      const store = userStore();
      store.$patch({
        name: value,
      });
    },
  };

export const userStore = defineStore("user", {
  state: () => ({
    name: "init",
  }),
  actions: {
      fetchName() {
          const mockFetch = () => 'Fetch Name'

          mutation.setName(mockFetch())
      }
  },
  getters: {
      upperName: (state) => state.name.toUpperCase()
  }
});

