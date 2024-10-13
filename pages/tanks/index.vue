<template>
  <div class="divcanvas" ref="tankGame">
    <span id="Player1Score"></span>
    <span id="Player2Score"></span>
    <!-- <button class="endGame" @click="endgame">Give up</button> -->
    <canvas
      v-show="!loader"
      id="tankscanvas"
      :width="tankGame?.offsetWidth"
      :height="tankGame?.offsetHeight"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import bulleeExp1 from "~/assets/tankgame/bulletexp/tile000.png";
import bulleeExp2 from "~/assets/tankgame/bulletexp/tile001.png";
import bulleeExp3 from "~/assets/tankgame/bulletexp/tile002.png";
import bulleeExp4 from "~/assets/tankgame/bulletexp/tile003.png";
import bulleeExp5 from "~/assets/tankgame/bulletexp/tile004.png";
import bulleeExp6 from "~/assets/tankgame/bulletexp/tile005.png";
import bulleeExp7 from "~/assets/tankgame/bulletexp/tile006.png";
import bulleeExp8 from "~/assets/tankgame/bulletexp/tile007.png";
import bulleeExp9 from "~/assets/tankgame/bulletexp/tile008.png";
import bulleeExp10 from "~/assets/tankgame/bulletexp/tile009.png";
import bulleeExp11 from "~/assets/tankgame/bulletexp/tile010.png";
import bulleeExp12 from "~/assets/tankgame/bulletexp/tile011.png";
import bulleeExp13 from "~/assets/tankgame/bulletexp/tile012.png";
import bulleeExp14 from "~/assets/tankgame/bulletexp/tile013.png";
import bulleeExp15 from "~/assets/tankgame/bulletexp/tile014.png";
import tank from "~/assets/tankgame/tankimg/tank1.png";
import wall from "~/assets/tankgame/wallsimg/sidesWall.png";
import sound from "~/assets/tankgame/bulletexp/sound/bulletexplosion.mp3";
import { useRouter } from "vue-router";
const router = useRouter();
const tankGame = ref<any>(null);
const endgame = () => {
  router.back();
};
const loader = ref(true);
const tankLoader = () => {
  setTimeout(() => {
    loader.value = false;
  }, 1500);
};
onMounted(() => {
  if (!tankGame.value) return;
  let canvas = document.getElementById("tankscanvas") as HTMLCanvasElement;
  let drawspace = canvas.getContext("2d");
  tankLoader();
  let tank1 = new Image();
  let tank2 = new Image();
  let wallone = new Image();
  let exp1 = new Image();
  exp1.src = bulleeExp1;
  let exp2 = new Image();
  exp2.src = bulleeExp2;
  let exp3 = new Image();
  exp3.src = bulleeExp3;
  let exp4 = new Image();
  exp4.src = bulleeExp4;
  let exp5 = new Image();
  exp5.src = bulleeExp5;
  let exp6 = new Image();
  exp6.src = bulleeExp6;
  let exp7 = new Image();
  exp7.src = bulleeExp7;
  let exp8 = new Image();
  exp8.src = bulleeExp8;
  let exp9 = new Image();
  exp9.src = bulleeExp9;
  let exp10 = new Image();
  exp10.src = bulleeExp10;
  let exp11 = new Image();
  exp11.src = bulleeExp11;
  let exp12 = new Image();
  exp12.src = bulleeExp12;
  let exp13 = new Image();
  exp13.src = bulleeExp13;
  let exp14 = new Image();
  exp14.src = bulleeExp14;
  let exp15 = new Image();
  exp15.src = bulleeExp15;
  tank1.src = tank;
  tank2.src = tank;
  wallone.src = wall;
  window.addEventListener("keydown", PressDown);
  window.addEventListener("keyup", PressUp);
  let walls: any = [];
  let bulletsPlayer1: any = [];
  let bulletsPlayer2: any = [];
  let animations: any = [];
  let wPress = false;
  let sPress = false;
  let aPress = false;
  let dPress = false;
  let spacePress = false;
  let ePress = false;
  let uPress = false;
  let kPress = false;
  let hPress = false;
  let jPress = false;
  let enterPress = false;
  function PressDown(e: any) {
    if (e.keyCode == 87) {
      wPress = true;
    }
    if (e.keyCode == 83) {
      sPress = true;
    }
    if (e.keyCode == 65) {
      aPress = true;
    }
    if (e.keyCode == 68) {
      dPress = true;
    }
    if (e.keyCode == 32 && Player1.fire && !Player1.beenhit) {
      spacePress = true;
    }
    if (e.keyCode == 69 && Player1.fire && !Player1.beenhit) {
      ePress = true;
    }
    if (e.keyCode == 85) {
      uPress = true;
    }
    if (e.keyCode == 75) {
      kPress = true;
    }
    if (e.keyCode == 74) {
      jPress = true;
    }
    if (e.keyCode == 72) {
      hPress = true;
    }
    if (e.keyCode == 13 && Player2.fire && !Player2.beenhit) {
      enterPress = true;
    }
  }
  function PressUp(e: any) {
    if (e.keyCode == 87) {
      wPress = false;
    }
    if (e.keyCode == 83) {
      sPress = false;
    }
    if (e.keyCode == 65) {
      aPress = false;
    }
    if (e.keyCode == 68) {
      dPress = false;
    }
    if (e.keyCode == 32) {
      spacePress = false;
      Player1.fire = true;
    }
    if (e.keyCode == 69) {
      ePress = false;
    }
    if (e.keyCode == 85) {
      uPress = false;
    }
    if (e.keyCode == 75) {
      kPress = false;
    }
    if (e.keyCode == 74) {
      jPress = false;
    }
    if (e.keyCode == 72) {
      hPress = false;
    }
    if (e.keyCode == 13) {
      enterPress = false;
      Player2.fire = true;
    }
  }
  function control() {
    if (aPress) {
      Player1.rot -= 1;
    }
    if (dPress) {
      Player1.rot += 1;
    }
    if (wPress) {
      let GoustPlayer1 = new Players(
        Player1.x + Math.cos((Player1.rot * Math.PI) / 180),
        Player1.y + Math.sin((Player1.rot * Math.PI) / 180),
        Player1.w,
        Player1.h,
        Player1.rot
      );
      let isCollide = false;
      GoustPlayer1;
      for (let i = 0; i < walls.length; i++) {
        if (willCollide(Player1, walls[i]) || willCollide(Player1, Player2)) {
          isCollide = true;
        }
      }
      if (!isCollide) {
        Player1.x += Math.cos((Player1.rot * Math.PI) / 180) * 2;
        Player1.y += Math.sin((Player1.rot * Math.PI) / 180) * 2;
      }
    }
    if (sPress) {
      let GoustPlayer1 = new Players(
        Player1.x - Math.cos((Player1.rot * Math.PI) / 180),
        Player1.y - Math.sin((Player1.rot * Math.PI) / 180),
        Player1.w,
        Player1.h,
        Player1.rot
      );
      let isCollide = false;
      GoustPlayer1;
      for (let i = 0; i < walls.length; i++) {
        if (willCollide(Player1, walls[i]) || willCollide(Player1, Player2)) {
          isCollide = true;
        }
      }
      if (!isCollide) {
        Player1.x -= Math.cos((Player1.rot * Math.PI) / 180) * 2;
        Player1.y -= Math.sin((Player1.rot * Math.PI) / 180) * 2;
      }
    }
    if (spacePress && Player1.fire) {
      let x =
        Player1.x +
        Player1.w / 2 +
        22 * Math.cos((Player1.rot * Math.PI) / 180);
      let y =
        Player1.y +
        Player1.h / 2 +
        25 * Math.sin((Player1.rot * Math.PI) / 180);
      bulletsPlayer1.push(new Bullet(x, y, 2.5, Player1.rot, 3, 3, "red"));
      Player1.fire = false;
    }
    if (ePress) {
      let x =
        Player1.x +
        Player1.w / 2 +
        25 * Math.cos((Player1.rot * Math.PI) / 180);
      let y =
        Player1.y +
        Player1.h / 2 +
        25 * Math.sin((Player1.rot * Math.PI) / 180);
      cheatBullets.push(new cheatBullet(x, y, 5, Player1.rot, 3, 3));
    }
    if (uPress) {
      let GoustPlayer2 = new Players(
        Player2.x + Math.cos((Player2.rot * Math.PI) / 180),
        Player2.y + Math.sin((Player2.rot * Math.PI) / 180),
        Player2.w,
        Player2.h,
        Player2.rot
      );
      let isCollide = false;
      GoustPlayer2;
      for (let i = 0; i < walls.length; i++) {
        if (willCollide(Player2, walls[i]) || willCollide(Player2, Player1)) {
          isCollide = true;
        }
      }
      if (!isCollide) {
        Player2.x += Math.cos((Player2.rot * Math.PI) / 180) * 2;
        Player2.y += Math.sin((Player2.rot * Math.PI) / 180) * 2;
      }
    }
    if (kPress) {
      Player2.rot += 1;
    }
    if (jPress) {
      let GoustPlayer2 = new Players(
        Player2.x - Math.cos((Player2.rot * Math.PI) / 180),
        Player2.y - Math.sin((Player2.rot * Math.PI) / 180),
        Player2.w,
        Player2.h,
        Player2.rot
      );
      let isCollide = false;
      GoustPlayer2;
      for (let i = 0; i < walls.length; i++) {
        if (willCollide(Player2, walls[i]) || willCollide(Player2, Player1)) {
          isCollide = true;
        }
      }
      if (!isCollide) {
        Player2.x -= Math.cos((Player2.rot * Math.PI) / 180) * 2;
        Player2.y -= Math.sin((Player2.rot * Math.PI) / 180) * 2;
      }
    }
    if (hPress) {
      Player2.rot -= 1;
    }
    if (enterPress && Player2.fire) {
      let x =
        Player2.x +
        Player2.w / 2 +
        25 * Math.cos((Player2.rot * Math.PI) / 180);
      let y =
        Player2.y +
        Player2.h / 2 +
        25 * Math.sin((Player2.rot * Math.PI) / 180);
      bulletsPlayer2.push(new Bullet(x, y, 2.5, Player2.rot, 3, 3, "green"));
      Player2.fire = false;
    }
  }
  // cheat code--------------------------------------------------------------------
  let cheatBullets: any = [];
  class cheatBullet {
    constructor(
      public x: number,
      public y: number,
      public speed: number,
      public rot: number,
      public h: number,
      public w: number
    ) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.rot = rot;
      this.h = h;
      this.w = w;
    }
  }
  function cheatdrawbullets() {
    for (let i = 0; i < cheatBullets.length; i++) {
      drawspace!.fillStyle = "green";
      drawspace!.font = "150px Georgia";
      drawspace!.fillText("peace", cheatBullets[i].x, cheatBullets[i].y);
      cheatBullets[i].x +=
        cheatBullets[i].speed * Math.cos((cheatBullets[i].rot * Math.PI) / 180);
      cheatBullets[i].y +=
        cheatBullets[i].speed * Math.sin((cheatBullets[i].rot * Math.PI) / 180);
    }
  }
  // cheat code----------------------------------------------------------------------
  class Bullet {
    constructor(
      public x: number,
      public y: number,
      public speed: number,
      public rot: number,
      public h: number,
      public w: number,
      public color: any
    ) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.rot = rot;
      this.h = h;
      this.w = w;
      this.color = color;
    }
  }
  class Players {
    fire: boolean;
    score: number;
    beenhit: boolean;
    constructor(
      public x: number,
      public y: number,
      public w: number,
      public h: number,
      public rot: number
    ) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.rot = rot;
      this.fire = true;
      this.score = 0;
      this.beenhit = false;
    }
  }
  class Wall {
    constructor(
      public x: number,
      public y: number,
      public w: number,
      public h: number,
      public color: any,
      public moveX: number,
      public moveY: number,
      public direction: number,
      public shouldmove: boolean
    ) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
      this.moveX = moveX;
      this.moveY = moveY;
      this.shouldmove = shouldmove;
      this.direction = direction;
    }
  }
  class Animationn {
    constructor(
      public x: any,
      public y: any,
      public type: any,
      public start: any,
      public stop: any,
      public delay: any
    ) {
      this.x = x;
      this.y = y;
      this.type = type;
      this.start = start;
      this.stop = stop;
      this.delay = delay;
    }
  }
  class XY {
    constructor(public x: number, public y: number) {
      this.x = x;
      this.y = y;
    }
  }
  class Polugon {
    constructor(public verts: any, public eges: any) {
      this.verts = verts;
      this.eges = eges;
    }
  }
  function willCollide(box1: any, box2: any) {
    let p1 = box1.x + box1.w / 2;
    let q1 = box1.y + box1.h / 2;
    let x1 = box1.x;
    let y1 = box1.y;
    let x2 = box1.x + box1.w;
    let y2 = box1.y;
    let x3 = box1.x;
    let y3 = box1.y + box1.h;
    let x4 = box1.x + box1.w;
    let y4 = box1.y + box1.h;
    let theta = (box1.rot * Math.PI) / 180;
    let p1x1 = (x1 - p1) * Math.cos(theta) - (y1 - q1) * Math.sin(theta) + p1;
    let p1y1 = (x1 - p1) * Math.sin(theta) + (y1 - q1) * Math.cos(theta) + q1;
    let p1x2 = (x2 - p1) * Math.cos(theta) - (y2 - q1) * Math.sin(theta) + p1;
    let p1y2 = (x2 - p1) * Math.sin(theta) + (y2 - q1) * Math.cos(theta) + q1;
    let p1x3 = (x3 - p1) * Math.cos(theta) - (y3 - q1) * Math.sin(theta) + p1;
    let p1y3 = (x3 - p1) * Math.sin(theta) + (y3 - q1) * Math.cos(theta) + q1;
    let p1x4 = (x4 - p1) * Math.cos(theta) - (y4 - q1) * Math.sin(theta) + p1;
    let p1y4 = (x4 - p1) * Math.sin(theta) + (y4 - q1) * Math.cos(theta) + q1;
    let Bp1 = box2.x + box2.w / 2;
    let Bq1 = box2.y + box2.h / 2;
    let Bx1 = box2.x;
    let By1 = box2.y;
    let Bx2 = box2.x + box2.w;
    let By2 = box2.y;
    let Bx3 = box2.x;
    let By3 = box2.y + box2.h;
    let Bx4 = box2.x + box2.w;
    let By4 = box2.y + box2.h;
    let Btheta = (0 * Math.PI) / 180;
    let bx1 =
      (Bx1 - Bp1) * Math.cos(Btheta) - (By1 - Bq1) * Math.sin(Btheta) + Bp1;
    let by1 =
      (Bx1 - Bp1) * Math.sin(Btheta) + (By1 - Bq1) * Math.cos(Btheta) + Bq1;
    let bx2 =
      (Bx2 - Bp1) * Math.cos(Btheta) - (By2 - Bq1) * Math.sin(Btheta) + Bp1;
    let by2 =
      (Bx2 - Bp1) * Math.sin(Btheta) + (By2 - Bq1) * Math.cos(Btheta) + Bq1;
    let bx3 =
      (Bx3 - Bp1) * Math.cos(Btheta) - (By3 - Bq1) * Math.sin(Btheta) + Bp1;
    let by3 =
      (Bx3 - Bp1) * Math.sin(Btheta) + (By3 - Bq1) * Math.cos(Btheta) + Bq1;
    let bx4 =
      (Bx4 - Bp1) * Math.cos(Btheta) - (By4 - Bq1) * Math.sin(Btheta) + Bp1;
    let by4 =
      (Bx4 - Bp1) * Math.sin(Btheta) + (By4 - Bq1) * Math.cos(Btheta) + Bq1;
    let polygonAVertices = [
      new XY(p1x1, p1y1),
      new XY(p1x2, p1y2),
      new XY(p1x3, p1y3),
      new XY(p1x4, p1y4),
    ];
    let polygonAEges = [
      new XY(p1x2 - p1x1, p1y2 - p1y1),
      new XY(p1x4 - p1x2, p1y4 - p1y2),
      new XY(p1x3 - p1x4, p1y3 - p1y4),
      new XY(p1x1 - p1x3, p1y1 - p1y3),
    ];
    let polygonBVertices = [
      new XY(bx1, by1),
      new XY(bx2, by2),
      new XY(bx3, by3),
      new XY(bx4, by4),
    ];
    let polygonBEdges = [
      new XY(bx2 - bx1, by2 - by1),
      new XY(bx4 - bx2, by4 - by2),
      new XY(bx3 - bx4, by3 - by4),
      new XY(bx1 - bx3, by1 - by3),
    ];
    let polygonA = new Polugon(polygonAVertices, polygonAEges);
    let polygonB = new Polugon(polygonBVertices, polygonBEdges);
    if (sat(polygonB, polygonA)) {
      // const dx = box1.x - box2.x;
      // const dy = box1.y - box2.y;
      // const overlapX = (box1.w + box2.w) - Math.abs(dx)/10;
      // const overlapY = (box1.h + box2.h) - Math.abs(dy)/10;

      // if (overlapX < overlapY) {
      //   // Коллизия по оси X
      //   if (dx > 0) {
      //     // Танк справа от стены
      //     box1.x -= overlapX;
      //   } else {
      //     // Танк слева от стены
      //     box1.x += overlapX;
      //   }
      // } else {
      //   // Коллизия по оси Y
      //   if (dy > 0) {
      //     // Танк снизу от стены
      //     box1.y -= overlapY;
      //   } else {
      //     // Танк сверху от стены
      //     box1.y += overlapY;
      //   }
      // }
      return true;
    }
    return false;
  }
  function sat(polygonA: any, polygonB: any) {
    let perpendicularLine = null;
    let dot = 0;
    let perpendicularStack: any = [];
    let amin = null;
    let amax = null;
    let bmin = null;
    let bmax = null;
    for (let i = 0; i < polygonA.eges.length; i++) {
      perpendicularLine = new XY(polygonA.eges[i].x, polygonA.eges[i].y);
      perpendicularStack.push(perpendicularLine);
    }
    for (let i = 0; i < polygonB.eges.length; i++) {
      perpendicularLine = new XY(polygonB.eges[i].x, polygonB.eges[i].y);
      perpendicularStack.push(perpendicularLine);
    }
    for (let i = 0; i < perpendicularStack.length; i++) {
      amin = null;
      amax = null;
      bmin = null;
      bmax = null;
      for (let j = 0; j < polygonA.verts.length; j++) {
        dot =
          polygonA.verts[j].x * perpendicularStack[i].x +
          polygonA.verts[j].y * perpendicularStack[i].y;
        if (amax === null || dot > amax) {
          amax = dot;
        }
        if (amin === null || dot < amin) {
          amin = dot;
        }
      }
      for (let j = 0; j < polygonB.verts.length; j++) {
        dot =
          polygonB.verts[j].x * perpendicularStack[i].x +
          polygonB.verts[j].y * perpendicularStack[i].y;
        if (bmax === null || dot > bmax) {
          bmax = dot;
        }
        if (bmin === null || dot < bmin) {
          bmin = dot;
        }
      }
      if (
        (amin! < bmax! && amin! > bmin!) ||
        (bmin! < amax! && bmin! > amin!)
      ) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function soundOfBullExp() {
    let soundOfBulletExp = new Audio();
    soundOfBulletExp.src = sound;
    soundOfBulletExp.play();
  }
  function drawAnimations() {
    for (let i = 0; i < animations.length; i++) {
      if (animations[i].type == 1) {
        if (animations[i].start == 0) {
          drawspace!.drawImage(
            exp1,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 1) {
          drawspace!.drawImage(
            exp2,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 2) {
          drawspace!.drawImage(
            exp3,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 3) {
          drawspace!.drawImage(
            exp4,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 4) {
          drawspace!.drawImage(
            exp5,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 5) {
          drawspace!.drawImage(
            exp6,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 6) {
          drawspace!.drawImage(
            exp7,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 7) {
          drawspace!.drawImage(
            exp8,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 8) {
          drawspace!.drawImage(
            exp9,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 9) {
          drawspace!.drawImage(
            exp10,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 10) {
          drawspace!.drawImage(
            exp11,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 11) {
          drawspace!.drawImage(
            exp12,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 12) {
          drawspace!.drawImage(
            exp13,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 13) {
          drawspace!.drawImage(
            exp14,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 14) {
          drawspace!.drawImage(
            exp15,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        if (animations[i].start == 15) {
          drawspace!.drawImage(
            exp1,
            Math.floor(animations[i].x),
            Math.floor(animations[i].y)
          );
        }
        animations[i].delay++;
        if (animations[i].delay == 8) {
          animations[i].start++;
          animations[i].delay = 0;
        }
        if (animations[i].start == 15) {
          animations.splice(i, 1);
        }
      }
    }
  }
  function drawWalls() {
    for (let i = 0; i < walls.length; i++) {
      drawspace!.clearRect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
      drawspace!.fillRect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
      drawspace!.fillStyle = walls[i].color;

      for (let b = 0; b < bulletsPlayer1.length; b++) {
        if (
          bulletsPlayer1[b].x >= walls[i].x &&
          bulletsPlayer1[b].x + bulletsPlayer1[b].w <=
            walls[i].x + walls[i].w &&
          bulletsPlayer1[b].y >= walls[i].y &&
          bulletsPlayer1[b].y + bulletsPlayer1[b].h <= walls[i].y + walls[i].h
        ) {
          let bhw = bulletsPlayer1[b].w / 2;
          let bhh = bulletsPlayer1[b].h / 2;
          let whw = walls[i].w / 2;
          let whh = walls[i].h / 2;
          let bCentreX = bulletsPlayer1[b].x + bhw;
          let bCentreY = bulletsPlayer1[b].y + bhh;
          let wCentreX = walls[i].x + whw;
          let wCentreY = walls[i].y + whh;
          let diffX = bCentreX - wCentreX;
          let diffY = bCentreY - wCentreY;
          let minDistX = bhw + whw;
          let minDistY = bhh + whh;
          let depX = diffX >= 0 ? minDistX - diffX : -minDistX - diffX;
          let depY = diffY >= 0 ? minDistY - diffY : -minDistY - diffY;
          animations.push(
            new Animationn(
              bulletsPlayer1[b].x - 30,
              bulletsPlayer1[b].y - 30,
              1,
              0,
              15,
              0
            )
          );
          soundOfBullExp();
          if (depX != 0 && depY != 0) {
            if (Math.abs(depX) > Math.abs(depY)) bulletsPlayer1.splice(b, 1);
          }
          if (depX != 0 && depY != 0) {
            if (Math.abs(depX) < Math.abs(depY)) bulletsPlayer1.splice(b, 1);
          }
        }
      }
      for (let j = 0; j < bulletsPlayer2.length; j++) {
        if (
          bulletsPlayer2[j].x >= walls[i].x &&
          bulletsPlayer2[j].x + bulletsPlayer2[j].w <=
            walls[i].x + walls[i].w &&
          bulletsPlayer2[j].y >= walls[i].y &&
          bulletsPlayer2[j].y + bulletsPlayer2[j].h <= walls[i].y + walls[i].h
        ) {
          let bhw = bulletsPlayer2[j].w / 2;
          let bhh = bulletsPlayer2[j].h / 2;
          let whw = walls[i].w / 2;
          let whh = walls[i].h / 2;
          let bCentreX = bulletsPlayer2[j].x + bhw;
          let bCentreY = bulletsPlayer2[j].y + bhh;
          let wCentreX = walls[i].x + whw;
          let wCentreY = walls[i].y + whh;
          let diffX = bCentreX - wCentreX;
          let diffY = bCentreY - wCentreY;
          let minDistX = bhw + whw;
          let minDistY = bhh + whh;
          let depX = diffX >= 0 ? minDistX - diffX : -minDistX - diffX;
          let depY = diffY >= 0 ? minDistY - diffY : -minDistY - diffY;
          animations.push(
            new Animationn(
              bulletsPlayer2[j].x - 30,
              bulletsPlayer2[j].y - 30,
              1,
              0,
              15,
              0
            )
          );
          soundOfBullExp();
          if (depX != 0 && depY != 0) {
            if (Math.abs(depX) > Math.abs(depY)) bulletsPlayer2.splice(j, 1);
          }
          if (depX != 0 && depY != 0) {
            if (Math.abs(depX) < Math.abs(depY)) bulletsPlayer2.splice(j, 1);
          }
        }
      }
    }
  }
  function pushWalls() {
    walls.push(
      new Wall(
        0,
        0,
        1,
        tankGame.value?.offsetHeight,
        "transparent",
        0,
        0,
        0,
        false
      )
    );
    walls.push(
      new Wall(
        tankGame.value?.offsetWidth - 10,
        0,
        1,
        tankGame.value?.offsetHeight,
        "transparent",
        0,
        0,
        0,
        false
      )
    );
    walls.push(
      new Wall(
        0,
        0,
        tankGame.value?.offsetWidth,
        1,
        "transparent",
        0,
        0,
        0,
        false
      )
    );
    walls.push(
      new Wall(
        0,
        tankGame.value?.offsetHeight,
        tankGame.value?.offsetWidth,
        1,
        "black",
        0,
        0,
        0,
        false
      )
    );
    walls.push(new Wall(250, 200, 300, 20, "black", 500, 0, -1, true));
    walls.push(new Wall(250, 400, 300, 20, "black", 500, 0, 1, true));
    walls.push(new Wall(750, 200, 300, 20, "black", 1000, 0, -1, true));
    walls.push(new Wall(750, 400, 300, 20, "black", 1000, 0, 1, true));
    walls.push(new Wall(650, 150, 20, 350, "black", 0, 200, 1, true));
    walls.push(new Wall(1150, 150, 20, 350, "black", 0, 400, 1, true));
  }

  function wallsAnimation() {
    for (let i = 0; i < walls.length; i++) {
      const speed = walls[i].direction;
      if (walls[i].shouldmove && walls[i].moveX != 0) {
        walls[i].x += speed;
        if (walls[i].x >= walls[i].moveX) {
          walls[i].direction = -1;
        } else {
          if (walls[i].x <= walls[i].moveX / 2) {
            walls[i].direction = 1;
          }
        }
      }
      if (walls[i].shouldmove && walls[i].moveY != 0) {
        walls[i].y += speed;

        if ((walls[i].y + walls[i].h) / 2 >= walls[i].moveY) {
          walls[i].direction = -1;
        } else {
          if ((walls[i].y + walls[i].h) / 2 <= walls[i].moveY - 100) {
            walls[i].direction = 1;
          }
        }
      }
    }
  }

  function drawbulletsPlayer1() {
    for (let i = 0; i < bulletsPlayer1.length; i++) {
      drawspace!.fillStyle = bulletsPlayer1[i].color;

      drawspace!.fillRect(
        bulletsPlayer1[i].x,
        bulletsPlayer1[i].y,
        bulletsPlayer1[i].w,
        bulletsPlayer1[i].h
      );
      bulletsPlayer1[i].x +=
        bulletsPlayer1[i].speed *
        Math.cos((bulletsPlayer1[i].rot * Math.PI) / 180);
      bulletsPlayer1[i].y +=
        bulletsPlayer1[i].speed *
        Math.sin((bulletsPlayer1[i].rot * Math.PI) / 180);
    }
  }
  function drawbulletsPlayer2() {
    for (let g = 0; g < bulletsPlayer2.length; g++) {
      drawspace!.fillRect(
        bulletsPlayer2[g].x,
        bulletsPlayer2[g].y,
        bulletsPlayer2[g].w,
        bulletsPlayer2[g].h
      );
      drawspace!.fillStyle = bulletsPlayer2[g].color;
      bulletsPlayer2[g].x +=
        bulletsPlayer2[g].speed *
        Math.cos((bulletsPlayer2[g].rot * Math.PI) / 180);
      bulletsPlayer2[g].y +=
        bulletsPlayer2[g].speed *
        Math.sin((bulletsPlayer2[g].rot * Math.PI) / 180);
    }
  }
  function imgrot(
    img: CanvasImageSource,
    x: number,
    y: number,
    width: number,
    height: number,
    deg: number
  ) {
    let rad = (deg * Math.PI) / 180;
    drawspace!.translate(x + width / 2, y + height / 2);
    drawspace!.rotate(rad);
    drawspace!.drawImage(
      img,
      Math.floor(width / 2) * -1,
      Math.floor(height / 2) * -1,
      Math.floor(width),
      Math.floor(height)
    );
    drawspace!.rotate(rad * -1);
    drawspace!.translate((x + width / 2) * -1, (y + height / 2) * -1);
  }
  let Player1 = new Players(50, 50, 50, 50, 90);
  let Player2 = new Players(
    tankGame.value?.offsetWidth - 200,
    tankGame.value?.offsetHeight - 220,
    50,
    50,
    -90
  );
  function innerPlayersScore() {
    let innerPlayer1Score = document.getElementById("Player1Score");
    let innerPlayer2Score = document.getElementById("Player2Score");
    innerPlayer1Score!.innerHTML = "Player 1 score " + Player1.score;
    innerPlayer2Score!.innerHTML = "Player 2 score " + Player2.score;
  }
  function gamespace() {
    drawspace!.clearRect(
      0,
      0,
      drawspace!.canvas.width,
      drawspace!.canvas.height
    );
    drawWalls();
    drawbulletsPlayer1();
    drawbulletsPlayer2();
    control();
    cheatdrawbullets();
    drawAnimations();
    wallsAnimation();
    requestAnimationFrame(gamespace);
    if (!Player1.beenhit) {
      imgrot(tank1, Player1.x, Player1.y, Player1.w, Player1.h, Player1.rot);
    }
    if (!Player2.beenhit) {
      imgrot(tank2, Player2.x, Player2.y, Player2.w, Player2.h, Player2.rot);
    }
    for (let i = 0; i < bulletsPlayer2.length; i++) {
      if (willCollide(Player1, bulletsPlayer2[i])) {
        bulletsPlayer2.length = 0;
        bulletsPlayer1.length = 0;
        Player1.beenhit = true;
        animations.push(new Animationn(Player1.x, Player1.y, 1, 0, 15, 0));
        soundOfBullExp();
        setTimeout(() => {
          Player1.beenhit = false;
          Player2.beenhit = false;
          Player2.x = tankGame.value?.offsetWidth - 200;
          Player2.y = tankGame.value?.offsetHeight - 220;
          Player1.x = 50;
          Player1.y = 50;
          Player2.score++;
          innerPlayersScore();
        }, 5000);
      }
    }
    for (let i = 0; i < bulletsPlayer1.length; i++) {
      if (willCollide(Player2, bulletsPlayer1[i])) {
        bulletsPlayer1.length = 0;
        bulletsPlayer2.length = 0;
        Player2.beenhit = true;
        animations.push(new Animationn(Player2.x, Player2.y, 1, 0, 15, 0));
        soundOfBullExp();
        setTimeout(() => {
          Player1.beenhit = false;
          Player2.beenhit = false;
          Player2.x = tankGame.value?.offsetWidth - 200;
          Player2.y = tankGame.value?.offsetHeight - 220;
          Player1.x = 50;
          Player1.y = 50;
          Player1.score++;
          innerPlayersScore();
        }, 5000);
      }
    }
    if (Player1.score == 1 || Player2.score == 1) {
    }
  }
  requestAnimationFrame(gamespace);
  innerPlayersScore();
  pushWalls();
});
</script>

<style scoped lang="scss">
.divcanvas {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  height: 100%;
  width: 100%;
}
#tankscanvas {
  background: transparent;
  z-index: 1;
  height: 100%;
  width: 100%;
}
#Player1Score {
  position: absolute;
  top: 2%;
  z-index: 2;
  font-size: large;
  color: aliceblue;
}
#Player2Score {
  position: absolute;
  color: aliceblue;
  top: 2%;
  left: 30%;
  z-index: 2;
  font-size: large;
}
.endGame {
  position: absolute;
  right: 10%;
  top: 10%;
  z-index: 9999;
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  background-color: rgb(227, 97, 10);
  color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    box-shadow: -2px 5px 22px 0px rgba(0, 0, 0, 0.75);
  }
}
</style>
