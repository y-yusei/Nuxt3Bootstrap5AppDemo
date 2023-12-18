<template>
  <router-link to="/">
  <button type="button" class="btn-close" aria-label="Close"></button></router-link>
  <div class="Easy">
    <h1 class="title">Easy</h1>
  </div>
</template>

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