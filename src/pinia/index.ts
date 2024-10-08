import { defineStore } from "pinia";
import video1 from "../assets/portfolio_videos/24.07.2023_17.33.07_REC.mp4";
import video2 from "../assets/portfolio_videos/agentum.mp4";
import video4 from "../assets/portfolio_videos/24.07.2023_18.17.17_REC.mp4";
import video5 from "../assets/portfolio_videos/24.07.2023_18.21.09_REC.mp4";
import rwa from "../assets/portfolio_videos/rwa.mp4";
import err_json from "../assets/err_json.json";

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
        video: video1,
        severity: "info",
        tagValue: "Some games",
        isSameOrigin: true,
        link: "/PortfolioPage/tankgame",
      },
      {
        title: "Agentum.pro {full working}",
        content: `Commercial project aimed at simplifying the work of real estate agents. {Php, Nuxt3, Yandex Maps, TypeSript}`,
        video: video2,
        severity: "",
        tagValue: "",
        isSameOrigin: false,
        link: "https://agentum.pro",
      },
      {
        title: "RWA Estate {full working}",
        content: `A platform for buying and selling real estate-backed cryptocurrency tokens, offering secure and transparent investments in property.`,
        video: rwa,
        severity: "",
        tagValue: "",
        isSameOrigin: false,
        link: "https://www.rwa-estate.com",
      },
      {
        title: "Kazakhstan railways {full working}",
        content: `A platform dedicated to tracking and reporting railway incidents across Kazakhstan, ensuring enhanced safety and timely responses.`,
        video: null,
        severity: "",
        tagValue: "",
        isSameOrigin: false,
        link: "https://ispb.dev2uit.ru",
      },
      // {
      //   title: "Summer sports {envelop}",
      //   content: `Just a cozy site with an amazing photo-slider and a bit of userbar
      //       functionality. Supposed to be as a site with lots of topics about sport
      //       activities.`,
      //   video: video2,
      //   severity: "",
      //   tagValue: "",
      //   isSameOrigin: false,
      //   link: "https://mrpinacolada.github.io/SavePlanet/",
      // },
      // {
      //   title: "Save planet {envelop}",
      //   content: `One more qiute good frontend cover for a site about animal protection.
      //       It has not much functionality, just an envelop.`,
      //   video: video3,
      //   severity: "",
      //   tagValue: "",
      //   isSameOrigin: false,
      //   link: "https://mrpinacolada.github.io/SavePlanet/",
      // },
      {
        title: "Raptor news {news site}",
        content: `Almost a full working site with the ability to Log In, set own profile
            and like some news. It half works with firebase backend in parts of
            authentication and uploading images, several functions hosted on
            firebase as well. Also, it takes data by API requests in order to
            populate modules.`,
        video: video4,
        severity: "info",
        tagValue: "With backend",
        isSameOrigin: false,
        link: "https://mrpinacolada.github.io/Raptor_News/",
      },
      {
        title: "Emotional notebook {personal site}",
        content: `Meant to be useful source to write your thoughts, feels and emotions.`,

        video: video5,
        severity: "danger",
        tagValue: "Ongoing / rebase to React Native",
        isSameOrigin: false,
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
          return err_json;
        }
      } catch (error) {
        console.error("Ошибка: ", error);
        return null;
      }
    },
    async fetchAllData() {
      try {
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
        return true;
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        return false;
      }
    },
  },
});
