<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vueで作ったデジタル時計</title>
    </head>
    <body>
        <div id="app" class="all-wrap">   


            //ここから修正
            <button @click="display" v-if="playing">ここをクリック</button>
            <div class="wrap" v-else>
                <div>
                  <h2>今日の日時は</h2>
                  <p class="date">{{date}}</p>
                  <p class="time">{{time}}</p>
                </div>
            </div>
            //ここまで修正


        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js"></script>
        <script>
            var app = new Vue({
                el: '#app',
                data:{
                    date:'',
                    time:'',
                    week:['(日)','(月)','(火)','(水)','(木)','(金)','(土)'],
                    playing:true              //この行を追加
                },
                methods:{
                    updateTime:function(){
                        let currentDate = new Date();
                        this.time = this.degital(currentDate.getHours(),2) + ':' + this.degital(currentDate.getMinutes(),2) + ':' + this.degital(currentDate.getSeconds(),2);
                        this.date = this.degital(currentDate.getFullYear(),4) + '年' + this.degital((currentDate.getMonth() + 1),2) + '月' + this.degital(currentDate.getDate(),2) + '日' + this.week[currentDate.getDay()];
                    },
                    degital:function(num,len){
                        let zero = '';
                        for(let i = 0;i < len;i ++){
                            zero += 0;
                        }
                        return (zero + num).slice(-len);
                    },


                    //ここから追加
                    display(){
                        this.playing = false;
                    }
                    //ここまで追加

                    
                },
                mounted:function(){
                    setInterval(this.updateTime,1000);
                }
            })
        </script>
        <style>
            body{
                position:relative;
                background-color:#79A3DD;
            }
            button{
                border:none;
                position:absolute;
                top:30vh;
                left:50%;
                transform :translate(-50%,-50%);
                padding: 10px;
                border-radius:10px;
            }
            .wrap{
                position:absolute;
                top:30vh;
                left:50%;
                transform :translate(-50%,-50%);
            }
            .time,.date{
                text-align: center;
                font-size: 25px;
                color:#fff;
            }
            h2{
                text-align: center;
                font-size: 40px;
                color:#fff;
            }
        </style>
    </body>
</html>