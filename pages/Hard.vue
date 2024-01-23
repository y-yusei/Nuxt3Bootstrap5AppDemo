<template>
  <div class="title">
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
  background: #FF0000;
  animation: page 4s 0s ease-in-out forwards;
}
.Start {
  font-size: 250px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  animation: fadeIn 3s 0s ease-in-out forwards;
}
@keyframes page {
  0%,75%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}

</style>