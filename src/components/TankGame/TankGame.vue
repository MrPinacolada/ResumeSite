<template>
    <div>
      <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'TankGame',
    setup() {
      const canvas = ref<HTMLCanvasElement | null>(null);
      let ctx: CanvasRenderingContext2D | null = null;
      let playerTankX = 0;
      let playerTankY = 0;
      const playerTankSpeed = 5;
      let isPlayerTankMoving = false;
      let isPlayerTankShooting = false;
      const playerBullets: { x: number; y: number }[] = [];
      const enemyTanks: { x: number; y: number }[] = [];
  
      function handleKeydown(event: KeyboardEvent) {
        if (event.code === 'KeyW') {
          isPlayerTankMoving = true;
        } else if (event.code === 'KeyS') {
          isPlayerTankMoving = true;
        } else if (event.code === 'KeyA') {
          isPlayerTankMoving = true;
        } else if (event.code === 'KeyD') {
          isPlayerTankMoving = true;
        } else if (event.code === 'Space') {
          isPlayerTankShooting = true;
        }
      }
  
      function handleKeyup(event: KeyboardEvent) {
        if (
          event.code === 'KeyW' ||
          event.code === 'KeyS' ||
          event.code === 'KeyA' ||
          event.code === 'KeyD'
        ) {
          isPlayerTankMoving = false;
        } else if (event.code === 'Space') {
          isPlayerTankShooting = false;
        }
      }
  
      function update() {
        if (isPlayerTankMoving) {
          // Обновление позиции игрока в соответствии с нажатыми клавишами
          if (isPlayerTankMoving && playerTankY > 0) {
            playerTankY -= playerTankSpeed;
          }
          if (isPlayerTankMoving && playerTankY < canvas.value!.height - 50) {
            playerTankY += playerTankSpeed;
          }
          if (isPlayerTankMoving && playerTankX > 0) {
            playerTankX -= playerTankSpeed;
          }
          if (isPlayerTankMoving && playerTankX < canvas.value!.width - 50) {
            playerTankX += playerTankSpeed;
          }
        }
  
        if (isPlayerTankShooting) {
          // Логика стрельбы игрока при нажатии пробела
          const bulletX = playerTankX + 25;
          const bulletY = playerTankY;
          playerBullets.push({ x: bulletX, y: bulletY });
        }
  
        // Обновление позиций вражеских танков и их поведения
        for (const enemyTank of enemyTanks) {
          // Логика движения вражеского танка
          const randomDirection = Math.floor(Math.random() * 4);
          if (randomDirection === 0 && enemyTank.y > 0) {
            enemyTank.y -= playerTankSpeed;
          } else if (randomDirection === 1 && enemyTank.y < canvas.value!.height - 50) {
            enemyTank.y += playerTankSpeed;
          } else if (randomDirection === 2 && enemyTank.x > 0) {
            enemyTank.x -= playerTankSpeed;
          } else if (randomDirection === 3 && enemyTank.x < canvas.value!.width - 50) {
            enemyTank.x += playerTankSpeed;
          }
  
          // Логика стрельбы вражеского танка
          const randomFire = Math.random();
          if (randomFire < 0.01) {
            const bulletX = enemyTank.x + 25;
            const bulletY = enemyTank.y + 50;
            playerBullets.push({ x: bulletX, y: bulletY });
          }
        }
  
        // Отрисовка игровых объектов на холсте
        ctx?.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
        ctx?.fillRect(playerTankX, playerTankY, 50, 50);
  
        // Отрисовка пуль игрока
        ctx!.fillStyle = 'red';
        for (const bullet of playerBullets) {
          ctx?.fillRect(bullet.x, bullet.y, 5, 10);
        }
  
        // Отрисовка вражеских танков
        ctx!.fillStyle = 'blue';
        for (const enemyTank of enemyTanks) {
          ctx?.fillRect(enemyTank.x, enemyTank.y, 50, 50);
        }
  
        requestAnimationFrame(update);
      }
  
      onMounted(() => {
        ctx = canvas.value!.getContext('2d');
        window.addEventListener('keydown', handleKeydown);
        window.addEventListener('keyup', handleKeyup);
        update();
      });
  
      onUnmounted(() => {
        window.removeEventListener('keydown', handleKeydown);
        window.removeEventListener('keyup', handleKeyup);
      });
  
      return {
        canvas,
      };
    },
  };
  </script>
  
  <style scoped>
  div {
    display: flex;
    justify-content: center;
  }
  
  canvas {
    border: 1px solid black;
  }
  </style>
  