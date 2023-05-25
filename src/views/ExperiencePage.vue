<template>
  <div class="ExperienceContainer">
    <div class="writingContainer">
      <ul class="ulCont">
        <p>
          Hello! <br />
          I used to work as an engineering systems designer since I got 20.
          <br />
          All compsnies in which I spent my ages until 26 were located in
          Moscow, and I was always up to huge projects.
          <br />
          Nowadays, I've become a front-end developer, which took almost a year.
          <br>
          I'm very creativ, 'always-make-some-fun' man and curious as hell.
          <br>
          Btw, my IELTS is 7, pilot one, gonna pass the real one in the end of June. 
        </p>
      </ul>
    </div>

    <lottie-player
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
}
</style>
