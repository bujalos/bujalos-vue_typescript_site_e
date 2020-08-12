<template>
  <div class="usage-form">
    <h2>{{$t('userUsageForm.usage')}}</h2>
    <div class="usage-form__container">
      <DataInfo
        :label="$t('userUsageForm.scans')"
        :value="user.usage.scans.count"
        :value2="$t('userUsageForm.unlimited')"
        :buttonTitle="$t('userUsageForm.upgrade')"
      />
      <DataInfo
        :label="$t('userUsageForm.dynamicCodes')"
        :value="user.usage.codes.dynamic.count"
        :value2="user.usage.codes.dynamic.limit"
        :buttonTitle="$t('userUsageForm.upgrade')"
      />
      <DataInfo
        :label="$t('userUsageForm.staticCodes')"
        :value="user.usage.codes.static.count"
        :value2="user.usage.codes.static.limit"
        :buttonTitle="$t('userUsageForm.upgrade')"
      />
      <DataInfo
        :label="$t('userUsageForm.users')"
        :value="user.usage.users.count"
        :value2="user.usage.users.limit"
        :buttonTitle="$t('userUsageForm.upgrade')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import DataInfo from "@/components/DataInfo.vue";

const userModule = namespace("User");

@Component({
  components: {
    DataInfo,
  },
})
export default class UserForm extends Vue {
  @userModule.State
  public user!: Types.User;
}
</script>

<style lang="scss">
.usage-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 10% 50px 5%;
}

.usage-form__container {
  display: flex;
  width: 100%;

  h2 {
    color: #1b294b;
    text-align: left;
    margin: 0 0 10px 5px;
  }

  .data-info__container {
    height: 120px;
    margin: 0 50px 0 0;

    .data-info__value {
      font-size: 2rem;
    }

    .data-info__value2 {
      font-size: 0.9rem;
      color: #9e9e9e;
      padding: 10px 0;
      font-style: italic;
    }

    .data-info__button {
      position: relative;
      font-size: 0.9rem;
      font-weight: 600;
      margin: 10px calc(50% - 43px);
      padding: 1px;
      border-radius: 10px;
      background-color: #00bfff;
      cursor: pointer;
      -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
      -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
    }
  }
}
</style>
