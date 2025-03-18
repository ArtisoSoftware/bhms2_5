<template>
  <div
    class="d-flex row items-center cursor-pointer"
    style="height: 100%"
    @click="showDetail()"
  >
    <div class="col-12 q-pb-sm" style="height: 192px">
      <div class="boxDia row">
        <div class="col column">
          <div class="col"></div>
          <div style="height: 20px" class="q-px-xs row items-center">
            <div
              class="bar col"
              :style="{ backgroundColor: sensorDetailColor[0] }"
            ></div>
            <div style="width: 5px"></div>
            <div
              class="bar col"
              :style="{ backgroundColor: sensorDetailColor[1] }"
            ></div>
          </div>
          <div class="col"></div>
        </div>
        <div class="col column">
          <div style="height: 30px" class="">
            <img
              src="../../public/images/columnTop.svg"
              alt=""
              class="q-pt-xs"
            />
          </div>
          <div class="col row items-center">
            <div class="boxType">{{ sensorType }}</div>
          </div>
          <div style="height: 30px" class="row items-end">
            <img src="../../public/images/columnB.svg" alt="" class="q-pb-xs" />
          </div>
        </div>
        <div class="col column">
          <div class="col row justify-center items-end">
            <div
              class="vBar"
              :style="{ backgroundColor: sensorDetailColor[4] }"
            ></div>
          </div>
          <div style="height: 20px" class="q-px-xs row items-center">
            <div
              class="bar col"
              :style="{ backgroundColor: sensorDetailColor[2] }"
            ></div>
            <div style="width: 5px"></div>
            <div
              class="bar col"
              :style="{ backgroundColor: sensorDetailColor[3] }"
            ></div>
          </div>
          <div class="col"></div>
        </div>
      </div>
      <div style="height: 40px" class="row">
        <div class="col blockName">{{ sensorName }}</div>
        <div class="col blockValue" :style="{ backgroundColor: sensorColor }">
          {{ sensorMax.toLocaleString() }} µε
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ref, onMounted, watch, toRaw } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["sensorName"]);

const props = defineProps({
  name: String,
  data: Object,
});

const sensorName = ref("");
const sensorType = ref("");
const sensorData = ref([]);
const sensorRawData = ref([]);
const sensorMax = ref(0);
const sensorColor = ref("");
const sensorDetailColor = ref([]);

const showDetail = () => {
  emit("sensorName", sensorName.value);
};

const reloadData = () => {
  sensorName.value = props.name;
  sensorRawData.value = props.data.filter(
    (item) => item.name === sensorName.value
  );
  if (sensorRawData.value.length === 0) {
    return;
  }
  sensorRawData.value = sensorRawData.value[0];
  sensorType.value = sensorRawData.value.type;
  sensorData.value.push(Number(sensorRawData.value.s1));
  sensorData.value.push(Number(sensorRawData.value.s2));
  sensorData.value.push(Number(sensorRawData.value.s3));
  sensorData.value.push(Number(sensorRawData.value.s4));
  sensorData.value.push(Number(sensorRawData.value.s5));
  // sensorMax.value = Math.abs(
  //   sensorData.value
  //     .filter((x) => !isNaN(x))
  //     .sort((x, y) => Math.abs(y) - Math.abs(x))[0]
  // ).toLocaleString();
  sensorMax.value = sensorData.value.filter((x) => !isNaN(x));
  if (sensorMax.value.length == 0) {
    sensorMax.value = "-";
  } else {
    sensorMax.value = Math.abs(
      sensorMax.value.sort((x, y) => Math.abs(y) - Math.abs(x))[0]
    );
  }
  checkColorSensor();
};

const colorDetailSensor = (valueData) => {
  if (isNaN(valueData)) {
    return "#c4c4c4";
  } else if (valueData <= 1000) {
    return "#00BFAB";
  } else if (valueData > 1000 && valueData <= 2000) {
    return "#C79F12";
  } else {
    return "#D04B00";
  }
};

const checkColorSensor = () => {
  sensorDetailColor.value = [];
  sensorDetailColor.value.push(colorDetailSensor(sensorData.value[0]));
  sensorDetailColor.value.push(colorDetailSensor(sensorData.value[1]));
  sensorDetailColor.value.push(colorDetailSensor(sensorData.value[2]));
  sensorDetailColor.value.push(colorDetailSensor(sensorData.value[3]));
  sensorDetailColor.value.push(colorDetailSensor(sensorData.value[4]));
  // console.log(sensorDetailColor.value);

  let isNaNData = sensorData.value.includes(NaN);
  if (sensorMax.value == "-") {
    sensorColor.value = "#c4c4c4";
  } else {
    if (sensorMax.value <= 1000) {
      sensorColor.value = "#00BFAB";
    } else if (sensorMax.value > 1000 && sensorMax.value <= 2000) {
      sensorColor.value = "#C79F12";
    } else {
      sensorColor.value = "#D04B00";
    }
  }
};

onMounted(() => {
  reloadData();
});

watch(
  [() => props.data, () => props.name],
  () => {
    reloadData();
  },
  { deep: true } // ถ้า dataSend มีหลายระดับใน object ควรใช้ deep ช่วย
);
</script>

<style lang="scss" scoped>
.boxDia {
  height: 140px;
  border: 10px solid #c4c4c4;
  background-color: #ffffff;
  width: 100%;
}
.blockName {
  height: 50px;
  background-color: #494949;
  border-top: 1px solid #000000;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: white;
}
.blockValue {
  height: 50px;
  background-color: #c4c4c4;
  border-top: 1px solid #000000;
  border-left: 1px solid #000000;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: black;
}
.boxType {
  font-size: 20px;
  color: #000000;
  text-align: center;
  border: 2px solid #000000;
  width: 80%;
  margin: auto;
}
.bar {
  height: 10px;
  background-color: red;
}
.vBar {
  height: 30px;
  width: 10px;
  background-color: red;
}
</style>
