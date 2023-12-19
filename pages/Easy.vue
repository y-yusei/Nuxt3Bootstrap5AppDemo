<template>
  <NuxtLink to="/">
  <button type="button" class="btn-close" aria-label="Close"></button></NuxtLink>
  <div class="title">
    <h1 class="Easy">Easy</h1>
    <h1 class="Start">Start</h1>
  </div>
  <div class="Game-Content">

  </div>
</template>

<style scoped>

@keyframes page {
  0% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.title {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #008000;
  animation: page 7s 0s ease-in-out forwards;
}

@keyframes fadeInOne {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
.Easy {
  font-size: 200px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  animation: fadeInOne 3s 0s ease-in-out forwards;
}

@keyframes fadeInTwo {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  75% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
.Start {
  font-size: 200px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  animation: fadeInTwo 6s 0s ease-in-out forwards;
}
</style>