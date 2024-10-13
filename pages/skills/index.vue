<template>
  <section class="me me-skills">
    <lottie-player
      v-if="anim?.SkillPage"
      class="animate__animated animate__fadeIn"
      autoplay
      loop
      mode="reverse-bounce"
      :src="anim.SkillPage"
      style="width: 620px"
    />
    <Swiper
      :scrollbar="{
        hide: true,
      }"
      :modules="[Scrollbar]"
      :slidesPerView="'auto'"
      :spaceBetween="10"
    >
      <SwiperSlide>123</SwiperSlide>
      <SwiperSlide>123</SwiperSlide>
      <SwiperSlide>123</SwiperSlide>
      <SwiperSlide>123</SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";

const anim = computed(
  () => useState("lottie_anims").value as unknown as Record<string, any>
);
</script>

<style scoped lang="scss">
.me-skills {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
  justify-content: space-between;
  .swiper {
    width: 100%;
    height: 100%;
    max-height: 320px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
