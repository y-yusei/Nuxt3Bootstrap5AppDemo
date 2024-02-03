new Vue({
  el: '#app',
  data: {
    questions: {
      0: {
        pic: "hyougo.jpg"
      },
      1: {
        pic: "hirosima.jpg"
      }
  
  },
  },
  methods: {
    answerCheck(userChoiceNumber) {
      if (userChoiceNumber == this.questions[this.currentQuestionNumber].answerNum) {
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
