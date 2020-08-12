<template>
  <div class="account-page">
    <div class="account-page__left">
      <userForm/>
    </div>
    <div class="account-page__right">
      <usageForm/>
      <userTypeForm/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userForm from '@/components/UserForm.vue'
import usageForm from '@/components/UsageForm.vue'
import userTypeForm from '@/components/UserTypeForm.vue'

@Component({
  components: {
    userForm,
    usageForm,
    userTypeForm
  }
})
export default class Account extends Vue {

}
</script>

<style scoped lang="scss">

  .account-page {
    display: flex;
    background-color: #cae8e8;
  }

  .account-page__left {
    flex: 1
  }

  .account-page__right {
    flex: 2;
  }
</style>
