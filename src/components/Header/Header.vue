<template>
  <div class="HeaderContainer animate__animated animate__slideInDown">
    <RouterLink :to="{ name: 'Home' }">
      <span class="HeadP">Resume pages</span>
    </RouterLink>
    <div class="bunchOfLie">
      <span class="HeadP">Works</span>
      <span class="HeadP" id="Skills">Skills</span>
      <RouterLink :to="{ name: 'Experience' }">
        <span class="HeadP hoverEffExp">Experience</span>
      </RouterLink>
      <div class="contatcContainer" :class="{ showContacts: ShowContacts }">
        <div class="ContactWin animate__animated" v-if="ShowContactWin">
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

        <span class="HeadP" @click="ShowContacts = !ShowContacts">Contact</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  setup() {
    let ShowContacts = ref(false);
    let ShowContactWin = ref(false);
    let Copied = ref(false);
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
    watch(ShowContacts, () => {
      if (ShowContacts.value) {
        setTimeout(() => {
          ShowContactWin.value = true;
        }, 1300);
      } else ShowContactWin.value = false;
    });
    return { ShowContacts, ShowContactWin, clickShare, Copied, ShowUpCopied };
  },
});
</script>

<style scoped>
.HeaderContainer {
  display: flex;
  height: 60px;
  background-color: rgb(46, 46, 47);
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: space-between;
}
.HeadP {
  color: rgb(216, 216, 216);
  cursor: pointer;
  z-index: 10;
  position: relative;
  display: inline-block;
}
.bunchOfLie {
  display: flex;
  gap: 70px;
}

#Skills::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: (216, 216, 216); 
  transform: scaleX(0); 
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

#Skills:hover::before {
  transform: scaleX(1); 
  transform-origin: right;
}

.showContacts {
  display: block;
  position: relative;
  transition: transform 1s ease-in-out;
  transform: translateX(calc(50% - 900px));
}

.ContactWin {
  position: absolute;
  top: -40px;
  left: -170px;
  width: 400px;
  background-color: rgb(242, 244, 246);
  border: none;
  border-radius: 7px;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-right {
  0% {
    transform: translateY(80px);
    opacity: 0;
  }
  100% {
    transform: translateY(calc(50% + 45px));
    opacity: 1;
  }
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
  top: 0;
  left: 0;
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

.hoverEffExp {
  box-shadow: inset 0 0 0 0 #54b3d6;
	padding: 0 .25rem;
	margin: 0 -.25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.hoverEffExp:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #54b3d6;;
}
a{
  text-decoration: none;
}
</style>
