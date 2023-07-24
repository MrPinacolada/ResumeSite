import { defineStore } from "pinia";


export const Store = defineStore("pinia", {
  state: () => ({
    ExpPage: null,
    MajPage: null,
    SkillPage: null,
    WorksPage: null,
    mypainPortfolio_db: [
      {
        title: "Canvas games {dice,tanks}",
        content: ` No libraries, no scripts from other resourses. Just a handmaded tank
            game and a few else. I was trying to learn typescript by writting some
            simple games. It took a while but I found that experience I've got very
            useful.`,
        video: "/ResumeSite/src/assets/24.07.2023_17.33.07_REC.mp4",
        severity: "info",
        tagValue: "Start of learning",
        link: "https://github.com/MrPinacolada/FirstWorks",
      },
      {
        title: "Summer sports {envelop}",
        content: `Just a cozy site with an amazing photo-slider and a bit of userbar
            functionality. Supposed to be as a site with lots of topics about sport
            activities.`,
        video: "/ResumeSite/src/assets/24.07.2023_17.45.15_REC.mp4",
        severity: "",
        tagValue: "",
        link: "https://github.com/MrPinacolada/SavePlanet",
      },
      {
        title: "Save planet {envelop}",
        content: `One more qiute good frontend cover for a site about animal protection.
            It has not much functionality, just an envelop.`,
        video: "/ResumeSite/src/assets/24.07.2023_18.10.43_REC.mp4",
        severity: "",
        tagValue: "",
        link: "https://github.com/MrPinacolada/SavePlanet",
      },
      {
        title: "Raptor news {news site}",
        content: `Almost a full working site with the ability to Log In, set own profile
            and like some news. It half works with firebase backend in parts of
            authentication and uploading images, several functions hosted on
            firebase as well. Also, it takes data by API requests in order to
            populate modules.`,
        video: "/ResumeSite/src/assets/24.07.2023_18.17.17_REC.mp4",
        severity: "info",
        tagValue: "With backend",
        link: "https://github.com/MrPinacolada/Raptor_News",
      },
      {
        title: "Emotional notebook {personal site}",
        content: `Meant to be useful source to write your thoughts, feels and emotions.`,

        video: "/ResumeSite/src/assets/24.07.2023_18.21.09_REC.mp4",
        severity: "danger",
        tagValue: "Ongoing",
        link: "https://github.com/MrPinacolada/EmotionalNotebook",
      },
      // {
      //   title: "Bunch of work assingnments {hurts...}",
      //   content: `Almost a full working site with the ability to Log In, set own profile
      //       and like s`,
      //   img: "/ResumeSite/src/assets/image3.png",
      //   severity: "",
      //   tagValue: "",
      //   link: "",
      // },
    ],
  }),
  actions: {
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
  },
});
