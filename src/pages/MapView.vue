<template>
  <div class="mainApp">
    <MainMenu menu="1" />
    <div class="content column justify-between">
      <div class="bg-Sensor row items-stretch justify-between">
        <div class="row justify-between full-width">
          <div style="width: 50px" class="border-right"></div>
          <!-- 29+000 -->
          <div class="col border-right items-stretch">
            <div class="row justify-between" style="height: 100%">
              <div
                class="col row justify-center d-flex"
                style="height: 100%"
              ></div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M29/24"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 30+000 -->
          <div class="col border-right items-stretch">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M30/01"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M30/07"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 31+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M31/02"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 32+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div
                class="col row justify-center d-flex"
                style="height: 100%"
              ></div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M32/11"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 33+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M33/02"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 34+000 -->
          <div style="width: 50px"></div>
        </div>
      </div>
      <div class="col">
        <div class="row justify-between full-width q-pt-sm">
          <div style="width: 100px" class="text-center">29+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">30+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">31+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">32+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">33+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">34+000</div>
        </div>
      </div>

      <div class="bg-Sensor row items-stretch justify-between">
        <div class="row justify-between full-width">
          <div style="width: 50px" class="border-right"></div>
          <!-- 34+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M34/10"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M34/14"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 35+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div
                class="col row justify-center d-flex"
                style="height: 100%"
              ></div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M35/23"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
            </div>
          </div>
          <!-- 36+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M36/16"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M36/18"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M36/20"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
            </div>
          </div>
          <!-- 37+000 -->
          <div class="col border-right"></div>
          <!-- 38+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M38/04"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M38/07"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M38/17"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
            </div>
          </div>
          <!-- 39+000 -->
          <div style="width: 50px"></div>
        </div>
      </div>
      <div class="col">
        <div class="row justify-between full-width q-pt-sm">
          <div style="width: 100px" class="text-center">34+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">35+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">36+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">37+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">38+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">39+000</div>
        </div>
      </div>

      <div class="bg-Sensor row items-stretch justify-between">
        <div class="row justify-between full-width">
          <div style="width: 50px" class="border-right"></div>
          <!-- 39+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M39/06"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 40+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M40/04"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 41+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M41/09"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 42+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M42/04"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <!-- 43+000 -->
          <div class="col border-right">
            <div class="row justify-between" style="height: 100%">
              <div class="col row justify-center d-flex" style="height: 100%">
                <FooterMapView
                  name="M43/03"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center">
                <FooterMapView
                  name="M43/19"
                  :data="senserData"
                  @sensorName="showDetail"
                />
              </div>
              <div class="col row justify-center"></div>
            </div>
          </div>
          <div style="width: 50px"></div>
        </div>
      </div>
      <div class="col">
        <div class="row justify-between full-width q-pt-sm">
          <div style="width: 100px" class="text-center">39+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">40+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">41+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">42+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">43+000</div>
          <div class="col"></div>
          <div style="width: 100px" class="text-center">44+000</div>
        </div>
      </div>
      <div class="text-right q-pr-sm">
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
import FooterMain from "../components/Footer.vue";
import FooterMapView from "../components/FooterMapView.vue";
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
.bg-Sensor {
  background-color: #ffffff;
  height: 25%;
  width: 100%;
}
.border-right {
  border-right: 3px dotted #000000;
  height: 100%;
}
</style>
