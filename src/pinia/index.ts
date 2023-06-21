import { defineStore } from "pinia";

export const Store = defineStore("DefaultStore", () => {
  return {
    ExpPage: null,
    MajPage: null,
    SkillPage: null,
    WorksPage: null,
    async fetchData(url: string) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          return json;
        } else {
          throw new Error("Ошибка загрузки JSON");
        }
      } catch (error) {
        console.error("Ошибка: ", error);
        return null;
      }
    },
    async fetchAllData() {
      this.MajPage = await this.fetchData(
        "https://assets8.lottiefiles.com/packages/lf20_ioJYvK.json"
      );
      this.ExpPage = await this.fetchData(
        "https://assets2.lottiefiles.com/packages/lf20_lrdkqhnc.json"
      );
      this.SkillPage = await this.fetchData(
        "https://assets3.lottiefiles.com/packages/lf20_jvkbug4h.json"
      );
      this.WorksPage = await this.fetchData(
        "https://assets3.lottiefiles.com/packages/lf20_jhaabiai.json"
      );
    },
  };
});
