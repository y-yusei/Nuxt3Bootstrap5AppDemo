<template>
  <div class="image-map-container">
    <img
      src="https://www.j-lis.go.jp/data/open/cnt/3/599/1/kinki.jpg"
      alt="大阪城"
      usemap="#osaka-castle-map"
      class="spot-image"
    />
    <map name="osaka-castle-map">
      <area
        shape="rect"
        coords="50,50,200,200"
        @click="redirectToPage1"
        alt="エリア1"
      />
      <area
        shape="rect"
        coords="250,50,400,200"
        @click="redirectToPage2"
        alt="エリア2"
      />
    </map>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToPage1() {
      this.$router.push({ name: 'page1' });
    },
    redirectToPage2() {
      this.$router.push({ name: 'page2' });
    },
  }
};
</script>

<style scoped>
.image-map-container {
  position: relative;
}

.spot-image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
}
</style>
