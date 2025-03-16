<template>
  <div>
    <div class="fullscreen" style="background-color: rgba(0, 0, 0, 0.85)"></div>
    <div class="absolute-center dialog-box q-pa-md">
      <div class="row justify-between">
        <div style="font-size: 42px">M36/16</div>
        <div class="cursor-pointer" @click="closeDialog()">
          <q-icon name="fa-solid fa-xmark" style="font-size: 42px" />
        </div>
      </div>
      <div
        class="DurationBox row q-pa-md justify-center"
        style="font-size: 18px; line-height: 60px"
      >
        <div class="q-pr-sm">Period start</div>
        <div class="q-pr-lg">
          <q-input type="date" v-model="dateStart" dark filled />
        </div>
        <div class="q-pr-sm">Period end</div>
        <div class="q-pr-lg">
          <q-input type="date" v-model="dateEnd" dark filled />
        </div>
        <div class="q-pr-lg">
          <q-checkbox v-model="nightBtn" label="Night (18:00-6:00)" />
        </div>
        <div><q-checkbox v-model="dayBtn" label="Day (6:00-18:00)" /></div>
      </div>
      <div
        class="row q-ma-md"
        style="height: 600px; margin: auto; padding-top: 16px"
      >
        <div class="col brx"></div>
        <div style="width: 300px" class="q-px-md">
          <div>
            <img
              src="../../public/images/sensorMap.svg"
              alt=""
              style="width: 100%"
            />
          </div>
          <div style="font-size: 24px">Recent Strain</div>
          <div class="row" style="font-size: 24px">
            <div style="color: #e4c36c; width: 100px">S1<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">100</div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #a6b1ef; width: 100px">S2<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">100</div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #de7af8; width: 100px">S3<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">100</div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #e19f79; width: 100px">S4<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">100</div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #66dfd3; width: 100px">S5<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">100</div>
            <div class="q-pl-md">µε</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["closeDialog"]);

const dateStart = ref("");
const dateEnd = ref("");
const nightBtn = ref(true);
const dayBtn = ref(true);

const closeDialog = () => {
  emit("closeDialog");
};
</script>

<style lang="scss" scoped>
.dialog-box {
  width: 1200px;
  height: 800px;
  background-color: #252525;
  border-radius: 10px;
  position: absolute;
  z-index: 9999;
  border: 2px solid #5c5c5c;
}
.DurationBox {
  width: 100%;
  height: 90px;
  margin: auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}
</style>
