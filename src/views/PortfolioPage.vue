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
      <Card>
        <template #header>
          <a
            :href="store.$state.mypainPortfolio_db[selectedItemindex].link"
            target="_blank"
          ></a>
          <div class="video-wrapper" style="position: relative">
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
            <ProgressSpinner
              style="position: absolute; left: 35%; top: 10%"
              v-if="showSpinner"
            />
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
import { ref} from "vue";
import { Store } from "../pinia/index";

const store = Store();

const selectedItemindex = ref<number>(0);
const showSpinner = ref<boolean>(true);
const videoPlayer = ref<HTMLVideoElement | null>(null);
const onDataLoad = () => {
  if (videoPlayer.value) {
    videoPlayer.value.play();
  }
  setTimeout(() => {
    showSpinner.value = false;
  }, 1000);
};

const selectItem = (index: number) => {
  let workCardInView: HTMLElement | null = document.querySelector(
    ".preview_right_side"
  );
  workCardInView?.classList.remove("animate__flipInY");
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
  if (window.innerWidth <= 768) {
    workCardInView?.scrollIntoView({ behavior: "smooth" });
  }
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

:deep(.p-card) {
  width: 25em;
  height: 27em;
}
@media only screen and (max-width: 768px) {
  .work_boxes_wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 30%;
  }
  .boxes_left_side {
    display: grid;
    gap: 10px;
    margin-left: 20px;
  }
  .boxes_left_side .wokr_box {
    width: 90%;
    max-height: 20px;
    font-size: 0.7em;
  }
  :deep(.p-card) {
    width: 20rem;
    height: 25rem;
    font-size: 0.8em;
  }
  :deep(.p-tag-value) {
    font-size: 0.85em;
  }
}
</style>
