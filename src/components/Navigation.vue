<template>
  <div class="navigation-container">
    <div class="navigation-company">
      <input 
        v-bind:class="[ editCompanyName ? '' : 'navigation-input__disabled', 'navigation-input' ]"
        v-model="user.company"
        @keyup.enter="toggleEdit()"
      />
      <button class="navigation-input__button" v-on:click="toggleEdit()">
        <span v-if="!editCompanyName">{{$t('edit')}}</span>
        <span v-if="editCompanyName">{{$t('save')}}</span>
      </button>
    </div>
    <div class="navigation-container__routes">
      <router-link to="/">{{$t('accountPage.title')}}</router-link>
      <router-link to="/settings">{{$t('settingsPage.title')}}</router-link>
      <router-link to="/usermanagment">{{$t('userManagementPage.title')}}</router-link>
      <router-link to="/whitelabel">{{$t('whiteLabelPage.title')}}</router-link>
      <router-link to="/api">{{$t('apiPage.title')}}</router-link>
      <router-link to="/billing">{{$t('billingPage.title')}}</router-link>
    </div>
  </div>

</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { namespace } from 'vuex-class'

  const userModule = namespace('User')

  @Component({
    components: {
    }
  })
  export default class TopNavigation extends Vue {
    
    private editCompanyName = false
    
    @userModule.State
    public user!: Types.User

    @userModule.Mutation
    private SAVE_USER!: (user: Types.User) => void

    public toggleEdit(): void {
      if(this.editCompanyName) {
        this.SAVE_USER(this.user)
      }
      this.editCompanyName = !this.editCompanyName
    }


  }
</script>

<style scoped lang="scss">
 .navigation-input {
    background: transparent;
    height: 40px;
    font-size: 34px;
    font-weight: 800;
    width: 300px;
 }

 .navigation-input__disabled {
    border: none;
    pointer-events: none;
 }

 .navigation-input__button {
    color: #1B294B;
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
 }

 .navigation-container {
    background-color: #ecffff;
    height: 100px;
    padding: 20px 50px;
    border-bottom: 2px solid #bdbdbd;
 }

 .navigation-container__routes {
    height: 80px;
    display: flex;
    align-items: flex-end;

    a {
      height: 30px;
      min-width: 125px;
      text-decoration: none;
      color: #1B294B;
      font-weight: 600;

      &:active {
        color: #00BFFF !important;
        border-bottom: 3px solid #00BFFF;
        height: 27px;
      }

      &:hover {
        border-bottom: 3px solid #00BFFF;
        height: 27px;
      }
    }
 }

 .navigation-company {
    flex: 0 0 50%;
    max-width: 50%;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    align-content: center;
 }

 #container a.router-link-exact-active {
    color: #00BFFF !important;
    border-bottom: 3px solid #00BFFF;
    height: 27px;
}
</style>
