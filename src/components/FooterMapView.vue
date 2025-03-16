<template>
  <div
    class="text-black d-flex row items-center cursor-pointer"
    style="height: 100%"
    @click="showDetail()"
  >
    <div class="">
      <div class="row justify-center">
        <img :src="sensorNamePic" alt="" />
      </div>
      <div class="text-center q-pt-md q-pb-sm">{{ sensorName }}</div>
      <div class="boxType text-center">{{ sensorType }}</div>
      <div class="text-center q-pt-sm">{{ sensorMax.toLocaleString() }} µε</div>
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
const sensorNamePic = ref("");

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

const checkColorSensor = () => {
  // console.log(sensorName.value, sensorMax.value, sensorRawData.value);
  let isNaNData = sensorData.value.includes(NaN);
  if (sensorMax.value == "-") {
    sensorNamePic.value = "lostBox.svg";
  } else {
    if (sensorMax.value <= 1000) {
      if (isNaNData) {
        sensorNamePic.value = "greenCrossBox.svg";
      } else {
        sensorNamePic.value = "greenBox.svg";
      }
    } else if (sensorMax.value > 1000 && sensorMax.value <= 2000) {
      if (isNaNData) {
        sensorNamePic.value = "yellowCrossBox.svg";
      } else {
        sensorNamePic.value = "yellowBox.svg";
      }
    } else {
      if (isNaNData) {
        sensorNamePic.value = "redCrossBox.svg";
      } else {
        sensorNamePic.value = "redBox.svg";
      }
    }
  }
  sensorNamePic.value = "images/" + sensorNamePic.value;
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
.boxType {
  width: 50px;
  height: 30px;
  font-size: 20px;
  border: 2px solid #000000;
  margin: auto;
}
</style>
