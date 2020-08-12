<template>
  <div class="topPanel">
    <nav class="topPanel-container">
      <div class="topPanel-left">
        <a class="topPanel-logo">
          <img class="topPanel-logo__image" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/egoditor/logo-icon-blue.svg" alt="">
          <span class="topPanel-logo__title">QR Code Generator</span>
          <span class="topPanel-menu__icon">
            <i class="fas fa-bars fa-lg"></i>
          </span>
        </a>
      </div>
      <div class="topPanel-navigation">
        <LocaleSwitch class="topPanel-locale"/>
        <span class="topPanel-menu__icon fa-lg">
          <i class="far fa-bell"></i>
        </span>
        <span class="topPanel-menu__icon">
          <i class="far fa-question-circle fa-lg"></i>
        </span>
        <span class="topPanel-menu__icon">
          <i class="far fa-user fa-lg"></i>
          <span class="topPanel-navigation_title">{{$t('accountPage.title')}}</span>
        </span>
      </div>
  </nav>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LocaleSwitch from "@/components/LocaleSwitch.vue"


@Component({
  components: {
    LocaleSwitch
  }
})
export default class TopNavigation extends Vue {}
</script>

<style scoped lang="scss">

  .topPanel {
    height: 60px;
    border-bottom: 2px solid #bdbdbd;
  }

  .topPanel-container {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0px 0px 5px;
  }

  .topPanel-left {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: flex-start;
    // padding: 10px;
    flex: 0 0 50%;
    max-width: 50%;

  .topPanel-menu__icon {
    padding: 13px 0px  13px 30px;
   }
  }

  .topPanel-logo {
    position: relative;
    white-space: nowrap;
    height: 40px;
    display: flex;
  }

  .topPanel-logo__image {
    height: 40px;
  }

  .topPanel-logo__title {
    display: flex;
    color: #1B294B;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.05em;
    padding: 5px 5px;
  }

  .topPanel-menu__icon {
    color: #00BFFF
  }

  .topPanel-navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    // padding: 10px;
    flex: 0 0 50%;
    max-width: 50%;

    .topPanel-menu__icon {
      padding: 13px 30px 13px 0px ;
    }
  }

  .topPanel-navigation_title {
    color: #1B294B;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.05em;
    padding: 0px 0px 0px 10px;
  }

  .topPanel-locale{
    
  }
</style>
