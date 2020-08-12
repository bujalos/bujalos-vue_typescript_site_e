<template>
  <div :class="[ active ? 'button-icon__active' : '', 'button-icon__container' ]"
    @click="clicked(label)"
  >
    <i :class="icon"></i>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class DataInfo extends Vue {
  @Prop({ type: String }) readonly label!: string;
  @Prop({ type: String, required: true }) readonly icon!: string;
  @Prop({ type: Boolean, required: true }) readonly active!: boolean;

  @Emit()
  clicked(label: UserType) {
    return label
  }
}
</script>
<style scoped lang="scss">

.button-icon__container {
  flex: 1;
  border-radius: 5px;
  height: 60px;
  padding: 10px 0px;
  margin: 0 50px 0 0;
  background-color: white;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
  cursor: pointer;

  &:hover {
    border: 3px solid #00BFFF;
    margin: -3px 47px 0px -3px;
  }

  .label {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1b294b;
  }
}

.button-icon__active {
  border: 3px solid #00BFFF;
  border-radius: 5px;
  
  &:hover {
     margin: 0 50px 0 0;
  }
}
</style>