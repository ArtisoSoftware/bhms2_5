<template>
  <div class="mainApp">
    <MainMenu menu="4" />
    <div
      class="DurationBox row q-pa-md justify-center"
      style="font-size: 18px; line-height: 60px"
    >
      <div>Mothly report for</div>
      <div class="q-px-sm q-pt-sm">
        <MonthPicker
          @updateMY="getPeriodStart"
          :monthinit="MStart"
          :yearinit="YStart"
        />
      </div>

      <div class="q-pl-md">
        <q-btn
          no-caps
          label="Report"
          color="primary"
          glossy
          @click="genReport()"
          style="height: 40px; width: 120px"
        />
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="bg-white printarea" v-if="showReport">
      <div class="q-pa-md" id="printSection" align="right">
        <q-btn
          @click="downloadPDF()"
          class="q-mx-md"
          no-caps
          text-color="white"
          style="background-color: #2c2f30"
        >
          <div>
            <q-icon class="q-mr-sm" name="fas fa-upload" size="14px"></q-icon>
            <span>PDF</span>
          </div>
        </q-btn>
      </div>
      <div ref="content" class="text-black">
        <div class="printPage fontContent q-px-lg">
          <div class="q-py-lg">
            <div class="fontTitle q-pt-md" align="center">
              รายงานผลการตรวจติดตามพฤติกรรมโครงสร้างฐานรากทางพิเศษบูรพาวิถี
            </div>
            <div class="fontSubTitle" align="center">
              ประจำเดือน {{ convertMonth(MStart) }} {{ YStart + 543 }}
            </div>
            <br />
            <div class="fontHeader">1. บทนำ</div>
            <div class="fontContent">
              ระบบตรวจติดตามพฤติกรรมโครงสร้างฐานรากทางพิเศษบูรพาวิถี
              เป็นระบบตรวจติดตาม ค่าการขยายตัวจของรอยแตกร้าว
              บริเวณฐานรากของทางพิเศษ บูรพาวิถี จำนวน 21 ฐานราก
              โดยในแต่ละฐานรากจะมีเซนเซอร์ตรวจติดตามการขยายตัวของรอยแตกร้าว
              จำนวน 5 ตำแหน่งต่อฐานราก รวมเซนเซอร์ที่ติดตั้งมีจำนวนทั้งหมด 105
              ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">2.ข้อมูลระบบติดตามพฤติกรรมโครงสร้าง</div>
            <div class="fontSubHeader">
              2.1 ตำแหน่งตอม่อที่ติดตั้งระบบตรวจวัด
            </div>

            <div class="fontContent">
              ตำแหน่งฐานรากทางพิเศษบูรพาวิถีที่ทำการติดตั้งเซนเซอร์สำหรับการตรวจวัดความเครียด
              โดยแสดงบนแผนภาพรูปที่ 1
            </div>
            <br />
            <div align="center">
              <img
                src="../../public/images/Chart.svg"
                alt=""
                style="width: 900px"
              />
            </div>
            <div class="fontPic" align="center">
              รูปที่ 1. แผนภาพแสดงตำแหน่งติดตั้งเซนเซอร์ตามระยะหลักกิโลเมตร
            </div>
            <div class="fontSubHeader">
              2.2 ตำแหน่งเซนเซอร์ที่ติดตั้งบนฐานราก
            </div>

            <div class="">
              ตำแหน่งติดตั้งเซ็นเซอร์บนฐานรากที่มีการขยายตัว ดดยแสดงบนแผนภาพ
              รูปที่ 2
            </div>
            <br />
            <div align="center">
              <img
                src="../../public/images/locationsensor.svg"
                alt=""
                style="width: 400px"
              />
            </div>
            <div class="fontPic" align="center">
              รูปที่ 2. แผนภาพแสดงตำแหน่งติดตั้งเซนเซอร์บนฐานราก
            </div>
            <br />
            <div class="fontHeader">
              3. ข้อมูลผลการตรวจติดตามพฤติกรรมโครงสร้างฐานราก
            </div>
            <div>
              จากผลการตรวจติดตามพฤติกรรมโครงสร้างฐานรากประจำเดือน
              {{ convertMonth(MStart) }}
              {{ YStart + 543 }} สามารถสรุปได้ดังนี้
            </div>
            <div class="fontHeader">
              โครงสร้างฐานรากที่มีการขยายตัวของฐานรากในระดับปกติ
            </div>
            <div>
              โดยการขยายตัวมีค่าต่ำกว่า 1 มิลลิเมตรต่อเมตร มีจำนวน
              {{ countNormal }} ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">
              โครงสร้างฐานรากที่มีการขยายตัวของฐานรากในระดับต้องเฝ้าระวัง
            </div>
            <div>
              โดยการขยายตัวมีค่าระหว่าง 1 ถึง 2 มิลลิเมตรต่อเมตร มีจำนวน
              {{ countWarning }}
              ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">
              โครงสร้างฐานรากที่มีการขยายตัวของฐานรากในระดับต้องเฝ้าระวังพิเศษ
            </div>
            <div>
              โดยการขยายตัวมีค่ามากกว่า 2 มิลลิเมตรต่อเมตร มีจำนวน
              {{ countDanger }} ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">สัญญาณสูญหาย</div>
            <div>มีจำนวน {{ countLost }} ตำแหน่ง</div>
          </div>
          <br />
          <div class="q-py-lg" style="padding-top: 70px">
            <div align="center" class="q-pt-lg fontHeader">
              ตารางที่ 1. แสดงการขยายตัวของแต่ละฐานรากแยกตามเซนเซอร์
            </div>
            <br />
            <div>
              <div class="row">
                <div class="col-2 br1 br2" align="center">ฐานราก</div>
                <div class="col-1 br1 br2" align="center">ประเภท</div>
                <div class="row col-9">
                  <div class="col-12 br1" align="center">ตำแหน่งเซ็นเซอร์</div>
                  <div class="br1" style="width: 20%" align="center">S1</div>
                  <div class="br1" style="width: 20%" align="center">S2</div>
                  <div class="br1" style="width: 20%" align="center">S3</div>
                  <div class="br1" style="width: 20%" align="center">S4</div>
                  <div class="br1" style="width: 20%" align="center">S5</div>
                </div>
              </div>
              <div
                class="row"
                style="line-height: 50px"
                v-for="(item, index) in tableData"
                :key="index"
              >
                <div class="col-2 br1">{{ item.name }}</div>
                <div class="col-1 br1">{{ item.type }}</div>
                <div class="row col-9">
                  <div class="br1" style="width: 20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S1 < 1000 && item.S1 > 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S1 >= 1000 && item.S1 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S1 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width: 20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S2 < 1000 && item.S2 > 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S2 >= 1000 && item.S2 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S2 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width: 20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S3 < 1000 && item.S3 > 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S3 >= 1000 && item.S3 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S3 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width: 20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S4 < 1000 && item.S4 > 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S4 >= 1000 && item.S4 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S4 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width: 20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S5 < 1000 && item.S5 > 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S5 >= 1000 && item.S5 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S5 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>ประเภทของฐานราก</div>
          <div class="row">
            <div class="col-6">LF = Low footing</div>
            <div class="col-6">MF = Moderate footing</div>
            <div class="col-6">SG = Severe footing-grounting</div>
            <div class="col-6">SS = Severe footing-strengthening</div>
          </div>
          <br />
          <div>การขยายตัวของฐานราก</div>
          <div class="row">
            <div class="col-6 row justify-start">
              <div>
                <div
                  class="circleDiv greenDiv"
                  style="position: relative; top: 0px"
                ></div>
              </div>
              <div class="q-pl-lg">
                การขยายตัว ระหว่าง 0 - 1 มิลลิเมตรต่อเมตร
              </div>
            </div>
            <div class="col-6 row justify-start">
              <div>
                <div
                  class="circleDiv yellowDiv"
                  style="position: relative; top: 0px"
                ></div>
              </div>
              <div class="q-pl-lg">
                การขยายตัว ระหว่าง 1 - 2 มิลลิเมตรต่อเมตร
              </div>
            </div>
            <div style="height: 10px" class="col-12"></div>
            <div class="col-6 row">
              <div>
                <div
                  class="circleDiv redDiv"
                  style="position: relative; top: 0px"
                ></div>
              </div>
              <div class="q-pl-lg">การขยายตัว มากกว่า 2 มิลลิเมตรต่อเมตร</div>
            </div>
            <div class="col-6 row">
              <div>
                <div
                  class="circleDiv greyDiv"
                  style="position: relative; top: 0px"
                ></div>
              </div>
              <div class="q-pl-lg">ไม่มีสัญญาณ</div>
            </div>
          </div>
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
import html2PDF from "jspdf-html2canvas";
import axios from "axios";
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
const MStart = ref("");
const YStart = ref(2025);
const showReport = ref(false);
const rawData = ref([]);
const countNormal = ref(0);
const countWarning = ref(0);
const countDanger = ref(0);
const countLost = ref(0);
const tableData = ref([]);

