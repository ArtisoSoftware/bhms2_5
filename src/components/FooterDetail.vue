<template>
  <div>
    <div
      class="fullscreen"
      style="background-color: rgba(0, 0, 0, 0.85); z-index: 100"
    ></div>
    <div class="absolute-center dialog-box q-pa-md">
      <div class="row justify-between">
        <div style="font-size: 42px">{{ sensorName }}</div>
        <div class="cursor-pointer" @click="closeDialog()">
          <q-icon name="fa-solid fa-xmark" style="font-size: 42px" />
        </div>
      </div>
      <div
        class="DurationBox row q-pa-md justify-center"
        style="font-size: 18px; line-height: 60px"
      >
        <div class="q-pr-sm">Period start</div>
        <div class="q-pr-lg q-pt-sm">
          <month-picker
            @updateMY="getPeriodStart"
            :monthinit="lastMonth"
            :yearinit="Number(lastYear)"
          />
        </div>
        <div class="q-pr-sm">Period end</div>
        <div class="q-pr-lg q-pt-sm">
          <month-picker
            @updateMY="getPeriodEnd"
            :monthinit="currentMonth"
            :yearinit="Number(currentYear)"
          />
        </div>
        <div class="q-pr-sm">Plot type</div>
        <div class="q-pr-lg q-pt-sm">
          <q-select
            :options="plotType"
            dense
            dark
            filled
            v-model="plotTypeSelect"
            style="width: 150px"
          />
        </div>

        <div>
          <q-btn
            no-caps
            label="Plot Chart"
            color="primary"
            glossy
            @click="loadChart()"
            :disable="!isCanPlot"
          />
        </div>
      </div>
      <div
        class="row q-ma-md"
        style="height: 600px; margin: auto; padding-top: 16px"
      >
        <div class="col maingraph" id="chart1"></div>
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
            <div style="width: 70px" class="text-right">
              {{ sensorData[0] }}
            </div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #a6b1ef; width: 100px">S2<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">
              {{ sensorData[1] }}
            </div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #de7af8; width: 100px">S3<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">
              {{ sensorData[2] }}
            </div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #e19f79; width: 100px">S4<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">
              {{ sensorData[3] }}
            </div>
            <div class="q-pl-md">µε</div>
          </div>
          <div class="row" style="font-size: 24px">
            <div style="color: #66dfd3; width: 100px">S5<sub>max</sub></div>
            <div>=</div>
            <div style="width: 70px" class="text-right">
              {{ sensorData[4] }}
            </div>
            <div class="q-pl-md">µε</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { ref, watch } from "vue";
import { defineEmits } from "vue";
import MonthPicker from "./MonthPicker.vue";
import serverAPI from "../pages/Server.js";
import axios from "axios";

const props = defineProps({
  name: String,
  data: Object,
});

const emit = defineEmits(["closeDialog"]);

const plotType = ref(["Whole day", "Night", "Day"]);
const plotTypeSelect = ref("Whole day");

const MStart = ref("");
const YStart = ref(2025);
const MEnd = ref("");
const YEnd = ref(2025);

const sensorName = ref("");
const sensorRawData = ref([]);
const sensorData = ref([]);
const graphData = ref([]);
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
const currentYear = ref("");
const currentMonth = ref("");
const lastYear = ref("");
const lastMonth = ref("");
const isCanPlot = ref(true);

const closeDialog = () => {
  emit("closeDialog");
};

const checkCanPlot = () => {
  let MStartIndex = monthList.value.indexOf(MStart.value);
  let MEndIndex = monthList.value.indexOf(MEnd.value);
  isCanPlot.value = false;
  if (Number(YStart.value) < Number(YEnd.value)) {
    isCanPlot.value = true;
  } else if (Number(YStart.value) > Number(YEnd.value)) {
    isCanPlot.value = false;
  } else {
    if (Number(MStartIndex) < Number(MEndIndex)) {
      isCanPlot.value = true;
    } else {
      isCanPlot.value = false;
    }
  }
};
const getPeriodStart = (m, y) => {
  MStart.value = m;
  YStart.value = y;
  checkCanPlot();
};

const getPeriodEnd = (m, y) => {
  MEnd.value = m;
  YEnd.value = y;
  checkCanPlot();
};

