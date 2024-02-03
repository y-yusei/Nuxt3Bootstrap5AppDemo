<template>
  <div class="all" id ='app'>
  <div class="title">
    <h1 class="Start">Start</h1> 
  </div>
  
  <div v-if="showQuiz" class="quiz">
  <div class="col-md-8 offset-md-2">
    <div class="questionBox">
      <div class="box-title">問題</div>
      <p>この写真の都道府県はどこ？</p>
    </div>
  </div>

  <img :src="questions[0].pic" class="img-thumbnail">

  <select v-model="selected2" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>都道府県を選んでください</option>
	<option value="北海道">北海道</option>
	<option value="青森県">青森県</option>
	<option value="岩手県">岩手県</option>
	<option value="宮城県">宮城県</option>
	<option value="秋田県">秋田県</option>
	<option value="山形県">山形県</option>
	<option value="福島県">福島県</option>
	<option value="茨城県">茨城県</option>
	<option value="栃木県">栃木県</option>
	<option value="群馬県">群馬県</option>
	<option value="埼玉県">埼玉県</option>
	<option value="千葉県">千葉県</option>
	<option value="東京都">東京都</option>
	<option value="神奈川県">神奈川県</option>
	<option value="新潟県">新潟県</option>
	<option value="富山県">富山県</option>
	<option value="石川県">石川県</option>
	<option value="福井県">福井県</option>
	<option value="山梨県">山梨県</option>
	<option value="長野県">長野県</option>
	<option value="岐阜県">岐阜県</option>
	<option value="静岡県">静岡県</option>
	<option value="愛知県">愛知県</option>
	<option value="三重県">三重県</option>
	<option value="滋賀県">滋賀県</option>
	<option value="京都府">京都府</option>
	<option value="大阪府">大阪府</option>
	<option value="兵庫県">兵庫県</option>
	<option value="奈良県">奈良県</option>
	<option value="和歌山県">和歌山県</option>
	<option value="鳥取県">鳥取県</option>
	<option value="島根県">島根県</option>
	<option value="岡山県">岡山県</option>
	<option value="広島県">広島県</option>
	<option value="山口県">山口県</option>
	<option value="徳島県">徳島県</option>
	<option value="香川県">香川県</option>
	<option value="愛媛県">愛媛県</option>
	<option value="高知県">高知県</option>
	<option value="福岡県">福岡県</option>
	<option value="佐賀県">佐賀県</option>
	<option value="長崎県">長崎県</option>
	<option value="熊本県">熊本県</option>
	<option value="大分県">大分県</option>
	<option value="宮崎県">宮崎県</option>
	<option value="鹿児島県">鹿児島県</option>
	<option value="沖縄県">沖縄県</option>
</select>
<p v-if="selected2 !== '都道府県を選んでください'">選択した都道府県: {{ selected2 }}</p>
<button @click="answerCheck">回答</button>
</div>
</div>
</template>

<script>
import dataMixin from '~/composables/data.js';

export default {
  mixins: [dataMixin],
  data() {
    return {
      showQuiz: true, // クイズの表示制御
      selected2: '都道府県を選んでください',
    };
  },
  methods: {
    answerCheck() {
      // 回答の確認とアクションを追加する
      console.log('Answer Checked!');
    },
  },
};
</script>

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
  animation: fadeIn 4s 0s ease-in-out forwards;
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
  animation: quiz 5s 0s ease-in-out forwards;
  z-index: 40;
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
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes quiz {
  0%,80% {
    opacity: 0;
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