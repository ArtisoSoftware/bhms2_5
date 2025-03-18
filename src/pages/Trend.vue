<template>
  <div class="mainApp">
    <MainMenu menu="3" />
    <div
      class="DurationBox row q-pa-md justify-center"
      style="font-size: 18px; line-height: 60px"
    >
      <div>Period start</div>
      <div class="q-px-sm q-pt-sm">
        <MonthPicker
          @updateMY="getPeriodStart"
          :monthinit="MStart"
          :yearinit="YStart"
        />
      </div>
      <div>Period end</div>
      <div class="q-px-sm q-pt-sm">
        <MonthPicker
          @updateMY="getPeriodEnd"
          :monthinit="MEnd"
          :yearinit="YEnd"
        />
      </div>
      <div class="q-pr-md">Plot type</div>
      <div class="q-pt-sm">
        <q-select
          v-model="plotType"
          :options="plotTypeList"
          dark=""
          filled
          dense
          style="width: 130px"
        />
      </div>
      <div class="q-pl-md">
        <q-btn
          no-caps
          label="Plot Chart"
          color="primary"
          glossy
          @click="loadData()"
          :disable="!isCanPlot"
          style="height: 40px"
        />
      </div>
    </div>
    <div style="height: 30px"></div>
    <div v-show="!isResult" class="text-center q-pt-xl" style="font-size: 24px">
      Select Period Start, Period End, and Plot Type, then click 'Plot Chart'.
    </div>
    <div id="chart2" class="chart2Div" v-show="isResult"></div>
    <div class="q-pt-md" v-show="isResult">
      <div class="row justify-start">
        <div class="col-1 row justify-end">
          <img src="../../public/images/line1.svg" alt="" />
        </div>
        <div style="font-size: 20px" class="text-center col-1">LF</div>
        <div v-for="(item, index) in colLF" :key="item.name" class="col-1">
          <q-btn
            v-show="item.status"
            :label="item.name"
            :style="{ backgroundColor: colorGraphList[index] }"
            style="width: 90%"
            @click="item.status = false"
          />
          <q-btn
            v-show="!item.status"
            :label="item.name"
            class="bg-blue-grey-10"
            style="width: 90%"
            @click="item.status = true"
          />
        </div>
      </div>

      <div class="row justify-start q-pt-md">
        <div class="col-1 row justify-end">
          <img src="../../public/images/line2.svg" alt="" />
        </div>
        <div style="font-size: 20px" class="text-center col-1">MF</div>
        <div v-for="(item, index) in colMF" :key="item.name" class="col-1">
          <q-btn
            v-show="item.status"
            :label="item.name"
            :style="{ backgroundColor: colorGraphList[index] }"
            style="width: 90%"
            @click="item.status = false"
          />
          <q-btn
            v-show="!item.status"
            :label="item.name"
            class="bg-blue-grey-10"
            style="width: 90%"
            @click="item.status = true"
          />
        </div>
      </div>

      <div class="row justify-start q-pt-md">
        <div class="col-1 row justify-end">
          <img src="../../public/images/line3.svg" alt="" />
        </div>
        <div style="font-size: 20px" class="text-center col-1">SS</div>
        <div v-for="(item, index) in colSS" :key="item.name" class="col-1">
          <q-btn
            v-show="item.status"
            :label="item.name"
            :style="{ backgroundColor: colorGraphList[index] }"
            style="width: 90%"
            @click="item.status = false"
          />
          <q-btn
            v-show="!item.status"
            :label="item.name"
            class="bg-blue-grey-10"
            style="width: 90%"
            @click="item.status = true"
          />
        </div>
      </div>

      <div class="row justify-start q-pt-md">
        <div class="col-1 row justify-end">
          <img src="../../public/images/line4.svg" alt="" />
        </div>
        <div style="font-size: 20px" class="text-center col-1">SG</div>
        <div v-for="(item, index) in colSG" :key="item.name" class="col-1">
          <q-btn
            v-show="item.status"
            :label="item.name"
            :style="{ backgroundColor: colorGraphList[index] }"
            style="width: 90%"
            @click="item.status = false"
          />
          <q-btn
            v-show="!item.status"
            :label="item.name"
            class="bg-blue-grey-10"
            style="width: 90%"
            @click="item.status = true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainMenu from "../components/MainMenu.vue";