const getPeriodStart = (month, year) => {
  MStart.value = month;
  YStart.value = year;
};

const loadInit = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);
  MStart.value = monthList.value[currentDate.getMonth()];
  YStart.value = currentDate.getFullYear();
};

const genReport = async () => {
  showReport.value = false;
  let url = serverAPI() + "graphtrend.php";
  let tempData = {
    mstart: MStart.value,
    ystart: String(YStart.value),
    mend: MStart.value,
    yend: String(YStart.value),
    plottype: "Maximum",
  };
  let response = await axios.post(url, tempData);
  rawData.value = response.data;
  if (rawData.value.length == 0) {
    console.log("No data");
    return;
  }

  const filteredData = rawData.value.map((item) => {
    const newItem = { date: item.date };
    for (let i = 1; i <= 105; i++) {
      let key = `SG${i}Max`;

      if (item.hasOwnProperty(key)) {
        newItem[`SG${i}`] = Number(item[key]);
      }
    }
    return newItem;
  });
  rawData.value = filteredData;
  const keys = new Set();
  rawData.value.forEach((item) =>
    Object.keys(item).forEach((key) => {
      if (key.startsWith("SG")) keys.add(key);
    })
  );
  const result = {};
  keys.forEach((key) => {
    let maxAbsValue = null;
    for (const item of rawData.value) {
      if (item[key] === null) {
        maxAbsValue = null;
        break;
      }
      const absValue = Math.abs(item[key]);
      if (maxAbsValue === null || absValue > maxAbsValue) {
        maxAbsValue = absValue;
      }
    }
    result[key] = maxAbsValue;
  });
  rawData.value = result;
  countLost.value = Object.values(result).filter((value) => value === 0).length;
  countDanger.value = Object.values(result).filter(
    (value) => value > 2000
  ).length;
  countWarning.value = Object.values(result).filter(
    (value) => value >= 1000 && value <= 2000
  ).length;
  countNormal.value = Object.values(result).filter(
    (value) => value < 1000 && value > 0
  ).length;
  tableData.value = [];
  tableData.value.push({
    name: "M29/24",
    type: "MF",
    S1: rawData.value.SG1,
    S2: rawData.value.SG2,
    S3: rawData.value.SG3,
    S4: rawData.value.SG4,
    S5: rawData.value.SG5,
  });
  tableData.value.push({
    name: "M30/01",
    type: "MF",
    S1: rawData.value.SG6,
    S2: rawData.value.SG7,
    S3: rawData.value.SG8,
    S4: rawData.value.SG9,
    S5: rawData.value.SG10,
  });
  tableData.value.push({
    name: "M30/07",
    type: "LF",
    S1: rawData.value.SG11,
    S2: rawData.value.SG12,
    S3: rawData.value.SG13,
    S4: rawData.value.SG14,
    S5: rawData.value.SG15,
  });
  tableData.value.push({
    name: "M31/02",
    type: "LF",
    S1: rawData.value.SG16,
    S2: rawData.value.SG17,
    S3: rawData.value.SG18,
    S4: rawData.value.SG19,
    S5: rawData.value.SG20,
  });
  tableData.value.push({
    name: "M32/11",
    type: "SG",
    S1: rawData.value.SG21,
    S2: rawData.value.SG22,
    S3: rawData.value.SG23,
    S4: rawData.value.SG24,
    S5: rawData.value.SG25,
  });
  tableData.value.push({
    name: "M33/02",
    type: "SG",
    S1: rawData.value.SG26,
    S2: rawData.value.SG27,
    S3: rawData.value.SG28,
    S4: rawData.value.SG29,
    S5: rawData.value.SG30,
  });
  tableData.value.push({
    name: "M34/10",
    type: "LF",
    S1: rawData.value.SG31,
    S2: rawData.value.SG32,
    S3: rawData.value.SG33,
    S4: rawData.value.SG34,
    S5: rawData.value.SG35,
  });
  tableData.value.push({
    name: "M34/14",
    type: "LF",
    S1: rawData.value.SG36,
    S2: rawData.value.SG37,
    S3: rawData.value.SG38,
    S4: rawData.value.SG39,
    S5: rawData.value.SG40,
  });
  tableData.value.push({
    name: "M35/23",
    type: "SG",
    S1: rawData.value.SG41,
    S2: rawData.value.SG42,
    S3: rawData.value.SG43,
    S4: rawData.value.SG44,
    S5: rawData.value.SG45,
  });
  tableData.value.push({
    name: "M36/16",
    type: "SS",
    S1: rawData.value.SG46,
    S2: rawData.value.SG47,
    S3: rawData.value.SG48,
    S4: rawData.value.SG49,
    S5: rawData.value.SG50,
  });
  tableData.value.push({
    name: "M36/18",
    type: "SS",
    S1: rawData.value.SG51,
    S2: rawData.value.SG52,
    S3: rawData.value.SG53,
    S4: rawData.value.SG54,
    S5: rawData.value.SG55,
  });
  tableData.value.push({
    name: "M36/20",
    type: "MF",
    S1: rawData.value.SG56,
    S2: rawData.value.SG57,
    S3: rawData.value.SG58,
    S4: rawData.value.SG59,
    S5: rawData.value.SG60,
  });
  tableData.value.push({
    name: "M38/04",
    type: "LF",
    S1: rawData.value.SG61,
    S2: rawData.value.SG62,
    S3: rawData.value.SG63,
    S4: rawData.value.SG64,
    S5: rawData.value.SG65,
  });
  tableData.value.push({
    name: "M38/07",
    type: "LF",
    S1: rawData.value.SG66,
    S2: rawData.value.SG67,
    S3: rawData.value.SG68,
    S4: rawData.value.SG69,
    S5: rawData.value.SG70,
  });
  tableData.value.push({
    name: "M38/17",
    type: "MF",
    S1: rawData.value.SG71,
    S2: rawData.value.SG72,
    S3: rawData.value.SG73,
    S4: rawData.value.SG74,
    S5: rawData.value.SG75,
  });
  tableData.value.push({
    name: "M39/06",
    type: "MF",
    S1: rawData.value.SG76,
    S2: rawData.value.SG77,
    S3: rawData.value.SG78,
    S4: rawData.value.SG79,
    S5: rawData.value.SG80,
  });
  tableData.value.push({
    name: "M40/04",
    type: "MF",
    S1: rawData.value.SG81,
    S2: rawData.value.SG82,
    S3: rawData.value.SG83,
    S4: rawData.value.SG84,
    S5: rawData.value.SG85,
  });
  tableData.value.push({
    name: "M41/09",
    type: "MF",
    S1: rawData.value.SG86,
    S2: rawData.value.SG87,
    S3: rawData.value.SG88,
    S4: rawData.value.SG89,
    S5: rawData.value.SG90,
  });
  tableData.value.push({
    name: "M42/04",
    type: "MF",
    S1: rawData.value.SG91,
    S2: rawData.value.SG92,
    S3: rawData.value.SG93,
    S4: rawData.value.SG94,
    S5: rawData.value.SG95,
  });
  tableData.value.push({
    name: "M43/03",
    type: "MF",
    S1: rawData.value.SG96,
    S2: rawData.value.SG97,
    S3: rawData.value.SG98,
    S4: rawData.value.SG99,
    S5: rawData.value.SG100,
  });
  tableData.value.push({
    name: "M43/19",
    type: "MF",
    S1: rawData.value.SG101,
    S2: rawData.value.SG102,
    S3: rawData.value.SG103,
    S4: rawData.value.SG104,
    S5: rawData.value.SG105,
  });
  console.log(rawData.value);
  showReport.value = true;
  console.log("Generate report");
};

