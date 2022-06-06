<template>
  <vue-drag-resize-rotate
      :isActive="true"
      :w="200"
      :h="200"
      :deg="deg"
      :isRotatable="rotatable"
      @resizing="resize"
      @dragging="resize"
      @rotating="rotate"
      :parentW="500"
      :parentH="500"
      :parentLimitation="true"
      style="background-color: coral"
  >
    <h3>Hello World!</h3>
    <p>{{ top }} х {{ left }} </p>
    <p>{{ width }} х {{ height }}</p>
    <p>{{ deg }}</p>
  </vue-drag-resize-rotate>
  <div style="width: 500px; height: 500px">
    <d-d-r v-for="item in list" :value="item.transform" :key="item.id.toString()" :parent="true">
      <div style="width:100%;height:100%" :style="{backgroundColor: item.color}">x={{item.transform.x}}</div>
    </d-d-r>
  </div>
</template>

<script>
import DDR from 'yoyoo-ddr-vue3'
import 'yoyoo-ddr-vue3/dist/yoyoo-ddr-vue3.css'

export default {
  name: 'app',

  components: {
    DDR
  },

  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      deg: 0,
      rotatable: true,
      list: [
        { id: 1, active: false, transform: { x: 100, y: 100, width: 100, height: 100, rotation: 45 }, color: 'red' },
        { id: 2, active: false, transform: { x: 150, y: 150, width: 100, height: 100, rotation: 0 }, color: 'green' },
        { id: 3, active: false, transform: { x: 300, y: 100, width: 100, height: 100, rotation: 0 }, color: 'blue' },
        { id: 4, active: false, transform: { x: 400, y: 100, width: 100, height: 100, rotation: 0 }, color: 'yellow' },
      ],
    }
  },

  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    rotate(deg) {
      this.deg = deg
    }
  }
}
</script>

<style>

</style>
