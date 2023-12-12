<template>

<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <div class="container py-5 mt-5">
    <main class="px-3">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4">この観光名所はどこ？</h1>
        <p class="text-decoration-underline fw-bold display-1">都道府県当てゲーム！</p>
        <p class="fs-3">全国の観光名所の写真が表示され、</p>
        <p class="fs-3">その写真はどの都道府県なのかを当てるゲームです。</p>
      </div>
    </main>

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

</template>