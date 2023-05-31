<template>
  <div class="footerContainer animate__animated animate__slideInUp">
    <lottie-player
      src="https://assets2.lottiefiles.com/packages/lf20_OT15QW.json"
      background="transparent"
      speed="1"
      style="width: 150px; height: 150px"
      loop
      autoplay
    ></lottie-player>
    <div
      class="ContactWin animate__animated animate__backInUp"
      v-if="props.ShowContact"
    >
      <ul class="contactList">
        <li>
          <i class="fas"></i>
          <span
            >Email:
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vasiasko112@gmail.com&su=Offer from the best company in the world"
              >vasiasko112@gmail.com</a
            ></span
          >
        </li>
        <li>
          <i class="fas"></i>
          <span id="TGshare" @click="clickShare(), ShowUpCopied()"
            >Telegram: @Nkanka44</span
          >
          <span class="spanCopy" :class="{ spanCopied: Copied }"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    ShowContact: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    let Copied = ref(false);
    let ShowContacts = ref(false);
    let ShowContactWin = ref(false);
    let clickShare = () => {
      let type = "text/plain";
      let blob = new Blob(["@Nkanka44"], { type });
      let data = [new ClipboardItem({ [type]: blob })];
      navigator.clipboard.write(data);
    };
    let ShowUpCopied = () => {
      Copied.value = true;
      setTimeout(() => {
        Copied.value = false;
      }, 1000);
    };

    return {
      props,
      Copied,
      clickShare,
      ShowUpCopied,
      ShowContacts,
      ShowContactWin,
    };
  },
});
</script>

<style scoped>
.footerContainer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgb(46, 46, 47);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
lottie-player {
  position: absolute;
  left: -30px;
  top: -108px;
  transform: scaleX(-1);
  z-index: 999;
}
.ContactWin {
  display: flex;
  background-color: rgb(242, 244, 246);
  border: none;
  border-radius: 7px;
  margin-bottom: 150px;
}

.contactList {
  list-style: none;
  padding: 0;
  margin: 20px;
}

.contactList li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.contactList li i {
  margin-right: 10px;
}

.contactList li span {
  color: #000;
}

.fas {
  font-size: 16px;
  margin-right: 5px;
}
.spanCopy {
  display: inline-block;
  position: absolute;
  top: 53px;
  left: 215px;
  padding: 3px 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 10px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}
.spanCopy::after {
  content: "Copied!";
  display: block;
  position: absolute;
  top: -3px;
  left: -2px;
  padding: 3px 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 8px;
  border-radius: 4px;
  transition: opacity 0.3s ease-in-out;
}
.spanCopied {
  opacity: 1;
}
#TGshare {
  cursor: pointer;
}

a {
  text-decoration: none;
  cursor: context-menu;
}
</style>
