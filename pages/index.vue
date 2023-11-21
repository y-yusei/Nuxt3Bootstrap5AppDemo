<template>
  <div class="center-container">
    <h1>関西の観光名所</h1>
    <ImageMap />
    <h2>{{ spot.name }}</h2>
    <p>{{ spot.description }}</p>
  </div>
</template>

<script>
import ImageMap from '~/components/ImageMap.vue';

export default {
  components: {
    ImageMap
  },
  data() {
    return {
      spot: {
        id: 1,
        name: "大阪城",
        description: "大阪城は..."
      }
      // 他の観光名所も同様に追加
    };
  }
};
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
