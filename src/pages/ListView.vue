<template>
  <div class="mainApp">
    <MainMenu menu="2" />
    <div class="content column">
      <div class="col row">
        <div class="col">
          <FooterListView
            name="M29/24"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M30/01"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M30/07"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M31/02"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M32/11"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M33/02"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M34/10"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
      </div>
      <div style="height: 20px"></div>
      <div class="col row">
        <div class="col">
          <FooterListView
            name="M34/14"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M35/23"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M36/16"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M36/18"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M36/20"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M38/04"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M38/07"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
      </div>
      <div style="height: 20px"></div>
      <div class="col row">
        <div class="col">
          <FooterListView
            name="M38/17"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M39/06"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M40/04"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M41/09"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M42/04"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M43/03"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
        <div style="width: 10px"></div>
        <div class="col">
          <FooterListView
            name="M43/19"
            :data="senserData"
            @sensorName="showDetail"
          />
        </div>
      </div>
      <div style="height: 20px" class="text-right q-pr-sm">
        The strain value displayed in the diagram represents the maximum strain
        of the footing.
      </div>
    </div>
    <div class="footer"><FooterMain /></div>
    <FooterDetail
      :name="sensorDetailName"
      :data="senserData"
      v-if="isDetail"
      @close-dialog="isDetail = false"
    />
  </div>
</template>

<script setup>
import MainMenu from "../components/MainMenu.vue";
import FooterMain from "../components/Footer2.vue";
import FooterListView from "../components/FooterListView.vue";
import serverAPI from "./Server.js";
import axios from "axios";
import { ref, onMounted, onUnmounted } from "vue";
import FooterDetail from "../components/FooterDetail.vue";

const senserData = ref([]);
const isDetail = ref(false);
const sensorDetailName = ref("");
let reloadData = null;

const loadDataFromServer = async () => {
  let url = serverAPI() + "sensor_recent.php";
  let response = await axios.get(url);
  senserData.value = response.data;
};

const showDetail = (name) => {
  isDetail.value = true;
  sensorDetailName.value = name;
};

onMounted(() => {
  loadDataFromServer();
  reloadData = setInterval(() => {
    loadDataFromServer();
  }, 900000);
});
onUnmounted(() => {
  clearInterval(reloadData);
});
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 250px);
  width: 100%;
}
</style>
