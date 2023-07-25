<template>
  <div class="work_boxes_wrapper">
    <section class="boxes_left_side">
      <div
        class="wokr_box"
        v-for="(item, index) in store.$state.mypainPortfolio_db"
        :key="index"
        :class="{ active: index === selectedItemindex }"
        @click="selectItem(index)"
      >
        <h3>{{ item.title }}</h3>
        <Tag
          v-if="item.tagValue"
          :severity="item.severity"
          :value="item.tagValue"
        ></Tag>
      </div>
    </section>
    <section class="preview_right_side animate__animated animate__flipInY">
      <Card style="width: 25em; height: 27em">
        <template #header>
          <div style="position: relative">
            <a
              :href="store.$state.mypainPortfolio_db[selectedItemindex].link"
              target="_blank"
            ></a>
            <!-- <img
            v-if="store.$state.mypainPortfolio_db[selectedItemindex].img"
            style="
              max-width: 100%;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
            "
            loading="lazy"
            @load="onDataLoad"
            alt="img should be right back"
            :src="store.$state.mypainPortfolio_db[selectedItemindex].img"
          /> -->
            <video
              ref="videoPlayer"
              style="
                max-width: 100%;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
              @loadeddata="onDataLoad"
              autoplay
              loop
              muted
              controls
            >
              <source
                :src="store.$state.mypainPortfolio_db[selectedItemindex].video"
                type="video/mp4"
              />
              Ваш браузер не поддерживает HTML5 видео.
            </video>
            <ProgressSpinner style="margin-left: 40%; position: absolute; top: 0;" v-if="showSpinner" />
          </div>
        </template>
        <template #title>{{
          store.$state.mypainPortfolio_db[selectedItemindex].title
        }}</template>
        <template #content>
          <p>
            {{ store.$state.mypainPortfolio_db[selectedItemindex].content }}
          </p>
        </template>
      </Card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Store } from "../pinia/index";

const store = Store();

const selectedItemindex = ref<number>(0);
const showSpinner = ref<boolean>(true);
const videoPlayer = ref<HTMLVideoElement | null>(null);
const onDataLoad = () => {
  showSpinner.value = false;
  if (videoPlayer.value) {
    videoPlayer.value.play();
  }
};

const selectItem = (index: number) => {
  document
    .querySelector(".preview_right_side")
    ?.classList.remove("animate__flipInY");
  setTimeout(() => {
    selectedItemindex.value = index;
    if (videoPlayer.value) {
      videoPlayer.value.pause();
      videoPlayer.value.currentTime = 0;
      videoPlayer.value.load();
    }
    document
      .querySelector(".preview_right_side")
      ?.classList.add("animate__flipInY");
  }, 100);
};
</script>

<style scoped>
.work_boxes_wrapper {
  display: grid;
  margin: 10px;
  margin-left: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
}
.boxes_left_side {
  display: grid;
  gap: 40px;
}
.boxes_left_side .wokr_box {
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-height: 50px;
  height: fit-content;
  padding: 10px;
  border-radius: 7px;
  background-color: rgba(222, 227, 232, 0.7);
  z-index: 9;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  scale: 1;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.3s ease forwards;
}

.boxes_left_side .wokr_box.active {
  border: 2px solid #007bff;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.boxes_left_side .wokr_box:nth-child(1) {
  animation-delay: 0s;
}

.boxes_left_side .wokr_box:nth-child(2) {
  animation-delay: 0.2s;
}

.boxes_left_side .wokr_box:nth-child(3) {
  animation-delay: 0.3s;
}
.boxes_left_side .wokr_box:nth-child(4) {
  animation-delay: 0.4s;
}
.boxes_left_side .wokr_box:nth-child(5) {
  animation-delay: 0.5s;
}
.boxes_left_side .wokr_box:nth-child(6) {
  animation-delay: 0.6s;
}

.preview_right_side {
  align-self: center;
  justify-self: center;
  z-index: 9;
  cursor: pointer;
  position: relative;
}

video::-webkit-media-controls {
  display: none !important;
}
a {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>
