<template>
  <div style="height: 150px; width: 100%" class="row q-py-md">
    <div class="col-5 border q-py-sm q-px-md" style="font-size: 18px">
      <div>Strain level</div>
      <div class="row">
        <div class="col-5">
          <div class="row q-pt-sm">
            <div>
              <img
                src="../../public/images/greenBox.svg"
                alt=""
                style="height: 20px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 20px">0 - 1000 µε</div>
          </div>
          <div class="row q-pt-sm">
            <div>
              <img
                src="../../public/images/yellowBox.svg"
                alt=""
                style="height: 20px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 20px">1001 - 2000 µε</div>
          </div>
        </div>
        <div class="col-7">
          <div class="row q-pt-sm">
            <div>
              <img
                src="../../public/images/redBox.svg"
                alt=""
                style="height: 20px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 20px">
              more than 2000 µε
            </div>
          </div>
          <div class="row q-pt-sm">
            <div>
              <img
                src="../../public/images/lostBox.svg"
                alt=""
                style="height: 20px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 20px">Lost signal</div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 10px"></div>
    <div class="col border q-py-sm q-px-md" style="font-size: 18px">
      <div>Level of damage</div>
      <div class="row">
        <div class="col-5">
          <div class="row q-pt-sm">
            <div>
              <img
                src="../../public/images/LF.svg"
                alt=""
                style="height: 25px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 25px">Low Footing</div>
          </div>
          <div class="row q-pt-xs">
            <div>
              <img
                src="../../public/images/MF.svg"
                alt=""
                style="height: 25px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 25px">
              Moderate Footing
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="row q-pt-sm">
            <div>
              <img
                src="../../public/images/SG.svg"
                alt=""
                style="height: 25px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 25px">
              Severe Footing - Grounting
            </div>
          </div>
          <div class="row q-pt-xs">
            <div>
              <img
                src="../../public/images/SS.svg"
                alt=""
                style="height: 25px"
              />
            </div>
            <div class="q-pl-md" style="line-height: 25px">
              Severe Footing - Strengthening
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.border {
  border: 1px solid #c4c4c4;
  height: 100%;
}
</style>
