<template>
    <div>
      <!-- Easyページ（アニメーションあり） -->
      <div class="Easy" v-show="showEasy">
        <NuxtLink to="/">
          <button type="button" class="btn-close" aria-label="Close"></button>
        </NuxtLink>
        <h1 class="title">Easy</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showEasy: true,
      };
    },
    mounted() {
      // Easyの文字が表示された後、一定時間後にフェードアウト
      setTimeout(() => {
        this.showEasy = false;
      }, 1500); // 1.5秒後にフェードアウト
    },
  };
  </script>
  
  <style scoped>
  .Easy {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #008000;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  
  .title {
    font-size: 200px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    animation: fadeInUp 1.5s 0s ease-in-out forwards;
  }
  </style>
  