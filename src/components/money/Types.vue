<template>
  <div class="typesWrapper">
    <ul class="types">
      <li :class="type === '-' ? 'selected' : ''" @click="selectedType('-')">
        支出
      </li>
      <li :class="type === '+' ? 'selected' : ''" @click="selectedType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop(String) readonly type!: string;
  selectedType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:type", type);
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.types {
  background: #f5f5f5;
  display: flex;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  li {
    width: 50%;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    &.selected::after {
      content: "";
      position: absolute;
      border-bottom: 4px solid;
      bottom: 0;
      left: 0;
      background: #333;
    }
    &.selected {
      background: $color-yellow;
    }
  }
}
</style>