const reloadData = () => {
  const currentDate = new Date();
  currentMonth.value = monthList.value[currentDate.getMonth()];
  currentYear.value = currentDate.getFullYear();
  MEnd.value = currentMonth.value;
  YEnd.value = currentYear.value;

  currentDate.setMonth(currentDate.getMonth() - 3);
  lastMonth.value = monthList.value[currentDate.getMonth()];
  lastYear.value = currentDate.getFullYear();
  MStart.value = lastMonth.value;
  YStart.value = lastYear.value;

  sensorName.value = props.name;
  sensorRawData.value = props.data.filter(
    (x) => x.name === sensorName.value
  )[0];
  sensorData.value = [];
  sensorData.value.push(sensorRawData.value.s1);
  sensorData.value.push(sensorRawData.value.s2);
  sensorData.value.push(sensorRawData.value.s3);
  sensorData.value.push(sensorRawData.value.s4);
  sensorData.value.push(sensorRawData.value.s5);
  sensorData.value = sensorData.value.map((x) => {
    if (isNaN(x)) {
      return "-";
    } else {
      return Number(x).toLocaleString();
    }
  });
  loadChart();
};

const loadChart = async () => {
  let url = serverAPI() + "graphdetail.php";
  let tempData = {
    name: sensorName.value,
    mstart: MStart.value,
    ystart: String(YStart.value),
    mend: MEnd.value,
    yend: String(YEnd.value),
    plottype: plotTypeSelect.value,
  };
  let response = await axios.post(url, tempData);
  graphData.value = response.data;
  graphData.value = graphData.value.map((item) => {
    return {
      ...item, // คัดลอกข้อมูลเดิม
      s1: parseFloat(item.s1), // แปลง s1 จาก string เป็น number
      s2: parseFloat(item.s2), // แปลง s2 จาก string เป็น number
      s3: parseFloat(item.s3), // แปลง s3 จาก string เป็น number
      s4: parseFloat(item.s4), // แปลง s4 จาก string เป็น number
      s5: parseFloat(item.s5), // แปลง s5 จาก string เป็น number
    };
  });

  plotChat();
};
const plotChat = () => {
  let chart1 = null;
  chart1 = Highcharts.chart("chart1", {
    chart: {
      type: "spline",
      backgroundColor: "#1f1f1f", // กำหนดพื้นหลังเป็นสีดำ
      style: {
        color: "#ffffff", // กำหนดสีตัวอักษรเป็นสีขาว
      },
    },
    title: {
      text: `Strain value on footing ${sensorName.value}`,
      style: {
        color: "#ffffff", // กำหนดสีของหัวข้อเป็นสีขาว
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        rotation: -45,
        style: {
          color: "#ffffff", // สีตัวอักษรแกน X
        },
        format: "{value:%Y-%m-%d}",
      },
    },
    yAxis: {
      title: {
        text: "Strain (µε)",
        style: {
          color: "#ffffff", // สีตัวอักษรแกน Y
        },
      },

      labels: {
        style: {
          color: "#ffffff", // สีตัวอักษรแกน Y
        },
      },
      gridLineColor: "#444444", // สีเส้น Grid
    },
    tooltip: {
      backgroundColor: "#333333", // พื้นหลัง Tooltip
      style: {
        color: "#ffffff", // สีตัวอักษรของ Tooltip
      },
      valueSuffix: " µε",
    },
    legend: {
      itemStyle: {
        color: "#ffffff", // สีตัวอักษรของ Legend
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "S1",
        data: graphData.value.map((point) => [
          new Date(point.date).getTime(),
          point.s1,
        ]),
        color: "#e4c36c",
        marker: {
          enabled: false,
        },
      },
      {
        name: "S2",
        data: graphData.value.map((point) => [
          new Date(point.date).getTime(),
          point.s2,
        ]),
        color: "#a6b1ef",
        marker: {
          enabled: false,
        },
      },
      {
        name: "S3",
        data: graphData.value.map((point) => [
          new Date(point.date).getTime(),
          point.s3,
        ]),
        color: "#de7af8",
        marker: {
          enabled: false,
        },
      },
      {
        name: "S4",
        data: graphData.value.map((point) => [
          new Date(point.date).getTime(),
          point.s4,
        ]),
        color: "#e19f79",
        marker: {
          enabled: false,
        },
      },
      {
        name: "S5",
        data: graphData.value.map((point) => [
          new Date(point.date).getTime(),
          point.s5,
        ]),
        color: "#66dfd3",
        marker: {
          enabled: false,
        },
      },
    ],
  });
};

onMounted(() => {
  reloadData();
});
</script>

<style lang="scss" scoped>
.dialog-box {
  width: 1200px;
  height: 800px;
  background-color: #252525;
  border-radius: 10px;
  position: absolute;
  z-index: 101;
  border: 2px solid #5c5c5c;
}
.DurationBox {
  width: 100%;
  height: 90px;
  margin: auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}
.maingraph {
  position: relative;
}
.errorMsg {
  position: absolute;
  font-size: 22px;
  color: red;
  top: 0;
  right: 0;
}
</style>
