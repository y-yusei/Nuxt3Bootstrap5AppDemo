<template>
  <div class="all">
  <div class="title">
    <h1 class="Start">Start</h1> 
  </div>
  <div class="quiz"><img src="main1.jpg"></div>
</div>
</template>

<style scoped>
.all {
  position: relative;
  max-width: 100vw;
}
.title {
  position: relative;
  width: 100%;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #008000;
  animation: page 4s 0s ease-in-out forwards;
  z-index: 20;
}
.Start {
  position: relative;
  font-size: 250px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  animation: fadeIn 3s 0s ease-in-out forwards;
  z-index: 30;
}
.quiz {
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  margin-bottom: 0;
  z-index: 10;
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
@keyframes quiz {
  0%,50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>