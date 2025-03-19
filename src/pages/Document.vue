<template>
  <div class="mainApp">
    <MainMenu menu="5" />
    <div class="q-pa-lg row justify-between" style="font-size: 20px">
      <div class="docBox col cursor-pointer">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc1.svg" alt="" />
        </div>
        <div class="text-center">Core management</div>
      </div>
      <div style="width: 20px"></div>
      <div class="docBox col cursor-pointer">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc2.svg" alt="" />
        </div>
        <div class="text-center">Database dictionary</div>
      </div>
      <div style="width: 20px"></div>
      <div class="docBox col cursor-pointer">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc3.svg" alt="" />
        </div>
        <div class="text-center">Durable articles list</div>
      </div>
      <div style="width: 20px"></div>
      <div class="docBox col cursor-pointer">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc4.svg" alt="" />
        </div>
        <div class="text-center">Fiber optic sensor list</div>
      </div>
      <div style="width: 20px"></div>
      <div class="docBox col">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc5.svg" alt="" />
        </div>
        <div class="text-center">Interrogater manual</div>
      </div>
    </div>
    <div class="q-px-lg row justify-between" style="font-size: 20px">
      <div class="docBox col cursor-pointer">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc6.svg" alt="" />
        </div>
        <div class="text-center">Sensor replace manual</div>
      </div>
      <div style="width: 20px"></div>
      <div class="docBox col cursor-pointer">
        <div class="text-center q-pt-lg">
          <img src="../../public/images/doc7.svg" alt="" />
        </div>
        <div class="text-center">Study report</div>
      </div>
      <div style="width: 20px"></div>
      <div class="col"></div>
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
</style>
