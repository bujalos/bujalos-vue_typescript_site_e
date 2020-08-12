import axios from 'axios'
import moment from 'moment'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true })

class User extends VuexModule {

  // prepopulating user for testing purposes
  public user: Types.User = {
    id: 120232,
    created: moment('12/12/2020', 'MM/DD/YYYY').format('MM/DD/YYYY'),
    email: 'max@musermail.com',
    subscription: 'none',
    type: 'agency',
    address: {
      street: '',
      city: '',
      country: '',
      zip: ''
    },
    usage: {
      codes: {
        dynamic: {
          count: 123,
          limit: 30000
        },
        static: {
          count: 33,
          limit: 30000
        }
      },
      scans: {
        count: 39001,
        limit: 'unlimited'
      },
      users: {
        count: 1,
        limit: 5
      }
    }
  }

  @Mutation
  public SAVE_USER(data: Types.User): void {
    this.user = data
  }

  @Mutation
  public LOAD_USER(data: Types.User): void {
    this.user = data
  }

  @Action
  public loadUser(id: number) {
    // const payload = {
    //   token: '',
    //   data: {
    //     id: id
    //   }
    // }
    // // TODO check if the user is logged in
    // axios
    //   .get('', payload)
    //   .then(res => {
    //     this.context.commit('SAVE_USER', res.data)
    //   })
    //   .catch(error => console.log('Load User Request: ', error))
  }

  @Action
  public saveUser(data: Types.User) {
    // const payload = {
    //   token: '',
    //   data: data
    // }
    // axios
    //   .post('', payload)
    //   .then(res => {
    //     this.context.commit('SAVE_USER', res.data)
    //   })
    //   .catch(error => console.log('Save User Request: ', error))
    this.context.commit('SAVE_USER', data)
  }

  getters: {
  }
}

export default User