import MonthPicker from "../components/MonthPicker.vue";
import { ref, onMounted, watch } from "vue";
import serverAPI from "./Server.js";
import axios from "axios";

const MStart = ref("");
const YStart = ref(2025);
const MEnd = ref("");
const YEnd = ref(2025);
const plotType = ref("Average");
const plotTypeList = ref(["Average", "Maximum", "Minimum"]);

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
const colorGraphList = ref([
  "#00BCD4",
  "#FF0000",
  "#7986CB",
  "#4CAF50",
  "#009688",
  "#795548",
  "#FF5722",
  "#FFC107",
  "#9C27B0",
  "#9E9E9E",
]);
const colLF = ref([
  {
    name: "M30/07",
    status: true,
  },
  {
    name: "M31/02",
    status: false,
  },
  {
    name: "M34/10",
    status: false,
  },
  {
    name: "M34/14",
    status: false,
  },
  {
    name: "M38/04",
    status: false,
  },
  {
    name: "M38/07",
    status: false,
  },
]);

const colMF = ref([
  {
    name: "M29/24",
    status: true,
  },
  {
    name: "M30/01",
    status: false,
  },
  {
    name: "M36/20",
    status: false,
  },
  {
    name: "M38/17",
    status: false,
  },
  {
    name: "M39/06",
    status: false,
  },
  {
    name: "M40/04",
    status: false,
  },
  {
    name: "M41/09",
    status: false,
  },
  {
    name: "M42/04",
    status: false,
  },
  {
    name: "M43/03",
    status: false,
  },
  {
    name: "M43/19",
    status: false,
  },
]);

const colSS = ref([
  {
    name: "M36/16",
    status: true,
  },
  {
    name: "M36/18",
    status: false,
  },
]);

const colSG = ref([
  {
    name: "M32/11",
    status: true,
  },
  {
    name: "M33/02",
    status: false,
  },
  {
    name: "M35/23",
    status: false,
  },
]);

const isCanPlot = ref(true);
const isResult = ref(false);
const graphData = ref([]);
const seriesData = ref([]);
const labelX = ref([]);

