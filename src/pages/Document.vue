<template>
  <div class="mainApp">
    <MainMenu menu="5" />
    <div class="q-pa-lg row justify-between" style="font-size: 20px">
      <div class="docBox col cursor-pointer">
        <a href="../../public/data/core_management.pdf" class="full-width">
          <div class="text-center q-pt-lg">
            <img src="../../public/images/doc1.svg" alt="" />
          </div>
          <div class="text-center text-white">Core management</div>
        </a>
      </div>

      <div style="width: 20px"></div>

      <div class="docBox col cursor-pointer">
        <a href="../../public/data/datadic.pdf" class="full-width">
          <div class="text-center q-pt-lg">
            <img src="../../public/images/doc2.svg" alt="" />
          </div>
          <div class="text-center text-white">Database dictionary</div>
        </a>
      </div>

      <div style="width: 20px"></div>

      <div class="docBox col cursor-pointer">
        <a
          href="../../public/data/fiber_optic_sensor_list.pdf"
          class="full-width"
        >
          <div class="text-center q-pt-lg">
            <img src="../../public/images/doc4.svg" alt="" />
          </div>
          <div class="text-center text-white">Fiber optic sensor list</div>
        </a>
      </div>

      <div style="width: 20px"></div>

      <div class="docBox col">
        <a href="../../public/data/Interrogater_Manual.pdf" class="full-width">
          <div class="text-center q-pt-lg">
            <img src="../../public/images/doc5.svg" alt="" />
          </div>
          <div class="text-center text-white">Interrogater manual</div>
        </a>
      </div>
    </div>
    <div class="q-px-lg row justify-between" style="font-size: 20px">
      <div class="docBox col cursor-pointer">
        <a href="../../public/data/manual.pdf" class="full-width">
          <div class="text-center q-pt-lg">
            <img src="../../public/images/doc6.svg" alt="" />
          </div>
          <div class="text-center text-white">Manual</div>
        </a>
      </div>
      <div style="width: 20px"></div>
      <div class="docBox col cursor-pointer">
        <a href="../../public/data/study_report.pdf" class="full-width">
          <div class="text-center q-pt-lg">
            <img src="../../public/images/doc7.svg" alt="" />
          </div>
          <div class="text-center text-white">Study report</div>
        </a>
      </div>
      <div style="width: 20px"></div>
      <div class="col"></div>
      <div style="width: 20px"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script setup>
import MainMenu from "../components/MainMenu.vue";
</script>

<style lang="scss" scoped>
.docBox {
  height: 180px;
  background-color: #2e2d2d;
  border-radius: 10px;
}
.docBox:hover {
  background-color: #404040;
}
a {
  text-decoration: none;
}
</style>
