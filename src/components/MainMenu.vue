<template>
  <div class="row justify-between" style="height: 100px">
    <div style="width: 300px">
      <img src="../../public/images/loading.svg" alt="" style="height: 100px" />
    </div>
    <div class="row">
      <q-btn-toggle
        v-model="menu"
        toggle-color="primary"
        text-color="white"
        no-caps
        :options="options"
        @update:model-value="goToView()"
        dark
        class="qMenu"
        size="18px"
        spread
        style="width: 600px"
      />
      <!-- <div class="col row justify-center q-pt-lg">
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
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  menu: {
    type: String,
    required: true,
  },
});

const options = ref([
  { label: "Map view", value: "1" },
  { label: "List view", value: "2" },
  { label: "Trend", value: "3" },
  { label: "Report", value: "4" },
  { label: "Document", value: "5" },
]);
const menu = ref(props.menu);
const goToView = () => {
  switch (menu.value) {
    case "1":
      goToMapView();
      break;
    case "2":
      goToListView();
      break;
    case "3":
      goToTrend();
      break;
    case "4":
      goToReport();
      break;
    case "5":
      goTDocument();
      break;
  }
};

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
.qMenu {
  height: 60px;
  color: white;
  font-size: 16px;
  border-radius: 10px;

  margin-top: 20px;
  border: 1px solid white;
}
</style>
