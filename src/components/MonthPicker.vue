<template>
  <div class="row">
    <div>
      <q-select
        :options="monthList"
        dense
        dark
        filled
        v-model="monthSelect"
        style="width: 100px"
        @update:model-value="updateData()"
      />
    </div>
    <div class="q-px-md">
      <q-select
        :options="yearList"
        dense
        dark
        filled
        v-model="yearSelect"
        style="width: 100px"
        @update:model-value="updateData()"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from "vue";

const emit = defineEmits(["updateMY"]);
const props = defineProps({
  monthinit: String,
  yearinit: Number,
});

const monthList = ref([
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]);
const yearList = ref([
  2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
  2034, 2035,
]);

const monthSelect = ref("");
const yearSelect = ref("");
if (props.monthinit) {
  monthSelect.value = props.monthinit;
}
if (props.yearinit) {
  yearSelect.value = props.yearinit;
}

const updateData = () => {
  emit("updateMY", monthSelect.value, yearSelect.value);
};

watch(
  [() => props.monthinit, () => props.yearinit],
  () => {
    monthSelect.value = props.monthinit;
    yearSelect.value = props.yearinit;
  },
  { deep: true } // ถ้า dataSend มีหลายระดับใน object ควรใช้ deep ช่วย
);
</script>

<style lang="scss" scoped></style>
