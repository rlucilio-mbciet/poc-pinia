import { defineStore } from "pinia";
import { userStore } from "./userStore";

export const useStore = defineStore("main", {
  state: () => ({
    users: userStore(),
  }),
});
