<template>
  <div class="title">
    <h1 class="Normal">Normal</h1>
    <h1 class="Start">Start</h1>
  </div>
  <div class="Game-Content">
  </div>
</template>

<style scoped>
.title {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFCC33;
  animation: page 7s 0s ease-in-out forwards;
}
.Normal {
  font-size: 250px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  animation: fadeInOne 3s 0s ease-in-out forwards;
}
.Start {
  font-size: 250px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  animation: fadeInTwo 6s 0s ease-in-out forwards;
}
@keyframes page {
  0%,75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeInOne {
  0%,100% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInTwo {
  0% {
    opacity: 0;
  }
  50%,100% {
    opacity: 0;
    transform: translateY(20px);
  }
  75% {
    opacity: 1;
    transform: none;
  }
}

</style>