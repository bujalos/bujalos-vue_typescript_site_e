<template>
  <div class="user-form">
    <div class="user-form__container">
      <form @submit.prevent="handleSubmit">
        <h2>{{$t('userForm.information')}}</h2>
        <div class="user-form__info">
          <div class="user-form__info-data">
            <DataInfo :label="$t('userForm.customerId')" :value="user.id" />
            <DataInfo :label="$t('userForm.signupDate')" :value="user.created" />
            <DataInfo :label="$t('userForm.account')" :value="user.subscription" />
          </div>
          <div class="user-form__group-email">
            <div class="user-form__collumn">
              <label for="email">{{$t('userForm.loginEmail')}}</label>
              <input type="email" v-model="user.email" id="email" name="email" />
            </div>
            <div class="user-form__collumn">
              <button class="button-password">{{$t('password')}}</button>
              <button class="button-email">{{$t('emailChange')}}</button>
            </div>
          </div>
        </div>
        <h2>{{$t('userForm.primaryContact')}}</h2>
        <div class="user-form__collumn">
          <div class="user-form__message">{{$t('userForm.primaryContactMessage')}}</div>
          <div class="user-form__group">
            <label for="firstName">{{$t('userForm.firstName')}}</label>
            <input
              type="text"
              v-model="user.firstName"
              id="firstName"
              name="firstName"
              class="form-control"
            />
          </div>
          <div class="user-form__group">
            <label for="lastName">{{$t('userForm.lastName')}}</label>
            <input type="text" v-model="user.lastName" id="lastName" name="lastName" />
          </div>
          <div class="user-form__group">
            <label for="phoneNumber">{{$t('userForm.phoneNumber')}}</label>
            <input type="number" v-model="user.phone" id="phoneNumber" name="phoneNumber" />
          </div>
          <div class="user-form__group">
            <label for="company">{{$t('userForm.company')}}</label>
            <input type="text" v-model="user.company" id="company" name="company" />
          </div>
          <div class="user-form__group">
            <label for="street">{{$t('userForm.street')}}</label>
            <input type="text" v-model="user.address.street" id="street" name="street" />
          </div>
          <div class="user-form__row">
            <div class="user-form__group city">
              <label for="city">{{$t('userForm.city')}}</label>
              <input type="text" v-model="user.address.city" id="city" name="city" />
            </div>
            <div class="user-form__group zip">
              <label for="zip">{{$t('userForm.zip')}}</label>
              <input type="text" v-model="user.address.zip" id="zip" name="zip" />
            </div>
          </div>
          <div class="user-form__group">
            <label for="country">{{$t('userForm.country')}}</label>
            <input type="text" v-model="user.address.country" id="country" name="country" />
          </div>
          <div class="user-form__group">
            <label for="web">{{$t('userForm.website')}}</label>
            <input type="text" v-model="user.website" id="web" name="web" />
          </div>
          <button class="user-form__button">{{$t('save')}}</button>
        </div>
      </form>
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
  private submitted = false;

  @userModule.State
  public user!: Types.User;

  @userModule.Action
  private saveUser!: (user: Types.User) => void;

  public handleSubmit(): void {
    this.submitted = true;
    this.saveUser(this.user);
  }
}
</script>

<style scoped lang="scss">
.user-form {
  border-radius: 15px;
  margin: 50px 0px 50px 70px;
  background-color: #ecffff;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
}

.user-form__container {
  display: flex;
  flex-direction: column;
  padding: 30px 10px;

  h2 {
    color: #1b294b;
    text-align: left;
    margin: 0 0 10px 5px;
  }
}

.user-form__info {
  display: flex;
  flex-direction: column;
}

.user-form__info-data {
  display: flex;
  margin: 0 0 20px 0;
}

.user-form__collumn {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 0 5px;
  flex: 1;
}

.user-form__row {
  display: flex;
  width: 100%;
}

.user-form__message {
  padding: 0px 0 30px 0;
  margin: -10px 0 0 0;
}

.user-form__group-email {
  display: flex;
  height: 55px;
  padding: 10px;
  margin: 0 5px 30px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  label {
    align-self: flex-start;
    font-size: 0.7rem;
    font-weight: 600;
    color: #bdbdbd;
    margin: 0 0 20px 0;
  }

  input {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1b294b;
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }
}

.user-form__group {
  position: relative;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 8px;
  width: calc(100% - 17px);
  margin: 0 0 20px 0;

  label {
    position: absolute;
    top: -11px;
    left: 8px;
    font-size: 0.9rem;
    background: #ecffff;
    padding: 0 3px;
  }

  input {
    background: none;
    border: none;
    width: calc(100% - 10px);
    height: 20px;
    outline-offset: 0;
    outline: 0;
    font-weight: 600;
    margin: 0 0 0 -5px;
  }
}

.button-password,
.button-email {
  align-self: flex-end;
  color: #1b294b;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  pointer-events: none;
}

.button-password { margin: 0 0 20px 0;} 

.city {
  flex: 2.5;
  margin: 0 20px 0 0;
}

.zip { flex: 1; }

.user-form__button {
  align-self: flex-end;
  background: #c3c3c3;
  border: none;
  border-radius: 30px;
  height: 35px;
  width: 90px;
  text-transform: uppercase;
  font-weight: 600;
  color: #6f6f6f;
  outline: none;
  cursor: pointer;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #ecffff inset !important;
}
</style>
