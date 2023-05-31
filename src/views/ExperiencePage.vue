<template>
  <div class="ExperienceContainer">
    <div class="writingContainer animate__animated animate__zoomIn">
        <p>
          Hello! <br />
          I used to work as an engineering systems designer since I got 20.
          <br />
          All the companies throughout my career until I turned 26 were located
          in Moscow, and I was always busy working on huge engineering projects.
          <br />
          Nowadays, I've become a front-end developer, which took almost a year.
          <br />
          I'm very creativ, 'always-make-some-fun' man and curious as heck.
          <br />
          Btw, my IELTS demo score is 7.0 and I'm gonna pass the real one at the end of June.
        </p>
    </div>

    <lottie-player
      class="animate__animated animate__flipInX"
      src="https://assets2.lottiefiles.com/packages/lf20_lrdkqhnc.json"
      mode="bounce"
      background="transparent"
      speed="1"
      style="width: 35%"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
export default defineComponent({
  components: { Header, Footer },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.ExperienceContainer {
  justify-content: space-between;
  margin-top: 100px;
  display: flex;
  align-items: center;
}
h1 {
  align-self: center;
  margin-left: 20%;
  margin-bottom: 7%;
  cursor: context-menu;
  position: relative;
}
lottie-player {
  margin-right: 100px;
}
.writingContainer {
  width: 700px;
  height: fit-content;
  padding: 30px;
  background-color: rgb(242, 244, 246);
  border: none;
  border-radius: 15px;
  margin-left: 30px;
  cursor: context-menu;
}
@media only screen and (max-width: 768px) {
  .ExperienceContainer {
    justify-content: center;
    margin-top: 50px;
    display: grid;
    align-items: center;
    justify-items: center;
    margin-left: 10px;
    align-content: center;
}
}
h1 {
  align-self: center;
  margin-left: 20%;
  margin-bottom: 7%;
  cursor: context-menu;
  position: relative;
}
lottie-player {
  margin-right: 100px;
}
.writingContainer {
  width: 300px;
  height: fit-content;
  padding: 20px;
  background-color: rgb(242, 244, 246);
  border: none;
  border-radius: 15px;
  margin-left: 0;
  cursor: context-menu;
  font-size: 0.7em;
} 
lottie-player{
  width: 70% !important;
  margin-left: 100px;
}

</style>
