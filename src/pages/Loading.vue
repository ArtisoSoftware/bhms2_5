<template>
  <div class="" style="height: 100vh">
    <div class="absolute-center">
      <img src="../../public/images/loading.svg" alt="loading" />
    </div>
    <div class="text-center labelProgress">Loading data from datalogger...</div>
    <div class="progress">
      <div class="progress-bar" :style="{ width: percentProgress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const percentProgress = ref(0);
const router = useRouter();

onMounted(() => {
  let progress = setInterval(() => {
    percentProgress.value += 1;
    if (percentProgress.value >= 100) {
      clearInterval(progress);
      router.push("/MapView");
    }
  }, 80);
});
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 15px;
  background-color: #c4c4c4;
  position: absolute;
  bottom: 0;
}
.labelProgress {
  position: absolute;
  bottom: 20px;
  width: 100%;
}
.progress-bar {
  height: 15px;
  background-color: #00bfab;
  width: 10%;
}
</style>
