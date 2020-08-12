<template>
  <div class="user-form">
    <div class="user-form__container">
      <h2>{{$t('userTypeForm.title')}}</h2>
      <div class="user-form__message">{{$t('userTypeForm.description')}}</div>
      <div class="user-form__row">
        <ButtonIconSelect
        :icon="'fas fa-briefcase fa-2x'"
        :label="'business'"
        :active="user.type === 'business'"
        @clicked="setBusiness"
        />
        <ButtonIconSelect
        :icon="'fas fa-laptop-house fa-2x'"
        :label="'agency'"
        :active="user.type === 'agency'"
        @clicked="setBusiness"
        />
        <ButtonIconSelect
        :icon="'fas fa-hand-holding-heart fa-2x'"
        :label="'nonprofit'"
        :active="user.type === 'nonprofit'"
        @clicked="setBusiness"
        />
        <ButtonIconSelect
        :icon="'fas fa-graduation-cap fa-2x'"
        :label="'educational'"
        :active="user.type === 'educational'"
        @clicked="setBusiness"
        />
        <ButtonIconSelect
        :icon="'far fa-user fa-2x'"
        :label="'private'"
        :active="user.type === 'private'"
        @clicked="setBusiness"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ButtonIconSelect from "@/components/ButtonIconSelect.vue"

const userModule = namespace("User");

@Component({
  components: {
    ButtonIconSelect
  }
})
export default class UserForm extends Vue {

  @userModule.State
  public user!: Types.User;

  @userModule.Action
  private saveUser!: (user: Types.User) => void;

  public setBusiness(e: UserType): void {
    this.user.type = e
    this.saveUser(this.user);
  }
}
</script>

<style scoped lang="scss">

.user-form {
  margin: 50px 10% 50px 5%;
}

.user-form__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    color: #1b294b;
    margin: 0 0 10px 0;
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
  width: 70px;
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