const checkDate = () => {
  isCanPlot.value = false;
  isResult.value = false;

  let MStartIndex = monthList.value.indexOf(MStart.value);
  let MEndIndex = monthList.value.indexOf(MEnd.value);

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

const loadData = async () => {
  isResult.value = true;

  let url = serverAPI() + "graphtrend.php";
  let tempData = {
    mstart: MStart.value,
    ystart: String(YStart.value),
    mend: MEnd.value,
    yend: String(YEnd.value),
    plottype: plotType.value,
  };
  let response = await axios.post(url, tempData);
  graphData.value = response.data;
  const filteredData = graphData.value.map((item) => {
    const newItem = { date: item.date };
    for (let i = 1; i <= 105; i++) {
      let key = "";

      if (plotType.value == "Minimum") {
        key = `SG${i}Min`;
      } else if (plotType.value == "Maximum") {
        key = `SG${i}Max`;
      } else {
        key = `SG${i}Avg`;
      }
      if (item.hasOwnProperty(key)) {
        newItem[`SG${i}`] = item[key];
      }
    }
    return newItem;
  });
  graphData.value = filteredData.map((item) => {
    let newObj = { date: item.date };
    for (let i = 1; i <= 105; i += 5) {
      let groupKey = `S${Math.ceil(i / 5)}`;
      let values = [];

      for (let j = i; j < i + 5; j++) {
        let key = `SG${j}`;

        if (item[key] !== null && item[key] !== undefined) {
          values.push(parseFloat(item[key]));
        }
      }

      newObj[groupKey] =
        values.length > 0
          ? Number(
              (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2)
            )
          : null;
    }

    return newObj;
  });
  labelX.value = graphData.value.map((item) => item.date);
  const keys = Object.keys(graphData.value[0]).filter((key) => key !== "date");
  seriesData.value = keys.map((key) => ({
    name: key,
    data: graphData.value.map((item) => item[key]),
  }));

  console.log(seriesData.value);

  plotGraph();
};

const plotGraph = () => {
  let chart2 = null;
  chart2 = Highcharts.chart("chart2", {
    chart: {
      type: "spline",
      backgroundColor: "#252525", // กำหนดพื้นหลังเป็นสีดำ
      style: {
        color: "#ffffff", // กำหนดสีตัวอักษรเป็นสีขาว
      },
    },
    title: {
      text: "Trend of changes in strain",
      style: {
        color: "#ffffff", // กำหนดสีของหัวข้อเป็นสีขาว
      },
    },
    xAxis: {
      categories: labelX.value,
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

    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "M30/07",
        data: seriesData.value[2].data,
        visible: colLF.value[0].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "longdash",
        color: "#00BCD4",
      },
      {
        name: "M31/02",
        data: seriesData.value[3].data,
        visible: colLF.value[1].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "longdash",
        color: "#FF0000",
      },
      {
        name: "M34/10",
        data: seriesData.value[6].data,
        visible: colLF.value[2].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "longdash",
        color: "#7986CB",
      },
      {
        name: "M34/14",
        data: seriesData.value[7].data,
        visible: colLF.value[3].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "longdash",
        color: "#4CAF50",
      },
      {
        name: "M38/04",
        data: seriesData.value[12].data,
        visible: colLF.value[4].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "longdash",
        color: "#009688",
      },

      {
        name: "M38/07",
        data: seriesData.value[13].data,
        visible: colLF.value[5].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "longdash",
        color: "#795548",
      },

      {
        name: "M29/24",
        data: seriesData.value[0].data,
        visible: colMF.value[0].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#00BCD4",
      },
      {
        name: "M30/01",
        data: seriesData.value[1].data,
        visible: colMF.value[1].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#FF0000",
      },
      {
        name: "M36/20",
        data: seriesData.value[11].data,
        visible: colMF.value[2].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#7986CB",
      },
      {
        name: "M38/17",
        data: seriesData.value[14].data,
        visible: colMF.value[3].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#4CAF50",
      },
      {
        name: "M39/06",
        data: seriesData.value[15].data,
        visible: colMF.value[4].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#009688",
      },
      {
        name: "M40/04",
        data: seriesData.value[16].data,
        visible: colMF.value[5].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#795548",
      },
      {
        name: "M41/09",
        data: seriesData.value[17].data,
        visible: colMF.value[6].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#FF5722",
      },
      {
        name: "M42/04",
        data: seriesData.value[18].data,
        visible: colMF.value[7].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#FFC107",
      },
      {
        name: "M43/03",
        data: seriesData.value[19].data,
        visible: colMF.value[8].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#9C27B0",
      },
      {
        name: "M43/19",
        data: seriesData.value[20].data,
        visible: colMF.value[9].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "solid",
        color: "#9E9E9E",
      },

      {
        name: "M36/16",
        data: seriesData.value[9].data,
        visible: colSS.value[0].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "shortdot",
        color: "#00BCD4",
      },

      {
        name: "M36/18",
        data: seriesData.value[10].data,
        visible: colSS.value[1].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "shortdot",
        color: "#FF0000",
      },

      {
        name: "M32/11",
        data: seriesData.value[4].data,
        visible: colSG.value[0].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "DashDot",
        color: "#00BCD4",
      },
      {
        name: "M33/02",
        data: seriesData.value[5].data,
        visible: colSG.value[1].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "DashDot",
        color: "#FF0000",
      },
      {
        name: "M35/23",
        data: seriesData.value[8].data,
        visible: colSG.value[2].status,
        marker: {
          enabled: false,
        },
        tooltip: {
          valueSuffix: " µε",
        },
        dashStyle: "DashDot",
        color: "#7986CB",
      },
    ],
  });
};

const loadInit = () => {
  MEnd.value = monthList.value[new Date().getMonth()];
  YEnd.value = new Date().getFullYear();
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 3);
  MStart.value = monthList.value[currentDate.getMonth()];
  YStart.value = currentDate.getFullYear();
};

const getPeriodStart = (m, y) => {
  MStart.value = m;
  YStart.value = y;
};

const getPeriodEnd = (m, y) => {
  MEnd.value = m;
  YEnd.value = y;
};
watch(
  [() => colSG.value, () => colMF, () => colLF.value, () => colSS.value],
  () => {
    plotGraph();
  },
  { deep: true } // ถ้า dataSend มีหลายระดับใน object ควรใช้ deep ช่วย
);

onMounted(() => {
  loadInit();
});
</script>

<style lang="scss" scoped>
.DurationBox {
  width: 100%;
  height: 90px;
  margin: auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}
.chart2Div {
  width: 1000px;
  height: calc(100vh - 450px);
  margin: auto;
}
</style>
