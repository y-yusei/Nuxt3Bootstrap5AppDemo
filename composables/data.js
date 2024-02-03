new Vue({
  el: '#app',
  data: {
    questions: {
      0: {
        pic: "hyougo.jpg",
        ans:"兵庫県"
      },
      1: {
        pic: "hirosima.jpg",
        ans:"広島県"
      }
  
  },
  },
  methods: {
    answerCheck(userChoiceNumber) {
      if (userChoiceNumber == this.questions[this.currentQuestionNumber].ans) {
        this.isCorrect = true;
        this.correctAnswerNum += 1;
      } else {
        this.isCorrect = false;
      }

      // 結果を表示するモーダルを表示する
      $('#answerCheckModal').modal({
        keyboard: false,
        backdrop: "static"
      });
    },
    // 他のメソッドなども追加できます
  }
});
