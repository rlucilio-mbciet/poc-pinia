import { defineStore } from "pinia";
import { userStore } from "./userStore";

//Store main agrupando por ns
export const useStore = defineStore("main", {
  state: () => ({
    users: userStore(),
  }),
});
