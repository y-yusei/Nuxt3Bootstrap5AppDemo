<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1>この観光名所はどこ？</h1>
    <h1>都道府県当てゲーム！</h1>
    <p>全国の観光名所の写真が表示され、その写真はどの都道府県なのかを当てるゲームです。</p>
  </div>

  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3 text-white bg-success">
          <h4 class="my-0 fw-normal display-4">Easy</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>説明文</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-success">Game Strat</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3 text-white bg-warning">
          <h4 class="my-0 fw-normal display-4">Normal</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>説明文</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-warning">Game Strat</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-danger">
        <div class="card-header py-3 text-white bg-danger">
          <h4 class="my-0 fw-normal display-4">Hard</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>説明文</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-danger">Game Strat</button>
        </div>
      </div>
    </div>
  </div>
</template>