const convertMonth = (monthId) => {
  if (monthId == "Jan") {
    return "มกราคม";
  } else if (monthId == "Feb") {
    return "กุมภาพันธ์";
  } else if (monthId == 3) {
    return "มีนาคม";
  } else if (monthId == 4) {
    return "เมษายน";
  } else if (monthId == 5) {
    return "พฤษภาคม";
  } else if (monthId == 6) {
    return "มิถุนายน";
  } else if (monthId == 7) {
    return "กรกฏาคม";
  } else if (monthId == 8) {
    return "สิงหาคม";
  } else if (monthId == 9) {
    return "กันยายน";
  } else if (monthId == 10) {
    return "ตุลาคม";
  } else if (monthId == 11) {
    return "พฤศจิกายน";
  } else {
    return "ธันวาคม";
  }
};

const downloadPDF = () => {
  let _this = this;

  let pages = document.getElementsByClassName("printPage");

  html2PDF(pages, {
    html2canvas: {
      scrollX: 0,
      scrollY: -window.scrollY,
    },
    jsPDF: {
      format: "a4",
    },
    imageType: "image/jpeg",
    output: "./pdf/report.pdf",
  });
};

onMounted(() => {
  loadInit();
});
</script>

<style lang="scss" scoped>
.DurationBox {
  width: 100%;
  max-width: 1200px;
  height: 90px;
  margin: auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}
.fontContent {
  font-size: 22px;
}
.fontTitle {
  font-size: 30px;
}
.fontSubTitle {
  font-size: 26px;
}
.fontHeader {
  font-size: 22px;
  font-weight: bold;
}
.fontSubHeader {
  font-size: 22px;
  font-weight: bold;
}
.fontContent {
  font-size: 22px;
}
.fontPic {
  font-size: 16px;
}
.printarea {
  width: 1200px;
  margin: auto;
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.br1 {
  border: 1px solid black;
  text-align: center;
}
.br2 {
  line-height: 60px;
}
.br3 {
  background-color: #e5e5e5;
}
.circleDiv {
  width: 30px;
  height: 30px;
  position: relative;
  top: 10px;
  border-radius: 25px;
  margin: auto;
}
.greenDiv {
  background-color: #28a86a;
}
.yellowDiv {
  background-color: #c79f12;
}
.redDiv {
  background-color: #d04b00;
}
.greyDiv {
  background-color: #747373;
}
</style>
