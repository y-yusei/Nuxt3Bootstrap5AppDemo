<template>
  <div class="container py-5 mt-5">
    <div class="px-3">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4">この観光名所はどこ？</h1>
        <p class="text-decoration-underline fw-bold display-1">都道府県当てゲーム！</p>
        <p class="fs-3">全国の観光名所の写真が表示され、</p>
        <p class="fs-3">その写真はどの都道府県なのかを当てるゲームです。</p>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3 text-white bg-success">
            <h4 class="my-0 fw-normal display-4">Easy</h4>
          </div>
          <div class="card-body">
            <p class="mt-3 mb-4">簡単なレベルの説明文が入ります。</p>
            <NuxtLink to="/Easy.vue"><button type="button" class="w-100 btn btn-lg btn-outline-success">スタート</button></NuxtLink>
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
            <NuxtLink to="./Easy">
            <button type="button" class="w-100 btn btn-lg btn-outline-warning">スタート</button></NuxtLink>
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