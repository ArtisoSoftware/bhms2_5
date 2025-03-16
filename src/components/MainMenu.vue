<template>
  <div class="row justify-between" style="height: 100px">
    <div style="width: 300px">
      <img src="../../public/images/loading.svg" alt="" style="height: 100px" />
    </div>
    <div style="width: 800px" class="row">
      <div class="col row justify-center q-pt-lg">
        <q-btn
          no-caps
          :class="menu == '1' ? 'btnSelect' : 'btnMenu'"
          glossy
          @click="goToMapView()"
          >Map view</q-btn
        >
      </div>
      <div class="col row justify-center q-pt-lg">
        <q-btn
          no-caps
          :class="menu == '2' ? 'btnSelect' : 'btnMenu'"
          glossy
          @click="goToListView()"
          >List view</q-btn
        >
      </div>
      <div class="col row justify-center q-pt-lg">
        <q-btn
          no-caps
          :class="menu == '3' ? 'btnSelect' : 'btnMenu'"
          glossy
          @click="goToTrend()"
          >Trend</q-btn
        >
      </div>
      <div class="col row justify-center q-pt-lg">
        <q-btn
          no-caps
          :class="menu == '4' ? 'btnSelect' : 'btnMenu'"
          glossy
          @click="goToReport()"
          >Report</q-btn
        >
      </div>
      <div class="col row justify-center q-pt-lg">
        <q-btn
          no-caps
          :class="menu == '5' ? 'btnSelect' : 'btnMenu'"
          glossy
          @click="goTDocument()"
          >Document</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  menu: {
    type: String,
    required: true,
  },
});

const goToMapView = () => {
  router.push("/mapview");
};
const goToListView = () => {
  router.push("/listview");
};
const goToTrend = () => {
  router.push("/trend");
};
const goToReport = () => {
  router.push("/report");
};
const goTDocument = () => {
  router.push("/document");
};
</script>

<style lang="scss" scoped>
.btnSelect {
  width: 120px;
  height: 45px;
  background-color: goldenrod;
  color: white;
  font-size: 16px;
}
.btnMenu {
  width: 120px;
  height: 45px;
  background-color: #2f3c88;
  color: white;
  font-size: 16px;
}
</style>
