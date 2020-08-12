<template>
  <div class="data-info__container">
    <div class="data-info__label">{{label}}</div>
    <div class="data-info__value">{{value}}</div>
    <div class="data-info__value2" v-if="value2">{{value2}}</div>
    <div class="data-info__button" v-if="buttonTitle">{{buttonTitle}}</div>
  </div>
</template>

<script lang="ts">

import { Vue, Component,  Prop } from "vue-property-decorator";

@Component
export default class DataInfo extends Vue {

  @Prop({ required: true, type: String}) readonly label!: string
  @Prop({ required: true, type: [String, Number] }) readonly value!: number | string
  @Prop([String, Number]) value2?: string | number
  @Prop(String) buttonTitle?: string
}
</script>
<style scoped lang="scss">

    .data-info__container {
      flex: 1;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      height: 60px;
      padding: 10px 0px;
      margin: 0 5px;
    }

    .data-info__label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #bdbdbd;
      padding: 3px 0 10px 0;
    }

    .data-info__value {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1B294B;
    }

    .data-info__value2 {

    }

    .data-info__button {

    }
</style>