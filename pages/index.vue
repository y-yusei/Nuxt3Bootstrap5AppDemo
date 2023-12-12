<template>
<div id="video-area">
  <video id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://shiro100.com/wp-content/uploads/2018/04/%E5%A7%AB%E8%B7%AF%E5%9F%8E100%E5%90%8D%E5%9F%8E%E6%94%BB%E7%95%A5.jpg" class="d-block w-100" alt="First slide">
    </div>
    <div class="carousel-item">
      <img src="https://shiro100.com/wp-content/uploads/2018/08/%E6%96%B0%E5%B9%B9%E7%B7%9A100%E5%90%8D%E5%9F%8E%E6%94%BB%E7%95%A5-1.jpg" class="d-block w-100" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img src="https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/sight/asset/b5bcabab0fcde4e3b4969d388a4923f30fc7e549.png" class="d-block w-100" alt="Third slide">
    </div>
  </div>
  </video>
  </div>
 
<main>
  <div class="container py-5 mt-5">
    <m class="px-3">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4">この観光名所はどこ？</h1>
        <p class="text-decoration-underline fw-bold display-1">都道府県当てゲーム！</p>
        <p class="fs-3">全国の観光名所の写真が表示され、</p>
        <p class="fs-3">その写真はどの都道府県なのかを当てるゲームです。</p>
      </div>
    </m>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3 text-white bg-success">
            <h4 class="my-0 fw-normal display-4">Easy</h4>
          </div>
          <div class="card-body">
            <p class="mt-3 mb-4">簡単なレベルの説明文が入ります。</p>
            <button type="button" class="w-100 btn btn-lg btn-outline-success">スタート</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3 text-white bg-warning">
            <h4 class="my-0 fw-normal display-4">Normal</h4>
          </div>
          <div class="card-body">
            <p class="mt-3 mb-4">普通のレベルの説明文が入ります。</p>
            <button type="button" class="w-100 btn btn-lg btn-outline-warning">スタート</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-danger">
          <div class="card-header py-3 text-white bg-danger">
            <h4 class="my-0 fw-normal display-4">Hard</h4>
          </div>
          <div class="card-body">
            <p class="mt-3 mb-4">難しいレベルの説明文が入ります。</p>
            <button type="button" class="w-100 btn btn-lg btn-outline-danger">スタート</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<style>
#header{
    position: relative;/*h1の中央寄せ配置の起点とするためのrelative*/
    height: 100vh;/*高さを全画面にあわせる*/
} 

#video-area{
    position: fixed;
    z-index: -1;/*最背面に設定*/
    top: 0;
    right:0;
    left:0;
    bottom:0;
    overflow: hidden;
}

#video {
    /*天地中央配置*/
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*縦横幅指定*/
    width: 177.77777778vh; /* 16:9 の幅→16 ÷ 9＝ 177.77% */
    height: 56.25vw; /* 16:9の幅 → 9 ÷ 16 = 56.25% */
    min-height: 100%;
    min-width: 100%;
}

/*見出し設定*/
main{
    /*要素の配置*/
    position:absolute;
    /*要素を天地中央寄せ*/
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    /*見た目の調整*/
    color:#fff;
    text-shadow: 0 0 15px #666;
}
</style>