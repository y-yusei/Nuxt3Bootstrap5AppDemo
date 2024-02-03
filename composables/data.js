new Vue({
  el: '#app',
  export default {
  data: {
    questions: {
      0: {
        pic: "hyougo.jpg",
        ans: "兵庫県"
      },
      1: {
        pic: "hirosima.jpg",
        ans: "広島県"
      }
    },
    currentQuestionNumber: 0,
    isCorrect: false,
    correctAnswerNum: 0
  },
  methods: {
    answerCheck(userChoiceNumber) {
      if (userChoiceNumber === this.questions[this.currentQuestionNumber].ans) {
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

      // 次の質問に進む
      this.currentQuestionNumber += 1;
    },
    // 他のメソッドなども追加できます
  }
});
