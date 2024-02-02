<template>
  <div class="all">
  <div class="title">
    <h1 class="Start">Start</h1> 
  </div>
  
  <div class="quiz">
  <div class="col-md-8 offset-md-2">
    <div class="questionBox">
      <div class="box-title">問題</div>
      <p>この写真の都道府県はどこ？</p>
    </div>
  </div>

  <img src="hyougo.jpg" class="img-thumbnail">

  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
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
  top: 40%;
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
.questionBox {
    position: relative;
    margin: 2em 0;
    padding: 0.5em 1em;
    border: solid 3px #049DBF;
    border-radius: 8px;
}

.questionBox .box-title {
    position: absolute;
    display: inline-block;
    top: -13px;
    left: 10px;
    padding: 0 9px;
    line-height: 1;
    font-size: 20px;
    background: #FFF;
    color: #049DBF;
    font-weight: bold;
}
.questionBox p {
    margin: 0;
    padding: 5px;
    font-size: 18px;
}
</style>